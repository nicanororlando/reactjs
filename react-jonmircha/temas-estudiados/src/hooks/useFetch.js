import { useState, useEffect } from 'react'

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Signal nos va a indicar si se ejecuto el abort controller. Cuando la API no responde.
    const abortController = new AbortController();
    const signal = abortController.signal;

    (async () => { // Fetch Data
      setLoading(true);

      try {
        const res = await fetch(url);
        if (!res.ok) {
          let err = new Error("Error en la peticion fetch");
          err.status = res.status || "00";
          err.statusText = res.statusText || "Ocurrio un error";
          throw err;  //Para arrojar el error al catch.
        }
        const json = await res.json();
        console.log(json)
        if (!signal.aborted) {
          setData(json);
          setError(null);
        }
      } catch (error) {
        if (!signal.aborted) {
          setData(null);
          setError(error);
        }
      } finally { //Se ejecuta si o si despues del try o catch.
        if (!signal.aborted) {
          setLoading(false);
        }
      }
    }
    )();
  }, [url]);
  return { data, error, loading }
}

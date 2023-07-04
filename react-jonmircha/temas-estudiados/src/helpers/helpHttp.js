export const helpHttp = () => {
  const customFetch = async (endpoint, options) => {

    // Para no estar especificando que la data estipo json
    const defaultHeader = {
      accept: "application/json",
    }

    // Manejador de errores:
    // Nos sirve para cuando la petiion fetch detecta que no hay una respuesta del servidor, abortamos la pet.
    const controller = new AbortController()
    // Del objeto que me pasa el usuario agregamos una signal, de ahi agregamos el controler con la prop signal. 
    options.signal = controller.signal

    // Si el usuario trae metodo, y si no:
    options.method = options.method || "GET"

    // Si el usuario trae opc, mexclamos los headers que cree yo arriba + las opciones que el usuario traiga
    options.header = options.header ? { ...defaultHeader, ...options } : defaultHeader

    // Si hacemos un post esto es para que se vaya como cadena de objeto hacia el backend. Luego, como no podemos mandar un body vacio o false, si es alguno de estos casos lo eliminamos para no tener problemas.
    options.body = JSON.stringify(options.body) || false
    if (!options.body) delete options.body

    // Por si el servidor esta caido, para que no se quede ciclada la peticion flech:
    setTimeout(() => controller.abort(), 10000);

    try {
      const res = await fetch(endpoint, options);
      return await (
        res.ok
          ? res.json()
          : Promise.reject({
            error: true,
            status: res.status || "00",
            statusText: res.statusText || "Ocurrio un error"
          })
      );
    } catch (e) {
      return e;
    }

  };

  const get = (url, options = {}) => customFetch(url, options)
  const post = (url, options) => {
    options.method = 'POST';
    return customFetch(url, options);
  }
  const put = (url, options) => {
    options.method = 'PUT';
    return customFetch(url, options);
  }
  const del = (url, options) => {
    options.method = 'DELETE';
    return customFetch(url, options);
  }

  // Con llaves por que va a retornar un objeto
  return {
    get, post, put, del,
  }
}
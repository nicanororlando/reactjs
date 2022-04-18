import {API_KEY, API_URL} from "./settings.js";

const fromApiResponseToGifs = apiResponse => {

  /* Cuando nos fijamos en la pagina vemos que la respuesta nos devuelve "data" que es
  un array de strings, por eso lo recibimos de esta manera en esta funcion y 
  retornamos ese array. */
  const {data = []} = apiResponse
  return data
}

export default function getTrendingTerms() {

  const apiURL = `${API_URL}/trending/searches?api_key=${API_KEY}`;

  return fetch(apiURL)
    .then(res=>res.json())
    .then(fromApiResponseToGifs)
}
import {API_KEY, API_URL} from "./settings.js";

const fromApiResponseToGifs = apiResponse => {
  const {data = []} = apiResponse
  if (Array.isArray(data)) {
    const gifs = data.map(image => {
      const {images, title, id} = image
      const { url } = images.downsized_medium
      return { title, id, url }
    })
    return gifs
  }
  return []   
}

/*Esa sintaxis de prop es: Si no le mandamos nada desde la llamada kayword = 'panda,
y si ni si quiera declaramos keyword en la llamada, que ademas este preparado para
recibir un prop vacio, entonces son dos valores por defecto al mismo tiempo. */
export default function getGifs({limit = 25, keyword, page = 0 }) {

  const apiURL = 
  `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=g&lang=en`;

  return fetch(apiURL)
    .then(res => res.json())
    .then(fromApiResponseToGifs)
}
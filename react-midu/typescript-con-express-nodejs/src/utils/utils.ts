import { NewDiaryEntry } from '../types/types'
import { Weather, Visibility } from '../types/enums'

const isString = (string: any): boolean => {

  /* El instanceof es por que pueeeede llegar a pasar q el estring se haya creado como 
  un objeto (cosa q es muy improbable), pero bue. */
  return typeof string === 'string' || string instanceof String
}
const isWeather = (param: any): boolean => {
  // Checkeamos que el "param" incluya uno de los valores de nuestro "enum" Weather. 
  return Object.values(Weather).includes(param)
}
const isVisibility = (param: any): boolean => {
  // Checkeamos que el "param" incluya uno de los valores de nuestro "enum" Visibility. 
  return Object.values(Visibility).includes(param)
}

const parseDate = (dateFromRequest: any): string => {
  if (!isString(dateFromRequest)){
    throw new Error('Incorrect or missing date')
  }
  return dateFromRequest
}
const parseWeather = (weatherFromRequest: any): Weather => {
  if(!isString(weatherFromRequest) || !isWeather(weatherFromRequest)){
    throw new Error('Incorrect or missing weather')
  }
  return weatherFromRequest
}
const parseVisibility = (visibilityFromRequest: any): Visibility => {
  if(!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)){
    throw new Error('Incorrect or missing visibility')
  }
  return visibilityFromRequest
}
const parseComment = (commentFromRequest: any): string => {
  if (!isString(commentFromRequest)){
    throw new Error('Incorrect or missing comment')
  }
  return commentFromRequest
}

/* Creamos la funcion que recibe un objeto con cualquier tipo de dato, y devuelve
un "NewDiaryEntry". En esta funcion vamos a hacer las validaciones de los tipos de 
datos que le llegan al POST, ya que, aunque se lo declaramos anteriormente, TypeScrip 
no lo puede hacer por si solo. */
const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility),
    comment: parseComment(object.comment)
  }
  return newEntry
}

export default toNewDiaryEntry
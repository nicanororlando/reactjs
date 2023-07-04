"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("../enums");
const isString = (string) => {
    /* El instanceof es por que pueeeede llegar a pasar q el estring se haya creado como
    un objeto (cosa q es muy improbable), pero bue. */
    return typeof string === 'string' || string instanceof String;
};
const isWeather = (param) => {
    // Checkeamos que el "param" incluya uno de los valores de nuestro "enum" Weather. 
    return Object.values(enums_1.Weather).includes(param);
};
const isVisibility = (param) => {
    // Checkeamos que el "param" incluya uno de los valores de nuestro "enum" Visibility. 
    return Object.values(enums_1.Visibility).includes(param);
};
const parseDate = (dateFromRequest) => {
    if (!isString(dateFromRequest)) {
        throw new Error('Incorrect or missing date');
    }
    return dateFromRequest;
};
const parseWeather = (weatherFromRequest) => {
    if (!isString(weatherFromRequest) || isWeather(weatherFromRequest)) {
        throw new Error('Incorrect or missing weather');
    }
    return weatherFromRequest;
};
const parseVisibility = (visibilityFromRequest) => {
    if (!isString(visibilityFromRequest) || isVisibility(visibilityFromRequest)) {
        throw new Error('Incorrect or missing visibility');
    }
    return visibilityFromRequest;
};
const parseComment = (commentFromRequest) => {
    if (!isString(commentFromRequest)) {
        throw new Error('Incorrect or missing comment');
    }
    return commentFromRequest;
};
/* Creamos la funcion que recibe un objeto con cualquier tipo de dato, y devuelve
un "NewDiaryEntry". En esta funcion vamos a hacer las validaciones de los tipos de
datos que le llegan al POST, ya que, aunque se lo declaramos anteriormente, TypeScrip
no lo puede hacer por si solo. */
const toNewDiaryEntry = (object) => {
    const newEntry = {
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility),
        comment: parseComment(object.comment)
    };
    return newEntry;
};
exports.default = toNewDiaryEntry;

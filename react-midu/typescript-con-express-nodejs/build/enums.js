"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Visibility = exports.Weather = void 0;
/* Aca enumeramos las propiedades que tenemos, creando asi un objeto al cual vamos
a poder acceder desde otro lado. En este caso nos sirve para hacer las validaciones
en el POST. Esto no solo se puede utilizar en TypeScript sino que tambien crea una
constante que puedo utilizar en el codigo como un "runtime". Tampoco el export que
teniamos arriba no hace falta. */
var Weather;
(function (Weather) {
    Weather["Sunny"] = "sunny";
    Weather["Rainy"] = "rainy";
    Weather["Cloudy"] = "cloudy";
    Weather["Windy"] = "windy";
    Weather["Stormy"] = "windy";
})(Weather = exports.Weather || (exports.Weather = {}));
var Visibility;
(function (Visibility) {
    Visibility["Great"] = "great";
    Visibility["Good"] = "good";
    Visibility["Ok"] = "ok";
    Visibility["Poor"] = "poor";
})(Visibility = exports.Visibility || (exports.Visibility = {}));

"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addDiary = exports.getEntriesWithoutSensitiveInfo = exports.findByIdWithoutSensitive = exports.findById = exports.getEntries = void 0;
const diaries_json_1 = __importDefault(require("./diaries.json"));
// "as Array<DiaryEntry>" es para obligarle a typescript a que acepte el termino de la igualdad. 
const diaries = diaries_json_1.default;
const getEntries = () => diaries;
exports.getEntries = getEntries;
const findById = (id) => {
    //Como esto puede retornar un undefined ya le decimos arriba para que no de error.
    return diaries.find(d => d.id === id);
};
exports.findById = findById;
//Como esto puede retornar un undefined ya le decimos aca arriba para que no de error.
const findByIdWithoutSensitive = (id) => {
    const entry = diaries.find(d => d.id === id);
    if (entry != null) {
        const { comment } = entry, restOfDiary = __rest(entry, ["comment"]); //Eliminamos el comentario
        return restOfDiary;
    }
    return undefined;
};
exports.findByIdWithoutSensitive = findByIdWithoutSensitive;
/* Esto es para filtrar un elemento del objeto. Tenemos que hacer el mapeo por que
aunque hayamos hecho el 'Omit' en el types.d.ts, typescript no lo toma del todo y
por ende ademas del 'omit' necesitamos filtrarlo manualmente. */
const getEntriesWithoutSensitiveInfo = () => {
    return diaries.map(({ id, date, weather, visibility }) => {
        return {
            id,
            date,
            weather,
            visibility
        };
    });
};
exports.getEntriesWithoutSensitiveInfo = getEntriesWithoutSensitiveInfo;
/* Para añadir un objeto mas al array desde la llamada al post en las rutas. Esta
funcion esta recibiendo un objeto desde esa llamada, pero sin el id (ya que el id lo
creamos aca).
Entonces le decimos a esta funcion que va a recibir un objeto de tipo NewDiaryEntry
que se creo en "types.d.ts" y ese tipo es el mismo de siempre pero omitiendo el id,
y como en esta funcion le vamos a añadir un id, entonces la funcion va a retornar un
objeto de tipo "DiaryEntry", y ahi todo va tomando sentido. */
const addDiary = (newDiaryEntry) => {
    const newDiary = Object.assign({ id: diaries.length + 1 }, newDiaryEntry);
    diaries.push(newDiary);
    return newDiary;
};
exports.addDiary = addDiary;

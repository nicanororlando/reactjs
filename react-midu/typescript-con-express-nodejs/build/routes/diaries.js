"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require('express') -> commonjs
const express_1 = __importDefault(require("express")); // ESmodules
const diaryServices = __importStar(require("../services/diaries/diary"));
const utils_1 = __importDefault(require("../utils/utils"));
const router = express_1.default.Router();
// Añadimos las rutas y le decimos que es lo que queremos recibir en esas rutas.
router.get('/', (_req, res) => {
    res.send(diaryServices.getEntriesWithoutSensitiveInfo());
});
router.get('/:id', (req, res) => {
    const diary = diaryServices.findByIdWithoutSensitive(Number(req.params.id));
    // res.send(diary?.comment)  //Automaticamente detecta q puede retornar undefined por eso el ?
    res.send(diary);
});
// Creamos el 2° endpoint para añadir entradas:
router.post('/', (req, res) => {
    try {
        // /* Aca recibimos los datos desde la solicitud del post en body. Luego esos datos 
        // los mandamos al "addDiary* y recibimos el objeto para luego convertirlo a JSON. */
        // const { date, weather, visibility, comment } = req.body
        const newDiaryEntry = (0, utils_1.default)(req.body);
        const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry);
        res.json(addedDiaryEntry);
        return addedDiaryEntry;
    }
    catch (error) {
        res.status(400).send('asdasdasd');
        return null;
    }
});
exports.default = router;

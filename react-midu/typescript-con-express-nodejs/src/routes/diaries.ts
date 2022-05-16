// const express = require('express') -> commonjs
import express from 'express'; // ESmodules
import * as diaryServices from '../services/diaries/diary';
import toNewDiaryEntry from '../utils/utils';

const router = express.Router();

// Añadimos las rutas y le decimos que es lo que queremos recibir en esas rutas.

router.get('/', (_req, res) => {
  res.send(diaryServices.getEntries());
});
// router.get('/:id', (req, res) => {
//   const diary = diaryServices.findById(Number(req.params.id));
//   // res.send(diary?.comment); //Automaticamente detecta q puede retornar undefined por eso el ?
//   res.send(diary);
// });
router.get('/:id', (req, res) => {
  const diary = diaryServices.findByIdWithoutSensitive(Number(req.params.id));
  // res.send(diary?.comment); //Automaticamente detecta q puede retornar undefined por eso el ?
  res.send(diary);
});

// Creamos el 2° endpoint para añadir entradas:
router.post('/', (req, res) => {
  try {
    // /* Aca recibimos los datos desde la solicitud del post en body. Luego esos datos
    // los mandamos al "addDiary* y recibimos el objeto para luego convertirlo a JSON. */
    // const { date, weather, visibility, comment } = req.body

    const newDiaryEntry = toNewDiaryEntry(req.body);

    const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry);

    res.json(addedDiaryEntry);
  } catch (error) {
    res.status(400).send(error);
  }
});

export default router;

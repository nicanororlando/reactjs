import diaryData from './diaries.json';
import {
  DiaryEntry,
  NewDiaryEntry,
  NonSensitiveInfoDiaryEntry,
} from '~/types/types';

// "as Array<DiaryEntry>" es para obligarle a typescript a que acepte el termino de la igualdad.
const diaries: DiaryEntry[] = diaryData as DiaryEntry[];

export const getEntries = (): DiaryEntry[] => diaries;

export const findById = (id: number): DiaryEntry | undefined => {
  //Como esto puede retornar un undefined ya le decimos arriba para que no de error.
  return diaries.find((d) => d.id === id);
};

//Como esto puede retornar un undefined ya le decimos aca arriba para que no de error.
export const findByIdWithoutSensitive = (
  id: number
): NonSensitiveInfoDiaryEntry | undefined => {
  const entry = diaries.find((d) => d.id === id);
  if (entry) {
    const { comment, ...restOfDiary } = entry; // Eliminamos el comentario
    return restOfDiary;
  }
  return undefined;
};

/* Esto es para filtrar un elemento del objeto. Tenemos que hacer el mapeo por que 
aunque hayamos hecho el 'Omit' en el types.d.ts, typescript no lo toma del todo y
por ende ademas del 'omit' necesitamos filtrarlo manualmente. */
export const getEntriesWithoutSensitiveInfo =
  (): NonSensitiveInfoDiaryEntry[] => {
    return diaries.map(({ id, date, weather, visibility }) => {
      return {
        id,
        date,
        weather,
        visibility,
      };
    });
  };

/* Para añadir un objeto mas al array desde la llamada al post en las rutas. Esta 
funcion esta recibiendo un objeto desde esa llamada, pero sin el id (ya que el id lo 
creamos aca).
Entonces le decimos a esta funcion que va a recibir un objeto de tipo NewDiaryEntry
que se creo en "types.d.ts" y ese tipo es el mismo de siempre pero omitiendo el id,
y como en esta funcion le vamos a añadir un id, entonces la funcion va a retornar un
objeto de tipo "DiaryEntry", y ahi todo va tomando sentido. */
export const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
  const newDiary = {
    id: diaries.length + 1, //Para seguir poniendo id's consecutivos
    //  id: Math.max(...diaries.map(d => d.id)) + 1
    ...newDiaryEntry,
  };
  diaries.push(newDiary);
  return newDiary;
};

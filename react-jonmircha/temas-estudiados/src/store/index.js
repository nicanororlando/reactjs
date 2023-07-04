// Este es el contenedor GLOBAL de todos los estados de la aplicacion.

import { configureStore } from '@reduxjs/toolkit';
import reducer from 'reducers';

// Le pasamos el reducer que combina todos los reducers de nuetra app.
const store = configureStore({ reducer });

store.subscribe(() => console.log(store));

export default store;

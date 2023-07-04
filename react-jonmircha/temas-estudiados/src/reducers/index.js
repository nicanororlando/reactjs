// Este archivo va a centralizar todos los reducers de nuestra app.
/* Esto es por que Redux centraliza y gestiona en un solo almacenamiento todo el 
estado de nuestra aplicacion */

import { combineReducers } from 'redux';
import reduxContadorReducer from './redux/redux.contador.reducer';
import reduxCrudReducer from './redux/redux.crud.reducer';
import reduxShoppingReducer from './redux/redux.shopping.reducer';

const reducer = combineReducers({
  contador: reduxContadorReducer,
  shopping: reduxShoppingReducer,
  crud: reduxCrudReducer,
});

export default reducer;

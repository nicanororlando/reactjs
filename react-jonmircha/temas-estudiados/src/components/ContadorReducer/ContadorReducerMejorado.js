import React, { useReducer } from 'react';
import {
  contadorReducer,
  contadorInitialState,
  contadorInit,
} from 'reducers/reducer/contador.reducer';
import { TYPES } from 'actions/reducer/contador.actions';
import './styles.css';

const ContadorReducerMejorado = () => {
  const [state, dispatch] = useReducer(
    contadorReducer,
    contadorInitialState,
    contadorInit
  );

  const restar5 = () => dispatch({ type: TYPES.DECREMENT_5, payload: 5 });
  const restar = () => dispatch({ type: TYPES.DECREMENT });
  const reset = () => dispatch({ type: TYPES.RESET });
  const sumar = () => dispatch({ type: TYPES.INCREMENT });
  const sumar5 = () => dispatch({ type: TYPES.INCREMENT_5, payload: 5 });

  return (
    <div>
      <h2>Contador reducer Mejorado</h2>
      <nav>
        <button onClick={restar5}>-5</button>
        <button onClick={restar}>-</button>
        <button onClick={reset}>0</button>
        <button onClick={sumar}>+</button>
        <button onClick={sumar5}>+5</button>
      </nav>
      <h3>{state.contador}</h3>
    </div>
  );
};

export default ContadorReducerMejorado;

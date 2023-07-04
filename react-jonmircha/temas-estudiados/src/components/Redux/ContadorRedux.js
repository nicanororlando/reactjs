import {
  reset,
  restar,
  restar5,
  sumar,
  sumar5,
} from 'actions/redux/redux.contador.actions';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ContadorRedux = () => {
  // Este hook nos va a permitir acceder al estado de redux.
  const state = useSelector((state) => state);

  // Este hook nos permite acceder al disparador de redux.
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Contador Redux</h2>
      <nav>
        <button onClick={() => dispatch(restar5())}>-5</button>
        <button onClick={() => dispatch(restar())}>-1</button>
        <button onClick={() => dispatch(reset())}>0</button>
        <button onClick={() => dispatch(sumar())}>+1</button>
        <button onClick={() => dispatch(sumar5())}>+5</button>
      </nav>
      <h3>{state.contador}</h3>
    </div>
  );
};

export default ContadorRedux;

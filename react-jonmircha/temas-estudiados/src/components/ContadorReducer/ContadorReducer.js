import React, { useReducer } from 'react';
import './styles.css';

const TYPES = {
  INCREMENT: 'INCREMENT',
  INCREMENT_5: 'INCREMENT_5',
  DECREMENT: 'DECREMENT',
  DECREMENT_5: 'DECREMENT_5',
  RESET: 'RESET',
};

/* Esta funcion reductora recibe dos parametros: El state previo, y una accion, que 
es un objeto que indica un tipo de accion y puede contener un payload (valor para 
modificar el estado). Esta funcion si o si retorna el estado. */
function reducer(state, action) {
  switch (action.type) {
    case TYPES.DECREMENT_5:
      return { contador: state.contador - action.payload };
    case TYPES.DECREMENT:
      return { contador: state.contador - 1 };
    case TYPES.RESET:
      return initialState;
    case TYPES.INCREMENT:
      return { contador: state.contador + 1 };
    case TYPES.INCREMENT_5:
      return { contador: state.contador + action.payload };
    default:
      return state;
  }
}

const initialState = { contador: 0 };

const init = (initialState) => {
  return {
    contador: initialState.contador + 100,
  };
};

const ContadorReducer = () => {
  /* Es parecido al useState pero se usa cuando el manejo de estados es mas complejo.
  El parametro reducer es la funcion reductora que tenemos arriba, luego recibe un 
  parametro para inicializar, y el tercero es el valor init (opcional) y sirve
  para hacerle una transformacion al valor inicial cuando recien se monta el elemento. */
  const [state, dispatch] = useReducer(reducer, initialState, init);

  const restar5 = () => dispatch({ type: TYPES.DECREMENT_5, payload: 5 });
  const restar = () => dispatch({ type: TYPES.DECREMENT });
  const reset = () => dispatch({ type: TYPES.RESET });
  const sumar = () => dispatch({ type: TYPES.INCREMENT });
  const sumar5 = () => dispatch({ type: TYPES.INCREMENT_5, payload: 5 });

  return (
    <div>
      <h2>Contador reducer</h2>
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

export default ContadorReducer;

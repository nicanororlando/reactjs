import { TYPES } from 'actions/reducer/contador.actions';

export const contadorInitialState = { contador: 0 };

export const contadorInit = (initialState) => {
  return {
    contador: initialState.contador + 100,
  };
};

/* Esta funcion reductora recibe dos parametros: El state previo, y una accion, que 
es un objeto que indica un tipo de accion y puede contener un payload (valor para 
modificar el estado). Esta funcion si o si retorna el estado. */
export function contadorReducer(state, action) {
  switch (action.type) {
    case TYPES.DECREMENT_5:
      return { contador: state.contador - action.payload };
    case TYPES.DECREMENT:
      return { contador: state.contador - 1 };
    case TYPES.RESET:
      return contadorInitialState;
    case TYPES.INCREMENT:
      return { contador: state.contador + 1 };
    case TYPES.INCREMENT_5:
      return { contador: state.contador + action.payload };
    default:
      return state;
  }
}

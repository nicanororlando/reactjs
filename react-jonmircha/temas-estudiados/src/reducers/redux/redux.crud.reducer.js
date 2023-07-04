import {
  CREATE_DATA,
  DELETE_DATA,
  NO_DATA,
  READ_ALL_DATA,
  UPDATE_DATA,
} from 'types';

const crudInitialState = { db: [] };

export default function reduxCrudReducer(state = crudInitialState, action) {
  switch (action.type) {
    case READ_ALL_DATA: {
      return {
        ...state,
        db: action.payload.map((data) => data),
      };
    }
    case CREATE_DATA: {
      return {
        // Hace una copia del estado + (valor que tenia en la db + el agregado)
        ...state,
        db: [...state.db, action.payload],
      };
    }
    case UPDATE_DATA: {
      let newData = state.db.map((element) =>
        element.id === action.payload.id ? action.payload : element
      );
      return {
        ...state,
        db: newData,
      };
    }
    case DELETE_DATA: {
      let newData = state.db.filter(
        (elemento) => elemento.id !== action.payload
      );
      return {
        ...state,
        db: newData,
      };
    }
    case NO_DATA:
      return crudInitialState;
    default:
      return state;
  }
}

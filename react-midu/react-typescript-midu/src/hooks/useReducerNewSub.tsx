import React, { useReducer } from 'react';
import { Sub } from '~/types';

// Esta es una interfaz de estados.
interface FormState {
  inputValues: Sub;
}

const INITIAL_STATE = {
  nick: '',
  subMonths: 0,
  avatar: '',
  description: '',
};

/* Este tipo es para el action que recibe el reducer. Tenemos dos casos: el 
'change_value' y el 'clear' entonces para esos dos casos definimos el tipo de parametros
que va a recibir. */
type FormReducerAction =
  | {
      type: 'change_value';
      payload: {
        inputName: string;
        inputValue: string;
      };
    }
  | {
      type: 'clear';
    };

// Ni siquiera hace falta poner un default, ya que no se va a poder ejecutar una accion diff.
const formReducer = (
  state: FormState['inputValues'],
  action: FormReducerAction
) => {
  switch (action.type) {
    case 'change_value':
      const { inputName, inputValue } = action.payload;
      return {
        ...state,
        [inputName]: inputValue,
      };
    case 'clear':
      return INITIAL_STATE;
  }
};

const ReducerNewSub = () => {
  return useReducer(formReducer, INITIAL_STATE);
};

export default ReducerNewSub;

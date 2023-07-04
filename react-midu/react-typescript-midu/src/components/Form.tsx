import React from 'react';
import reducerNewSub from '../hooks/useReducerNewSub';
import { Sub } from '~/types';

interface FormProps {
  onNewSub: (newSub: Sub) => void;
}

const Form = ({ onNewSub }: FormProps) => {
  const [inputValues, dispatch] = reducerNewSub();

  /* Este tipo de event lo tenemos que poner ya que la funcion handleChange no tiene
  el contexto de donde la llaman, entonces no sabe que evento recibe. Si bien cuando
  utilizamos el event dentro ya se da cuenta de que es, en la definicion de la funcion 
  no, entonces le decimos que es de tipo Change event de un elemento Input HTML. */
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    dispatch({
      type: 'change_value',
      payload: {
        inputName: name,
        inputValue: value,
      },
    });
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onNewSub(inputValues);
    handleClear();
  };

  const handleClear = () => {
    dispatch({ type: 'clear' });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={inputValues.nick}
          type="text"
          name="nick"
          placeholder="Nick"
          onChange={handleChange}
        />
        <input
          value={inputValues.subMonths}
          type="number"
          name="subMonths"
          placeholder="Submonth"
          onChange={handleChange}
        />
        <input
          value={inputValues.avatar}
          type="text"
          name="avatar"
          placeholder="Avatar"
          onChange={handleChange}
        />
        <textarea
          value={inputValues.description}
          name="description"
          placeholder="Description"
          onChange={handleChange}
        />
        <button type="submit">Save new sub!</button>
      </form>
    </div>
  );
};

export default Form;

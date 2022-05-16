import Loader from 'components/Loader/Loader';
import Message from 'components/Loader/Message';
import { useFetch } from 'hooks/useFetch';
import React from 'react';

const SelectList = ({ title, url, handleChange }) => {
  const { data, error, loading } = useFetch(url);

  if (!data) return null; //Para evitar renderizados innecesarios
  if (error) {
    return (
      <Message
        msg={`Error ${error.status}: ${error.statusText} `}
        bgColor="#dc3545"
      />
    );
  }

  let id = `select-${title}`;
  let label = title.charAt(0).toUpperCase() + title.slice(1);
  let options = data.response[title]; //Nos devuelve el objeto que le mandamos en anidados.

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      {loading && <Loader />}
      <select name={id} id={id} onChange={handleChange}>
        <option value="">Elige un {title}</option>
        {data &&
          options.map((el) => (
            <option key={el.id} value={el}>
              {el}
            </option>
          ))}
      </select>
    </div>
  );
};

export default SelectList;

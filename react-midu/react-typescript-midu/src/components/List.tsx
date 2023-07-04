import React from 'react';
import { Sub } from 'types';

// Definimos las props que va a recibir el componente y sus tipos.
interface Props {
  children: boolean; // Acepta un children que sea solo boolean.
  // children: React.ReactNode; // Para que acepte un children de cualquier cosa.
  subs: Array<Sub>;
}

const List = ({ subs }: Props) => {
  /* Con esta funcion que devuelve un return, podemos controlar mejor todavia el 
  retorno de esa funcion. En este caso le decimos que retorna un array de elementos 
  JSX. */
  const renderList = (): JSX.Element[] => {
    return subs.map((sub) => {
      console.log(sub.avatar);
      return (
        <li key={sub.nick}>
          <img src={sub.avatar} alt={`Avatar for ${sub.nick}`} />
          <h4>
            {sub.nick} (<small>{sub.subMonths}</small>)
          </h4>
          <p>{sub.description?.substring(0, 100)}</p>
          {/* Retorna un max de 100 caracteres*/}
        </li>
      );
    });
  };

  return (
    <>
      <h1>Subs</h1>
      <ul>{renderList()}</ul>
    </>
  );
};

export default List;

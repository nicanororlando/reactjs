import React from 'react';
import '../hojas-de-estilo/Boton.css'

//En este ejemplo usamos como parametro la sintaxis de desestructuracion en vez de usar "props"
export function Boton({ texto, esBotonDeClick, manejarClick}) {
  return (
    //Utilizamos operador ternario para que la variable booleana decida la clase q le añadimos
    <button className={esBotonDeClick ? 'boton-click' : 'boton-reiniciar'}
    onClick={manejarClick}>
      {texto}
    </button>
  );
}


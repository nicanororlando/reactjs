import React from 'react';
import '../hojas-de-estilo/Pantalla.css'

/*Para variar vamos a probar retornar el componente como funcion flecha. Ponemos parentesis
por que vamos a retornar la estructura del componente */
export const Pantalla = ({ input }) => (
  <div className='input'>
    {input}
  </div>
); 
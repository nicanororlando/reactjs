import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Paginacion = () => {
  const LIMIT = 20;

  let { search } = useLocation(); //Desestructuramos el parametro search
  let query = new URLSearchParams(search); //Para serializar el parametro search

  /* De esta manera podemos obtener los parametros inicio y fin, que tengamos en la 
  url:     '/productos?inicio=1&fin=20'     */
  let start = parseInt(query.get('inicio')) || 1; //inicio=1
  let end = parseInt(query.get('fin')) || LIMIT; //fin=20

  let navigate = useNavigate();
  // console.log(navigate);

  const handlePrev = (e) => {
    navigate({ search: `?inicio=${start - LIMIT}&fin=${end - LIMIT}` });
  };
  const handleNext = (e) => {
    navigate({ search: `?inicio=${start + LIMIT}&fin=${end + LIMIT}` });
  };

  return (
    <div>
      <h3>Paginacion</h3>
      <p>
        Mostrando productos del <b>{start}</b> al <b>{end}</b>
      </p>

      {/* Simulando una paginacion: */}
      {start > LIMIT && <button onClick={handlePrev}>Atras</button>}
      <button onClick={handleNext}>Adelante</button>
    </div>
  );
};

export default Paginacion;

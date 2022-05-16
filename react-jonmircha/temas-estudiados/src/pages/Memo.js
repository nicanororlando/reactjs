import Contador from 'components/Contador/Contador';
import React from 'react';

const Memo = () => {
  return (
    <div>
      <h1>Memorizacion en React</h1>
      <hr />
      <h2>Teoria</h2>
      <h3 style={{ textAlign: `left`, marginLeft: `15px` }}>
        <a
          href="https://es.reactjs.org/docs/react-api.html#reactmemo"
          target="_blank"
          rel="noreferrer"
        >
          Memo
        </a>
      </h3>
      <ul>
        <li>
          Se encarga de memorizar un <b>componente</b>
        </li>
        <li>
          Lo vuelve a renderizar al momento en que sus <b>props</b> cambian.
        </li>
        <li>Evita re-renderizados</li>
        <li>
          Algunas veces hay que evitarlo, ya que podria ser mas costosa la tarea
          de memorizacion que el re-renderizado del componente.
        </li>
        <li>
          Usarlo cuando:
          <ul>
            <li>Tenemos muchos elementos renderizados en una lista.</li>
            <li>Llamamos datos de APIs.</li>
            <li>Un componente se vuelve muy pesado.</li>
            <li>Salen alertas de rendimiento en la consola.</li>
          </ul>
        </li>
      </ul>
      <hr />
      <h3 style={{ textAlign: `left`, marginLeft: `15px` }}>
        <a
          href="https://es.reactjs.org/docs/hooks-reference.html#usecallback"
          target="_blank"
          rel="noreferrer"
        >
          useCallback
        </a>
      </h3>
      <ul>
        <li>
          Memoriza una funcion, para no volverla a definir en cada render.
        </li>
        <li>
          Usarlo siempre que se pase la funcion como <b>prop</b> a un
          <b> componente memorizado.</b>
        </li>
        <li>
          Usarlo siempre que se pase una funcion como parametro de un efecto.
        </li>
      </ul>
      <hr />
      <h3 style={{ textAlign: `left`, marginLeft: `15px` }}>
        <a
          href="https://es.reactjs.org/docs/hooks-reference.html#usememo"
          target="_blank"
          rel="noreferrer"
        >
          useMemo
        </a>
      </h3>
      <ul>
        <li>
          Memoriza un <b>valor calculado</b>, es decir, el resultado de una
          funcion.
        </li>
        <li>Genera propiedades computadas.</li>
        <li>
          Usarlo en <b>procesos</b> pesados.
        </li>
      </ul>
      <Contador />
    </div>
  );
};

export default Memo;

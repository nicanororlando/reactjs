import React, { memo, useMemo } from 'react';

const ContadorHijo = ({ contador, sumar, restar }) => {
  console.log('Renderizando Contador hijo');

  /* useMemo es similar a useCallback, la diferencia es que useMemo memoriza el 
  resultado de una funcion o un valor calculado. En este ejemplo tenemos esta iteracion
  re larga que consume muchisimo. Y cada vez q se ejecuta una funcion del contador, 
  que tambien se ejecuta aca, se estaria ejecutando este proceso de nuevo y se rompe
  todo. Para que esto solo pase una vez, usamos este hook y memorizamos ese valor. */
  const numeroPicante = useMemo(() => {
    let numeroPicado = 0;
    for (let i = 0; i < 1000000000; i++) {
      numeroPicado++;
    }
    return numeroPicado;
  }, []);

  return (
    <div className="Hijo-contador">
      <h2>Contador hijo</h2>
      <h3>{contador}</h3>
      <nav>
        <button onClick={restar}>-</button>
        <button onClick={sumar}>+</button>
      </nav>
      <h3>{numeroPicante}</h3>
    </div>
  );
};

/* De esta forma el componente se renderiza solo la primera vez. Esto se aplica al
componente entero, lo unico es que cuando le pasamos una funcion desde otro componente,
vamos a tener que memorizar esas funciones que les pasamos tambien. Para ello usamos
el hook 'useCallback'. */
export default memo(ContadorHijo);

import React, { useCallback, useState } from 'react';
import ContadorHijo from './ContadorHijo';
import './styles.css';

const Contador = () => {
  const [contador, setContador] = useState(0);
  const [input, setInput] = useState('');

  /* Para memorizar una funcion usamos el useCallback. Funciona parecido al useEfect
  ya que, cada vez que (en este caso) cambie la variable contador, se va a memorizar
  la funcion sumar, es decir, se actualiza cuando lo hace la variable final.  */
  const sumar = useCallback(() => {
    setContador(contador + 1);
  }, [contador]);

  const restar = useCallback(() => {
    setContador(contador - 1);
  }, [contador]);

  const handleChange = (e) => setInput(e.target.value);

  return (
    <div>
      <h2>Contador</h2>
      <nav>
        <button onClick={restar}>-</button>
        <button onClick={sumar}>+</button>
      </nav>
      <h3>{contador}</h3>
      <input type="text" onChange={handleChange} value={input} />

      {/* Cada vez que apreto el boton de sumar o restar, este componente se va a 
      volver a renderizar. Para que no pase eso y no consuma tantos recursos, en mi
      otro componente utilizo 'memo'. De esta forma ese componente se renderiza solo
      una vez. */}
      <ContadorHijo contador={contador} sumar={sumar} restar={restar} />
    </div>
  );
};

export default Contador;

import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import { Boton } from './componentes/Boton.jsx';
import { Pantalla } from './componentes/Pantalla.jsx';
import { BotonClear} from './componentes/BotonClear.jsx';
import { useState } from 'react';
import { evaluate } from 'mathjs';  //Incluimos esto con "npm install mathjs"

function App() {

  const [input, setImput] = useState('');

  const agregarInput = val => {
    setImput(input + val);
  };
  const calcularResultado = () => {
    if (input) setImput(evaluate(input));
  };

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img 
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de freeCodeCamp' />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input} />
        <div className='fila'>

          {/* Al no agregar parentesisa la funcion le estamos pasando la funcion para 
          poder llamarla dentro del componente, y no el valor de la funcion. */}
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>

        {/* Es lo mismo que manejarClick solo que aca lo hacemos de otra manera. */}
        <div className='fila'><BotonClear manejarClear={()=> setImput('')}>Clear</BotonClear></div>
      </div>
    </div>
  );
}

export default App;

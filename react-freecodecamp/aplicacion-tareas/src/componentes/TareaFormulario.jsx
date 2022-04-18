import React, { useState } from "react";
import '../hojas-de-estilo/TareaFormulario.css'
import { v4 as uuidv4 } from 'uuid';

export function TareaFormulario(props) {

  const [input, setInput] = useState('');

  const manejarCambio = e => {
    setInput(e.target.value);
  }
  const manejarEnvio = e => {
    e.preventDefault(); //Para que la app no se vuelva a cargar cuando se hace click.

    const tareaNueva = {
      id: uuidv4(),   //Generamos un id unico
      texto: input, 
      completada: false
    }

    //Esto nos va a permitir pasar esta tarea a la lista de tareas como prop.
    //Lista de tareea nos pasa el prop para que cuando se llame al evento onSubmit, se ejecute la funcion de ListaDeTareas.
    props.onSubmit(tareaNueva);   

    //Para que el input quede en blanco y el array tambien.
    document.getElementById("form").reset();
    setInput('');
  }

  return (
    <form 
    id="form"
    className="tarea-formulario"
    onSubmit={manejarEnvio}>
      <input 
        className="tarea-input"
        type="text"
        placeholder="Escribe una Tarea"
        name="texto"
        onChange={manejarCambio}
      />    
      <button className="tarea-boton">agregar tarea</button>
    </form>
  );
}
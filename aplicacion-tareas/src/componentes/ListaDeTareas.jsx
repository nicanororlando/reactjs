import React, { useState } from "react";
import { Tarea } from "./Tarea";
import { TareaFormulario } from "./TareaFormulario";
import '../hojas-de-estilo/ListaDeTareas.css';

export function ListaDeTareas() {

  /*Definimos nuestro array de objetos. Cada objeto "tareas" va a definir las caracteristicas 
  o informacion de cada una de las tareas, y todos los objetos van a estar en el arreglo. */
  const [tareas, setTareas] = useState([]);
  
  const agregarTarea = tarea => {
    console.log("Tarea agregada");
    console.log(tarea);
  }

  return (
    <>
      <TareaFormulario />
      <div className="tareas-lista-contenedor">
        {
          /*Map es un metodo que va a tomar cada uno de las tareas que se van a representar como
          un objeto en el array, las pasa una por una como argumento de funcion y para cada 
          tarea vamos a crear un component de react. */
          tareas.map((tareas)=>{
            <Tarea 
            texto={tareas.texto}
            completada={tareas.completada}
            />
          })
        }
      </div>
    </>
  );
} 
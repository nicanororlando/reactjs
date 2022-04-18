import React, { useState } from "react";
import { Tarea } from "./Tarea";
import { TareaFormulario } from "./TareaFormulario";
import '../hojas-de-estilo/ListaDeTareas.css';

export function ListaDeTareas() {

  /*Definimos nuestro array de objetos. Cada objeto "tareas" va a definir las caracteristicas 
  o informacion de cada una de las tareas, y todos los objetos van a estar en el arreglo. */
  const [tareas, setTareas] = useState([]);

  const agregarTarea = tarea => {
    
    if(tarea.texto.trim()) {  //Verificamos que sea una cadena no vacia
      tarea.texto = tarea.texto.trim(); //Para quitar espacios de principio y final
      
      /*Creamos un arreglo que va a contener  la tarea nueva, y todas las tareas anteriores.
      Entonces agregamos la tarea al principio del arreglo para que se muestre primero.
      Con el operador spread convertimos las tareas de un arreglo a tareas individuales.*/ 
      const tareasActualizadas = [tarea, ...tareas];  
      setTareas(tareasActualizadas);
    }
  };

  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id === id){
        tarea.completada = !tarea.completada; //Toogle
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  };

  const eliminarTarea = id => {

    /*Con el metodo filter, inclumos a los elementos que cumplen (tarea.id !== id),
    y en el caso de que "tareas.id == id", ese elemento no va a ser incluido en el 
    arreglo de tareas ya que va a ser filtrado. */
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  return (
    <>
      <TareaFormulario onSubmit={agregarTarea} />
      <div className="tareas-lista-contenedor">
        {
          /*Map es un metodo que va a tomar cada uno de las tareas que se van a representar como
          un objeto en el array, las pasa una por una como argumento de funcion y para cada 
          tarea vamos a crear un component de react. 
            Map nos va a generar un componente por cada elemento en el arreglo tareasm 
          entonces si se actualiza el arreglo, se actualiza la cantidad de componentess.
            Importante tener en cuenta q no va encerrado en "{}". */
          tareas.map((tarea) =>
            <Tarea  
              //Este atributo es muy importante para los componentes de react para identificar los componentes. Esto no se pasa como prop, por eso ademas estamos pasando el id.
              key={tarea.id}          
              id={tarea.id}
              texto={tarea.texto}
              completada={tarea.completada}
              completarTarea={completarTarea}
              eliminarTarea={eliminarTarea}
            />
          )
        }
      </div>
    </>
  );
} 
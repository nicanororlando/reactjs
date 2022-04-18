import React from "react";
import '../hojas-de-estilo/Tarea.css'
import { AiOutlineCloseCircle } from 'react-icons/ai';

export function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  return (
    <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
      <div 
      className='tarea-texto'
      onClick={()=>completarTarea(id)}> {/*Cuando hacemos click llamamos a la funcion q le pasamos como prop*/}
        {texto}
      </div>
      <div 
      className='tarea-contenedor-iconos'
      onClick={()=>eliminarTarea(id)}> 
        {/* Los iconos son componentes de react, por eso se pasa asi y tambien podemos pasarle algunas claves como className que le asigna automaticamente el nombre de la clase al elemento*/}
        <AiOutlineCloseCircle className="tarea-icono"/> 
      </div>
    </div>
  );
}
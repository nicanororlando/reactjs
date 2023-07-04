import React from 'react';
import '../hojas-de-estilo/Boton.css'

export function Boton(props) {

  const esOperador = (valor)=>{
    //Si el valor no es un numero, no contiene '.' e '=', retorna true, sino false.  
    return isNaN(valor) && (valor !== '.') && (valor !== '=')
  }

  return (
    <button  
      className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''} `.trimEnd()}
      
      /*Cuando ocurra el evento, llamamos a la funcion anonima xq no la estamos deiniendo 
      aca, y retornamos esa resultado de la funcion desde esta funcion flecha. Si intentamos
      retornar el valor de la funcion sin antes crear la funcion flecha no va a funcionar, 
      ya que el oyente de eventos requiere una funcion. */
      onClick={ () => props.manejarClick(props.children)}>
      
      {/* Como tenemos ahora una apertura de cierre en app.js del boton, para acceder
      al valor, tenemos que acceder al hijo de esa etiqueta. */}
      {props.children}  
    </button>
  )
}

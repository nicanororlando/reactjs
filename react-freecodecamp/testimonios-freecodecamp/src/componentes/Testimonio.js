import React from 'react';
import '../hojas-de-estilo/Testimonio.css'
 
class ComponenteClase extends React.Component {
  constructor(){
    super();  //Para heredar todas las funciones de su componente padre react.comp
    this.state = {miEstado: true}
  }
  render() {
    return <p>Componente {this.props.nombreDelProp}</p>;
  }
}


/*Componentes funcionales: Un elemento funcional de react retornaun elemento JSX, que 
es basicamente una combinacion de HTML con js. */
function Testimonio(props) {
  return(
    <div className='contenedor-testimonio'>
      <img className='imagen-testimonio'

      //Al poner entre llaves, consideramos el contenido como valor o expresion de js
      src={require(`../imagenes/testimonio-${props.imagen}.png`)}
      alt='Foto de Emma' />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'><strong>{props.nombre}</strong> en {props.pais}</p>
        <p className='cargo-testimonio'>{props.cargo} en <strong>{props.empresa}</strong></p>
        <p className='texto-testimonio'>{props.testimonio}</p>
      </div>
    </div>
  )
}



export default Testimonio;
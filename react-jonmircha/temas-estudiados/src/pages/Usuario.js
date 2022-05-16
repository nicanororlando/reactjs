import React from 'react'
import { useParams } from 'react-router-dom'

const Usuario = () => {
  let useparams = useParams();
  console.log(useparams);

  /* Aca desestructuramos el parametro que recibe esta pagina cuando se carga, en 
  este caso le estamos mandando '/:username' definiendo primero en las rutaws, y 
  luego desde el navbar le paso dos parametros genericos de prueba. */
  let { username } = useParams();

  return (
    <div>
      <h3>Perfil del usuario</h3>
      <p>Nombre del usuario <b>{username}</b></p>
    </div>
  )
}

export default Usuario
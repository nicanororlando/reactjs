import React from 'react'

export const CrudTableRow = ({ element, setDataToEdit, deleteData }) => {
  let {name, constellation, id} = element; //Desetructuramos los datos de elemento.

  return (
    <tr>
      <td>{name}</td>
      <td>{constellation}</td>
      <td>
        {/* Ejecutamos las dos funciones */}
        <button onClick={()=>setDataToEdit(element)}>Editar</button>           
        <button onClick={()=>deleteData(id)}>Eliminar</button>
      </td>
    </tr>
  )
}

import React from 'react'
import { useNavigate } from 'react-router-dom';

export const CrudTableRow = ({ element, setDataToEdit, deleteData }) => {
  let navigate = useNavigate();
  let {name, constellation, id} = element; //Desetructuramos los datos de elemento.

  const handleEdit = () => {
    setDataToEdit(element)
    navigate(`editar/${id}`)
  }

  return (
    <tr>
      <td>{name}</td>
      <td>{constellation}</td>
      <td>
        {/* Ejecutamos las dos funciones */}
        <button onClick={handleEdit}>Editar</button>       
        <button onClick={()=>deleteData(id)}>Eliminar</button>
      </td>
    </tr>
  )
}

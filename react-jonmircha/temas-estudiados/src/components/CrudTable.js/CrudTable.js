import React from 'react'
import { CrudTableRow } from './CrudTableRow'

export const CrudTable = ({ data, setDataToEdit, deleteData }) => {
  return (
    <div>
      <h3>Tabla de datos</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Constelacion</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map(element => (
              <CrudTableRow
                key={element.id} element={element}
                setDataToEdit={setDataToEdit} deleteData={deleteData}
              />
            ))
          ) : (
            <tr>
              <td colSpan='3'>Sin datos</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

import React, { useState } from "react";
import { CrudForm } from "./CrudForm/CrudForm";
import { CrudTable } from "./CrudTable.js/CrudTable";

const initialDB = [
  {
    id: 1,
    name: "Seiya",
    constellation: "Pegaso"
  },
  {
    id: 2,
    name: "pedro",
    constellation: "qcy"
  },
  {
    id: 3,
    name: "juan",
    constellation: "qc2"
  },
  {
    id: 4,
    name: "tuvija",
    constellation: "asdads"
  },
];

export default function CrudApp() {
  const [db, setDB] = useState(initialDB);

  //Cuando el estado sea nulo vamos a insertar datos, y cuando sea true vamos a actualizarlos.
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = data => {
    data.id = Date.now(); //Otra forma de definir un id unico
    setDB([...db, data])
  }
  const updateData = data => {
    /* Hago un mapeo de todos los elementos, y en ese mapeo voy guardando cada fila, entonces si una fila
    coincide con el id de la nueva data, guardamos esa nueva data en esa misma fila, y de locontrario 
    guardamos la data que ya teniamos. */
    let newData = db.map(element => element.id === data.id ? data : element)
    setDB(newData)
  }
  const deleteData = id => {
    let isDelete = window.confirm(`Estas seguro de eliminar el registro con el id ${id}?`);
    if (isDelete) {

      //Este elemento se va a ir llenando con los id que no coincidan con el que pulsamos.
      let newData = db.filter(elemento => elemento.id !== id);
      setDB(newData)
    } else {
      return
    }
  }

  return (
    <div>
      <h2>CRUD APP</h2>
      <CrudForm
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}   //Si editamos una fila, desde la fila le pasamos los datos de esa fila, para que en el form los podamos editar.
        setDataToEdit={setDataToEdit}
      />
      <CrudTable
        data={db}
        setDataToEdit={setDataToEdit}
        deleteData={deleteData}
      />
    </div>
  )
}
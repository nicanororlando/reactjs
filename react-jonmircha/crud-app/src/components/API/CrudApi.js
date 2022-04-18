import React, { useEffect, useState } from "react";
import { helpHttp } from "helpers/helpHttp";
import { CrudForm } from "../CrudForm/CrudForm";
import { CrudTable } from "../CrudTable.js/CrudTable";
import Loader from "components/Loader/Loader";
import { Message } from "components/Loader/Message";

export default function CrudApi() {
  const [db, setDB] = useState([]);

  //Cuando el estado sea nulo vamos a insertar datos, y cuando sea true vamos a actualizarlos.
  const [dataToEdit, setDataToEdit] = useState(null);

  let api = helpHttp()
  let url = `http://localhost:5000/santos`

  useEffect(() => {
    api.get(url)
      .then(res => {
        if (!res.error) {
          setDB(res)
        } else {
          setDB(null)
        }
      })
  }, [])

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
      <h2>CRUD API</h2>
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
      <Loader />
      <Message />
    </div>
  )
}
import React, { useEffect, useState } from 'react';
import { helpHttp } from 'helpers/helpHttp';
import { CrudForm } from 'components/CrudForm/CrudForm';
import { CrudTable } from 'components/CrudTable.js/CrudTable';
import Loader from 'components/Loader/Loader';
import Message from 'components/Loader/Message';
import { NavLink, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { noData, readData, deleteData } from 'actions/redux/redux.crud.actions';

export default function ReduxCrudApi() {
  const state = useSelector((state) => state);
  const { db } = state.crud;

  const dispatch = useDispatch();

  //Cuando el estado sea nulo vamos a insertar datos, y cuando sea true vamos a actualizarlos.
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  let api = helpHttp();
  let url = `http://localhost:5000/santos`;

  useEffect(() => {
    setLoading(true);
    helpHttp()
      .get(url)
      .then((res) => {
        if (!res.error) {
          dispatch(readData(res)); // Añadimos los datos a la db.
          setError(null);
        } else {
          dispatch(noData());
          setError(res);
        }
        setLoading(false);
      });
  }, [url]);

  const createData = (data) => {
    data.id = Date.now(); //Otra forma de definir un id unico
    let options = {
      body: data,
      headers: { 'content-type': 'application/json' }, //Esto lo podria poner directamente en el helpHttp, pero esa api esmas general y no siempre se usa esta config.
    };

    api.post(url, options).then((res) => {
      if (!res.error) {
        // setDB([...db, res]);
        dispatch(createData(res));
      } else {
        setError(res);
      }
    });
  };
  const updateData = (data) => {
    /* Creamos un endpoint que es la url de la api que va a responder a la peticion
    que hagamos, Luego el entrypoint que creemos lo hacemos coincidir con el endpint. */
    let endpoint = `${url}/${data.id}`;
    let options = {
      body: data,
      headers: { 'content-type': 'application/json' }, //Esto lo podria poner directamente en el helpHttp, pero esa api esmas general y no siempre se usa esta config.
    };
    api.put(endpoint, options).then((res) => {
      if (!res.error) {
        dispatch(updateData(res));
      } else {
        setError(res);
      }
    });
  };
  const deleteRow = (id) => {
    let isDelete = window.confirm(
      `Estas seguro de eliminar el registro con el id ${id}?`
    );
    if (isDelete) {
      let endpoint = `${url}/${id}`;
      let options = {
        headers: { 'content-type': 'application/json' },
      };

      api.del(endpoint, options).then((res) => {
        if (!res.error) {
          dispatch(deleteData(res));
        } else {
          setError(res);
        }
      });
    } else return;
  };

  return (
    <div>
      <h2>CRUD API</h2>
      <nav>
        <NavLink to="" activeclassname="active">
          Santos
        </NavLink>
        <NavLink to="agregar" activeclassname="active">
          Agregar
        </NavLink>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h2>Home</h2>
              {error && (
                <Message msg={`Error ${error.statusText}`} bgColor="#dc3545" />
              )}
              {loading && <Loader />}
              {db && (
                <CrudTable
                  data={db}
                  setDataToEdit={setDataToEdit}
                  deleteData={deleteRow}
                />
              )}
            </>
          }
        />

        <Route
          path="/agregar"
          element={
            <CrudForm
              createData={createData}
              updateData={updateData}
              dataToEdit={dataToEdit} //Si editamos una fila, desde la fila le pasamos los datos de esa fila, para que en el form los podamos editar.
              setDataToEdit={setDataToEdit}
            />
          }
        />

        <Route
          path="/editar/:id"
          element={
            <>
              <CrudForm
                createData={createData}
                updateData={updateData}
                dataToEdit={dataToEdit} //Si editamos una fila, desde la fila le pasamos los datos de esa fila, para que en el form los podamos editar.
                setDataToEdit={setDataToEdit}
              />
            </>
          }
        />
      </Routes>
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import './App.css';
import { Sub, SubsResponse } from './types';
import List from './components/List';
import Form from './components/Form';
import { useRef } from 'react';
import { getSubs } from './services/getSubs';

// Esta es una interfaz de estados.
interface AppState {
  subs: Array<Sub>;
  newSubsNumber: number;
}

function App() {
  // Creamos el hook para actualizar subs, ya definiendo con la interface Sub. Tenemos 3 formas de definir:
  // const [subs, setSubs] = useState<Array<Sub>>([]);
  const [subs, setSubs] = useState<AppState['subs']>([]);

  const [newSubNumber, setNewSubNumber] =
    useState<AppState['newSubsNumber']>(0);

  /* Este hook nos permite guardar un valor que va a quedar guardado entre renderizados 
  pero no va a renderizarse. */
  const divRef = useRef<HTMLDivElement | null>(null);

  /* Cuando hacemos fetching de datos, typescript no hace ninguna validacion, ya que
  typescript VALIDA EN ESTATICO o buildtime. Por eso nosotros por nuestra cuenta 
  tenemos que controlar y validar los datos que recibimos de nuestra api o servicio. */
  useEffect(() => {
    /* Esta linea es igual a las 2 que le siguen pero mas funcional: El fetchSubs va a 
    devolver una promesa donde vamos a tener el 'mapFromApiToSubs' (que tambien recibe 
    un parametro que es el de la promesa) y en el segundo then, como ya esta encadenado
    a una promesa, ya al setSubs le va a llegar el return con los datos mapeados 
    de la apiResponse a el tipo Sub. */
    getSubs().then(setSubs);

    // getSubs().then((res) => setSubs(res));

    // fetchSubs().then((subs) => {
    //   console.log(subs);
    //   setSubs(mapFromApiToSubs(subs));
    // });
  }, []);

  const handleNewSub = (newSub: Sub): void => {
    setSubs((subs) => [...subs, newSub]);
    setNewSubNumber((num) => num + 1);
  };

  return (
    <div className="App" ref={divRef}>
      <header className="App-header">
        <List subs={subs}>{true}</List>
        New subs: {newSubNumber}
        <Form onNewSub={handleNewSub} />
      </header>
    </div>
  );
}

export default App;

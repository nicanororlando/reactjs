import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

//Creamos el array con el estado inicial
const initial_state = [
  {
    nick: 'dapelu',
    subMonths: 3,
    avatar: 'https://i.pravatar.cc/150?u=dapelu',
    description: 'Dapelu hace de moderador a veces'
  },
  {
    nick: 'sergio_serrano',
    subMonths: 7,
    avatar: 'https://i.pravatar.cc/150?u=sergio_serrano',
  }
]

interface Sub {
  nick: string
  avatar: string
  subMonths: number
  description?: string
}

interface AppState {
  subs: Array<Sub>
  newSubsNumber: number
}

function App() {

  //Creamos el hook para actualizar subs, ya definiendo con la interface Sub. Tenemos 3 formas de definir:
  const [subs, setSubs] = useState<Array<Sub>>([])
  // const [subs, setSubs] = useState<Sub[]>([])
  // const [subs, setSubs] = useState<AppState['subs']>([])

  const [newSubNumber, setNewSubNumber] = useState<AppState['newSubsNumber']>(0)

  useEffect(() => {
    setSubs(initial_state)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

export default App;

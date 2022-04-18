import logo from './logo.svg';
import './App.css';
import { ListaDeTareas } from './componentes/ListaDeTareas.jsx';

//Estaria bueno agregar para que se guarden las tareas cuando se recargue la pag. 

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <div className='logo-react-contenedor'>
          <img src={logo} className="logo-react" alt="logo" />
        </div>
        <div className='tareas-lista-principal'>
          <h1>Mis Tareas</h1>
          <ListaDeTareas />
        </div>
      </div>
    </div>
  );
}

export default App;

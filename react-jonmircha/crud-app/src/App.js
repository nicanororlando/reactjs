import './App.css';
import CrudApi from './components/API/CrudApi';
import CrudApp from './components/CrudApp';

// 'rafc' PARA CREAR LA ESTRUCTURA 

function App() {
  return (
    <div className="App">
      <h1>Ejercicio react</h1>
      <hr />
      <CrudApi />
      <hr />
      <CrudApp />
    </div>
  );
}

export default App;

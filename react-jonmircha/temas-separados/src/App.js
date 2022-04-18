import logo from './logo.svg';
import './App.css';
import StyledComponents from './componentes/StyledComponents';
import Bootstrap from './componentes/Bootstrap';
import ReactBootstrap from './componentes/ReactBootstrap'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <StyledComponents />  
        <Bootstrap />
        <ReactBootstrap />

      </header>
    </div>
  );
}

export default App;

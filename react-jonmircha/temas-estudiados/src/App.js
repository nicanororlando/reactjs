import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import AppRoutes from 'routes/router';
import AuthProvider from 'helpers/AuthProvider';
import NavBarr from 'components/NavBar/NavBarr';

function App() {
  return (
    <>
      <Router>
        {/* Con el AuthProvider estamos dando informacion a los componentes hijos
        del (en este caso) estado del usuario, entonces luego dentro del componente
        <ReactRouter /> podemos definir que rutas van a estar protegidas, y de ahi
        redirigir a una ruta en especifico.
            Para que esto funcione, el AuthProvider tambien tiene que estar dentro del 
        <Router> ya que en ese componente usamos el useNavigator para redirigir a nuestra          pagina por defecto, y ese hook necesita estar envuelto dentro de un <Router>*/}
        <AuthProvider>
          {/* Importante que el NavBar, que quiero que este presente en todas las rutas,
            Tiene que estar dentro del Router (Para manejar los links), pero tambien fuera
            del Switch o Routes. */}
          <NavBarr />

          {/* En este componente definimos las rutas (Privadas y publicas).  */}
          <AppRoutes />
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;

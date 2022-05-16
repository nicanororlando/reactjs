import React from 'react';
import { useAuth } from 'hooks/useAuth';
import { NavLink, Link } from 'react-router-dom';
import { Nav, NavDropdown } from 'react-bootstrap';

const PrivateLinks = () => {
  const { token, handleLogOut } = useAuth();

  return (
    <>
      <span>Parametros de consulta</span>
      <NavLink to="/paginacion" className="private">
        Paginacion
      </NavLink>

      <span>Redireccion</span>
      <NavLink to="/appp" className="private">
        Appp
      </NavLink>

      <span>Rutas anidadas</span>
      <NavLink to="/react" className="private">
        React
      </NavLink>

      <span>Parametros</span>
      <NavDropdown
        title="useParams"
        id="collasible-nav-dropdown"
        className="dropdown-title"
        // id={`offcanvasNavbarDropdown-expand-${expand}`}
      >
        <Link to="/usuario/canor" className="drop-items">
          Canor
        </Link>
        <Link to="/usuario/messi" className="drop-items">
          Messi
        </Link>
      </NavDropdown>

      {!token && (
        <button className="log">
          <Link to="/login">Sign in</Link>
        </button>
      )}
      {token && (
        <button className="log" type="button" onClick={handleLogOut}>
          Sign out
        </button>
      )}
    </>
  );
};

export default PrivateLinks;

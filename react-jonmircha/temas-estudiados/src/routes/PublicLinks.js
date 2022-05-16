import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Nav, NavDropdown } from 'react-bootstrap';

const PublicLinks = () => {
  return (
    <>
      <NavLink to="/" activeclassname="active" className="link">
        Home
      </NavLink>

      <NavLink to="/modals" activeclassname="active" className="link">
        Modals
      </NavLink>

      <NavLink to="/selectanida2" activeclassname="active" className="link">
        Select anida2
      </NavLink>

      <NavLink to="/memo" activeclassname="active" className="link">
        Memo
      </NavLink>

      <NavDropdown title="Table" id="collasible-nav-dropdown">
        <Link to="/app" className="dropdown-item">
          Table
        </Link>
        <Link to="/api" className="dropdown-item">
          Table Api
        </Link>
      </NavDropdown>

      <NavDropdown title="Styles" id="collasible-nav-dropdown">
        <Link
          to="/bootstrap"
          activeclassname="active"
          className="dropdown-item"
        >
          Bootstrap
        </Link>
        <Link
          to="/reactbootstrap"
          activeclassname="active"
          className="dropdown-item"
        >
          React Bootstrap
        </Link>
        <Link
          to="/syledcomp"
          activeclassname="active"
          className="dropdown-item"
        >
          Styled Components
        </Link>
      </NavDropdown>

      <NavDropdown title="Reducers" id="collasible-nav-dropdown">
        <Link to="/reducer" activeclassname="active" className="dropdown-item">
          Reducer
        </Link>
        <Link
          to="/reducer_shop"
          activeclassname="active"
          className="dropdown-item"
        >
          Shopping Cart
        </Link>
        <Link
          to="/reducer_crud"
          activeclassname="active"
          className="dropdown-item"
        >
          Crud Api
        </Link>
      </NavDropdown>

      <NavDropdown title="Redux" id="collasible-nav-dropdown">
        <Link to="/redux" activeclassname="active" className="dropdown-item">
          Redux
        </Link>
        <Link
          to="/redux_shop"
          activeclassname="active"
          className="dropdown-item"
        >
          Shopping Cart
        </Link>
        <Link
          to="/redux_crud"
          activeclassname="active"
          className="dropdown-item"
        >
          Crud Api
        </Link>
      </NavDropdown>
    </>
  );
};

export default PublicLinks;

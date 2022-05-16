import React from 'react';
import PrivateLinks from 'routes/PrivateLinks';
import PublicLinks from 'routes/PublicLinks';
import './NavBar.css';

const NavBar = () => {
  return (
    <>
      <nav className="Nav-bar">
        <PublicLinks />
      </nav>
      <nav>
        <span>RUTAS PRIVADAS --{'>'}</span>
        <PrivateLinks />
      </nav>
    </>
  );
};

export default NavBar;

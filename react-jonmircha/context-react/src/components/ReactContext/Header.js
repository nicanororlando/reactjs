import React, { useContext } from 'react';
import AppContext from 'context/AppContext';

const Header = () => {
  // Desestructuro los valores que tengo en el ThemeContext.
  const { theme, handleTheme, texts, handleLanguaje, auth, handleAuth } =
    useContext(AppContext);

  return (
    <header className={theme}>
      <h2>{texts.headerTitle}</h2>
      <h3>{texts.headerSubtitle}</h3>
      <select name="languaje" onChange={handleLanguaje}>
        <option value="es">ES</option>
        <option value="em">EN</option>
      </select>
      <input
        className="radio"
        type="radio"
        name="theme"
        id="light-context"
        value="light"
        onClick={handleTheme}
      />
      <label className="radio" htmlFor="light-context">
        {texts.headerLight}
      </label>
      <input
        className="radio"
        type="radio"
        name="theme"
        id="dark-context"
        value="dark"
        onClick={handleTheme}
      />
      <label className="radio" htmlFor="dark-context">
        {texts.headerDark}
      </label>
      <button onClick={handleAuth}>
        {auth ? texts.btnLogout : texts.btnLogin}
      </button>
    </header>
  );
};

export default Header;

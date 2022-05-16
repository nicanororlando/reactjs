import React from 'react';

const Header = ({
  theme,
  handleTheme,
  texts,
  handleLanguaje,
  auth,
  handleAuth,
}) => {
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
        id="light"
        value="light"
        onClick={handleTheme}
      />
      <label className="radio" htmlFor="light">
        {texts.headerLight}
      </label>
      <input
        className="radio"
        type="radio"
        name="theme"
        id="dark"
        value="dark"
        onClick={handleTheme}
      />
      <label className="radio" htmlFor="dark">
        {texts.headerDark}
      </label>
      <button onClick={handleAuth}>
        {auth ? texts.btnLogout : texts.btnLogin}
      </button>
    </header>
  );
};

export default Header;

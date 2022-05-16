import React, { createContext, useState } from 'react';

const translations = {
  es: {
    headerTitle: 'App CON Contexto',
    headerSubtitle: 'Cabecera',
    headerLight: 'Claro',
    headerDark: 'Oscuro',
    btnLogin: 'Iniciar sesion',
    btnLogout: 'Cerrar sesion',
    mainWelcome: 'Bienvenid@',
    mainHello: 'Hola usuari@',
    mainContent: 'Contenido principal',
    footerTitle: 'Pie de pagina',
  },
  en: {
    headerTitle: 'App without Context',
    headerSubtitle: 'Header',
    headerLight: 'Light',
    headerDark: 'Dark',
    btnLogin: 'Log in',
    btnLogout: 'Log outn',
    mainWelcome: 'Welcome guest!',
    mainHello: 'Hello user!',
    mainContent: 'Main content',
    footerTitle: 'Footer',
  },
};

// Tiene un proovedor global, y luego consumimos la data con useContext.
const AppContext = createContext();

// Este va a ser el contenedor que envuelva a los componentes que necesiten datos.
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [languaje, setLanguaje] = useState('es');
  const [texts, setTexts] = useState(translations[languaje]);
  const [auth, setAuth] = useState(null);

  const handleLanguaje = (e) => {
    if (e.target.value === 'es') {
      setLanguaje('es');
      setTexts(translations.es);
    } else {
      setLanguaje('en');
      setTexts(translations.en);
    }
  };
  const handleAuth = (e) => {
    if (auth) setAuth(null);
    else setAuth(true);
  };

  const handleTheme = (e) => {
    if (e.target.value === 'light') setTheme('light');
    else setTheme('dark');
  };

  const data = { theme, handleTheme, texts, handleLanguaje, auth, handleAuth };

  // Esto va a envolver a todos los hijos que necesiten el contexto.
  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};

export { ThemeProvider };
export default AppContext;

import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

const translations = {
  es: {
    headerTitle: 'App SIN Contexto',
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

const Page = () => {
  const [theme, setTheme] = useState('light');
  const [languaje, setLanguaje] = useState('es');
  const [texts, setTexts] = useState(translations[languaje]);
  const [auth, setAuth] = useState(null);

  const handleTheme = (e) => {
    if (e.target.value === 'light') setTheme('light');
    else setTheme('dark');
  };
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

  return (
    <div className="my-page">
      <Header
        theme={theme}
        handleTheme={handleTheme}
        texts={texts}
        handleLanguaje={handleLanguaje}
        auth={auth}
        handleAuth={handleAuth}
      />
      <Main theme={theme} texts={texts} auth={auth} />
      <Footer theme={theme} texts={texts} />
    </div>
  );
};

export default Page;

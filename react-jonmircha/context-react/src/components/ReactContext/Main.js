import AppContext from 'context/AppContext';
import React, { useContext } from 'react';

const Main = () => {
  const { theme, texts, auth } = useContext(AppContext);
  return (
    <main className={theme}>
      {auth ? <p>{texts.mainHello}</p> : <p>{texts.mainWelcome}</p>}
      <p>{texts.mainContent}</p>
    </main>
  );
};

export default Main;

import React, { useContext } from 'react';
import AppContext from 'context/AppContext';

const Footer = () => {
  const { theme, texts } = useContext(AppContext);

  return (
    <footer className={theme}>
      <h4>{texts.footerTitle}</h4>
    </footer>
  );
};

export default Footer;

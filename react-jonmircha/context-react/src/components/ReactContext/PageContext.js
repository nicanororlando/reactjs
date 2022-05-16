import React, { useState } from 'react';
import { ThemeProvider } from 'context/AppContext';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

const PageContext = () => {
  return (
    <div className="my-page">
      <ThemeProvider>
        <Header />
        <Main />
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default PageContext;

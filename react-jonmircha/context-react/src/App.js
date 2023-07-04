import React from 'react';
import './App.css';
import Page from './components/NoContext/Page';
import PageContext from './components/ReactContext/PageContext';

function App() {
  return (
    <div className="App">
      <h1>React Context API</h1>
      <a
        href="https://es.reactjs.org/docs/context.html#gatsby-focus-wrapper"
        target="_blank"
        rel="noreferrer"
      >
        Documentacion
      </a>
      <hr />
      <PageContext />
      <hr />
      <Page />
    </div>
  );
}

export default App;

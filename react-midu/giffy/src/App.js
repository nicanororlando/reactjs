import React from 'react';
import logo from './logo.svg'
import './styles/App.css';
import { Link, Route } from 'wouter';
import Home from './pages/Home';
import SearchResult from './pages/SearchResult';
import Detail from './pages/Detail';
import { GifsContexProvider } from './context/GifsContext';

function App() {

  return ( 
    <div className="App"> 
        <Link to='/' >
          <a><img className='logo' src={logo} /></a>
        </Link>
        <GifsContexProvider>
          <Route 
            component={Home}
            path='/' />
          <Route 
            component={SearchResult}
            path='/search/:keyword'  />
          <Route 
            component={Detail}
            path='/gif/:id'  />
        </GifsContexProvider>
      </div> 
  )
}

export default App;

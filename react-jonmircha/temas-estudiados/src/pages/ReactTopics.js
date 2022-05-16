import { useAuth } from 'hooks/useAuth';
import React from 'react'
import { Link, Routes, Route, useParams } from 'react-router-dom';

/* Mi dominio en este caso seria localhost:3000, y el 'path' nos permite construir
rutas relativas <Route>. Para crear rutas dinamicas la url nos permite construir 
enlaces relativos <Link> o <NavLink>.*/ 
const ReactTopics = () => {
  const { token } = useAuth();
  
  return (
    <div>
      <h2>React topics</h2>
      <h3>Autenticated as {token}</h3>
      <ul>
        <li>
          {/* De esta forma añadimos la subruta */}
          <Link to='jsx'>JSX</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to='props'>Props</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to='estado'>Estado</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to='componentes'>Componentes</Link>
        </li>
      </ul>
      <Routes>
        <Route path='/' element={
          <>
            <h4>Elige un tema de react</h4>
            <p>lorem asdadsf asdfadsfasdf asdfn sadfasdf a sdfdasd dfd asdfadsfa
              adsf asdf asdfa sdfasdfasdf asdfasdfasdf asdfasfdsfasdfasdf asdfdas fasd
              asdf asdf asdf sadf asdf asdfasdfasdf asdf asdf adsf asdf asdf asdf asfd
            </p>
          </>   
        }>  
        </Route>

        {/* Creamos la subruta dinamicamente usando el parametro :topic. Luego ese
        parametro nos sirve para recibir en el componente <Topic/> el nombre de 
        la subruta en la que hicimos click. */}
        <Route path=':topic' element={<Topic />}></Route>
      </Routes>
    </div>
  )
}

/* Creamos este componente interno, que va a recibir parametros que va a manipular 
gracias al hook 'useParams'. */
const Topic = () => {
  // Desestructuro el parametro que recibo desde la url.
  let { topic } = useParams();

  return (
    <div>
      <h3>{topic}</h3>
      <p>lorem asdadsf asdfadsfasdf asdfn sadfasdf a sdfdasd dfd asdfadsfa
        adsf asdf asdfa sdfasdfasdf asdfasdfasdf asdfasfdsfasdfasdf asdfdas fasd
        asdf asdf asdf sadf asdf asdfasdfasdf asdf asdf adsf asdf asdf asdf asfd
      </p>
    </div>
  )
}

export default ReactTopics
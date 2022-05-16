import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from 'pages/Home';
import StyledComponents from 'pages/Styling/StyledComponents';
import Bootstrap from 'pages/Styling/Bootstrap';
import ReactBootstrap from 'pages/Styling/ReactBootstrap';
import CrudApp from 'pages/Crud/CrudApp';
import CrudApi from 'pages/Crud/CrudApi';
import Modals from 'pages/Modals';
import SelectsAnidados from 'pages/SelectsAnidados';
import Error404 from 'pages/Error404';
import Usuario from 'pages/Usuario';
import Paginacion from 'pages/Paginacion';
import ReactTopics from 'pages/ReactTopics';
import Login from 'pages/Login';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import Memo from 'pages/Memo';
import Reducer from 'pages/Reducer/Reducer';
import ReducerShop from 'pages/Reducer/ReducerShop';
import Redux from 'pages/Redux/Redux';
import ReduxShop from 'pages/Redux/ReduxShop';
import ReducerCrudApi from 'pages/Reducer/ReducerCrudApi';
import ReduxCrudApi from 'pages/Redux/ReduxCrudApi';

/* IMPORTANTE a tener en cuenta de las rutas: El manejo de rutas en React esta piola
y todo, pero estas rutas, si no las manejamos bien del lado del servidor (backend)
y queremos ya publicar la pagina, no va a funcionar ya que, ahora estoy usando mi 
servidor local y anda bien pero sin uno anda mal. Esto es por que en realidad, React
router hace como un condicional Render con las rutas, y luego necesita un recurso que
entregue la informacion a esa ruta. 
  Cuando se prueba esa aplicacion (haciendo un build y ejecutando live server y ejecutando desde la home),
aparentemente anda la pagina, cargando bien las paginas y todo. El   problema esta cuando
copiamos el link entero y lo pegamos al navegador, ahi no va a funcionar y vamos a 
tener un error 404 ya que las rutas del react router no tienen una estrategia del
lado del servidor. */
/* Mi dominio en este caso seria localhost:3000, y el 'path' nos permite construir
rutas relativas <Route>. */

/* SOLUCION RAPIDA: Si quiero que esto funcione bien sin necesidad de tener una 
estrategia del lado del servidor, puedo usar el <HashRoute> */
const AppRouter = () => {
  return (
    <Routes>
      <Route path="*" element={<Error404 />} />
      <Route path="/" element={<Home />} />
      <Route path="/app" element={<CrudApp />} />
      <Route path="api/*" element={<CrudApi />} /> {/* Anida2 */}
      <Route path="/modals" element={<Modals />} />
      <Route path="/selectanida2" element={<SelectsAnidados />} />
      <Route path="/syledComp" element={<StyledComponents />} />
      <Route path="/bootstrap" element={<Bootstrap />} />
      <Route path="/reactbootstrap" element={<ReactBootstrap />} />
      <Route path="/memo" element={<Memo />} />
      <Route path="/reducer" element={<Reducer />} />
      <Route path="/reducer_shop" element={<ReducerShop />} />
      <Route path="reducer_crud/*" element={<ReducerCrudApi />} />
      <Route path="/redux" element={<Redux />} />
      <Route path="/redux_shop" element={<ReduxShop />} />
      <Route path="redux_crud/*" element={<ReduxCrudApi />} />
      <Route path="/login" element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route path="/usuario/:username" element={<Usuario />} />
        <Route path="/paginacion" element={<Paginacion />} />
        <Route path="/appp" element={<Navigate replace to="/app" />} />{' '}
        {/*Redir*/}
        <Route path="react/*" element={<ReactTopics />} /> {/* Anida2 */}
      </Route>
    </Routes>
  );
};

export default AppRouter;

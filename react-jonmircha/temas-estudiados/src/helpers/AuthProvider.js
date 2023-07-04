import React from 'react';
import { fakeAuth } from 'api/fakeAuth';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './Context';
 
// https://www.robinwieruch.de/react-router-authentication/
// https://www.robinwieruch.de/javascript-fake-api/

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [token, setToken] = React.useState(null);

  const handleLogin = async () => {
    const token = await fakeAuth();

    setToken(token);
    navigate('/');
  };

  const handleLogout = () => {
    setToken(null);
  };

  const value = {
    token,
    handleLogin: handleLogin,
    handleLogOut: handleLogout,
  };

  return (
    /* Gracias al componente Provider, podemos darle un valor al contexto actual, 
    sobreescribiendo asi los valores anteriores. Luego el elemento children va a 
    tener esa informacion y va a poder acceder a ella.  */
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
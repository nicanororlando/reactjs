import { useAuth } from 'hooks/useAuth'
import React from 'react'

const Login = () => {
  const { token, handleLogin } = useAuth();

  return (
    <div>
      <h3>Login (Public)</h3> 
      {!token && (
      <h5>Tenes que logearte maquina</h5>
      )}
      <input type='submit' value='Login' onClick={handleLogin} />
    </div>
  )
}

export default Login
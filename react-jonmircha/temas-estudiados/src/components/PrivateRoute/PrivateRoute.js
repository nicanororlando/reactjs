import { useAuth } from 'hooks/useAuth'
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to='/login' replace />
  }

  return children ? children : <Outlet />
}

export default PrivateRoute;
import React from 'react';
import { useIsAuthenticated } from '@azure/msal-react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useIsAuthenticated();
  console.log(isAuthenticated, "auth");

  return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;

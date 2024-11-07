import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useMsal } from '@azure/msal-react';

const ProtectedRoute = ({ children }) => {
  const { instance, accounts } = useMsal();
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthentication = async () => {
      const sessionStatus = sessionStorage.getItem('isAuthenticated'); // Retrieve status from sessionStorage

      if (sessionStatus === 'true') {
        setIsAuthenticated(true);
      } else {
        if (accounts.length > 0) {
          try {
            await instance
              .acquireTokenSilent({
                scopes: ['User.Read'],
                account: accounts[0], // Ensure we use the correct account
              })
              .then(() => {
                sessionStorage.setItem('isAuthenticated', 'true'); // Store authenticated status in sessionStorage
                setIsAuthenticated(true);
              })
              .catch(() => {
                sessionStorage.setItem('isAuthenticated', 'false'); // If token acquisition fails, set to false
                setIsAuthenticated(false);
              });
          } catch (error) {
            console.error('Error acquiring token:', error);
            sessionStorage.setItem('isAuthenticated', 'false');
            setIsAuthenticated(false);
          }
        } else {
          setIsAuthenticated(false);
        }
      }

      setLoading(false);
    };

    checkAuthentication();
  }, [instance, accounts]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;

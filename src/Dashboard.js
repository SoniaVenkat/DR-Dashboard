import React from 'react';
import { useMsal } from '@azure/msal-react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { instance } = useMsal();
  const navigate = useNavigate();

  const handleLogout = () => {
    instance.logoutPopup().then(() => {
      navigate('/'); // Redirect to login page after logout
    }).catch(error => {
      console.error("Logout failed: ", error);
    });
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleLogout} className="btn btn-primary">
        Logout
      </button>
      {/* Other dashboard content here */}
    </div>
  );
};

export default Dashboard;

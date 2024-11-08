// LogoutButton.js
import React from "react";
import { useMsal } from "@azure/msal-react";

const LogoutButton = () => {
  const { instance } = useMsal();

  const handleLogout = () => {
    instance.logoutPopup().catch(e => {
      console.error(e);
    });
  };

  return <button onClick={handleLogout}>Sign out</button>;
};

export default LogoutButton;

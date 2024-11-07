// App.js
import React from "react";
import { MsalProvider } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "./authConfig";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import Inventory from "./components/Inventory";
import Replication from "./components/Replication";
import Capacity from "./components/Capacity";
import Teams from "./components/Teams";

const msalInstance = new PublicClientApplication(msalConfig);

function App() {
  return (
    <MsalProvider instance={msalInstance}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              // <ProtectedRoute>
                <Dashboard />
              // </ProtectedRoute>
            }
          />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/replication" element={<Replication />} />
          <Route path="/capacity" element={<Capacity />} />
          <Route path="/teams" element={<Teams />} />
        </Routes>
      </Router>
    </MsalProvider>
  );
}

export default App;

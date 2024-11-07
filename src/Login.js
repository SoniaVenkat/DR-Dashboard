// Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMsal } from "@azure/msal-react";
import awsImage from "./images/aws.png";
import azureImage from "./images/azure.png";
import gc2Image from "./images/GCP.png";

const Login = () => {
  const [selectedCloud, setSelectedCloud] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { instance } = useMsal();
  const navigate = useNavigate();

  const cloudOptions = [
    { name: "AWS", imgSrc: awsImage },
    { name: "Azure", imgSrc: azureImage },
    { name: "GCP", imgSrc: gc2Image },
  ];

  const handleSelectCloud = (cloudName) => {
    setSelectedCloud(cloudOptions.find((cloud) => cloud.name === cloudName));
  };

  const handleContinue = () => {
    if (selectedCloud) {
      if (selectedCloud.name === "Azure") {
        handleAzureLogin();
      } else {
        setShowModal(true);
      }
    } else {
      alert("Please select a cloud service!");
    }
  };

  const handleAzureLogin = () => {
    instance
      .loginPopup({ scopes: ["User.Read"] })
      .then(() => {
        sessionStorage.setItem('isAuthenticated', 'true');
        navigate("/dashboard");
      })
      .catch((error) => {
        console.error("Azure login failed:", error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logging in to ${selectedCloud.name} with username: ${username}`);
    setShowModal(false);
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="row justify-content-center">
          <h1 className="text-center mb-4">Disaster Recovery Management</h1>
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <h1 className="text-center mb-4">Choose any Cloud Service</h1>
                <div className="d-flex justify-content-around mb-4">
                  {cloudOptions.map((cloud) => (
                    <div
                      key={cloud.name}
                      className="text-center"
                      onClick={() => handleSelectCloud(cloud.name)}
                      style={{
                        border:
                          selectedCloud?.name === cloud.name
                            ? "2px solid blue"
                            : "1px solid gray",
                        padding: "10px",
                        borderRadius: "10px",
                        cursor: "pointer",
                      }}
                    >
                      <img
                        src={cloud.imgSrc}
                        alt={cloud.name}
                        style={{ width: "100px", height: "100px" }}
                      />
                      <p>{cloud.name}</p>
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <button className="btn btn-primary" onClick={handleContinue}>
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          aria-labelledby="modalLabel"
          aria-modal="true"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modalLabel">
                  {selectedCloud?.name} Login
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                {selectedCloud && (
                  <div className="text-center mb-4">
                    <img
                      src={selectedCloud.imgSrc}
                      alt={selectedCloud.name}
                      style={{ width: "80px", height: "80px" }}
                    />
                  </div>
                )}
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;

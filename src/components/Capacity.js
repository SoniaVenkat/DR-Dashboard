import React from "react";
import MainHeader from "./MainHeader";
import Sidebar from "./Sidebar";
const Capacity = () => {
  return (
    <div className="header">
      <MainHeader></MainHeader>
      <Sidebar></Sidebar>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4>Resource type details</h4>
          <p className="mb-0">Region : US East (N.Virginia)</p>
        </div>

        <div className="card">
          <div className="p-3">
            <p className="text-primary">DB Instances (4)</p>
            <p className="ms-3">Storage Allocated:</p>
            <p className="ms-3">DB clusters:</p>
            <p className="ms-3">Location:</p>
            <p className="text-primary">EC2</p>
            <p className="text-primary">CloudTrail</p>
            <p className="text-primary">MITE</p>
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-center mb-4 mt-4">
          <h4>Recommendation</h4>
          <a className="btn btn-primary" href="#">
            Submit Support Request
          </a>
        </div>

        <div className="card">
          <div className="p-3 mb-3">
            <p className="text-primary">DB Instances (4)</p>
            <p className="ms-3">Storage Allocated:</p>
            <p className="text-primary">EC2</p>
            <p className="text-primary">CloudTrail</p>
            <p className="text-primary">MITE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Capacity;

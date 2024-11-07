import React from "react";
import MainHeader from "./MainHeader";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

const Replication = () => {
  return (
    <div className="header">
      <MainHeader></MainHeader>
      <Sidebar></Sidebar>
      <div>
        <div className="w-50">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h4>Resource type details</h4>
            <p className="mb-0">Region : US East (N.Virginia)</p>
          </div>
          <div>
            <div className="card">
              <div className="d-flex justify-content-between align-items-start p-4">
                <h4>20 VM (East)</h4>
                <div className="ms-4">
                  <h6 className="text-success">10 VM's Replication Healthy</h6>
                  <h6 className="text-warning">
                    5 VM's Replication Inprogress
                  </h6>
                  <h6 className="text-danger">5 VM's Replication Critical</h6>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-0 p-4">
                <Link className="btn btn-danger text-white" to="#">
                  End claim
                </Link>
                <Link className="btn btn-danger text-white" to="#">
                  EndXYFilling
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Replication;

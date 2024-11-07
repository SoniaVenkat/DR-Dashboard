import React from "react";

import MainHeader from "./components/MainHeader";
import Sidebar from "./components/Sidebar";

const Dashboard = () => {
  return (
    <div>
      <MainHeader></MainHeader>
      <Sidebar></Sidebar>
      <div className="container ms-left p-2">
        <div className="main-panel">
          <div className="content">
            <div className="container-fluid">
              <h4 className="page-title">Dashboard</h4>
              <div className="row">
                <div className="col-md-3">
                  <div className="card card-stats card-warning rounded-3">
                    <div className="card-body p-4">
                      <div className="row">
                        <div className="col-5">
                          <div className="icon-big text-center">
                            <i className="fa fa-users"></i>
                          </div>
                        </div>
                        <div className="col-7 d-flex align-items-center">
                          <div className="numbers">
                            <p className="card-category">5 Vm's</p>
                            <h4 className="card-title">Not Yet</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card card-stats card-primary rounded-3">
                    <div className="card-body p-4">
                      <div className="row">
                        <div className="col-5">
                          <div className="icon-big text-center">
                            <i className="fa fa-bar-chart"></i>
                          </div>
                        </div>
                        <div className="col-7 d-flex align-items-center">
                          <div className="numbers">
                            <p className="card-category">5 VM's </p>
                            <h4 className="card-title">In progress</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 ">
                  <div className="card card-stats card-success rounded-3">
                    <div className="card-body p-4">
                      <div className="row">
                        <div className="col-5">
                          <div className="icon-big text-center">
                            <i className="fa fa-check-circle"></i>
                          </div>
                        </div>
                        <div className="col-7 d-flex align-items-center">
                          <div className="numbers">
                            <p className="card-category">5 Vm's</p>
                            <h4 className="card-title">Completed</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="card card-stats card-danger rounded-3">
                    <div className="card-body p-4">
                      <div className="row">
                        <div className="col-5">
                          <div className="icon-big text-center">
                            <i class="fa-solid fa-circle-exclamation"></i>
                          </div>
                        </div>
                        <div className="col-7 d-flex align-items-center">
                          <div className="numbers">
                            <p className="card-category">5 VM's</p>
                            <h4 className="card-title">Failed</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Activity log</h5>
            </div>
            <div className="card-body">
              <table className="table">
                <thead className="table-success">
                  <tr>
                    <th scope="col">Resource type</th>
                    <th scope="col">Resource Name</th>
                    <th scope="col">Start Time</th>
                    <th scope="col">End Time</th>
                    <th scope="col">Time Taken</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>EC2</td>
                    <td>fb-dev</td>
                    <td>3.00pm</td>
                    <td>11.30am</td>
                    <td>10 secs</td>
                  </tr>
                  <tr>
                    <td>Kubernetes</td>
                    <td>fb-staging</td>
                    <td>3.00pm</td>
                    <td>11.30am</td>
                    <td>3.00pm</td>
                  </tr>
                  <tr>
                    <td>Cloud Trail</td>
                    <td>rg-dev</td>
                    <td>3.00pm</td> <td>11.30am</td>
                    <td>3 days</td>
                  </tr>
                  <tr>
                    <td>Database</td>
                    <td>fb-prod</td>
                    <td>3.00pm</td> <td>11.30am</td>
                    <td>1 week</td>
                  </tr>
                  <tr>
                    <td>CloudFront</td>
                    <td>fb-dev-init</td>
                    <td>3.00pm</td> <td>11.30am</td>
                    <td>40 mins</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* Other dashboard content here */}
      </div>
    </div>
  );
};

export default Dashboard;

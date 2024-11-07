import React from "react";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="scrollbar-inner sidebar-wrapper">
        <div className="user">
          <div className="photo">
            <img src="assets/img/profile.jpg" alt="User Profile" />
          </div>
          <div className="info">
            <a
              className=""
              data-toggle="collapse"
              href="#collapseExample"
              aria-expanded="true"
            >
              <span>
                Hizrian
                <span className="user-level">Administrator</span>
                <span className="caret"></span>
              </span>
            </a>
            <div className="clearfix"></div>
            <div
              className="collapse in"
              id="collapseExample"
              aria-expanded="true"
            >
              <ul className="nav">
                <li>
                  <a href="#profile">
                    <span className="link-collapse">My Profile</span>
                  </a>
                </li>
                <li>
                  <a href="#edit">
                    <span className="link-collapse">Edit Profile</span>
                  </a>
                </li>
                <li>
                  <a href="#settings">
                    <span className="link-collapse">Settings</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <ul className="nav">
          <li className="nav-item active">
            <Link to="/dashboard">
              <i className="la la-dashboard"></i>
              <p>Dashboard</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/inventory">
              <i className="la la-table"></i>
              <p>Inventory</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/capacity">
              <i className="la la-keyboard-o"></i>
              <p>Capacity Planning</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/replication">
              <i className="la la-th"></i>
              <p>Replication Status</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/teams">
              <i className="la la-bell"></i>
              <p>Teams</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

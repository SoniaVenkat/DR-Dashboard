import React from "react";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="scrollbar-inner sidebar-wrapper">
        <ul className="nav">
          <li className="nav-item active">
            <Link to="/dashboard">
              <i className="fa fa-dashboard"></i>
              <p>Dashboard</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/inventory">
              <i class="fa-solid fa-cloud-arrow-down"></i>
              <p>Inventory</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/capacity">
              <i class="fa-solid fa-warehouse"></i>
              <p>Capacity Planning</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/replication">
              <i className="fa fa-th"></i>
              <p>Replication Status</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/teams">
              <i class="fa-solid fa-user-group"></i>
              <p>Teams</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

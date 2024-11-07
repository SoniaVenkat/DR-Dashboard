import React from "react";
import "../css/ready.css";
import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <div className="main-header">
      <div className="logo-header">
        <a href="index.html" className="logo">
          Disaster Recovery
        </a>
        <button
          className="navbar-toggler sidenav-toggler ml-auto"
          type="button"
          data-toggle="collapse"
          data-target="collapse"
          aria-controls="sidebar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <button className="topbar-toggler more">
          <i className="la la-ellipsis-v"></i>
        </button>
      </div>
      <nav className="navbar navbar-header navbar-expand-lg">
        <div className="container-fluid">
          <form
            className="navbar-left navbar-form nav-search mr-md-3"
            action=""
          >
            <div className="input-group">
              <input
                type="text"
                placeholder="Search ..."
                className="form-control"
              />
              <div className="input-group-append">
                <span className="input-group-text">
                  <i className="la la-search search-icon"></i>
                </span>
              </div>
            </div>
          </form>
          <ul className="navbar-nav topbar-nav ml-md-auto align-items-center">
            <li className="nav-item dropdown hidden-caret">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="la la-envelope"></i>
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="#">
                  Action
                </Link>
                <Link className="dropdown-item" to="#">
                  Another action
                </Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="#">
                  Something else here
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown hidden-caret">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="la la-bell"></i>
                <span className="notification">3</span>
              </Link>
              <ul
                className="dropdown-menu notif-box"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <div className="dropdown-title">
                    You have 4 new notifications
                  </div>
                </li>
                <li>
                  <div className="notif-center">
                    <Link to="#">
                      <div className="notif-icon notif-primary">
                        <i className="la la-user-plus"></i>
                      </div>
                      <div className="notif-content">
                        <span className="block">New user registered</span>
                        <span className="time">5 minutes ago</span>
                      </div>
                    </Link>
                    <Link to="#">
                      <div className="notif-icon notif-success">
                        <i className="la la-comment"></i>
                      </div>
                      <div className="notif-content">
                        <span className="block">Rahmad commented on Admin</span>
                        <span className="time">12 minutes ago</span>
                      </div>
                    </Link>
                    <Link to="#">
                      <div className="notif-img">
                        <img src="assets/img/profile2.jpg" alt="Img Profile" />
                      </div>
                      <div className="notif-content">
                        <span className="block">Reza sent messages to you</span>
                        <span className="time">12 minutes ago</span>
                      </div>
                    </Link>
                    <Link to="#">
                      <div className="notif-icon notif-danger">
                        <i className="la la-heart"></i>
                      </div>
                      <div className="notif-content">
                        <span className="block">Farrah liked Admin</span>
                        <span className="time">17 minutes ago</span>
                      </div>
                    </Link>
                  </div>
                </li>
                <li>
                  <Link className="see-all" to="#">
                    <strong>See all notifications</strong>{" "}
                    <i className="la la-angle-right"></i>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="dropdown-toggle profile-pic"
                data-toggle="dropdown"
                to="#"
                aria-expanded="false"
              >
                <img
                  src="assets/img/profile.jpg"
                  alt="user-img"
                  width="36"
                  className="img-circle"
                />
                <span>Hizrian</span>
              </Link>
              <ul className="dropdown-menu dropdown-user">
                <li>
                  <div className="user-box">
                    <div className="u-img">
                      <img src="assets/img/profile.jpg" alt="user" />
                    </div>
                    <div className="u-text">
                      <h4>Hizrian</h4>
                      <p className="text-muted">hello@themekita.com</p>
                      <a
                        href="profile.html"
                        className="btn btn-rounded btn-danger btn-sm"
                      >
                        View Profile
                      </a>
                    </div>
                  </div>
                </li>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="#">
                  <i className="ti-user"></i> My Profile
                </Link>
                <Link className="dropdown-item" to="#">
                  My Balance
                </Link>
                <Link className="dropdown-item" to="#">
                  <i className="ti-email"></i> Inbox
                </Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="#">
                  <i className="ti-settings"></i> Account Setting
                </Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="#">
                  <i className="fa fa-power-off"></i> Logout
                </Link>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default MainHeader;

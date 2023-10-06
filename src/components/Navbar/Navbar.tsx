import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div>
        <h1>SoCal Unveiled</h1>
      </div>
      <div className="navbar-links-container">
        <ul>
          <li>
            <Link to="hidden-gems" className="navbar-link">
              <h1 className="navbar-link-text">All</h1>
            </Link>
          </li>
          <li>
            <Link to="hidden-gems" className="navbar-link">
              <h1 className="navbar-link-text">Sightseeing</h1>
            </Link>
          </li>
          <li>
            <Link to="hidden-gems" className="navbar-link">
              <h1 className="navbar-link-text">Nature</h1>
            </Link>
          </li>
          <li>
            <Link to="hidden-gems" className="navbar-link">
              <h1 className="navbar-link-text">Typical Tourist</h1>
            </Link>
          </li>
          <li>
            <Link to="hidden-gems" className="navbar-link">
              <h1 className="navbar-link-text">Hidden Gems</h1>
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-extra-container">
        <div>
          <h1>My Account</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

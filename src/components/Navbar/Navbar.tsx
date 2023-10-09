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
            <Link to="/" className="navbar-link">
              <h1 className="navbar-link-text">All</h1>
            </Link>
          </li>
          <li>
            <Link to="sightseeing" className="navbar-link">
              <h1 className="navbar-link-text">Sightseeing</h1>
            </Link>
          </li>
          <li>
            <Link to="nature" className="navbar-link">
              <h1 className="navbar-link-text">Nature</h1>
            </Link>
          </li>
          <li>
            <Link to="typical-tourist" className="navbar-link">
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
        <Link to="my-account" className="navbar-link">
          <h1>My Account</h1>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

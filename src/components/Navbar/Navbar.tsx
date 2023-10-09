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
          <Link to="/" className="navbar-link">
            <li>
              <h1 className="navbar-link-text">All</h1>
            </li>
          </Link>
          <Link to="sightseeing" className="navbar-link">
            <li>
              <h1 className="navbar-link-text">Sightseeing</h1>
            </li>
          </Link>
          <Link to="nature" className="navbar-link">
            <li>
              <h1 className="navbar-link-text">Nature</h1>
            </li>
          </Link>
          <Link to="typical-tourist" className="navbar-link">
            <li>
              <h1 className="navbar-link-text">Typical Tourist</h1>
            </li>
          </Link>
          <Link to="hidden-gems" className="navbar-link">
            <li>
              <h1 className="navbar-link-text">Hidden Gems</h1>
            </li>
          </Link>
        </ul>
      </div>
      <Link to="my-account" className="navbar-link">
        <h1>My Account</h1>
      </Link>
    </div>
  );
};

export default Navbar;

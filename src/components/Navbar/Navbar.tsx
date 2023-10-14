import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import ProfileIcon from "../../assets/svg/ProfileIcon";
import ListIcon from "../../assets/svg/ListIcon";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Link to="/" style={{ textDecoration: "none" }}>
        <h1 className="navbar-title">SoCal Unveiled</h1>
      </Link>
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
      <div className="navbar-right">
        <Link to="my-list" className="navbar-right-link">
          <div className="list-icon-wrapper">
            <ListIcon className="list-icon" />
          </div>
        </Link>
        <Link to="my-account" className="navbar-right-link">
          <div className="profile-icon-wrapper">
            <ProfileIcon />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import ProfileIcon from "../../assets/svg/ProfileIcon";
import ListIcon from "../../assets/svg/ListIcon";
import HamburgerMenu from "../../assets/svg/HamburgerMenu";

const Navbar = () => {
  const [navbarMobileSelected, setNavbarMobileSelected] = useState(false);

  return (
    <div
      className={
        navbarMobileSelected
          ? "navbar-container-mobile-selected"
          : "navbar-container"
      }
    >
      <Link to="/" style={{ textDecoration: "none" }}>
        <h1
          className="navbar-title"
          onClick={
            navbarMobileSelected
              ? () => setNavbarMobileSelected(!navbarMobileSelected)
              : () => {}
          }
        >
          SoCal Unveiled
        </h1>
      </Link>
      <div
        className={
          navbarMobileSelected
            ? "navbar-links-container-mobile-selected"
            : "navbar-links-container"
        }
      >
        <ul>
          <Link to="/" className="navbar-link">
            <li>
              <h1
                className="navbar-link-text"
                onClick={
                  navbarMobileSelected
                    ? () => setNavbarMobileSelected(!navbarMobileSelected)
                    : () => {}
                }
              >
                All
              </h1>
            </li>
          </Link>
          <Link to="sightseeing" className="navbar-link">
            <li>
              <h1
                className="navbar-link-text"
                onClick={
                  navbarMobileSelected
                    ? () => setNavbarMobileSelected(!navbarMobileSelected)
                    : () => {}
                }
              >
                Sightseeing
              </h1>
            </li>
          </Link>
          <Link to="nature" className="navbar-link">
            <li>
              <h1
                className="navbar-link-text"
                onClick={
                  navbarMobileSelected
                    ? () => setNavbarMobileSelected(!navbarMobileSelected)
                    : () => {}
                }
              >
                Nature
              </h1>
            </li>
          </Link>
          <Link to="typical-tourist" className="navbar-link">
            <li>
              <h1
                className="navbar-link-text"
                onClick={
                  navbarMobileSelected
                    ? () => setNavbarMobileSelected(!navbarMobileSelected)
                    : () => {}
                }
              >
                Typical Tourist
              </h1>
            </li>
          </Link>
          <Link to="hidden-gems" className="navbar-link">
            <li>
              <h1
                className="navbar-link-text"
                onClick={
                  navbarMobileSelected
                    ? () => setNavbarMobileSelected(!navbarMobileSelected)
                    : () => {}
                }
              >
                Hidden Gems
              </h1>
            </li>
          </Link>
        </ul>
      </div>
      <div
        className={
          navbarMobileSelected ? "navbar-right-mobile-selected" : "navbar-right"
        }
      >
        <Link
          to="my-list"
          className="navbar-right-link"
          onClick={
            navbarMobileSelected
              ? () => setNavbarMobileSelected(!navbarMobileSelected)
              : () => {}
          }
        >
          <div className="list-icon-wrapper">
            <ListIcon className="list-icon" />
            {navbarMobileSelected && <h1>My List</h1>}
          </div>
        </Link>
      </div>
      <HamburgerMenu
        className="navbar-menu"
        onClick={() => setNavbarMobileSelected(!navbarMobileSelected)}
      />
    </div>
  );
};

export default Navbar;

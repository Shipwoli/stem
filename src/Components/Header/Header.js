import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'; // Add this line if you're using a separate CSS file

function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar-logo">
          <NavLink to="/">Stemtrix</NavLink>
        </div>
        <ul className="navbar-links">
          <li>
            <NavLink exact to="/" activeClassName="active-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about-us" activeClassName="active-link">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/classes" activeClassName="active-link">
              Classes
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active-link">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

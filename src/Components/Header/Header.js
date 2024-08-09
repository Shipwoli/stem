import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';  // Custom CSS for additional styling
import logo from './stem.png';  // Import the logo
import { FaSearch } from 'react-icons/fa';  // Import FontAwesome for the search icon
import kenyaFlag from './kenya.png';  // Import Kenya flag image

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="Logo" height="40" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link" activeClassName="active">About Us</NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink to="/services" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Services</NavLink>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><NavLink to="/services/service1" className="dropdown-item">Service 1</NavLink></li>
                <li><NavLink to="/services/service2" className="dropdown-item">Service 2</NavLink></li>
                <li><NavLink to="/services/service3" className="dropdown-item">Service 3</NavLink></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <NavLink to="/products" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Products</NavLink>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><NavLink to="/products/product1" className="dropdown-item">Product 1</NavLink></li>
                <li><NavLink to="/products/product2" className="dropdown-item">Product 2</NavLink></li>
                <li><NavLink to="/products/product3" className="dropdown-item">Product 3</NavLink></li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link" activeClassName="active">Contacts</NavLink>
            </li>
            {/* Search Icon */}
            <li className="nav-item">
              <NavLink to="/search" className="nav-link"><FaSearch /></NavLink>
            </li>
            {/* Flag Selector */}
            <li className="nav-item dropdown">
              <div className="nav-link flag-selector" onClick={toggleDropdown}>
                <img src={kenyaFlag} alt="Kenya Flag" height="25" className="rounded-circle" />
              </div>
              {dropdownOpen && (
                <ul className="dropdown-menu show flag-dropdown">
                  <li className="dropdown-item">Kenya</li>
                  <li className="dropdown-item">International</li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;

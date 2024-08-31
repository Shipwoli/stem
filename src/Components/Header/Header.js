import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import logo from './logo3.png';

const Header = () => {
  const handleNavLinkClick = () => {
    const navBarCollapse = document.querySelector('.navbar-collapse');
    if (navBarCollapse.classList.contains('show')) {
      navBarCollapse.classList.remove('show');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/" style={{ paddingLeft: '10px' }}>
          <img src={logo} alt="Logo" height="100" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink exact to="/" className="nav-link" activeClassName="active" onClick={handleNavLinkClick}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link" activeClassName="active" onClick={handleNavLinkClick}>About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/programs" className="nav-link" activeClassName="active" onClick={handleNavLinkClick}>Programs</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/products" className="nav-link" activeClassName="active" onClick={handleNavLinkClick}>Products</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link" activeClassName="active" onClick={handleNavLinkClick}>Contacts</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;

import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import logo from './logo2.png';

const NAV_LINKS = [
  { to: '/', label: 'Home', exact: true },
  { to: '/service', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/programs', label: 'Programs' },
  { to: '/products', label: 'Products' },
  { to: '/article-world-beater-2026', label: 'Article' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Condense the navbar once the page has scrolled past the hero area
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => {
    const navBarCollapse = document.getElementById('navbarNav');
    if (navBarCollapse && navBarCollapse.classList.contains('show') && window.bootstrap) {
      new window.bootstrap.Collapse(navBarCollapse).hide();
    }
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => setMobileMenuOpen((open) => !open);

  return (
    <nav className={`site-navbar navbar navbar-expand-lg ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container">
        <NavLink className="navbar-brand" to="/" onClick={closeMobileMenu}>
          <img src={logo} alt="Company logo" className="nav-logo" />
        </NavLink>

        <button
          className={`navbar-toggler ${mobileMenuOpen ? 'active' : ''}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation"
          onClick={toggleMobileMenu}
        >
          <span className="toggler-icon top-bar"></span>
          <span className="toggler-icon middle-bar"></span>
          <span className="toggler-icon bottom-bar"></span>
        </button>

        <div className={`collapse navbar-collapse ${mobileMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {NAV_LINKS.map(({ to, label, exact }) => (
              <li className="nav-item" key={to}>
                <NavLink
                  exact={exact}
                  to={to}
                  className="nav-link"
                  activeClassName="active"
                  onClick={closeMobileMenu}
                >
                  {label}
                </NavLink>
              </li>
            ))}
            <li className="nav-item">
              <NavLink
                to="/contact"
                className="nav-link contact-link"
                activeClassName="active"
                onClick={closeMobileMenu}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      {mobileMenuOpen && <div className="nav-backdrop" onClick={closeMobileMenu}></div>}
    </nav>
  );
};

export default Header;
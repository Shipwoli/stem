import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer py-4">
      <Container>
        <Row className="footer-content">
          {/* Company Info Section */}
          <Col lg={4} md={6} className="mb-4 mb-md-0">
            <h5 className="footer-heading">Stemtrix</h5>
            <p className="footer-description">
              Empowering innovation through STEM education and technology solutions.
            </p>
            <p className="copyright">
              © {currentYear} Stemtrix. All rights reserved.
            </p>
          </Col>
          
          {/* Quick Links Section */}
          <Col lg={4} md={6} className="mb-4 mb-md-0">
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="footer-links">
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
          
              <li><a href="/contact">Contact</a></li>
            </ul>
          </Col>
          
          {/* Social Media Section */}
          <Col lg={4} md={12}>
            <h5 className="footer-heading">Connect With Us</h5>
            <div className="social-icons">
              <a 
                href="https://www.instagram.com/stemtrix2/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://web.facebook.com/search/top?q=stemtrix%20ea" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a 
                href="https://www.linkedin.com/in/stemtrix-ea-5ab056204/" 
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a 
                href="https://x.com/stemtrix" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
            </div>
            <div className="contact-info mt-3">
              <p><strong>Email:</strong> <a href="mailto:stemtrix@gmail.com">stemtrix@gmail.com</a></p>
              <p><strong>Phone:</strong> <a href="tel:+254110394940">+254 11 039 4940</a></p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
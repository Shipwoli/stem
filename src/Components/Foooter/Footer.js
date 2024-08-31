import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="footer-left">
            <p>© 2024 Stemtrix. All rights reserved.</p>
          </Col>
          <Col md={6} className="footer-right text-md-right">
            <p className="mb-0">Follow us on:</p>
            <a href="https://www.instagram.com/stemtrix2/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaInstagram />
            </a>
            <a href="https://web.facebook.com/search/top?q=stemtrix%20ea" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaFacebookF />
            </a>
            <a href="https://www.linkedin.com/in/stemtrix-ea-5ab056204/" className="social-icon">
              <FaLinkedinIn />
            </a>
            <a href="https://x.com/stemtrix" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaTwitter />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

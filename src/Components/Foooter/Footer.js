import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-blue text-black py-3">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <p>© 2024 Stemtrix. All rights reserved.</p>
          </Col>
          <Col md={6} className="text-md-right">
            <p className="mb-0">Follow us on:</p>
            <a href="https://www.instagram.com/stemtrix2/" target="_blank" rel="noopener noreferrer" className="ml-2">
              <FaInstagram />
            </a>
            <a href="https://web.facebook.com/search/top?q=stemtrix%20ea" target="_blank" rel="noopener noreferrer" className="ml-2">
              <FaFacebookF />
            </a>
            <a href="https://www.linkedin.com/in/stemtrix-ea-5ab056204?trk=public_post_feed-actor-image&originalSubdomain=ke" target="_blank" rel="noopener noreferrer" className="ml-2">
              <FaLinkedinIn />
            </a>
            <a href="https://x.com/stemtrix" target="_blank" rel="noopener noreferrer" className="ml-2">
              <FaTwitter />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

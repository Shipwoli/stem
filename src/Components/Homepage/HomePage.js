import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero-section">
        <Container className="text-center">
          <h1 className="hero-title" >Empowering Future Innovators</h1>
          <p className="hero-text">
            Learn, Build, and Innovate with Stemtrix Robotics Education
          </p>
          <div className="cta-buttons">
    <Link to="/join-us">
    <Button variant="primary" className="cta-btn">Join our STEM Program</Button>
  </Link>
</div>
        </Container>
      </div>

      {/* Robotics Kits Section */}
      <div className="kits-section">
        <Container className="text-center">
          <h2 className="kits-title">Explore Our Educational Robotics Kits</h2>
          <p className="kits-text">
            Empower young minds with top-quality robotics kits designed for schools and home learning.
          </p>
          <Button variant="outline-dark" className="kits-btn" as={Link} to="/products">
            Educational Robotics Kits
          </Button>
        </Container>
      </div>

{/* News Section */}
<Container className="news-section my-5">
  <h2 className="text-center mb-4">📢 Stemtrix News</h2>
  <Row className="g-4">
    {/* Robofest at Merishaw School */}
    <Col xs={12} md={6} lg={4}>
      <Card className="news-card d-flex flex-column h-100">
        <div className="video-container">
          <iframe className="video-frame" src="https://www.youtube.com/embed/8P7GzmF8Xf0" title="Robofest at Merishaw School" allowFullScreen></iframe>
        </div>
        <Card.Body className="d-flex flex-column">
          <Card.Title>Robofest at Merishaw School</Card.Title>
          <p>Stemtrix EA Ltd, the local partner of Robofest, hosted an exciting championship at Merishaw School, Isinya. Seven schools competed in various robotics challenges, with the top teams earning a spot at the global event in Michigan this May.</p>
        </Card.Body>
      </Card>
    </Col>

    {/* Inspire Robotics Challenge */}
    <Col xs={12} md={6} lg={4}>
      <Card className="news-card d-flex flex-column h-100">
        <div className="video-container">
          <iframe className="video-frame" src="https://www.youtube.com/embed/cfNnN_UxdpQ" title="Riara Springs" allowFullScreen></iframe>
        </div>
        <Card.Body className="d-flex flex-column">
          <Card.Title>Winners of the Inspire Robotics Challenge 2023/2024</Card.Title>
          <p>Riara Springs Girls High School emerged as the champions of the 2023/2024 Inspire Robotics Challenge, showcasing outstanding innovation, teamwork, and problem-solving skills. Their achievement highlights the growing impact of robotics in Kenyan schools, preparing students for a tech-driven future.</p>
        </Card.Body>
      </Card>
    </Col>

    {/* 2023-2024 Robotics Season */}
    <Col xs={12} md={6} lg={4}>
      <Card className="news-card d-flex flex-column h-100">
        <div className="video-container">
          <iframe className="video-frame" src="https://www.youtube.com/embed/RKgyaGQUqsE" title="Robotics Season" allowFullScreen></iframe>
        </div>
        <Card.Body className="d-flex flex-column">
          <Card.Title>2023-2024 Robotics Season</Card.Title>
          <p>Exciting new challenges await in this year's robotics competition.</p>
        </Card.Body>
      </Card>
    </Col>
  </Row>
</Container>


      {/* WhatsApp Button */}
      <div className="whatsapp-button">
      <a
        href="https://wa.me/+254728128353?text=Hello!%20I%20found%20your%20contact%20on%20the%20Stemtrix%20website%20and%20would%20like%20to%20learn%20more%20about%20your%20services."
        className="whatsapp-button"
        target="_blank"
        rel="noopener noreferrer"
      > Chat with Us
        <FaWhatsapp size={50} />
      </a>
      </div>
    </div>
  );
};

export default HomePage;

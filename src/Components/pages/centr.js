import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaRocket, FaLaptopCode, FaTools, FaRobot } from 'react-icons/fa';
import innovationCenterImg from './assets/centre.jpg';
import './centre.css';

const InnovationCentre = () => {
  return (
    <div className="innovation-centre-page">
      {/* Hero Section */}
      <section className="hero-section bg-gradient-primary text-white py-5">
        <Container className="text-center py-4">
          <h1 className="display-4 fw-bold">STEMTRIX <span className="text-accent">INNOVATION CENTRE</span></h1>
          <div className="divider mx-auto my-3"></div>
          <p className="lead fs-4 mb-4">Where Creativity Meets Technology</p>
          <Button variant="light" size="lg" className="px-4 py-2 fw-bold" href="tel:+254728128353">
            Book a Visit Today
          </Button>
        </Container>
      </section>

      {/* Main Content Section */}
      <section className="content-section py-5">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <div className="image-container position-relative">
                <Card.Img 
                  src={innovationCenterImg} 
                  className="img-fluid rounded shadow innovation-img" 
                  alt="Stemtrix Innovation Centre" 
                />
                <div className="image-overlay">
                  <div className="location-badge">
                    <span>Lavington, Nairobi</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="content-box p-4">
                <h2 className="section-title fw-bold mb-4">
                  <span className="text-primary">Explore. Create. Innovate.</span>
                </h2>
                <p className="content-text mb-4">
                  Welcome to our state-of-the-art training center in Lavington, where students of all ages 
                  come together to design models, work on real-life prototypes, and receive expert-guided 
                  robotics and computer-based training.
                </p>
                
                <h3 className="content-subtitle fw-bold mb-3">At the Innovation Centre, you can:</h3>
                
                <div className="features-container mb-4">
                  <div className="feature-item d-flex align-items-start mb-3">
                    <div className="feature-icon text-primary me-3">
                      <FaRobot size={24} />
                    </div>
                    <div className="feature-content">
                      <h5 className="feature-title mb-1">Build Advanced Robots</h5>
                      <p className="feature-description mb-0">
                        Design and build robots using cutting-edge tools and software
                      </p>
                    </div>
                  </div>
                  
                  <div className="feature-item d-flex align-items-start mb-3">
                    <div className="feature-icon text-primary me-3">
                      <FaTools size={24} />
                    </div>
                    <div className="feature-content">
                      <h5 className="feature-title mb-1">Work on Real-Life Projects</h5>
                      <p className="feature-description mb-0">
                        Challenge your creativity and problem-solving skills with practical applications
                      </p>
                    </div>
                  </div>
                  
                  <div className="feature-item d-flex align-items-start mb-3">
                    <div className="feature-icon text-primary me-3">
                      <FaLaptopCode size={24} />
                    </div>
                    <div className="feature-content">
                      <h5 className="feature-title mb-1">Learn Programming</h5>
                      <p className="feature-description mb-0">
                        Master coding basics through interactive, hands-on sessions
                      </p>
                    </div>
                  </div>
                  
                  <div className="feature-item d-flex align-items-start mb-3">
                    <div className="feature-icon text-primary me-3">
                      <FaRocket size={24} />
                    </div>
                    <div className="feature-content">
                      <h5 className="feature-title mb-1">Explore Technological Possibilities</h5>
                      <p className="feature-description mb-0">
                        Discover unlimited potential in technology and engineering
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="summary-box bg-light p-4 rounded mb-4">
                  <p className="summary-text mb-0">
                    <strong>Experience the future of innovation:</strong> Design your robot, program it using 
                    our tablets, issue commands, and watch your creation come to life! The Innovation Centre 
                    welcomes students of all skill levels who are eager to learn and innovate.
                  </p>
                </div>
                
                <div className="action-buttons">
                  <Button variant="primary" size="lg" className="me-3 px-4" href="tel:+254728128353">
                    Contact Us
                  </Button>
                  <Button variant="outline-primary" size="lg" className="px-4" href="mailto:stemtrix@gmail.com">
                    Schedule a Tour
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* Programs Section */}
      <section className="programs-section bg-light py-5">
        <Container>
          <div className="section-header text-center mb-5">
            <h2 className="section-title fw-bold">Our <span className="text-primary">Programs</span></h2>
            <div className="divider mx-auto my-3"></div>
            <p className="section-description">
              Discover our specialized training tracks at the Innovation Centre
            </p>
          </div>
          
          <Row className="g-4">
            <Col md={6} lg={3}>
              <Card className="program-card h-100 border-0 shadow-sm">
                <Card.Body className="text-center p-4">
                  <div className="program-icon mb-3">
                    <span className="icon-circle bg-primary-light text-primary">
                      <FaRobot size={32} />
                    </span>
                  </div>
                  <Card.Title className="fw-bold mb-3">Robotics Basics</Card.Title>
                  <Card.Text>
                    Introduction to robot building, sensors, and simple programming for beginners
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="bg-transparent border-0 pb-4">
                  {/* <Button variant="outline-primary" className="w-100">Learn More</Button> */}
                </Card.Footer>
              </Card>
            </Col>
            
            <Col md={6} lg={3}>
              <Card className="program-card h-100 border-0 shadow-sm">
                <Card.Body className="text-center p-4">
                  <div className="program-icon mb-3">
                    <span className="icon-circle bg-primary-light text-primary">
                      <FaLaptopCode size={32} />
                    </span>
                  </div>
                  <Card.Title className="fw-bold mb-3">Coding Academy</Card.Title>
                  <Card.Text>
                    Learn programming fundamentals through visual and text-based coding languages
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="bg-transparent border-0 pb-4">
                  {/* <Button variant="outline-primary" className="w-100">Learn More</Button> */}
                </Card.Footer>
              </Card>
            </Col>
            
            <Col md={6} lg={3}>
              <Card className="program-card h-100 border-0 shadow-sm">
                <Card.Body className="text-center p-4">
                  <div className="program-icon mb-3">
                    <span className="icon-circle bg-primary-light text-primary">
                      <FaTools size={32} />
                    </span>
                  </div>
                  <Card.Title className="fw-bold mb-3">Engineering Lab</Card.Title>
                  <Card.Text>
                    Hands-on engineering challenges and problem-solving projects
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="bg-transparent border-0 pb-4">
                  {/* <Button variant="outline-primary" className="w-100">Learn More</Button> */}
                </Card.Footer>
              </Card>
            </Col>
            
            <Col md={6} lg={3}>
              <Card className="program-card h-100 border-0 shadow-sm">
                <Card.Body className="text-center p-4">
                  <div className="program-icon mb-3">
                    <span className="icon-circle bg-primary-light text-primary">
                      <FaRocket size={32} />
                    </span>
                  </div>
                  <Card.Title className="fw-bold mb-3">Advanced Innovation</Card.Title>
                  <Card.Text>
                    Design thinking and prototype development for experienced students
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="bg-transparent border-0 pb-4">
                  {/* <Button variant="outline-primary" className="w-100">Learn More</Button> */}
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* CTA Section */}
      <section className="cta-section py-5 bg-primary text-white">
        <Container className="text-center py-4">
          <h2 className="cta-title fw-bold mb-3">Ready to Join Our Innovation Community?</h2>
          <p className="cta-text mb-4">
            Schedule a visit to our Innovation Centre today and embark on an exciting journey of 
            creativity, technology, and innovation.
          </p>
          <div className="cta-buttons">
            <Button variant="light" size="lg" className="me-3 fw-bold" href="tel:+254728128353">
              Call Now: +254 728 128 353
            </Button>
            <Button variant="outline-light" size="lg" href="mailto:stemtrix@gmail.com">
              Email Us
            </Button>
          </div>
        </Container>
      </section>
      
    </div>
  );
};

export default InnovationCentre;
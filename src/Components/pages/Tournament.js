import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import tournamentImg from './assets/tournament2.jpeg';
import robofest from './assets/robofest.png';
import iro from './assets/irlc.png';
import inspire from './assets/inspire.jpeg';
import './RoboticsTournament.css';
import { Link } from 'react-router-dom';

const RoboticsTournament = () => {
  return (
    <div className="robotics-page">
      {/* Modern Hero Section */}
      <div className="hero">
        <Container>
          <div className="hero-content">
            <h1>Robotics Tournament</h1>
            <p>Inspiring Future Innovators Since 2017</p>
            <Link to="/join-us">
            <Button className="primary-btn">Get Involved</Button>
            </Link>
          </div>
        </Container>
      </div>

      {/* About Section */}
      <section className="about-section">
        <Container>
          <div className="section-header">
            <h2>Empowering Students Through Robotics</h2>
          </div>
          <Row className="align-items-center">
            <Col lg={6} className="order-lg-2">
              <div className="about-image">
                <img src={tournamentImg} alt="Students with robots" className="img-fluid" />
              </div>
            </Col>
            <Col lg={6} className="order-lg-1">
              <div className="about-content">
                <p>
                  Since 2017, we have engaged schools in various robotics tournaments, both regional and international. These events
                  bring students and teachers together to share learning experiences through robot design, robot games, and project presentations.
                </p>
                <p>
                  Supported by industry players and experts, these tournaments provide mentorship and real-life experience on the implementation of
                  student-developed solutions. Students aged 6-17 showcase their innovative solutions and share their skills in a fun and collaborative environment.
                </p>
                <div className="stats-row">
                  <div className="stat-item">
                    <div className="stat-number">7+</div>
                    <div className="stat-label">Years</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">5000+</div>
                    <div className="stat-label">Students</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">50+</div>
                    <div className="stat-label">Schools</div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Inspire Challenge Section */}
      <section className="inspire-section">
        <Container>
          <div className="inspire-header">
            <img src={inspire} alt="Inspire Robotics Logo" className="inspire-logo" />
            <h2>Inspire Robotics Challenge</h2>
            <p>A regional robotics competition organized by Stemtrix East Africa</p>
          </div>
          
          <div className="inspire-content">
            <p>
              The Inspire Robotics Challenge is a fun-filled regional competition that brings together students aged 4 to 17 to share, compete, and learn from each other's experiences.
            </p>
            <p>
              Students are challenged to think logically and in teams to develop solutions across three age categories: Explore (6-9 years), Challenge (10-13 years), and Innovators (14-17 years).
            </p>
            
            <h3>Key Pillars</h3>
            <div className="pillars-container">
              <div className="pillar-item">
                <div className="pillar-icon">CV</div>
                <h4>Core Values</h4>
                <p>Fun, respect, discovery, and impact</p>
              </div>
              <div className="pillar-item">
                <div className="pillar-icon">RP</div>
                <h4>Research Problem</h4>
                <p>Prototype development and sharing findings</p>
              </div>
              <div className="pillar-item">
                <div className="pillar-icon">RD</div>
                <h4>Robot Design</h4>
                <p>Designing autonomous robots for challenges</p>
              </div>
              <div className="pillar-item">
                <div className="pillar-icon">PR</div>
                <h4>Presentation</h4>
                <p>Showcasing work with clarity and precision</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* International Events Section */}
      <section className="events-section">
        <Container>
          <div className="section-header">
            <h2>Our International Robotics Events</h2>
          </div>
          
          <Row>
            <Col md={6}>
              <div className="event-card">
                <div className="event-image">
                  <img src={robofest} alt="Robofest" />
                </div>
                <div className="event-content">
                  <h3>Robofest</h3>
                  <p>
                    Hosted by Lawrence Technological University in Southfield, MI, Robofest is a festival of competitions encouraging students to learn STEAM and Computer Science principles through autonomous robot design and programming.
                  </p>
                  <Button className="outline-btn">Learn More</Button>
                </div>
              </div>
            </Col>
            
            <Col md={6}>
              <div className="event-card">
                <div className="event-image">
                  <img src={iro} alt="International Robot Olympiad" />
                </div>
                <div className="event-content">
                  <h3>International Robot Olympiad</h3>
                  <p>
                    An annual international youth robot sports competition, held by various member countries, nurturing potential leaders in future-oriented robot technology.
                  </p>
                  <Button className="outline-btn">Learn More</Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Past Events Section */}
      <section className="past-events-section">
        <Container>
          <div className="section-header">
            <h2>Past Events</h2>
          </div>
          
          <div className="video-grid">
            <div className="video-item">
              <h4>Homabay Edition</h4>
              <p>Theme: Community Upgrade - Hosted at Lasalle School, Homabay</p>
              <div className="video-container">
                <iframe
                  src="https://www.youtube.com/embed/k6wVvh5T-_4"
                  title="Homabay Edition"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            
            <div className="video-item">
              <h4>Masterpiece, Season 2023/2024</h4>
              <p><strong>Theme: Masterpiece:</strong> Teams imagining and innovating new ways to create and communicate art across the globe.</p>
              <div className="video-container">
                <iframe
                  src="https://www.youtube.com/embed/qrz-hAlR5j0"
                  title="Masterpiece 2023/2024"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            
            <div className="video-item">
              <h4>Nairobi Edition</h4>
              <p>Theme: Food - Reviewing food chain processes and solutions</p>
              <div className="video-container">
                <iframe
                  src="https://www.youtube.com/embed/cfNnN_UxdpQ"
                  title="Nairobi Edition"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <Button variant="link" className="gallery-link" href="https://drive.google.com/drive/u/0/shared-with-me" target="_blank">View Gallery</Button>
            </div>
            
            <div className="video-item">
              <h4>Mombasa Edition</h4>
              <p>Theme: Innovation - Hosted in Mombasa</p>
              <div className="video-container">
                <iframe
                  src="https://www.youtube.com/embed/example4"
                  title="Mombasa Edition"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
          
          {/* <div className="text-center mt-5">
            <Button className="primary-btn">View All Events</Button>
          </div> */}
        </Container>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <Container>
          <div className="contact-container">
            <div className="contact-content">
              <h2>Want to Participate?</h2>
              <p>Email us at <a href="mailto:stemtrix@gmail.com">stemtrix@gmail.com</a></p>
              <p>Call: +254728 128 353 / +254753 128 353 / +25411039440</p>
              <Link to="/join-us">
              <Button className="primary-btn">Register Now</Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default RoboticsTournament;
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
import './HomePage.css';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Stemtrix - Empowering Future Innovators in Robotics Education</title>
        <meta
          name="description"
          content="Join Stemtrix to learn, build, and innovate with top-quality robotics kits and educational programs. Empowering young minds through robotics and STEM."
        />
        <meta
          name="keywords"
          content="STEM Education, Robotics Education, Robotics Kits, Future Innovators, Educational Robotics, STEM Program, Robotics Learning, Robotics Classes, Robotics Curriculum, Hands-on Learning, Robotics Competitions, Innovative Learning, Robotics Workshops, Tech Education, Coding for Kids, Robotics Projects, Engineering Education, Maker Movement, Robotics for Schools, Robotics Challenges, Educational Technology, Next-Generation Learning, Robotics Training, STEM Mentoring, Digital Learning, Robotics Innovations, Robot Building, Interactive Robotics, STEAM Education, Creative Robotics, Youth Robotics, Robotics Engineering, Learning Through Robotics, Future Tech, Emerging Technologies, Robotics Solutions" />

    
      </Helmet>

      <main className="home">
        {/* Hero Section */}
        <header className="hero-section">
          <Container className="text-center">
            <h1 className="hero-title">Empowering Future Innovators</h1>
            <p className="hero-text">
              Learn, Build, and Innovate with Stemtrix Robotics Education
            </p>
            <div className="cta-buttons">
              <Link to="/join-us">
                <Button variant="primary" className="cta-btn">
                  Join our STEM Program
                </Button>
              </Link>
            </div>
          </Container>
        </header>

        {/* Robotics Kits Section */}
        <section className="kits-section">
          <Container className="text-center">
            <h2 className="kits-title">Explore Our Educational Robotics Kits</h2>
            <p className="kits-text">
              Empower young minds with top-quality robotics kits designed for both schools and home learning.
            </p>
            <Button variant="outline-dark" className="kits-btn" as={Link} to="/products">
              Educational Robotics Kits
            </Button>
          </Container>
        </section>

        {/* News Section */}
        <section className="news-section my-5">
          <Container>
            <h2 className="text-center mb-4">📢 Stemtrix News</h2>
            <Row className="g-4">
              {/* Robofest at Merishaw School */}
              <Col xs={12} md={6} lg={4}>
                <article className="news-card d-flex flex-column h-100">
                  <div className="video-container">
                    <iframe
                      className="video-frame"
                      src="https://www.youtube.com/embed/8P7GzmF8Xf0"
                      title="Robofest at Merishaw School"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <Card.Body className="d-flex flex-column">
                    <h3 className="card-title">Robofest at Merishaw School</h3>
                    <p>
                      Stemtrix EA Ltd, the local partner of Robofest, hosted an exciting championship at Merishaw School, Isinya.
                      Seven schools competed in various robotics challenges, with top teams earning a spot at the global event in Michigan this May.
                    </p>
                  </Card.Body>
                </article>
              </Col>

              {/* Inspire Robotics Challenge */}
              <Col xs={12} md={6} lg={4}>
                <article className="news-card d-flex flex-column h-100">
                  <div className="video-container">
                    <iframe
                      className="video-frame"
                      src="https://www.youtube.com/embed/cfNnN_UxdpQ"
                      title="Winners of the Inspire Robotics Challenge 2023/2024"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <Card.Body className="d-flex flex-column">
                    <h3 className="card-title">Winners of the Inspire Robotics Challenge 2023/2024</h3>
                    <p>
                      Riara Springs Girls High School emerged as champions of the 2023/2024 Inspire Robotics Challenge, showcasing outstanding innovation, teamwork, and problem-solving skills.
                    </p>
                  </Card.Body>
                </article>
              </Col>

              {/* 2023-2024 Robotics Season */}
              <Col xs={12} md={6} lg={4}>
                <article className="news-card d-flex flex-column h-100">
                  <div className="video-container">
                    <iframe
                      className="video-frame"
                      src="https://www.youtube.com/embed/RKgyaGQUqsE"
                      title="2023-2024 Robotics Season"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <Card.Body className="d-flex flex-column">
                    <h3 className="card-title">2023-2024 Robotics Season</h3>
                    <p>Exciting new challenges await in this year's robotics competition.</p>
                  </Card.Body>
                </article>
              </Col>
            </Row>
          </Container>
        </section>

        {/* WhatsApp Button */}
        <div className="whatsapp-button">
          <a
            href="https://wa.me/+254728128353?text=Hello!%20I%20found%20your%20contact%20on%20the%20Stemtrix%20website%20and%20would%20like%20to%20learn%20more%20about%20your%20services."
            className="whatsapp-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={50} aria-label="Contact us on WhatsApp" />
          </a>
        </div>
      </main>
    </>
  );
};

export default HomePage;

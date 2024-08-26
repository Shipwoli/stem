import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import tournamemt from './assets/tournament.jpeg';
import './HomePage.css';
import ins from './assets/ins.jpg';
import spike from './assets/spike.jpg';
import wedo from './assets/wedo.jpg';
import ev from './assets/ev.jpg';
import inov from './assets/ino.jpg';
import lab from './assets/lab.jpg';

const HomePage = () => {
  return (
    <div className="home">
      {/* Welcome Section */}
      <div className="welcome-section">
        <Container className="text-center text-white">
          <h1>Welcome to Stemtrix</h1>
          <p>Empowering the next generation through robotics and innovation.</p>
        </Container>
      </div>

      {/* Services Section */}
      <Container className="services-section">
        <h2 className="text-center my-4">Our Services</h2>
        <Row className="align-items-center my-5">
          <Col xs={12} md={6}>
            <Card.Img src={tournamemt} className="img-fluid" />
          </Col>
          <Col xs={12} md={6}>
            <h3>Robotics Tournaments</h3>
            <p>
              Since 2017, we have engaged schools in different robotics tournaments that bring together
              students and industry players as mentors. Students are challenged to create solutions based on the
              theme given to them by designing a robot, programming and sharing their project with the
              professional judges. This process awakens critical thinking, problem solving, and sharpens students'
              communication and presentation skills, shaping them into leaders.
            </p>
            <Button variant="primary" href="/robotics-tournament">Learn More</Button>
          </Col>
        </Row>
        <Row className="align-items-center my-5">
          <Col xs={12} md={6} className="order-md-2">
            <Card.Img src={ins} className="img-fluid" />
          </Col>
          <Col xs={12} md={6} className="order-md-1">
            <h3>After-School Robotics</h3>
            <p>
              In partnership with schools, we offer robotics training to students
              through interactive software with stories they can relate to. We also
              engage students in projects that introduce them to scientific challenges
              and help them understand the world and environment better.
            </p>
            <Button variant="primary" href="/after-school-robotics">Learn More</Button>
          </Col>
        </Row>
        <Row className="align-items-center my-5">
          <Col xs={12} md={6}>
            <Card.Img src={lab} className="img-fluid" />
          </Col>
          <Col xs={12} md={6}>
            <h3>Mobile Robotics Labs</h3>
            <p>
              Our program brings robotics closer to you, whether in your community,
              home, or school. We ensure students gain hands-on robotics experience,
              share ideas, and celebrate their work, no matter where they are.
            </p>
            <Button variant="primary" href="/mobile-robotic-lab">Learn More</Button>
          </Col>
        </Row>
        <Row className="align-items-center my-5">
          <Col xs={12} md={6} className="order-md-2">
            <Card.Img src={inov} className="img-fluid" />
          </Col>
          <Col xs={12} md={6} className="order-md-1">
            <h3>Innovation Center</h3>
            <p>
              Located in Lavington, our central training center allows students to
              design models, work on real-life prototypes, and engage in tailored
              robotics training and other computer-based programs.
            </p>
            <Button variant="primary" href="/innovation-centre">Learn More</Button>
          </Col>
        </Row>
      </Container>

      {/* Tournament Reviews Section */}
      <div className="tournament-reviews-section">
        <Container>
          <h2 className="text-center my-4">Stemtrix Tournament Reviews</h2>
          <Row className="my-4">
            <Col xs={12} md={4} className="mb-4">
              <div className="video-container">
                <iframe
                  src="https://www.youtube.com/embed/VIDEO_ID_1"
                  title="Tournament Review 1"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </Col>
            <Col xs={12} md={4} className="mb-4">
              <div className="video-container">
                <iframe
                  src="https://www.youtube.com/embed/VIDEO_ID_2"
                  title="Tournament Review 2"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </Col>
            <Col xs={12} md={4} className="mb-4">
              <div className="video-container">
                <iframe
                  src="https://www.youtube.com/embed/VIDEO_ID_3"
                  title="Tournament Review 3"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HomePage;

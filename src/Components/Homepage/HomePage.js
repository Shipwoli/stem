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
    <Col md={6}>
      <Card.Img src={tournamemt} className="img-fluid" />
    </Col>
    <Col md={6}>
      <h3>Robotics Tournaments</h3>
      <p>
      Since 2017, we have engaged schools in different robotics tournaments that brings together
students and industry players as mentors. Students are challenged to create solutions based on the
theme given to them by designing a robot, programming and sharing their project with the
professional judges. This process awakens critical thinking, problem solving, sharpens students
communication and presentational skills shaping them to leaders.
      </p>
      <Button variant="primary" href="/robotics-tournament">Learn More</Button>
    </Col>
  </Row>
  <Row className="align-items-center my-5">
    <Col md={6} className="order-md-2">
      <Card.Img src={ins} className="img-fluid" />
    </Col>
    <Col md={6} className="order-md-1">
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
    <Col md={6}>
    <Card.Img src={lab} className="img-fluid" />
    </Col>
    <Col md={6}>
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
    <Col md={6} className="order-md-2">
      <Card.Img src={inov} className="img-fluid" />
    </Col>
    <Col md={6} className="order-md-1">
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

      {/* Educational Robots Section */}
      <Container className="robots-section text-center my-5">
        <h2>Educational Robots for Every Learner</h2>
        <p>Discover our range of educational robots designed to inspire creativity and learning, including Spike Essential, WeDo 2.0, and many more.</p>
        <Row>
          <Col md={4}>
            <Card className="robot-card">
            <Card.Img variant="top" src={spike} />
              <Card.Body>
                <Card.Title>Spike Essential</Card.Title>
                <Card.Text>Engage young minds with hands-on learning through Spike Essential.</Card.Text>
                <Button variant="primary" href="#/spike-essential">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="robot-card">
            <Card.Img variant="top" src={wedo} />
              <Card.Body>
                <Card.Title>WeDo 2.0</Card.Title>
                <Card.Text>Simple, engaging, and effective learning with WeDo 2.0.</Card.Text>
                <Button variant="primary" href="#/wedo-2-0">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="robot-card">
            <Card.Img variant="top" src={ev} />
              <Card.Body>
                <Card.Title>More Robots</Card.Title>
                <Card.Text>Explore more educational robots that foster innovation.</Card.Text>
                <Button variant="primary" href="#/more-robots">Explore More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

    </div>

  );
};

export default HomePage;

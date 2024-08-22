import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import tournamentImg from './assets/inspire.jpeg'; 
import './RoboticsTournament.css'; 
import robofest from './assets/robofest.png'
import iro from './assets/irlc.png';


const RoboticsTournament = () => {
  return (
    <div className="robotics-tournament-page">
      <Container className="text-center my-5">
        <h1 className="display-4 glow-heading">Robotics Tournament</h1>
        <p className="lead">Inspiring Future Innovators Since 2017</p>
      </Container>

      <Container className="tournament-section my-5">
        <Row className="align-items-center">
          <Col md={6}>
            <Card.Img src={tournamentImg} className="img-fluid tournament-img" />
          </Col>
          <Col md={6}>
            <h3>Empowering Students Through Robotics</h3>
            <p>
              Since 2017, we have engaged schools in various robotics tournaments, both regional and international. These events
              bring students and teachers together to share learning experiences through robot design, robot games, and project presentations.
            </p>
            <p>
              Supported by industry players and experts, these tournaments provide mentorship and real-life experience on the implementation of
              student-developed solutions. Students aged 6-17 showcase their innovative solutions and share their skills in a fun and collaborative environment.
            </p>
          </Col>
        </Row>
      </Container>

      <Container className="international-events-section my-5">
        <h3 className="text-center">Our International Robotics Events</h3>
        <Row className="my-5">
          <Col md={4} className="text-center">
            <h4>Robofest</h4>
            <p>
              Hosted by Lawrence Technological University in Southfield, MI, Robofest is a festival of competitions encouraging students to learn STEAM and Computer Science principles through autonomous robot design and programming.
            </p>
            <Card.Img src={robofest} className="img-fluid tournament-img" />
          </Col>
          <Col md={4} className="text-center">
            <h4>International Robot Olympiad</h4>
            <p>
              An annual international youth robot sports competition, held by various member countries, nurturing potential leaders in future-oriented robot technology.
            </p>
            <Card.Img src={iro} className="img-fluid tournament-img" />
          </Col>
          <Col md={4} className="text-center">
            <h4>First Lego League</h4>
            <p>
              We proudly host the First Lego League in Kenya, where students explore STEM concepts through fun, hands-on learning with Lego Mindstorms technology.
            </p>
            <div className="logo-placeholder">[First Lego League Logo]</div> {/* Add the logo here */}
          </Col>
        </Row>
      </Container>

      <Container className="past-events-section my-5">
        <h3 className="text-center">Past Events</h3>
        <Row className="my-5">
          <Col md={6}>
            <Card className="event-card">
              <Card.Body>
                <Card.Title>Homabay Edition</Card.Title>
                <p>Theme: Community Upgrade - Hosted at Lasalle School, Homabay</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="event-card">
              <Card.Body>
                <Card.Title>Juja Edition</Card.Title>
                <p>Theme: Let's Unite - Showcasing collaboration and shared skills</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="my-5">
          <Col md={6}>
            <Card className="event-card">
              <Card.Body>
                <Card.Title>Nairobi Edition</Card.Title>
                <p>Theme: Food - Reviewing food chain processes and solutions</p>
                <Button variant="link" href="https://drive.google.com/drive/u/0/shared-with-me" target="_blank">View Gallery</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="event-card">
              <Card.Body>
                <Card.Title>Mombasa Edition</Card.Title>
                <p>Theme: Innovation - Hosted in Mombasa</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className="inspire-challenge-section my-5">
        <h3 className="text-center">Inspire Robotics Challenge</h3>
        <p className="lead text-center">A regional robotics competition organized by Stemtrix East Africa</p>
        <Row className="align-items-center">
          <Col md={6}>
            <h4>About Inspire Robotics Challenge</h4>
            <p>
              The Inspire Robotics Challenge brings students together in robot design and coding, research-based projects, core values, problem-solving, and business ideation.
            </p>
            <p>Key Pillars:</p>
            <ul>
              <li><strong>Core Values:</strong> Fun, respect, discovery, and impact</li>
              <li><strong>Research Problem:</strong> Prototype development and sharing findings</li>
              <li><strong>Robot Design and Game:</strong> Designing autonomous robots for challenges</li>
              <li><strong>Presentation:</strong> Showcasing work with clarity and precision</li>
            </ul>
          </Col>
          <Col md={6}>
            <Card.Img src={tournamentImg} className="img-fluid tournament-img" />
          </Col>
        </Row>
      </Container>

      <Container className="contact-section text-center my-5">
        <h4>Want to Participate in Our Robotics Tournaments?</h4>
        <p>Email us at <a href="mailto:stemtrix@gmail.com">stemtrix@gmail.com</a> or call 0728 128 353 / 0753 128 353</p>
      </Container>
    </div>
  );
};

export default RoboticsTournament;

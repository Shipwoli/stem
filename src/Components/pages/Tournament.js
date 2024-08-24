import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import tournamentImg from './assets/tournament2.jpeg'; 
import './RoboticsTournament.css'; 
import robofest from './assets/robofest.png'
import iro from './assets/irlc.png';
import Inspire from './assets/inspire.jpeg'


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
            <h4>International Robot Olympiad Committee</h4>
            <p>
              An annual international youth robot sports competition, held by various member countries, nurturing potential leaders in future-oriented robot technology.
            </p>
            <Card.Img src={iro} className="img-fluid tournament-img" />
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
            Inspire robotics challenge is a fun filled regional robotics competition bringing together
students aged 4 to 17 years to share, compete and learn from each other’s experience.
In 3 main age categories as outlined below, students are challenged to think logically and in
teams, come up with solutions to the challenge presented to them.
-Explore for students aged 6-9 years
-Challenge for students aged 10-13 years
-Innovators for students aged 14-17 years
Focusing on 4 key areas of core values, project research, robot design, game and (business
model for innovators) the program aims at inspiring creativity and fostering long term
friendship through shared learning experience.
            </p>
            <p><b>Key Pillars:</b></p>
            <ul>
              <li><strong>Core Values:</strong> Fun, respect, discovery, and impact</li>
              <li><strong>Research Problem:</strong> Prototype development and sharing findings</li>
              <li><strong>Robot Design and Game:</strong> Designing autonomous robots for challenges</li>
              <li><strong>Presentation:</strong> Showcasing work with clarity and precision</li>
            </ul>
          </Col>
          <Col md={6}>
            <Card.Img src={Inspire} className="img-fluid tournament-img" />
          </Col>
        </Row>
      </Container>

      <Container className="contact-section text-center my-5">
        <h4>Want to Participate in Our Robotics Tournaments?</h4>
        <p>Email us at <a href="mailto:stemtrix@gmail.com">stemtrix@gmail.com</a> or call: +254728 128 353 / +254753 128 353 / +25411039440</p>
      </Container>
    </div>
  );
};

export default RoboticsTournament;

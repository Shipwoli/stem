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


      <Container className="inspire-challenge-section my-5 py-4">
  <Row className="justify-content-center">
    <Col md={2} className="text-center">
      <img src={Inspire} alt="Inspire Robotics Logo" className="inspire-logo mb-3" />
    </Col>
    <Col md={8} className="text-center">
      <h3 className="section-title">Inspire Robotics Challenge</h3>
      <p className="section-subtitle">A regional robotics competition organized by Stemtrix East Africa</p>
    </Col>
  </Row>

  <Row className="align-items-center mt-4">
    <Col md={12}>
      <h4 className="content-title">About Inspire Robotics Challenge</h4>
      <p className="content-description">
        The Inspire Robotics Challenge is a fun-filled regional competition that brings together students aged 4 to 17 to share, compete, and learn from each other's experiences.
      </p>
      <p className="content-description">
        Students are challenged to think logically and in teams to develop solutions across three age categories: Explore (6-9 years), Challenge (10-13 years), and Innovators (14-17 years).
      </p>
      <p className="content-description">
        The program focuses on four key areas: core values, project research, robot design, and presentation, fostering creativity and long-term friendships through shared learning.
      </p>
      <p className="key-pillars-title"><strong>Key Pillars:</strong></p>
      <ul className="key-pillars-list">
        <li><strong>Core Values:</strong> Fun, respect, discovery, and impact</li>
        <li><strong>Research Problem:</strong> Prototype development and sharing findings</li>
        <li><strong>Robot Design and Game:</strong> Designing autonomous robots for challenges</li>
        <li><strong>Presentation:</strong> Showcasing work with clarity and precision</li>
      </ul>
    </Col>
  </Row>
</Container>

      <Container className="international-events-section my-5">
  <h3 className="text-center section-title">Our International Robotics Events</h3>
  <Row className="my-5">
    <Col md={6} className="text-center event-col">
      <h4 className="event-title">Robofest</h4>
      <p className="event-description">
        Hosted by Lawrence Technological University in Southfield, MI, Robofest is a festival of competitions encouraging students to learn STEAM and Computer Science principles through autonomous robot design and programming.
      </p>
      <Card.Img src={robofest} className="img-fluid tournament-img event-img" />
    </Col>
    <Col md={6} className="text-center event-col">
      <h4 className="event-title">International Robot Olympiad Committee</h4>
      <p className="event-description">
        An annual international youth robot sports competition, held by various member countries, nurturing potential leaders in future-oriented robot technology.
      </p>
      <Card.Img src={iro} className="img-fluid tournament-img event-img" />
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
          <div className="video-responsive">
            <iframe
              src="https://www.youtube.com/embed/k6wVvh5T-_4"
              title="Homabay Edition"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </Card.Body>
      </Card>
    </Col>
    
    <Col md={6}>
      <Card className="event-card">
        <Card.Body>
          <Card.Title>First Lego League, Season 2023/2024 </Card.Title>
          <p><b>Theme: Masterpiece:</b> Teams imagining and innovating new ways to create and communicate art across the globe. Using their imagination to re-think the world of arts!</p>
          <div className="video-responsive">
          <iframe
  src="https://www.youtube.com/embed/qrz-hAlR5j0"
  title="Fist Lego League, Tournament 2024"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
></iframe>


          </div>
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
          <div className="video-responsive">
          <iframe
  src="https://www.youtube.com/embed/cfNnN_UxdpQ"
  title="Nairobi Edition"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
></iframe>

          </div>
          <Button variant="link" href="https://drive.google.com/drive/u/0/shared-with-me" target="_blank">View Gallery</Button>
        </Card.Body>
      </Card>
    </Col>

    <Col md={6}>
      <Card className="event-card">
        <Card.Body>
          <Card.Title>Mombasa Edition</Card.Title>
          <p>Theme: Innovation - Hosted in Mombasa</p>
          <div className="video-responsive">
            <iframe
              src="https://www.youtube.com/embed/example4"
              title="Mombasa Edition"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </Card.Body>
      </Card>
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

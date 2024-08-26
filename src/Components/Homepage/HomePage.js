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
              Since 2017, we have engaged schools in different robotics tournaments that bring together
              students and industry players as mentors. Students are challenged to create solutions based on the
              theme given to them by designing a robot, programming, and sharing their project with professional judges.
              This process awakens critical thinking, problem-solving, and sharpens students' communication and presentational skills shaping them into leaders.
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

      {/* News Section */}
<Container className="news-section my-5">
  <h2 className="text-center mb-4">Stemtrix News</h2>
  <Row className="mb-5">
    <Col md={6}>
      <Card className="news-card">
      <iframe
  src="https://www.youtube.com/embed/cfNnN_UxdpQ"
  title="Riara Springs Girls High School"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
  className="video-frame"
></iframe>

        <Card.Body>
          <Card.Title>Riara Springs Girls High School Win</Card.Title>
          <p>
            Riara Springs Girls High School are the winners of the Stemtrix Robotics Competition Nairobi Edition. The competition attracted 19 schools, with 'Nanobytes' emerging victorious.
          </p>
        </Card.Body>
      </Card>
    </Col>
    <Col md={6}>
      <Card className="news-card">
      <iframe
  src="https://www.youtube.com/embed/RKgyaGQUqsE"
  title="2023-2024 Robotics Season"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
  className="video-frame"
></iframe>

        <Card.Body>
          <Card.Title>2023-2024 Robotics Season Kicks Off</Card.Title>
          <p>
            The 2023-2024 Robotics Season has kicked off. Students have the opportunity to test their creativity in both the regional competition and the 'Masterpiece' First Lego League Challenge.
          </p>
        </Card.Body>
      </Card>
    </Col>
  </Row>
  <Row>
    <Col md={6}>
      <Card className="news-card">
      <iframe
  src="https://www.youtube.com/embed/wuryEJJwduc"
  title="Green Garden Girls High School"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
  className="video-frame"
></iframe>

        <Card.Body>
          <Card.Title>Green Garden Girls High School Representing Kenya</Card.Title>
          <p>
            Ten girls from Green Garden Girls High School in Kiambu will represent Kenya and East Africa in the World's First Robotics Education Competition in Houston, Texas.
          </p>
        </Card.Body>
      </Card>
    </Col>
  </Row>
</Container>


     
    </div>
  );
};

export default HomePage;

import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import first from'./assets/first.png';
import './HomePage.css';
import ins from './assets/ins.jpg';
import video from './assets/video.mp4';

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
        <h2 className="text-center my-4">Our Pillars</h2>
        <Row>
          <Col md={3}>
            <Card className="service-card" onClick={() => window.location.href = '#/robotics-tournaments'}>
            <Card.Img variant="top" src={first} />
              <Card.Body>
                <Card.Title>Robotics Tournaments</Card.Title>
                <Card.Text>
                  Engaging students in competitive robotics to inspire learning.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="service-card" onClick={() => window.location.href = '#/in-school-robotics'}>
              {/* <Card.Img variant="top" src="https://via.placeholder.com/150" /> */}
              <Card.Img variant="top" src={ins} />
              <Card.Body>
                <Card.Title>In School Robotics</Card.Title>
                <Card.Text>
                  Bringing robotics education directly into schools.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="service-card" onClick={() => window.location.href = '#/mobile-robotics-labs'}>
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>Mobile Robotics Labs</Card.Title>
                <Card.Text>
                  Mobile labs that make robotics accessible to everyone.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="service-card" onClick={() => window.location.href = '#/innovation-center'}>
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>Innovation Center</Card.Title>
                <Card.Text>
                  A hub for creativity and technological advancements.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Video Section */}
      <Container className="video-section my-5 text-center">
        <h2>Past Robotics Events</h2>
        <video width="80%" controls>
        <video src={video} autoPlay="true" />

          Your browser does not support the video tag.
        </video>
        <div className="my-4">
          <Button variant="primary" href="#/past-events">See More Events</Button>
        </div>
      </Container>

      {/* Educational Robots Section */}
      <Container className="robots-section text-center my-5">
        <h2>Educational Robots for Every Learner</h2>
        <p>Discover our range of educational robots designed to inspire creativity and learning, including Spike Essential, WeDo 2.0, and many more.</p>
        <Row>
          <Col md={4}>
            <Card className="robot-card">
              <Card.Img variant="top" src="https://ibb.co/nkN8qLG/150" />
              <Card.Body>
                <Card.Title>Spike Essential</Card.Title>
                <Card.Text>Engage young minds with hands-on learning through Spike Essential.</Card.Text>
                <Button variant="primary" href="#/spike-essential">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="robot-card">
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>WeDo 2.0</Card.Title>
                <Card.Text>Simple, engaging, and effective learning with WeDo 2.0.</Card.Text>
                <Button variant="primary" href="#/wedo-2-0">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="robot-card">
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
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

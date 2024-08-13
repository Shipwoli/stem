import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './About.css'; // Make sure to style this in your CSS file

const About = () => {
  return (
    <div className="about-page">
      <Container className="text-center my-5">
        <h1 className="display-4">About Stemtrix</h1>
        <p className="lead">Empowering the next generation through creativity and innovation.</p>
      </Container>

      <Container className="vision-section my-5">
        <Row>
          <Col md={12}>
            <Card className="p-4">
              <Card.Body>
                <Card.Title className="text-center mb-4">Vision</Card.Title>
                <Card.Text className="text-center">
                  <strong>Inspire Creativity.</strong>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className="mission-section my-5">
        <Row>
          <Col md={12}>
            <Card className="p-4">
              <Card.Body>
                <Card.Title className="text-center mb-4">Mission</Card.Title>
                <Card.Text>
                  Our mission is to bring out the best in every child and give them the platform to define their future careers with confidence, understanding, and innovation.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className="goal-section my-5">
        <Row>
          <Col md={12}>
            <Card className="p-4">
              <Card.Body>
                <Card.Title className="text-center mb-4">Goal</Card.Title>
                <Card.Text>
                  To train students in robotics through project-based concepts that encourage research, problem-solving, and collaboration.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className="journey-section my-5">
        <Row>
          <Col md={12}>
            <Card className="p-4">
              <Card.Body>
                <Card.Title className="text-center mb-4">Our Journey</Card.Title>
                <Card.Text>
                  <ul>
                    <li>2018 - Green Panthers represented East Africa at the World Festivals in Texas for the FIRST tournament.</li>
                    <li>2019 - Alliance Girls represented Kenya in the World Festival in Texas for the FIRST tournament.</li>
                    <li>2024 January - Team Kenya attends the International Robotics Olympiad Committee in Greece.</li>
                    <li>2024 May - Team Kenya, led by Merishaw School, represents Kenya at the Robofest event in Michigan.</li>
                  </ul>
                  <p>
                    A special thank you to all the tournament host schools: Brookhouse Schools, Oshwal Mombasa, Aga Khan Kisumu, La Salle Homabay, Woodcreek School, International School of Kenya, Children's Garden, and Potterhouse School.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;

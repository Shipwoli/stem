import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import innovationCenterImg from './assets/centre.jpg'; 
import './centre.css'; 

const InnovationCentre = () => {
  return (
    <div className="innovation-centre-page">
      <Container className="text-center my-5">
        <h1 className="display-4 glow-heading">Stemtrix Innovation Centre</h1>
        <p className="lead">Where Creativity Meets Technology</p>
      </Container>

      <Container className="innovation-section my-5">
        <Row className="align-items-center">
          <Col md={6}>
            <Card.Img src={innovationCenterImg} className="img-fluid innovation-img" />
          </Col>
          <Col md={6}>
            <h3>Explore, Create, Innovate</h3>
            <p>Welcome to our central training center in Lavington, where students of all ages come together to design models, work on real-life prototypes, and receive tailored robotics and computer-based training.</p>
            <p>At the Innovation Centre, you can:</p>
            <ul>
              <li>Design and build robots using interactive tools and software.</li>
              <li>Work on real-life projects that challenge your creativity and problem-solving skills.</li>
              <li>Explore a world of possibilities in technology and engineering.</li>
            </ul>
            <p>Come design, use a tablet, issue commands, and watch your robot come to life! The Innovation Centre is open to all students who are eager to learn and innovate.</p>
            <Button variant="primary" href="tel:+254728128353">Contact Us to Learn More</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default InnovationCentre;

import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import tournamemt from './assets/tournament.jpeg';
import ins from './assets/ins.jpg';
import inov from './assets/ino.jpg';
import lab from './assets/lab.jpg';
import "./Service.css"; // Custom styles

const Services = () => {
  return (
    <Container className="services-section">
      <Row className="align-items-center my-5 service-block">
        <Col md={6}>
          <Card.Img src={tournamemt} className="img-fluid rounded" />
        </Col>
        <Col md={6}>
          <h3>Robotics Tournaments</h3>
          <p>
            Since 2017, we have engaged schools in different robotics tournaments that bring together
            students and industry players as mentors. Students are challenged to create solutions based on the
            theme given to them by designing a robot, programming, and sharing their project with professional judges.
          </p>
          <Link to="/robotics-tournament">
            <Button variant="primary">Learn More</Button>
          </Link>
        </Col>
      </Row>

      <Row className="align-items-center my-5 service-block">
        <Col md={6} className="order-md-2">
          <Card.Img src={ins} className="img-fluid rounded" />
        </Col>
        <Col md={6} className="order-md-1">
          <h3>After-School Robotics</h3>
          <p>
            In partnership with schools, we offer robotics training to students through interactive software.
            We also engage students in projects that introduce them to scientific challenges and help them
            understand the world and environment better.
          </p>
          <Link to="/after-school-robotics">
            <Button variant="primary">Learn More</Button>
          </Link>
        </Col>
      </Row>

      <Row className="align-items-center my-5 service-block">
        <Col md={6}>
          <Card.Img src={lab} className="img-fluid rounded" />
        </Col>
        <Col md={6}>
          <h3>Mobile Robotics Labs</h3>
          <p>
            Our program brings robotics closer to you, whether in your community, home, or school.
            We ensure students gain hands-on robotics experience, share ideas, and celebrate their work, no matter where they are.
          </p>
          <Link to="/mobile-robotic-lab">
            <Button variant="primary">Learn More</Button>
          </Link>
        </Col>
      </Row>

      <Row className="align-items-center my-5 service-block">
        <Col md={6} className="order-md-2">
          <Card.Img src={inov} className="img-fluid rounded" />
        </Col>
        <Col md={6} className="order-md-1">
          <h3>Innovation Center</h3>
          <p>
            Located in Lavington, our central training center allows students to design models, work on real-life prototypes,
            and engage in tailored robotics training and other computer-based programs.
          </p>
          <Link to="/innovation-centre">
            <Button variant="primary">Learn More</Button>
          </Link>
        </Col>
      </Row>
    </Container>

    
  );
};

export default Services;

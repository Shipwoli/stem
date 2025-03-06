import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import tournamemt from "./assets/tournament.jpeg";
import ins from "./assets/kids.jpg";
import inov from "./assets/stem.jpg";
import lab from "./assets/lab.jpg";
import "./Service.css"; // Custom styles

const Services = () => {
  return (
    <>
      <Helmet>
        <title>
          Stemtrix Services - Robotics Tournaments, Robotics Training, Supply of the robotics equipment
        </title>
        <meta
          name="description"
          content="Discover Stemtrix's range of robotics services including local and international tournaments, robotics training, mobile robotics labs, and an innovation center that empowers future innovators."
        />
        <meta
          name="keywords"
          content="Stemtrix, Robotics Tournaments, Robotics Training, Mobile Robotics Labs, Innovation Center, Robotics Education, STEM, Future Innovators, Robotics Services"
        />
      </Helmet>

      <Container className="services-section">
        <Row className="align-items-center my-5 service-block">
          <Col md={6}>
            <Card.Img
              src={tournamemt}
              alt="Local and International Robotics Tournaments"
              className="img-fluid rounded"
            />
          </Col>
          <Col md={6}>
            <h3>Local and International Robotics Tournaments</h3>
            <p>
              Since 2017, we have engaged schools in various robotics tournaments that bring together
              students and industry mentors. Students are challenged to design, program, and present robots based on provided themes.
            </p>
            <Link to="/robotics-tournament">
              <Button variant="primary" aria-label="Learn more about Robotics Tournaments">
                Learn More
              </Button>
            </Link>
          </Col>
        </Row>

        <Row className="align-items-center my-5 service-block">
          <Col md={6} className="order-md-2">
            <Card.Img
              src={ins}
              alt="Robotics Training for Students"
              className="img-fluid rounded"
            />
          </Col>
          <Col md={6} className="order-md-1">
            <h3>Robotics Training</h3>
            <p>
              In partnership with schools, we offer robotics training using interactive software.
              Our programs engage students in projects that challenge them to explore scientific concepts and understand the world better.
            </p>
            <Link to="/after-school-robotics">
              <Button variant="primary" aria-label="Learn more about Robotics Training">
                Learn More
              </Button>
            </Link>
          </Col>
        </Row>

        <Row className="align-items-center my-5 service-block">
          <Col md={6}>
            <Card.Img
              src={lab}
              alt="Mobile Robotics Labs in Action"
              className="img-fluid rounded"
            />
          </Col>
          <Col md={6}>
            <h3>Mobile Robotics Labs</h3>
            <p>
              Our mobile robotics labs bring hands-on robotics experiences directly to communities, homes, and schools.
              This innovative approach ensures every student can explore robotics, collaborate on projects, and showcase their work.
            </p>
            <Link to="/mobile-robotic-lab">
              <Button variant="primary" aria-label="Learn more about Mobile Robotics Labs">
                Learn More
              </Button>
            </Link>
          </Col>
        </Row>

        <Row className="align-items-center my-5 service-block">
          <Col md={6} className="order-md-2">
            <Card.Img
              src={inov}
              alt="Innovation Center for Robotics"
              className="img-fluid rounded"
            />
          </Col>
          <Col md={6} className="order-md-1">
            <h3>Innovation Center</h3>
            <p>
              Located in Lavington, our innovation center is the hub of our training programs.
              Here, students design prototypes, work on real-life projects, and receive tailored robotics training alongside computer-based courses.
            </p>
            <Link to="/innovation-centre">
              <Button variant="primary" aria-label="Learn more about our Innovation Center">
                Learn More
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Services;

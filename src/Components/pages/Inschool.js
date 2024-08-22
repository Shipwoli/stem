import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import roboticsImg from './assets/afterschool.jpg';
import './Inschool.css';

const AfterSchoolRobotics = () => {
  return (
    <div className="afterschool-robotics-page">
      <Container className="text-center my-5">
        <h1 className="display-4 glow-heading">After-School Robotics</h1>
        <p className="lead">Empowering young minds through hands-on robotics training, project-based learning, and critical thinking.</p>
      </Container>

      <Container className="robotics-section my-5">
        <Row className="align-items-center">
          <Col md={6}>
            <img src={roboticsImg} alt="Robotics Training" className="img-fluid rounded shadow" />
          </Col>
          <Col md={6}>
            <p>
              In partnership with schools, we offer engaging and interactive robotics training for students from kindergarten to high school. 
              Our curriculum introduces scientific challenges through stories, pictures, and videos, helping students connect with and better understand our world.
            </p>
            <p>
              Through project-based expos and challenges, learners explore new possibilities, share ideas, and expand their knowledge. 
              Our programs foster skills in computational thinking, problem-solving, and evidence-based discussions.
            </p>
            <Button variant="primary" href="mailto:stemtrix@gmail.com">Want this in your school? Write to us</Button>
          </Col>
        </Row>

        <Row className="my-5">
          <Col>
            <h3>Skills Students Will Learn</h3>
            <ul>
              <li>Evidence-based discussions and computational thinking</li>
              <li>Problem-solving and model development</li>
              <li>Effective communication and critical thinking</li>
              <li>Robotics parts and functionality (motors & sensors)</li>
              <li>Introduction to machine concepts, designs, and coding</li>
              <li>Flow blocks, motor blocks, sensor blocks, and more</li>
            </ul>
          </Col>
        </Row>

        <Row className="my-5">
          <Col>
            <h3>Training Overview</h3>
            <ul>
              <li>Robot parts and functionality (motors & sensors)</li>
              <li>Introduction to machine concepts, designs, and coding</li>
              <li>Independent robot design and code creation by kids</li>
              <li>Core areas include flow blocks, motor blocks, sensor blocks, and more</li>
            </ul>
          </Col>
        </Row>

        <Row className="text-center my-5">
          <Col>
            <h3>Join Us in Inspiring the Next Generation of Innovators</h3>
            <p>Let’s work together to bring the future of robotics and technology to your students. Contact us to learn more about how to bring our after-school robotics program to your school.</p>
            <Button variant="success" href="tel:+254790844918">Contact Us</Button>

          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AfterSchoolRobotics;

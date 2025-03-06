import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import legoRoboticsImg from './assets/ev.jpeg';
import legoJuniorImg from './assets/wedo3.jpeg';
import designEngineeringImg from './assets/design.jpeg';
import legoMakersImg from './assets/makers.jpg';
import scratchImg from './assets/scratch.jpeg';
import arduinoImg from './assets/Arduino.jpeg';
import pythonImg from './assets/python.jpeg';
import './Program.css'; // Ensure to style this CSS file

const Programs = () => {
  return (
    <main className="programs-page">
      <Helmet>
        <title>Our Programs - Stemtrix Robotics & STEM Education Programs</title>
        <meta
          name="description"
          content="Discover Stemtrix's diverse range of robotics and STEM programs designed to empower the next generation of innovators. Explore our Lego Robotics, Lego Robotics Junior, Design Engineering, Lego Makers, Scratch, Arduino, and Python programs."
        />
        <meta
          name="keywords"
          content="Stemtrix, Robotics Programs, STEM Education, Lego Robotics, Lego Robotics Junior, Design Engineering, Lego Makers, Scratch Program, Arduino, Python, Coding for Kids, Hands-on Learning, Robotics Education, STEAM, Innovative Learning"
        />
      </Helmet>

      <Container className="text-center my-5">
        <header>
          <h1 className="display-4 glow-heading">Our Programs</h1>
          <p className="lead">
            Empowering the next generation through hands-on learning in robotics and programming.
          </p>
        </header>
      </Container>

      <section className="programs-section my-5">
        <Container>
          <Row className="g-4">
            <Col md={6}>
              <Card className="h-100">
                <div className="card-img-wrapper">
                  <Card.Img
                    src={legoRoboticsImg}
                    alt="Lego Robotics using EV3 Mindstorms"
                    className="program-img"
                  />
                </div>
                <Card.Body>
                  <h3>Lego Robotics</h3>
                  <p>
                    <strong>Products Used:</strong> EV3 Mindstorms
                  </p>
                  <p>
                    <strong>Age Group:</strong> 10-16 years
                  </p>
                  <p>
                    <strong>Description:</strong> Students engage in robot design, coding, and participate in robotics tournaments that challenge their creativity and problem-solving skills.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6}>
              <Card className="h-100">
                <div className="card-img-wrapper">
                  <Card.Img
                    src={legoJuniorImg}
                    alt="Lego Robotics Junior using WeDo 2.0 and Power Machine"
                    className="program-img"
                  />
                </div>
                <Card.Body>
                  <h3>Lego Robotics Junior</h3>
                  <p>
                    <strong>Products Used:</strong> WeDo 2.0, Power Machine
                  </p>
                  <p>
                    <strong>Age Group:</strong> 6-9 years
                  </p>
                  <p>
                    <strong>Description:</strong>
                  </p>
                  <ul>
                    <li>Simple robot designs</li>
                    <li>Simple Machines</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="g-4 mt-4">
            <Col md={6}>
              <Card className="h-100">
                <div className="card-img-wrapper">
                  <Card.Img
                    src={designEngineeringImg}
                    alt="Design Engineering using LEGO Designs"
                    className="program-img"
                  />
                </div>
                <Card.Body>
                  <h3>Design Engineering</h3>
                  <p>
                    <strong>Products Used:</strong> LEGO Designs
                  </p>
                  <p>
                    <strong>Age Group:</strong> 10-16 years
                  </p>
                  <p>
                    <strong>Description:</strong> Architectural designs using Lego and other non-lego materials. Example: Buildings, home planning, factories, airplanes, etc.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6}>
              <Card className="h-100">
                <div className="card-img-wrapper">
                  <Card.Img
                    src={legoMakersImg}
                    alt="Lego Makers program for early creative learning"
                    className="program-img"
                  />
                </div>
                <Card.Body>
                  <h3>Lego Makers</h3>
                  <p>
                    <strong>Products Used:</strong> LEGO Designs
                  </p>
                  <p>
                    <strong>Age Group:</strong> 3-5 years
                  </p>
                  <p>
                    <strong>Description:</strong> Storytelling through design building.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="g-4 mt-4">
            <Col md={6}>
              <Card className="h-100">
                <div className="card-img-wrapper">
                  <Card.Img
                    src={scratchImg}
                    alt="Scratch Program for kids learning coding"
                    className="program-img"
                  />
                </div>
                <Card.Body>
                  <h3>Scratch Program</h3>
                  <p>
                    <strong>Products Used:</strong> Scratch
                  </p>
                  <p>
                    <strong>Age Group:</strong> 6+ years
                  </p>
                  <p>
                    <strong>Description:</strong> Students learn the basics of coding through Scratch, a visual programming language that makes it easy to create games, animations, and interactive stories.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6}>
              <Card className="h-100">
                <div className="card-img-wrapper">
                  <Card.Img
                    src={arduinoImg}
                    alt="Arduino Kit Program for electronics and coding"
                    className="program-img"
                  />
                </div>
                <Card.Body>
                  <h3>Arduino</h3>
                  <p>
                    <strong>Products Used:</strong> Arduino Kit
                  </p>
                  <p>
                    <strong>Age Group:</strong> 13+ years
                  </p>
                  <p>
                    <strong>Description:</strong> Students learn to build and program electronic devices using Arduino, fostering a deep understanding of electronics and coding.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="g-4 mt-4">
            <Col md={6} className="mx-auto">
              <Card className="h-100">
                <div className="card-img-wrapper">
                  <Card.Img
                    src={pythonImg}
                    alt="Python programming course for beginners"
                    className="program-img"
                  />
                </div>
                <Card.Body>
                  <h3>Python</h3>
                  <p>
                    <strong>Products Used:</strong> Python.org
                  </p>
                  <p>
                    <strong>Age Group:</strong> 12+ years
                  </p>
                  <p>
                    <strong>Description:</strong> A beginner-friendly introduction to one of the most popular programming languages, Python. Students learn coding concepts and create real-world projects.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Programs;

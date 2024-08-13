import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import first from'./assets/first.png';
import inspire from './assets/inspire.jpeg';
import './HomePage.css';
import ins from './assets/ins.jpg';
import video from './assets/video.mp4';
import spike from './assets/spike.jpg';
import wedo from './assets/wedo.jpg';
import ev from './assets/ev.jpg';
import inov from './assets/inov.jpg';


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


      {/* Programs Section */}
<Container className="programs-section my-5">
  <h2 className="text-center mb-4">Our Programs</h2>
  <Row>
    <Col md={4}>
      <Card className="program-card">
        <Card.Body>
          <Card.Title>LEGO Robotics</Card.Title>
          <Card.Text>
    Robot Design, Coding, and Robotics tournaments
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col md={4}>
      <Card className="program-card">
        <Card.Body>
          <Card.Title>LEGO Robotics Junior</Card.Title>
          <Card.Text>
            Perfect for younger learners to start their journey in robotics and engineering.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col md={4}>
      <Card className="program-card">
        <Card.Body>
          <Card.Title>Design Engineering</Card.Title>
          <Card.Text>
            Learn the principles of design and engineering through interactive projects.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col md={4}>
      <Card className="program-card">
        <Card.Body>
          <Card.Title>LEGO Makers</Card.Title>
          <Card.Text>
            Creative building sessions that inspire innovation and teamwork.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col md={4}>
      <Card className="program-card">
        <Card.Body>
          <Card.Title>Scratch Programming</Card.Title>
          <Card.Text>
            Learn the basics of coding with Scratch, a fun and visual programming language.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col md={4}>
      <Card className="program-card">
        <Card.Body>
          <Card.Title>Arduino</Card.Title>
          <Card.Text>
            Dive into electronics and coding with Arduino projects.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col md={4}>
      <Card className="program-card">
        <Card.Body>
          <Card.Title>Python</Card.Title>
          <Card.Text>
            Explore the world of programming with Python, a powerful and versatile language.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  </Row>
</Container>

      {/* Services Section */}
      <Container className="services-section">
        <h2 className="text-center my-4">Our Services</h2>
        <Row>
          <Col md={3}>
            <Card className="service-card" onClick={() => window.location.href = '#/robotics-tournaments'}>
            <Card.Img variant="top" src={inspire} />
              <Card.Body>
                <Card.Title>Robotics Tournaments</Card.Title>
                <Card.Text>
                Since 2017, we have engaged schools in different robotics tournaments both regional and
international. These events bring together students and teachers in a shared learning experience
through robot design, robot game and project presentations.
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
                In partnership with schools, we offer robotics training to students through interactive software with stories they can relate with,
pictures and videos that introduce them to the scientific challenge that needs solving to help them connect and understand our
world and environment better. We also engage students in project..
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
                Our program brings robotics closer to you. In your community, home, the rural communities, school,
the marginalized and informal settlement.

Students gain hands-on robotics experience, share ideas and celebrate their work.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="service-card" onClick={() => window.location.href = '#/innovation-center'}>
            <Card.Img variant="top" src={inov} />
              <Card.Body>
                <Card.Title>Innovation Center</Card.Title>
                <Card.Text>
                We have a central training center in Lavington where students design models and work on real life prototypes and tailored
robotics training and other computer based programs.
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
        <source src={video} type="video/mp4" />
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
            <Card.Img variant="top" src={spike} />
              <Card.Body>
                <Card.Title>Spike Essential</Card.Title>
                <Card.Text>Engage young minds with hands-on learning through Spike Essential.</Card.Text>
                <Button variant="primary" href="#/spike-essential">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="robot-card">
            <Card.Img variant="top" src={wedo} />
              <Card.Body>
                <Card.Title>WeDo 2.0</Card.Title>
                <Card.Text>Simple, engaging, and effective learning with WeDo 2.0.</Card.Text>
                <Button variant="primary" href="#/wedo-2-0">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="robot-card">
            <Card.Img variant="top" src={ev} />
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

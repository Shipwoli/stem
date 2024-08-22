import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import communityImg from './assets/centre.jpg'; 
import './MobileRoboticsLab.css'; 

const MobileRoboticsLab = () => {
  return (
    <div className="mobile-robotics-lab-page">
      <Container className="text-center my-5">
        <h1 className="display-4 glow-heading">Mobile Robotics Lab</h1>
        <p className="lead">Bringing Robotics Closer to You</p>
      </Container>

      <Container className="mobile-lab-section my-5">
        <Row className="align-items-center">
          <Col md={6}>
            <Card.Img src={communityImg} className="img-fluid community-img" />
          </Col>
          <Col md={6}>
            <h3>Empowering Communities Through Robotics</h3>
            <p>Our program brings robotics closer to you—whether in your community, home, school, rural areas, marginalized, or informal settlements.</p>
            <p>Students gain hands-on robotics experience, share ideas, and celebrate their achievements together.</p>
            <p>Want to bring robotics to your community? <a href="mailto:stemtrix@gmail.com">Email us</a> today.</p>
            <Button variant="primary" href="mailto:stemtrix@gmail.com">Contact Us</Button>
          </Col>
        </Row>
      </Container>

      <Container className="community-engagements-section my-5">
        <h3 className="text-center">Our Past Community Engagements</h3>
        <Row className="align-items-center my-5">
          <Col md={6}>
            <Card className="community-engagement-card">
              <Card.Body>
                <Card.Title>Homabay County</Card.Title>
                <Button variant="link" href="https://youtube.be/iWUiVs-r0BI" target="_blank">Watch Video</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="community-engagement-card">
              <Card.Body>
                <Card.Title>Children Garden Home, Nairobi</Card.Title>
                <p>In collaboration with 10 schools within Nairobi</p>
                <Button variant="link" href="https://drive.google.com/drive/u/0/folders/1Si9vm0NDARq2hhWTA1SAhpbJT1vaj2-8" target="_blank">View Gallery</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MobileRoboticsLab;

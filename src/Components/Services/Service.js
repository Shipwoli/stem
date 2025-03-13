import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import tournament from "./assets/tournament.jpeg";
import ins from "./assets/school.jpg";
import inov from "./assets/ins.jpeg";
import lab from "./assets/lab.jpg";
import "./Service.css"; // Custom styles

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Stemtrix Services - Robotics Tournaments, Robotics Training, Supply of Robotics Equipment</title>
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
        {[{
          img: tournament,
          title: "Local and International Robotics Tournaments",
          text: "Since 2017, we have engaged schools in various robotics tournaments that bring together students and industry mentors. Students are challenged to design, program, and present robots based on provided themes.",
          link: "/robotics-tournament",
          alt: "Local and International Robotics Tournaments",
          reverse: false
        }, {
          img: ins,
          title: "Robotics Training",
          text: "In partnership with schools, we offer robotics training using interactive software. Our programs engage students in projects that challenge them to explore scientific concepts and understand the world better.",
          link: "/after-school-robotics",
          alt: "Robotics Training for Students",
          reverse: true
        }, {
          img: lab,
          title: "Mobile Robotics Labs",
          text: "Our mobile robotics labs bring hands-on robotics experiences directly to communities, homes, and schools. This innovative approach ensures every student can explore robotics, collaborate on projects, and showcase their work.",
          link: "/mobile-robotic-lab",
          alt: "Mobile Robotics Labs in Action",
          reverse: false
        }, {
          img: inov,
          title: "Innovation Center",
          text: "Located in Lavington, our innovation center is the hub of our training programs. Here, students design prototypes, work on real-life projects, and receive tailored robotics training alongside computer-based courses.",
          link: "/innovation-centre",
          alt: "Innovation Center for Robotics",
          reverse: true
        }].map((service, index) => (
          <Row className={`align-items-center my-5 service-block ${service.reverse ? 'flex-row-reverse' : ''}`} key={index}>
            <Col md={6}>
              <Card.Img src={service.img} alt={service.alt} className="img-fluid rounded" />
            </Col>
            <Col md={6}>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <Link to={service.link}>
                <Button variant="primary" aria-label={`Learn more about ${service.title}`}>Learn More</Button>
              </Link>
            </Col>
          </Row>
        ))}
      </Container>
    </>
  );
};

export default Services;

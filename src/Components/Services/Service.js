import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import tournament from "./assets/tournament.jpeg";
import ins from "./assets/school.jpg";
import inov from "./assets/ins.jpeg";
import lab from "./assets/lab.jpg";
import "./Service.css";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      img: tournament,
      title: "Local & International Robotics Tournaments",
      text: "Since 2017, we have engaged schools in various robotics tournaments that bring together students and industry mentors. Students are challenged to design, program, and present robots based on provided themes.",
      link: "/robotics-tournament",
      alt: "Local and International Robotics Tournaments",
      reverse: false,
      icon: "🏆"
    },
    {
      img: ins,
      title: "Robotics Training",
      text: "In partnership with schools, we offer robotics training using interactive software. Our programs engage students in projects that challenge them to explore scientific concepts and understand the world better.",
      link: "/after-school-robotics",
      alt: "Robotics Training for Students",
      reverse: true,
      icon: "🤖"
    },
    {
      img: lab,
      title: "Mobile Robotics Labs",
      text: "Our mobile robotics labs bring hands-on robotics experiences directly to communities, homes, and schools. This innovative approach ensures every student can explore robotics, collaborate on projects, and showcase their work.",
      link: "/mobile-robotic-lab",
      alt: "Mobile Robotics Labs in Action",
      reverse: false,
      icon: "🚐"
    },
    {
      img: inov,
      title: "Innovation Center",
      text: "Located in Lavington, our innovation center is the hub of our training programs. Here, students design prototypes, work on real-life projects, and receive tailored robotics training alongside computer-based courses.",
      link: "/innovation-centre",
      alt: "Innovation Center for Robotics",
      reverse: true,
      icon: "💡"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Stemtrix Services - Robotics Tournaments, Training & Equipment</title>
        <meta
          name="description"
          content="Discover Stemtrix's range of robotics services including local and international tournaments, robotics training, mobile robotics labs, and an innovation center that empowers future innovators."
        />
        <meta
          name="keywords"
          content="Stemtrix, Robotics Tournaments, Robotics Training, Mobile Robotics Labs, Innovation Center, Robotics Education, STEM, Future Innovators, Robotics Services"
        />
      </Helmet>

      <div className="hero-banner bg-gradient text-center text-white py-5">
        <Container>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            className="display-4 fw-bold"
          >
            Innovative Robotics Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lead"
          >
            Empowering the next generation of innovators through cutting-edge robotics education
          </motion.p>
        </Container>
      </div>

      <Container className="services-section py-5">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Row className={`align-items-center my-5 service-card ${service.reverse ? 'flex-row-reverse' : ''}`}>
              <Col lg={6} className="mb-4 mb-lg-0">
                <div className="service-image-container">
                  <img 
                    src={service.img} 
                    alt={service.alt} 
                    className="img-fluid rounded shadow-lg service-image" 
                  />
                  <div className="service-icon">{service.icon}</div>
                </div>
              </Col>
              <Col lg={6}>
                <div className="service-content p-4">
                  <h2 className="service-title mb-4">{service.title}</h2>
                  <p className="service-description mb-4">{service.text}</p>
                  <Link to={service.link}>
                    <Button 
                      variant="primary" 
                      className="service-button"
                      aria-label={`Learn more about ${service.title}`}
                    >
                      Explore {service.title} <i className="bi bi-arrow-right ms-2"></i>
                    </Button>
                  </Link>
                </div>
              </Col>
            </Row>
          </motion.div>
        ))}
      </Container>
      
      <div className="cta-section text-center">
  <Container>
    {/* Decorative shapes */}
    <div className="shape shape-1"></div>
    <div className="shape shape-2"></div>
    <div className="shape shape-3"></div>
    
    <h2>Ready to start your robotics journey?</h2>
    <p>Contact us today to learn how our services can benefit your school or organization</p>
    <Link to="/contact">
      <Button size="lg" variant="success" className="px-4 py-2">
        Get Started Today
      </Button>
    </Link>
  </Container>
</div>
    </>
  );
};

export default Services;
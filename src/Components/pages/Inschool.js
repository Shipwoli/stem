import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { FaRobot, FaCode, FaUsers, FaLaptopCode, FaLightbulb, FaGraduationCap } from 'react-icons/fa';
import roboticsImg from './assets/afterschool.jpg';
import './Inschool.css';

const AfterSchoolRobotics = () => {
  return (
    <div className="afterschool-page">
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="hero-content">
              <h1 className="hero-title">After-School <span className="highlight">Robotics</span></h1>
              <p className="hero-subtitle">
                Empowering young minds through hands-on robotics training, 
                project-based learning, and critical thinking skills development.
              </p>
              <div className="hero-buttons">
                <Button variant="primary" size="lg" className="main-cta" href="mailto:stemtrix@gmail.com">
                  Get This Program For Your School
                </Button>
                <Button variant="outline-light" size="lg" className="secondary-cta" href="tel:+254728128353">
                  Call Us Now
                </Button>
              </div>
            </Col>
            <Col lg={6} className="hero-image-container">
              <img 
                src={roboticsImg} 
                alt="Students engaged in robotics learning" 
                className="hero-image" 
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Program Overview Section */}
      <section className="overview-section">
        <Container>
          <div className="section-header text-center">
            <h2>Program <span className="highlight">Overview</span></h2>
            <div className="section-divider"></div>
            <p className="section-subheading">An enriching after-school experience that builds future-ready skills</p>
          </div>
          
          <Row className="overview-content">
            <Col md={6} className="overview-text">
              <p className="overview-paragraph">
                In partnership with schools, we offer engaging and interactive robotics training for 
                students from kindergarten to high school. Our curriculum introduces scientific 
                challenges through stories, pictures, and videos, helping students connect with 
                and better understand our world.
              </p>
              <p className="overview-paragraph">
                Through project-based expos and challenges, learners explore new possibilities, 
                share ideas, and expand their knowledge. Our programs foster skills in computational 
                thinking, problem-solving, and evidence-based discussions.
              </p>
              <div className="overview-features">
                <div className="feature">
                  <div className="feature-icon">
                    <FaRobot />
                  </div>
                  <div className="feature-text">
                    <h4>Hands-on Learning</h4>
                    <p>Direct experience with robot building and programming</p>
                  </div>
                </div>
                <div className="feature">
                  <div className="feature-icon">
                    <FaLaptopCode />
                  </div>
                  <div className="feature-text">
                    <h4>Coding Fundamentals</h4>
                    <p>Introduction to programming concepts through visual interfaces</p>
                  </div>
                </div>
                <div className="feature">
                  <div className="feature-icon">
                    <FaUsers />
                  </div>
                  <div className="feature-text">
                    <h4>Team Collaboration</h4>
                    <p>Building teamwork and communication skills</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6} className="overview-video">
              <div className="video-container">
                <img 
                  src="/api/placeholder/600/400" 
                  alt="Inspire Robotics Challenge 2024/2025" 
                  className="img-fluid rounded shadow"
                />
               <a
  href="https://youtu.be/eV7RRlNloZs?si=saMNTpzKW60Fpoh1"
  target="_blank"
  rel="noopener noreferrer"
>
  <div className="video-play-button">
    <span>Watch Video</span>
  </div>
</a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <Container>
          <div className="section-header text-center">
            <h2>Skills Students Will <span className="highlight">Develop</span></h2>
            <div className="section-divider"></div>
            <p className="section-subheading">Preparing students for success in a technology-driven world</p>
          </div>
          
          <Row className="skills-cards">
            <Col lg={4} md={6} className="skill-card-wrapper">
              <Card className="skill-card">
                <div className="skill-icon">
                  <FaLightbulb />
                </div>
                <Card.Body>
                  <Card.Title>Critical Thinking</Card.Title>
                  <Card.Text>
                    Developing evidence-based discussions, analytical reasoning, and problem-solving approaches
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} className="skill-card-wrapper">
              <Card className="skill-card">
                <div className="skill-icon">
                  <FaCode />
                </div>
                <Card.Body>
                  <Card.Title>Computational Thinking</Card.Title>
                  <Card.Text>
                    Learning algorithmic approaches, pattern recognition, and logical sequencing
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} className="skill-card-wrapper">
              <Card className="skill-card">
                <div className="skill-icon">
                  <FaRobot />
                </div>
                <Card.Body>
                  <Card.Title>Robotics Fundamentals</Card.Title>
                  <Card.Text>
                    Understanding motors, sensors, mechanical systems, and robotic functionality
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} className="skill-card-wrapper">
              <Card className="skill-card">
                <div className="skill-icon">
                  <FaLaptopCode />
                </div>
                <Card.Body>
                  <Card.Title>Programming Basics</Card.Title>
                  <Card.Text>
                    Mastering flow blocks, motor blocks, sensor blocks, and coding principles
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} className="skill-card-wrapper">
              <Card className="skill-card">
                <div className="skill-icon">
                  <FaUsers />
                </div>
                <Card.Body>
                  <Card.Title>Communication Skills</Card.Title>
                  <Card.Text>
                    Enhancing collaboration, presentation abilities, and idea-sharing techniques
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} className="skill-card-wrapper">
              <Card className="skill-card">
                <div className="skill-icon">
                  <FaGraduationCap />
                </div>
                <Card.Body>
                  <Card.Title>Design Thinking</Card.Title>
                  <Card.Text>
                    Creating solutions through ideation, prototyping, testing, and iterative improvement
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Training Process */}
      <section className="process-section">
        <Container>
          <div className="section-header text-center">
            <h2>Our Training <span className="highlight">Process</span></h2>
            <div className="section-divider"></div>
            <p className="section-subheading">A structured approach to robotics education</p>
          </div>
          
          <div className="process-timeline">
            <div className="timeline-item">
              <div className="timeline-marker">1</div>
              <div className="timeline-content">
                <h4>Introduction to Robotics</h4>
                <p>Students explore robot parts, functionality, motors, and sensors through engaging demonstrations</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">2</div>
              <div className="timeline-content">
                <h4>Machine Concepts & Design</h4>
                <p>Learning mechanical principles and designing robots to solve specific challenges</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">3</div>
              <div className="timeline-content">
                <h4>Coding Fundamentals</h4>
                <p>Introduction to programming concepts using visual interfaces and block-based coding</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">4</div>
              <div className="timeline-content">
                <h4>Independent Creation</h4>
                <p>Students design and code their own robots with guidance from expert instructors</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">5</div>
              <div className="timeline-content">
                <h4>Projects & Challenges</h4>
                <p>Application of knowledge through themed challenges and collaborative projects</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Testimonials Section
      <section className="testimonials-section">
        <Container>
          <div className="section-header text-center">
            <h2>What Schools <span className="highlight">Say</span></h2>
            <div className="section-divider"></div>
          </div>
          
          <Row className="testimonials-container">
            <Col md={4}>
              <div className="testimonial-card">
                <div className="quote-icon">"</div>
                <p className="testimonial-text">
                  The after-school robotics program has transformed our students' interest in technology. 
                  They're now problem-solving in ways we never expected!
                </p>
                <div className="testimonial-author">
                  <h5>Mary Wanjiku</h5>
                  <p>Principal, Nairobi Academy</p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="testimonial-card">
                <div className="quote-icon">"</div>
                <p className="testimonial-text">
                  Stemtrix's robotics program has been the highlight of our extracurricular offerings. 
                  Parents and students alike love the hands-on approach to learning.
                </p>
                <div className="testimonial-author">
                  <h5>John Odhiambo</h5>
                  <p>Head Teacher, Mombasa International School</p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="testimonial-card">
                <div className="quote-icon">"</div>
                <p className="testimonial-text">
                  We've seen remarkable improvement in our students' computational thinking and teamwork 
                  since implementing Stemtrix's after-school robotics program.
                </p>
                <div className="testimonial-author">
                  <h5>Sarah Kimani</h5>
                  <p>STEM Coordinator, Eldoret Primary</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section> */}

      {/* Call to Action */}
      <section className="cta-section">
        <Container>
          <div className="cta-container text-center">
            <h2>Ready to bring robotics to your school?</h2>
            <p>
              Join hundreds of schools across Kenya in preparing students for the technology-driven future. 
              Our after-school robotics program can be customized to your school's unique needs.
            </p>
            <div className="cta-buttons">
              <Button variant="light" size="lg" className="cta-button" href="mailto:stemtrix@gmail.com">
                Request Information
              </Button>
              <Button variant="outline-light" size="lg" className="cta-button" href="tel:+254728128353">
                Call +254728128353
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default AfterSchoolRobotics;
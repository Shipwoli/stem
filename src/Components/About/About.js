import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './About.css'; // Ensure to style this in your CSS file

const About = () => {
  return (
    <div className="about-page">
      <Container className="text-left my-5">
        <h1 className="display-4 mb-4">About Stemtrix</h1>
        <p className="lead mb-5">Transforming young minds through the power of robotics and creativity.</p>
        <p className="text-muted">
        <p>Stemtrix equips students with skills that help build their confidence, inspire their creativity and problem solving through robotics training, expos and robotics tournaments.</p>
        <p>Since 2017, we have held different themed robotics tournaments bringing together students from different backgrounds in design process, timed robotics challenges, project presentations, while upholding a set core values that encourage fun, discover, inclusion, impact and sharing their new learnt skills.</p>
          
          By partnering with schools, parents, and industry experts, we have inspired thousands of students in the East African region to explore STEM fields and develop solutions to real-world problems. Our interactive, hands-on approach encourages students aged 4 to 17 to explore, design, and test their ideas, fueling their curiosity and transforming their perspectives on the world.
          <p>Working closely with schools, parents, students and professional judges from different fields, thousands of students within the East African community have been inspired to create solutions to the pressing issues within our society.</p>
          <p>Our aim is to inspire interest in Science, Technology, Engineering, Computer Science, Math (STEAM) subjects by introducing students between 4 years and 17 years to problems that need solving through interactive hands-on models that help fuel the sense of wonder, reveal things so profound that help change how they view the world. Robotics helps trigger the how questions that help understand inventions around us and how human life has transformed in ways never imagined before.</p>
          <p>We encourage the students to reflect, design working models and prototypes and test their work through simple codes that are easy to understand and interpret.</p>
          <p>Learning through robotics is not only hands-on, its fun, involving and memorable.</p>
        </p>
      </Container>

      <Container className="vision-section my-5">
        <Row>
          <Col md={12} className="mb-4">
            <Card className="p-4 shadow-lg border-0 rounded">
              <Card.Body>
                <Card.Title className="text-center mb-4">Our Vision</Card.Title>
                <Card.Text>
                  <strong className="d-block mb-3">Inspire the Innovators of Tomorrow</strong>
                  Our vision is to ignite curiosity and creativity in every child, empowering them to become future leaders in technology and innovation. We strive to make STEM education accessible, enjoyable, and impactful, fostering a lifelong passion for learning.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className="mission-section my-5">
        <Row>
          <Col md={12} className="mb-4">
            <Card className="p-4 shadow-lg border-0 rounded">
              <Card.Body>
                <Card.Title className="text-center mb-4">Our Mission</Card.Title>
                <Card.Text>
                  <strong className="d-block mb-3">Empowering Through Education</strong>
                  Our mission is to provide high-quality robotics education that nurtures creativity, problem-solving skills, and critical thinking. We offer a platform where children can confidently explore technology, build innovative projects, and develop skills that will benefit them in their future careers.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className="goal-section my-5">
        <Row>
          <Col md={12} className="mb-4">
            <Card className="p-4 shadow-lg border-0 rounded">
              <Card.Body>
                <Card.Title className="text-center mb-4">Our Goal</Card.Title>
                <Card.Text>
                  <strong className="d-block mb-3">Cultivating Future Technologists</strong>
                  Our goal is to engage students in hands-on robotics and STEM activities that enhance their research, problem-solving, and teamwork skills. Through project-based learning, we prepare students to tackle real-world challenges and excel in a technology-driven world.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className="journey-section my-5">
        <Row>
          <Col md={12} className="mb-4">
            <Card className="p-4 shadow-lg border-0 rounded">
              <Card.Body>
                <Card.Title className="text-center mb-4">Our Journey</Card.Title>
                <Card.Text>
                  <p>
                    Since our inception, Stemtrix has embarked on a journey of growth and success:
                  </p>
                  <ul className="list-unstyled">
                    <li>2018: Green Panthers represented East Africa at the World Festivals in Texas for the FIRST tournament.</li>
                    <li>2019: Alliance Girls represented Kenya at the World Festival in Texas for the FIRST tournament.</li>
                    <li>2024 January: Team Kenya attended the International Robotics Olympiad Committee in Greece.</li>
                    <li>2024 May: Team Kenya, led by Merishaw School, represented Kenya at the Robofest event in Michigan.</li>
                  </ul>
                  <p>
                    We extend our heartfelt gratitude to the host schools: Brookhouse Schools, Oshwal Mombasa, Aga Khan Kisumu, La Salle Homabay, Woodcreek School, International School of Kenya, Children's Garden, and Potterhouse School for their invaluable support and collaboration.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;

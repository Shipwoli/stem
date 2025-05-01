import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const milestones = [
    { year: "2018", event: "Green Panthers represented East Africa at the FIRST Robotics World Festival in Texas, USA." },
    { year: "2019", event: "Alliance Girls showcased Kenya's robotics talent at the FIRST World Festival in Texas." },
    { year: "Jan 2024", event: "Team Kenya participated in the International Robotics Olympiad Committee (IROC) in Greece." },
    { year: "May 2024", event: "Merishaw School led Team Kenya at Robofest in Michigan, USA." },
    { year: "Oct 2024", event: "Hosted the 'Back to Basics' Robotics Tournament at Brookhouse School, Karen. International Schools of Kenya and Children's Garden School emerged victorious." },
    { year: "Jan 2025", event: "Brookhouse School represented Team Kenya at the International Robot Olympiad in Busan, Korea." },
    { year: "Feb 2025", event: "Organized the Robofest Tournament at Merishaw School, qualifying teams to represent Kenya at the Robofest International Robotics Tournament in Michigan, USA." },
  ];

  return (
    <main className="about-page">
      <Helmet>
        <title>About Stemtrix - Empowering Young Minds through Robotics & STEM Education</title>
        <meta
          name="description"
          content="Discover Stemtrix, a pioneer in robotics education and STEM innovation. Learn about our journey, vision, mission, and the partner schools empowering future innovators."
        />
        <meta
          name="keywords"
          content="Stemtrix, About Stemtrix, Robotics Education, STEM, Robotics Training, Innovation, Future Innovators, Educational Robotics, STEM Education, Robotics Tournaments"
        />
      </Helmet>

      {/* Hero Section */}
      <div className="about-hero">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <h1>About Stemtrix</h1>
            <div className="hero-separator"></div>
            <p>Transforming young minds through the power of robotics and creativity</p>
          </motion.div>
        </Container>
        <div className="hero-wave"></div>
      </div>

      {/* Introduction Section */}
      <section className="about-intro-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="intro-content"
              >
                <p>
                  Stemtrix equips students with skills that build confidence, inspire creativity, and enhance problem-solving through robotics training, expos, and tournaments.
                </p>
                <p>
                  Since 2017, we have hosted various themed robotics tournaments, bringing together students from diverse backgrounds to engage in design processes, timed challenges, and project presentations—while upholding core values of <strong>fun, discovery, inclusion, impact, and sharing.</strong>
                </p>
                <p>
                  By partnering with schools, parents, and industry experts, we have inspired thousands of students across East Africa to explore STEM fields and develop solutions to real-world problems. Our hands-on approach encourages students aged 4 to 17 to <strong>design, build, and innovate,</strong> fostering curiosity and a transformative perspective on the world.
                </p>
                <p>
                  Learning through robotics is not only hands-on—it's <strong>fun, engaging, and memorable</strong>.
                </p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Vision, Mission, Goal Section */}
      <section className="values-section">
        <Container>
          <div className="section-header">
            <h2>Our Core Values</h2>
            <div className="section-underline"></div>
          </div>
          
          <Row>
            {[
              {
                title: "Our Vision",
                subtitle: "Inspiring the Innovators of Tomorrow",
                text: "We aim to ignite curiosity and creativity in every child, empowering them to become future leaders in technology and innovation. Our goal is to make STEM education accessible, enjoyable, and impactful, fostering a lifelong passion for learning.",
                color: "#3b82f6"
              },
              {
                title: "Our Mission",
                subtitle: "Empowering Through Education",
                text: "We provide high-quality robotics education that nurtures creativity, problem-solving, and critical thinking. Our platform enables children to confidently explore technology, build innovative projects, and develop skills that will benefit them in their future careers.",
                color: "#8b5cf6"
              },
              {
                title: "Our Goal",
                subtitle: "Cultivating Future Technologists",
                text: "We engage students in hands-on robotics and STEM activities that enhance their research, problem-solving, and teamwork skills. Through project-based learning, we prepare students to tackle real-world challenges and excel in a technology-driven world.",
                color: "#ec4899"
              }
            ].map((item, index) => (
              <Col lg={4} md={6} className="mb-4" key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="value-box" style={{ "--accent-color": item.color }}>
                    <h3>{item.title}</h3>
                    <h4>{item.subtitle}</h4>
                    <p>{item.text}</p>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Journey Section */}
      <section className="journey-section">
        <Container>
          <div className="section-header">
            <h2>Our Journey</h2>
            <div className="section-underline"></div>
            <p className="section-subtitle">
              Since our inception, <strong>Stemtrix</strong> has been at the forefront of robotics education, 
              empowering young minds and propelling Kenyan teams onto the global stage.
            </p>
          </div>

          <div className="journey-timeline">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="timeline-item"
              >
                <div className="timeline-year">{milestone.year}</div>
                <div className="timeline-content">
                  <div className="timeline-dot"></div>
                  <div className="timeline-text">{milestone.event}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="journey-conclusion">
            Through every competition, workshop, and tournament, <strong>Stemtrix</strong> continues to inspire creativity, 
            problem-solving, and global competitiveness in STEM education. We remain committed to equipping young 
            innovators with the skills and confidence to shape the future of robotics.
          </p>
        </Container>
      </section>

      {/* Partners Section */}
      <section className="partners-section">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="partners-card">
              <Card.Body>
                <h2>Our Partner Schools</h2>
                <div className="partners-decoration">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                
                <p className="partners-intro">
                  We sincerely appreciate the unwavering support and collaboration of our esteemed host schools.
                </p>
                
                <div className="schools-grid">
                  {[
                    "Brookhouse Schools",
                    "Oshwal Academy Mombasa",
                    "Aga Khan Kisumu",
                    "La Salle Homa Bay",
                    "Woodcreek School",
                    "International School of Kenya",
                    "Children's Garden",
                    "Merishaw School",
                    "Potterhouse Senior School"
                  ].map((school, index) => (
                    <div className="school-item" key={index}>{school}</div>
                  ))}
                </div>
                
                <p className="partners-outro">
                  Your dedication to fostering STEM education and robotics innovation has been instrumental in 
                  shaping young minds and empowering the next generation of problem-solvers. We look forward to 
                  continued partnerships in inspiring and equipping future innovators.
                </p>
              </Card.Body>
            </Card>
          </motion.div>
        </Container>
      </section>
    </main>
  );
};

export default About;
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import './About.css'; // Ensure to style this in your CSS file

const About = () => {
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

      {/* Introduction Section */}
      <section className="introduction-section">
        <Container className="text-left my-5">
          <header>
            <h1 className="display-4 mb-4 text-center">About Stemtrix</h1>
            <p className="lead text-center mb-5">
              Transforming young minds through the power of robotics and creativity.
            </p>
          </header>
          <article>
            <p className="text-muted">
              Stemtrix equips students with skills that build confidence, inspire creativity, and enhance problem-solving through robotics training, expos, and tournaments.
            </p>
            <p className="text-muted">
              Since 2017, we have hosted various themed robotics tournaments, bringing together students from diverse backgrounds to engage in design processes, timed challenges, and project presentations—while upholding core values of <strong>fun, discovery, inclusion, impact, and sharing.</strong>
            </p>
            <p className="text-muted">
              By partnering with schools, parents, and industry experts, we have inspired thousands of students across East Africa to explore STEM fields and develop solutions to real-world problems. Our hands-on approach encourages students aged 4 to 17 to <strong>design, build, and innovate,</strong> fostering curiosity and a transformative perspective on the world.
            </p>
            <p className="text-muted">
              Learning through robotics is not only hands-on—it’s <strong>fun, engaging, and memorable</strong>.
            </p>
          </article>
        </Container>
      </section>

      {/* Vision, Mission, Goal Sections */}
      {[
        {
          title: "Our Vision",
          subtitle: "Inspiring the Innovators of Tomorrow",
          text: "We aim to ignite curiosity and creativity in every child, empowering them to become future leaders in technology and innovation. Our goal is to make STEM education accessible, enjoyable, and impactful, fostering a lifelong passion for learning.",
        },
        {
          title: "Our Mission",
          subtitle: "Empowering Through Education",
          text: "We provide high-quality robotics education that nurtures creativity, problem-solving, and critical thinking. Our platform enables children to confidently explore technology, build innovative projects, and develop skills that will benefit them in their future careers.",
        },
        {
          title: "Our Goal",
          subtitle: "Cultivating Future Technologists",
          text: "We engage students in hands-on robotics and STEM activities that enhance their research, problem-solving, and teamwork skills. Through project-based learning, we prepare students to tackle real-world challenges and excel in a technology-driven world.",
        },
      ].map((section, index) => (
        <section key={index} className="my-5">
          <Container>
            <Row>
              <Col md={12}>
                <Card className="p-4 shadow-lg border-0 rounded text-center">
                  <Card.Body>
                    <Card.Title className="mb-4">{section.title}</Card.Title>
                    <Card.Text>
                      <strong className="d-block mb-3">{section.subtitle}</strong>
                      {section.text}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      ))}

      {/* Our Journey Section */}
      <section className="our-journey">
        <Container className="my-5">
          <header>
            <h2 className="text-center mb-4">Our Journey: Inspiring the Future Through Robotics</h2>
            <p className="text-center">
              Since our inception, <strong>Stemtrix</strong> has been at the forefront of robotics education, empowering young minds and propelling Kenyan teams onto the global stage. Our journey is marked by dedication, innovation, and a relentless pursuit of excellence.
            </p>
          </header>
          <article>
            <ul className="list-group list-group-flush">
              {[
                { year: "2018", event: "Green Panthers represented East Africa at the FIRST Robotics World Festival in Texas, USA." },
                { year: "2019", event: "Alliance Girls showcased Kenya’s robotics talent at the FIRST World Festival in Texas." },
                { year: "Jan 2024", event: "Team Kenya participated in the International Robotics Olympiad Committee (IROC) in Greece." },
                { year: "May 2024", event: "Merishaw School led Team Kenya at Robofest in Michigan, USA." },
                { year: "Oct 2024", event: "Hosted the 'Back to Basics' Robotics Tournament at Brookhouse School, Karen. International Schools of Kenya and Children’s Garden School emerged victorious." },
                { year: "Jan 2025", event: "Brookhouse School represented Team Kenya at the International Robot Olympiad in Busan, Korea." },
                { year: "Feb 2025", event: "Organized the Robofest Tournament at Merishaw School, qualifying teams to represent Kenya at the Robofest International Robotics Tournament in Michigan, USA." },
              ].map((milestone, index) => (
                <li key={index} className="list-group-item">
                  <strong>✅ {milestone.year}:</strong> {milestone.event}
                </li>
              ))}
            </ul>
          </article>
          <p className="text-center mt-4">
            Through every competition, workshop, and tournament, <strong>Stemtrix</strong> continues to inspire creativity, problem-solving, and global competitiveness in STEM education. We remain committed to equipping young innovators with the skills and confidence to shape the future of robotics.
          </p>
        </Container>
      </section>

      {/* Acknowledgment Section */}
      <section className="acknowledgment-section my-5">
        <Container>
          <Card className="p-4 shadow-lg border-0 rounded">
            <Card.Body>
              <Card.Title className="text-center mb-4">Our Partner Schools</Card.Title>
              <Card.Text className="text-center">
                We sincerely appreciate the unwavering support and collaboration of our esteemed host schools.
                <br />
                <strong>
                  Brookhouse Schools, Oshwal Academy Mombasa, Aga Khan Kisumu, La Salle Homa Bay, Woodcreek School,
                  International School of Kenya, Children's Garden, Potterhouse School, Sabis International School, and Merishaw School.
                </strong>
                <br /><br />
                Your dedication to fostering STEM education and robotics innovation has been instrumental in shaping young minds and empowering the next generation of problem-solvers. We look forward to continued partnerships in inspiring and equipping future innovators.
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </section>
    </main>
  );
};

export default About;

import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Helmet } from "react-helmet-async";
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
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
    { year: "Aug 2025", event: "Students who won at the Inspire Robotics Challenge represented Kenya at RobotChallenge 2025 in Beijing, China." },
    { year: "Mar 2026", event: "Hosted Inspire Robotics Challenge 2026 at St Andrew's School, Turi, under the theme 'Climate' — students planted trees on the school grounds and camped overnight under a tent with a bonfire." },
    { year: "Mar 2026", event: "Held the Inspire Robotics Challenge (IRC) Nairobi edition at Premier Academy." },
    { year: "Aug 2026", event: "Students from partner schools represented Kenya at RobotChallenge 2026 in Beijing, China, under the theme 'Ocean.'" },
  ];

  const values = [
    {
      title: "Our Vision",
      subtitle: "",
      text: "To be Africa's leading innovation ecosystem that develops world-class innovators, engineers, entrepreneurs and leaders from childhood.",
      accent: "red"
    },
    {
      title: "Our Mission",
      subtitle: "",
      text: "To empower young people through robotics, artificial intelligence, coding, engineering, research and entrepreneurship, equipping them with the skills and mindset to solve real-world challenges.",
      accent: "gold"
    },
    {
      title: "Our Goal",
      subtitle: "Cultivating Future Technologists",
      text: "We engage students in hands-on robotics and STEM activities that enhance their research, problem-solving, and teamwork skills. Through project-based learning, we prepare students to tackle real-world challenges and excel in a technology-driven world.",
      accent: "ink"
    }
  ];

  const innovationJourney = [
    {
      stage: "Discover",
      age: "4–6",
      focus: "Explore, play and discover through fun, creative and hands-on STEM activities that spark curiosity."
    },
    {
      stage: "Explore",
      age: "7–9",
      focus: "Build foundational skills in robotics, coding and problem solving through exciting projects."
    },
    {
      stage: "Challenge",
      age: "10–12",
      focus: "Apply STEM concepts to design, build and programme smart solutions to real-world problems."
    },
    {
      stage: "Innovate",
      age: "13–15",
      focus: "Go deeper into AI, robotics, engineering, leadership and entrepreneurship; innovate with purpose."
    },
    {
      stage: "Launch",
      age: "16–18",
      focus: "Advanced innovation, startup incubation, university pathways and global opportunities."
    }
  ];

  const partnerSchools = [
    "Brookhouse Schools",
    "Oshwal Academy Mombasa",
    "Aga Khan Kisumu",
    "La Salle Homa Bay",
    "Woodcreek School",
    "International School of Kenya",
    "Children's Garden",
    "Merishaw School",
    "Potterhouse Senior School",
    "St Andrew's School, Turi",
    "Premier Academy"
  ];

  return (
    <main className="about-page">
      <Helmet>
        <title>About Stemtrix — Robotics, Coding &amp; STEM Education Since 2017</title>
        <meta
          name="description"
          content="Stemtrix has empowered thousands of students across East Africa since 2017 through robotics and coding education, tournaments, and STEM innovation. Learn our story, vision, mission, and partner schools."
        />
        <meta
          name="keywords"
          content="About Stemtrix, Stemtrix history, robotics education Kenya, coding education Kenya, STEM Kenya, robotics tournaments, FIRST Robotics, Robofest, International Robot Olympiad, Stemtrix partner schools"
        />
        {/* NOTE: replace with your real production domain */}
        <link rel="canonical" href="https://www.stemtrix.co.ke/about" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About Stemtrix — Robotics, Coding & STEM Education Since 2017" />
        <meta
          property="og:description"
          content="From local tournaments to international robotics stages — the Stemtrix story, values, and the schools we partner with across East Africa."
        />
        <meta property="og:url" content="https://www.stemtrix.co.ke/about" />
        <meta name="twitter:card" content="summary_large_image" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "Stemtrix",
            foundingDate: "2017",
            url: "https://www.stemtrix.co.ke/about",
            description:
              "Stemtrix provides robotics, coding, and STEM education for learners aged 4-18 across East Africa, including tournaments, after-school training, and school partnerships.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Kabarnet Road, off Ngong Road",
              addressLocality: "Nairobi",
              addressCountry: "KE"
            },
            telephone: "+254728128353",
            email: "stemtrix@gmail.com",
            memberOf: partnerSchools.map((school) => ({
              "@type": "EducationalOrganization",
              name: school
            }))
          })}
        </script>
      </Helmet>

      {/* Hero */}
      <header className="about-hero">
        <div className="about-hero-overlay"></div>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="about-hero-inner"
          >
            <div className="eyebrow justify-content-center">our story</div>
            <h1 className="about-hero-title">About Stemtrix</h1>
            <p className="about-hero-text">
              Transforming young minds through the power of robotics, coding, and creativity.
            </p>
          </motion.div>
        </Container>
      </header>

      {/* Introduction */}
      <section className="about-intro-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={9}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="intro-content"
              >
                <p>
                  Stemtrix equips students with skills that build confidence, inspire creativity, and
                  enhance problem-solving through robotics and coding training, expos, and tournaments.
                </p>
                <p>
                  Since 2017, we have hosted various themed robotics tournaments, bringing together
                  students from diverse backgrounds to engage in design processes, timed challenges,
                  and project presentations — while upholding core values of{' '}
                  <strong>fun, discovery, inclusion, impact, and sharing.</strong>
                </p>
                <p>
                  By partnering with schools, parents, and industry experts, we have inspired
                  thousands of students across East Africa to explore STEM fields and develop
                  solutions to real-world problems. Our hands-on approach encourages students aged 4
                  to 17 to <strong>design, build, and innovate,</strong> fostering curiosity and a
                  transformative perspective on the world.
                </p>
                <p>
                  Learning through robotics and coding isn't only hands-on — it's{' '}
                  <strong>fun, engaging, and memorable</strong>.
                </p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Vision, Mission, Goal */}
      <section className="values-section">
        <Container>
          <div className="section-header">
            <div className="eyebrow justify-content-center">what drives us</div>
            <h2>Our Core Values</h2>
          </div>

          <Row className="g-4">
            {values.map((item, index) => (
              <Col lg={4} md={6} key={item.title}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="h-100"
                >
                  <div className={`value-box accent-${item.accent}`}>
                    <h3>{item.title}</h3>
                    {item.subtitle && <h4>{item.subtitle}</h4>}
                    <p>{item.text}</p>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Educational Philosophy */}
      <section className="philosophy-section">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={5}>
              <div className="eyebrow justify-content-start">how we teach</div>
              <h2>Our Educational Philosophy</h2>
            </Col>
            <Col lg={7}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="philosophy-flow">
                  <span className="philosophy-step">Knowing</span>
                  <FaArrowRight className="philosophy-arrow" />
                  <span className="philosophy-step">Thinking</span>
                  <FaArrowRight className="philosophy-arrow" />
                  <span className="philosophy-step">Doing</span>
                </div>

                <p className="philosophy-text">
                  Stemtrix complements academic learning by giving students opportunities to apply
                  knowledge. Students build, test, observe, ask why, modify designs and test again.
                  The goal is not merely to make a robot work; it is to develop the thinking behind
                  the solution.
                </p>

                <div className="philosophy-formula">
                  <span>Knowledge</span>
                  <span className="plus">+</span>
                  <span>Application</span>
                  <span className="plus">+</span>
                  <span>Reflection</span>
                  <span className="plus">+</span>
                  <span>Innovation</span>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 4-18 Year Innovation Journey */}
      <section className="innovation-journey-section">
        <Container>
          <div className="section-header">
            <div className="eyebrow justify-content-center">how learners grow with us</div>
            <h2>Our 4–18 Year Innovation Journey</h2>
          </div>

          <div className="journey-table-wrap">
            <table className="journey-table">
              <thead>
                <tr>
                  <th>Stage</th>
                  <th>Age</th>
                  <th>Development Focus</th>
                </tr>
              </thead>
              <tbody>
                {innovationJourney.map((row, index) => (
                  <motion.tr
                    key={row.stage}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                  >
                    <td className="journey-stage-cell">{row.stage}</td>
                    <td className="journey-age-cell">{row.age}</td>
                    <td>{row.focus}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* Journey / Timeline */}
      <section className="journey-section">
        <Container>
          <div className="section-header">
            <div className="eyebrow justify-content-center">our journey</div>
            <h2>Milestones Along the Way</h2>
            <p className="section-subtitle">
              Since our inception, <strong>Stemtrix</strong> has been at the forefront of robotics
              and coding education, empowering young minds and propelling Kenyan teams onto the
              global stage.
            </p>
          </div>

          <div className="journey-timeline">
            <div className="timeline-spine"></div>
            {milestones.map((milestone, index) => (
              <motion.div
                key={`${milestone.year}-${index}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
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
            Through every competition, workshop, and tournament, <strong>Stemtrix</strong> continues
            to inspire creativity, problem-solving, and global competitiveness in STEM education. We
            remain committed to equipping young innovators with the skills and confidence to shape
            the future of robotics and coding.
          </p>
        </Container>
      </section>

      {/* Partner Schools */}
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
                <div className="section-header">
                  <div className="eyebrow justify-content-center">our network</div>
                  <h2>Our Partner Schools</h2>
                </div>

                <p className="partners-intro">
                  We sincerely appreciate the unwavering support and collaboration of our esteemed
                  host schools.
                </p>

                <div className="schools-grid">
                  {partnerSchools.map((school) => (
                    <div className="school-item" key={school}>
                      {school}
                    </div>
                  ))}
                </div>

                <p className="partners-outro">
                  Your dedication to fostering STEM education and robotics innovation has been
                  instrumental in shaping young minds and empowering the next generation of
                  problem-solvers. We look forward to continued partnerships in inspiring and
                  equipping future innovators.
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
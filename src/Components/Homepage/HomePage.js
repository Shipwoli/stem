import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  FaWhatsapp,
  FaArrowRight,
  FaRobot,
  FaCode,
  FaBrain,
  FaTrophy,
  FaUmbrellaBeach,
  FaSchool,
  FaTools,
  FaCubes,
  FaMicrochip,
  FaGraduationCap,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaChild,
  FaLaptopCode,
  FaFlask
} from 'react-icons/fa';
import { Helmet } from "react-helmet-async";
import PDFNewsletterPopup from './PDFNewsletterPopup'; // Import the PDF popup component
import './HomePage.css';
import kenia66 from './galleryItems/kenia-66.jpg';
import kenia61 from './galleryItems/ken1.jpg';
import kenia62 from './galleryItems/ken2.jpg';
import kenia63 from './galleryItems/ken3.jpg';
import kenia64 from './galleryItems/ken4.jpg';
import kenia65 from './galleryItems/ken6.jpg';
import kenia67 from './galleryItems/ken7.jpg';


const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Animation on scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: 'David Gideon Kariuki HSC',
      role: 'Merishaw School Principal',
      text: "Robotics and coding together have made creativity easier for our learners — our children are showing the world what they can build."
    },
    {
      id: 2,
      name: 'Sarah Kimani',
      role: 'Parent',
      text: "My daughter went from her first LEGO robot to writing her own programs in Python and C++. Her confidence in STEM has grown tremendously — she's now considering engineering as a career!"
    },
    {
      id: 3,
      name: 'Isaac Arabu',
      role: 'Robotics Coach',
      text: 'The curriculum and materials provided by Stemtrix make teaching robotics, coding, and AI accessible and exciting for both educators and students.'
    }
  ];

  // The learning pathway — the throughline of the whole page:
  // first robot -> first program -> multiple coding languages -> AI
  const pathway = [
    {
      stage: 'stage-1',
      age: 'Ages 4–9',
      title: 'Explore',
      icon: <FaCubes />,
      skills: [
        'LEGO WeDo 2.0',
        'Scratch Programming',
        'Beginner Robotics',
        'Creative STEM Learning'
      ]
    },
    {
      stage: 'stage-2',
      age: 'Ages 10–13',
      title: 'Challenge',
      icon: <FaMicrochip />,
      skills: [
        'Micro:bit & Arduino',
        'LEGO Spike Essential & Prime',
        'Python & HTML/CSS',
        'Electronics',
        'Robotics Challenges',
        'Computational Thinking'
      ]
    },
    {
      stage: 'stage-3',
      age: 'Ages 14–17',
      title: 'Innovators & Engineers',
      icon: <FaBrain />,
      skills: [
        'Advanced Programming (Python, C++ & HTML/CSS)',
        'Arduino Engineering',
        'EV3 Robotics',
        'Artificial Intelligence',
        'Engineering Projects',
        'Competition Preparation'
      ]
    }
  ];

  // Scrolling gallery — replace `src` with real photos, e.g. '/assets/gallery/robotics-build.jpg'.
  // Until real photos are added, `icon` renders as a placeholder so the strip still looks intentional.
  const galleryItems = [
   { id: 'g2', src: kenia66, icon: <FaCode />, caption: 'Scratch Coding Class' },
    { id: 'g2', src: kenia61, icon: <FaCode />, caption: 'Scratch Coding Class' },
    { id: 'g3', src: kenia62, icon: <FaRobot />, caption: 'Robotics Challenge Prep' },
    { id: 'g4', src: kenia63, icon: <FaLaptopCode />, caption: 'Python & C++ Lab' },
    { id: 'g5', src: kenia64, icon: <FaMicrochip />, caption: 'Micro:bit & Arduino' },
    { id: 'g6', src: kenia65, icon: <FaTrophy />, caption: 'Inspire Robotics Challenge' },
    { id: 'g7', src: kenia66, icon: <FaUmbrellaBeach />, caption: 'Holiday STEM Camp' },
    { id: 'g8', src: kenia67, icon: <FaFlask />, caption: 'Electronics Workshop' }
  ];

  const programs = [
    {
      tag: 'Flagship',
      flagship: true,
      icon: <FaRobot />,
      title: 'Robotics Education',
      text: 'From LEGO WeDo 2.0 to EV3, students design, build, and program robots — developing engineering intuition one build at a time.',
      link: '/programs/robotics'
    },
    {
      tag: 'Core',
      flagship: true,
      icon: <FaCode />,
      title: 'Coding Academy',
      text: 'A clear runway from Scratch to real, text-based languages — including Python, C++, and HTML/CSS — as learners move from visual, drag-and-drop logic to writing their own code.',
      link: '/programs/coding'
    },
    {
      icon: <FaBrain />,
      title: 'Artificial Intelligence',
      text: 'Teen learners explore how AI systems are trained and built, applying machine learning concepts to hands-on robotics and coding projects.',
      link: '/programs/artificial-intelligence'
    },
    {
      icon: <FaTrophy />,
      title: 'International Robotics Competitions',
      text: 'Coached teams compete locally and internationally, representing Kenya at global robotics events built on research, design, and teamwork.',
      link: '/competitions'
    },
    {
      icon: <FaUmbrellaBeach />,
      title: 'Holiday STEM Camps',
      text: 'Short, immersive camps that pack a term of discovery — robotics, coding, and AI projects — into the school holidays.',
      link: '/programs/holiday-camps'
    },
    {
      icon: <FaSchool />,
      title: 'School STEM Programs',
      text: 'Turnkey robotics, coding, and AI curricula for schools, complete with trained instructors, kits, and progress reporting for parents.',
      link: '/programs/schools'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Stemtrix — Robotics, Coding, AI & STEM Education for Ages 4–17</title>
        <meta
         name="description"
  content="Kenya's leading robotics, coding and STEM education provider offering Scratch coding, Python programming, robotics training, AI education, educational robotics kits, computer packages, holiday camps, and STEM solutions for schools and learners aged 4–17."

        />
      <meta
  name="keywords"
  content="Stemtrix, Stemtrix East Africa, robotics Kenya, robotics for kids Kenya, robotics classes Nairobi, robotics training Kenya, coding academy Kenya, coding for kids Kenya, ScratchJr, Scratch programming, Scratch coding, Python programming, Python for kids, C++ programming, Java programming, JavaScript, HTML, CSS, Web Development, Game Development, Artificial Intelligence, AI for kids, Machine Learning, Prompt Engineering, STEM education, STEAM education, STEM academy Kenya, engineering for kids, electronics for kids, computational thinking, coding bootcamp, robotics clubs, coding clubs, holiday robotics camp, holiday coding camp, holiday STEM camp, after school robotics, after school coding, school STEM programs, CBC STEM, Cambridge STEM, teacher STEM training, robotics competitions Kenya, coding competitions, Inspire Robotics Challenge, Inspire Robotics Challenge Kenya, Inspire Robotics Challenge Africa, RobotChallenge, World Robot Olympiad, FIRST LEGO League, LEGO Education, LEGO WeDo 2.0, LEGO Spike Essential, LEGO Spike Prime, LEGO Mindstorms EV3, EV3 Robotics, Arduino, Micro:bit, SmartBlox, Nezha, robotics kits, educational robotics kits, STEM kits, computer packages, ICT solutions for schools, educational technology, robotics workshops, coding workshops, AI workshops, technology education, innovation, future skills, 21st century skills, learn robotics, learn coding, robotics academy, coding academy, AI education, schools in Kenya, Nairobi robotics, Kenya coding academy, Stemtrix competitions, Stemtrix robotics, Stemtrix coding, Stemtrix AI, Stemtrix holiday camp"
/>
      </Helmet>
      <PDFNewsletterPopup />

      <main className="home">
        {/* Hero Section — Robotics and Coding given equal billing */}
        <header className="hero-section">
          <div className="hero-bg-marquee" aria-hidden="true">
            <div className="hero-bg-track">
              {[...galleryItems, ...galleryItems].map((item, index) => (
                <div className="hero-bg-card" key={`${item.id}-${index}`}>
                  {item.src ? (
                    <img src={item.src} alt="" />
                  ) : (
                    <div className="hero-bg-placeholder">{item.icon}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="hero-scrim"></div>
          <div className="hero-overlay"></div>
          <Container>
            <Row className="align-items-center min-vh-100">
              <Col lg={6} className="hero-content">
                <div className="hero-eyebrow">
                  <span className="dot"></span>
                  Robotics • Coding • AI • STEM • Robotics Kits
                </div>
                <h1 className="hero-title">
                  Empowering the Next Generation of <em>Innovators</em>
                </h1>
                <p className="hero-text">
               Empowering learners aged 4–17 with hands-on Robotics, Scratch Coding, Python Programming, Artificial Intelligence, and STEM education, building the creativity, confidence, and technical skills needed for tomorrow's world.
                </p>
                <div className="hero-track-labels">
                  <span className="hero-track-chip"><strong>4–9</strong> WeDo &amp; Scratch</span>
                  <span className="hero-track-chip"><strong>10–13</strong> Robotics &amp; Coding</span>
                  <span className="hero-track-chip"><strong>14–17</strong> Advance Robtics &amp; Coding</span>
                </div>
                <div className="cta-buttons">
                  <Link to="/programs">
                    <Button variant="primary" size="lg" className="cta-btn me-3 fw-bold">
                      Explore Programs <FaArrowRight className="ms-2" />
                    </Button>
                  </Link>
                  <Link to="/Join-us">
                    <Button variant="outline-light" size="lg" className="cta-btn-secondary fw-bold">
                      Join Stemtrix Robotics &amp; Coding
                    </Button>
                  </Link>
                </div>
              </Col>
              <Col lg={6} className="d-none d-lg-block">
                <div className="hero-visual">
                  <div className="hero-growth-stack">
                    <div className="hero-growth-card stage-3">
                      <FaBrain className="icon" />
                      <div>
                        <span className="age">Ages 14–17</span>
                        <span className="label">Advance Robtics &amp; Coding</span>
                      </div>
                    </div>
                    <div className="hero-growth-card stage-2">
                      <FaCode className="icon" />
                      <div>
                        <span className="age">Ages 10–13</span>
                        <span className="label">Coding &amp; Robotics Challenges</span>
                      </div>
                    </div>
                    <div className="hero-growth-card stage-1">
                      <FaCubes className="icon" />
                      <div>
                        <span className="age">Ages 4–9</span>
                        <span className="label">LEGO WeDo 2.0 &amp; Scratch</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </header>

        {/* Holiday Robotics Camp — front-and-centre promo */}
        <section className="camp-section">
          <Container>
            <div className="camp-banner">
              <Row className="align-items-center">
                <Col lg={8}>
                  <span className="camp-banner-badge">
                    <FaCalendarAlt /> Booking Now
                  </span>
                  <h2 className="camp-banner-title">Holiday Robotics and Coding Camp is Here!</h2>
                  <p className="camp-banner-text">
                  This holiday, your child will explore robotics and coding, including Python programming, by building and programming real robots at STEMTRIX — gaining hands-on STEM skills in a fun, safe, and inspiring environment.
                  </p>
                  <div className="camp-banner-details">
                    <span className="camp-detail"><FaCalendarAlt /> This holiday season</span>
                    <span className="camp-detail"><FaMapMarkerAlt /> Nairobi &amp; partner schools</span>
                    <span className="camp-detail"><FaChild /> Ages 4–17</span>
                  </div>
                  <Link to="/Join-us">
                    <Button className="cta-btn fw-bold">
                      Register for Robotics &amp; Coding Camp <FaArrowRight className="ms-2" />
                    </Button>
                  </Link>
                </Col>
                <Col lg={4} className="d-none d-lg-flex">
                  <div className="camp-banner-visual">
                    <div className="camp-banner-icon-ring">
                      <FaUmbrellaBeach />
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </section>

        {/* Pillars — Robotics, Coding, AI and STEM given equal visual weight */}
        <section className="pillars-section">
          <Container>
            <div className="section-header centered mx-auto text-center mb-5">
              <div className="eyebrow justify-content-center">why stemtrix</div>
              <h2 className="section-title">Four Disciplines, One Journey</h2>
              <p className="section-subtitle">
             At Stemtrix, Robotics, Coding, Artificial Intelligence, and STEM education work together to help learners explore, create, innovate, and prepare for the future.
              </p>
            </div>
            <Row className="g-4">
              <Col md={6} lg={3}>
                <div className="pillar-card">
                <div className="pillar-icon"><FaRobot /></div>
<h3>Robotics</h3>
<p>
  Design, build, and program robots using LEGO Education, Arduino, Micro:bit, and other industry-leading robotics platforms through exciting, hands-on STEM projects.
</p>
</div>
              </Col>
              <Col md={6} lg={3}>
                <div className="pillar-card">
                  <div className="pillar-icon"><FaCode /></div>
                  <h3>Coding</h3>
<p>
  Learn coding through Scratch, Python, web development, and other programming technologies while building games, apps, and real-world digital solutions.
</p>
                </div>
              </Col>


<Col md={6} lg={3}>
                <div className="pillar-card">
                  <div className="pillar-icon"><FaCode /></div>
<h3>STEM Solutions</h3>
<p>
  We supply educational robotics kits, computer packages, and STEM equipment to schools, organizations, and learning institutions across East Africa.
</p>
                </div>
              </Col>




              <Col md={6} lg={3}>
                <div className="pillar-card">
 <div className="pillar-icon"><FaTrophy /></div>
<h3>Competitions</h3>
<p>
  Challenge your skills in local and international robotics competitions, showcasing innovation, teamwork, and technical excellence.
</p>       </div>
              </Col>
              <Col md={6} lg={3}>
                <div className="pillar-card">
                  <div className="pillar-icon"><FaGraduationCap /></div>
             <h3>STEM Education</h3>
<p>
  Develop creativity, critical thinking, engineering, and problem-solving skills through engaging, project-based STEM learning experiences.
</p>

                </div>

                
              </Col>
            </Row>
          </Container>
        </section>

        {/* Learning Pathway — signature element: grows with the learner */}
        <section className="pathway-section">
          <Container>
            <div className="section-header centered mx-auto text-center mb-5">
              <div className="eyebrow justify-content-center">the stemtrix pathway</div>
              <h2 className="section-title">From First Robot to First Line of Code</h2>
              <p className="section-subtitle">
                One connected track from age 4 to 17 — every stage builds directly on the last.
              </p>
            </div>

            <div className="pathway-track">
              <div className="pathway-line"></div>
              {pathway.map((item, index) => (
                <React.Fragment key={item.stage}>
                  <div className={`pathway-stage ${item.stage}`}>
                    <div className="pathway-node">{item.icon}</div>
                    <span className="pathway-age">{item.age}</span>
                    <h3>{item.title}</h3>
                    <ul className="pathway-skills">
                      {item.skills.map((skill) => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                  {index < pathway.length - 1 && (
                    <div className="pathway-arrow">
                      <FaArrowRight />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            <p className="pathway-caption">
              From <span className="highlight">Scratch Coding</span> to{' '}
              <span className="highlight">Artificial Intelligence</span> — Stemtrix grows with every learner.
            </p>
          </Container>
        </section>

      
        {/* Testimonials Section */}
        <section className="testimonials-section">
          <Container>
            <div className="section-header centered mx-auto text-center mb-5">
              <div className="eyebrow justify-content-center">community voices</div>
              <h2 className="section-title">What Our Community Says</h2>
            </div>
            <Row className="g-4">
              {testimonials.map((testimonial) => (
                <Col key={testimonial.id} md={4}>
                  <div className="testimonial-card">
                    <div className="testimonial-quote">"</div>
                    <p className="testimonial-text">{testimonial.text}</p>
                    <div className="testimonial-author">
                      <h4>{testimonial.name}</h4>
                      <p>{testimonial.role}</p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* News Section */}
        <section className="news-section">
          <Container>
            <div className="section-header centered mx-auto text-center mb-5">
              <div className="eyebrow justify-content-center">latest news</div>
              <h2 className="section-title">Latest Stemtrix News</h2>
              <p className="section-subtitle">
                Stay updated with our events, competitions, and success stories.
              </p>
            </div>
            <Row className="g-4">
 {/* Inspire Robotics Challenge 2026 */}
              <Col xs={12} md={6} lg={3}>
                <article className="news-card h-100">
                  
                  <div className="news-card-media">
                    <div className="video-container">
                      <iframe
                        className="video-frame"
                        src="https://www.youtube.com/embed/T-PeDh3SCAo"
                        title="Inspire Robotics Challenge 2025"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                  <div className="news-card-content">
                    <div className="news-date">March 6&7, 2026</div>
                    <h3 className="news-title">Inspire Robotics Challenge 2026</h3>
                    <p className="news-excerpt">
                        Schools from across Kenya gathered at St. Andrew's School, Turi for the 2026 Inspire Robotics Challenge under the theme <strong>"Climate."</strong> Participants camped overnight, collaborated on innovative robotics challenges, and planted over <strong>300 trees</strong> on the second morning, demonstrating their commitment to environmental sustainability while competing for international robotics opportunities.

                    </p>
                    <Link to="/news/inspire-robotics-challenge-2025" className="news-link">
                      Read more <FaArrowRight className="ms-1" />
                    </Link>
                  </div>
                </article>
              </Col>

              {/* Inspire Robotics Challenge 2025 */}
              <Col xs={12} md={6} lg={3}>
                <article className="news-card h-100">
                  
                  <div className="news-card-media">
                    <div className="video-container">
                      <iframe
                        className="video-frame"
                        src="https://www.youtube.com/embed/eV7RRlNloZs"
                        title="Inspire Robotics Challenge 2025"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                  <div className="news-card-content">
                    <div className="news-date">March 15, 2025</div>
                    <h3 className="news-title">Inspire Robotics Challenge 2025</h3>
                    <p className="news-excerpt">
                      Schools came together at Potterhouse Senior School to compete under the theme
                      "Health." Winners will represent Kenya in Beijing, China.
                    </p>
                    <Link to="/news/inspire-robotics-challenge-2025" className="news-link">
                      Read more <FaArrowRight className="ms-1" />
                    </Link>
                  </div>
                </article>
              </Col>

              {/* Robofest at Merishaw School */}
              <Col xs={12} md={6} lg={3}>
                <article className="news-card h-100">
                  <div className="news-card-media">
                    <div className="video-container">
                      <iframe
                        className="video-frame"
                        src="https://www.youtube.com/embed/8P7GzmF8Xf0"
                        title="Robofest at Merishaw School"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                  <div className="news-card-content">
                    <div className="news-date">April 5, 2025</div>
                    <h3 className="news-title">Robofest at Merishaw School</h3>
                    <p className="news-excerpt">
                      Seven schools competed in various robotics challenges at Merishaw School, with
                      top teams earning spots at the global event in Michigan.
                    </p>
                    <Link to="/news/robofest-merishaw-school" className="news-link">
                      Read more <FaArrowRight className="ms-1" />
                    </Link>
                  </div>
                </article>
              </Col>

              {/* Winners of the Inspire Robotics Challenge */}
              <Col xs={12} md={6} lg={3}>
                <article className="news-card h-100">
                  <div className="news-card-media">
                    <div className="video-container">
                      <iframe
                        className="video-frame"
                        src="https://www.youtube.com/embed/cfNnN_UxdpQ"
                        title="Winners of the Inspire Robotics Challenge 2023/2024"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                  <div className="news-card-content">
                    <div className="news-date">February 10, 2025</div>
                    <h3 className="news-title">Inspire Robotics Champions 2023/2024</h3>
                    <p className="news-excerpt">
                      Riara Springs Girls High School showcased outstanding innovation and teamwork
                      to claim the championship title.
                    </p>
                    <Link to="/news/inspire-robotics-champions-2024" className="news-link">
                      Read more <FaArrowRight className="ms-1" />
                    </Link>
                  </div>
                </article>
              </Col>

              {/* 2023-2024 Robotics Season */}
              <Col xs={12} md={6} lg={3}>
                <article className="news-card h-100">
                  <div className="news-card-media">
                    <div className="video-container">
                      <iframe
                        className="video-frame"
                        src="https://www.youtube.com/embed/RKgyaGQUqsE"
                        title="2023-2024 Robotics Season"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                  <div className="news-card-content">
                    <div className="news-date">January 15, 2025</div>
                    <h3 className="news-title">2023-2024 Robotics Season</h3>
                    <p className="news-excerpt">
                      Exciting new challenges await in this year's robotics competition with
                      innovative problem-solving scenarios.
                    </p>
                    <Link to="/news/robotics-season-2023-2024" className="news-link">
                      Read more <FaArrowRight className="ms-1" />
                    </Link>
                  </div>
                </article>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Call to Action Section */}
        <section className="cta-section">
          <Container>
            <Row className="align-items-center">
              <Col lg={7}>
                <h2 className="cta-title">Ready to Start Your Robotics &amp; Coding Journey?</h2>
                <p className="cta-text">
                  Join thousands of students across Kenya discovering robotics, coding, and
                  artificial intelligence — and building skills for the future.
                </p>
                <div className="cta-actions">
                  <Link to="/join-us">
                    <Button variant="primary" size="lg" className="me-3">
                      Get Started Today
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="outline-light" size="lg">
                      Schedule a Demo
                    </Button>
                  </Link>
                </div>
              </Col>
              <Col lg={5} className="d-none d-lg-block">
                <div className="cta-image"></div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* WhatsApp Button */}
        <div className={`whatsapp-button ${isVisible ? 'visible' : ''}`}>
          <a
            href="https://wa.me/+254728128353?text=Hello!%20I%20found%20your%20contact%20on%20the%20Stemtrix%20website%20and%20would%20like%20to%20learn%20more%20about%20your%20services."
            className="whatsapp-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
          >
            <FaWhatsapp size={26} />
            <span className="whatsapp-label">Chat with us</span>
          </a>
        </div>
      </main>
    </>
  );
};

export default HomePage;
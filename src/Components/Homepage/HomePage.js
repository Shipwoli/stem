import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaRocket, FaLaptopCode, FaGraduationCap, FaArrowRight } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
import PDFNewsletterPopup from './PDFNewsletterPopup'; // Import the PDF popup component
import './HomePage.css';

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
      name: "David Gideon Kariuki HSC",
      role: "Merishaw School Principal",
      text: "Robots makes creativity easier and shows our children are conquring the world...!"
    },
    {
      id: 2,
      name: "Sarah Kimani",
      role: "Parent",
      text: "My daughter's confidence in STEM subjects has grown tremendously since joining the Stemtrix program. She's now considering engineering as a career!"
    },
    {
      id: 3,
      name: "Isaac Arabu",
      role: "Robotics Coach",
      text: "The curriculum and materials provided by Stemtrix make teaching robotics accessible and exciting for both educators and students."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Stemtrix - Empowering Future Innovators in Robotics Education</title>
        <meta
          name="description"
          content="Jnoin Stemtrix to learn, build, and innovate with top-quality robotics kits and educational programs. Empowering young minds through robotics and STEM."
        />
        <meta
          name="keywords"
          content="STEM Education, Robotics Education, Robotics Kits, Future Innovators, Educational Robotics, STEM Program, Robotics Learning, Robotics Classes, Robotics Curriculum, Hands-on Learning, Robotics Competitions, Innovative Learning, Robotics Workshops, Tech Education, Coding for Kids, Robotics Projects, Engineering Education, Maker Movement, Robotics for Schools, Robotics Challenges, Educational Technology, Next-Generation Learning, Robotics Training, STEM Mentoring, Digital Learning, Robotics Innovations, Robot Building, Interactive Robotics, STEAM Education, Creative Robotics, Youth Robotics, Robotics Engineering, Learning Through Robotics, Future Tech, Emerging Technologies, Robotics Solutions" />
      </Helmet>
      <PDFNewsletterPopup />

      


      <main className="home">
        {/* Hero Section - Modernized with animated gradient background */}
        <header className="hero-section">
          <div className="hero-overlay"></div>
          <Container>
            <Row className="align-items-center min-vh-100">
              <Col lg={6} className="hero-content text-white">
                <h1 className="hero-title display-3 fw-bold animate__animated animate__fadeInUp">
                  Building Tomorrow's Innovators Today
                </h1>
                <p className="hero-text lead mt-4 animate__animated animate__fadeInUp animate__delay-1s">
                  Empowering young minds through world-class robotics education that inspires creativity, critical thinking, and collaborative problem-solving.
                </p>
                <div className="cta-buttons mt-5 animate__animated animate__fadeInUp animate__delay-2s">
                  <Link to="/join-us">
                    <Button variant="primary" size="lg" className="cta-btn me-3 fw-bold">
                      Join our STEM Program <FaArrowRight className="ms-2" />
                    </Button>
                  </Link>
                  <Link to="/products">
                    <Button variant="outline-light" size="lg" className="cta-btn-secondary fw-bold">
                      Explore Products
                    </Button>
                  </Link>
                </div>
              </Col>
              <Col lg={6} className="d-none d-lg-block">
                <div className="hero-image-container animate__animated animate__fadeIn animate__delay-1s">
                  {/* This would be an SVG or image of a robot or students working with robotics */}
                  <div className="hero-floating-elements">
                    <div className="floating-element floating-1"></div>
                    <div className="floating-element floating-2"></div>
                    <div className="floating-element floating-3"></div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </header>

        {/* Features Section */}
        <section className="features-section py-5">
          <Container>
            <h2 className="text-center mb-5 section-title">Why Choose Stemtrix?</h2>
            <Row className="g-4">
              <Col md={4}>
                <div className="feature-card">
                  <div className="feature-icon">
                    <FaRocket />
                  </div>
                  <h3>Innovation-Driven</h3>
                  <p>Our curriculum sparks creativity and fosters innovation through hands-on, project-based learning experiences.</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="feature-card">
                  <div className="feature-icon">
                    <FaLaptopCode />
                  </div>
                  <h3>Real-World Skills</h3>
                  <p>Students develop critical thinking, problem-solving, and teamwork skills applicable in various STEM careers.</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="feature-card">
                  <div className="feature-icon">
                    <FaGraduationCap />
                  </div>
                  <h3>Expert Guidance</h3>
                  <p>Learn from experienced educators and industry professionals passionate about nurturing young talent.</p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Robotics Kits Section - With interactive hover effects */}
        <section className="kits-section py-5">
          <Container>
            <Row className="align-items-center">
              <Col lg={5}>
                <div className="kits-content">
                  <h2 className="section-title mb-4">Premium Educational Robotics Kits</h2>
                  <p className="kits-text mb-4">
                    Our carefully curated robotics kits blend learning with fun, suitable for both classroom environments and home learning. Each kit is designed to progressively build skills in programming, engineering, and design thinking.
                  </p>
                  <div className="kit-features mb-4">
                    <div className="kit-feature">
                      <span className="kit-feature-icon">✓</span> Age-appropriate learning paths
                    </div>
                    <div className="kit-feature">
                      <span className="kit-feature-icon">✓</span> Comprehensive teacher guides
                    </div>
                    <div className="kit-feature">
                      <span className="kit-feature-icon">✓</span> Competition-ready components
                    </div>
                  </div>
                  
                </div>
              </Col>
              <Col lg={7}>
                <div className="kits-showcase">
                  <div className="kit-card-container">
                    <div className="kit-card kit-card-1">
                      <div className="kit-card-image">
                        {/* This would be an image of your beginner kit */}
                      </div>
                      <div className="kit-card-overlay">
                        <h4>Beginner Explorer Kit</h4>
                        <p>Perfect for ages 4-9</p>
                      </div>
                    </div>
                    <div className="kit-card kit-card-2">
                      <div className="kit-card-image">
                        {/* This would be an image of your intermediate kit */}
                      </div>
                      <div className="kit-card-overlay">
                        <h4>The Challenge</h4>
                        <p>Designed for ages 10-13</p>
                      </div>
                    </div>
                    <div className="kit-card kit-card-3">
                      <div className="kit-card-image">
                        {/* This would be an image of your advanced kit */}
                      </div>
                      <div className="kit-card-overlay">
                        <h4>Advanced Innovator </h4>
                        <p>Challenging projects for 14+</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Testimonials Section - New section */}
        <section className="testimonials-section py-5">
          <Container>
            <h2 className="text-center mb-5 section-title">What Our Community Says</h2>
            <Row className="g-4">
              {testimonials.map(testimonial => (
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

        {/* News Section - Redesigned with modern cards */}
        <section className="news-section py-5 bg-light">
          <Container>
            <div className="section-header text-center mb-5">
              <h2 className="section-title">Latest Stemtrix News</h2>
              <p className="section-subtitle">Stay updated with our events, competitions, and success stories</p>
            </div>
            <Row className="g-4">
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
                      Schools came together at Potterhouse Senior School to compete under the theme "Health." Winners will represent Kenya in Beijing, China.
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
                      Seven schools competed in various robotics challenges at Merishaw School, with top teams earning spots at the global event in Michigan.
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
                      Riara Springs Girls High School showcased outstanding innovation and teamwork to claim the championship title.
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
                      Exciting new challenges await in this year's robotics competition with innovative problem-solving scenarios.
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

        {/* Call to Action Section - New compelling section */}
        <section className="cta-section py-5">
          <Container>
            <Row className="align-items-center">
              <Col lg={7}>
                <h2 className="cta-title">Ready to Start Your Robotics Journey?</h2>
                <p className="cta-text">
                  Join thousands of students across Kenya who are discovering the exciting world of robotics and building skills for the future.
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
                <div className="cta-image">
                  {/* This would be an image of happy students working with robots */}
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* WhatsApp Button - Enhanced floating button */}
        <div className={`whatsapp-button ${isVisible ? 'visible' : ''}`}>
          <a
            href="https://wa.me/+254728128353?text=Hello!%20I%20found%20your%20contact%20on%20the%20Stemtrix%20website%20and%20would%20like%20to%20learn%20more%20about%20your%20services."
            className="whatsapp-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact us on WhatsApp"
          >
            <div className="whatsapp-tooltip">Chat with us!</div>
            <FaWhatsapp size={30} />
          </a>
        </div>
      </main>
    </>
  );
};

export default HomePage;
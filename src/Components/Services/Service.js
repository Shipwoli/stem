import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import tournament from "./assets/tournament.jpeg";
import ins from "./assets/school.jpg";
import inov from "./assets/ins.jpeg";
import lab from "./assets/lab.jpg";
import "./Service.css";

// Services without a photo yet render a branded icon placeholder instead —
// see the `img: null` entries below. Drop a real photo in ./assets and
// import it the same way as the others (e.g. `import birthday from './assets/birthday.jpg'`)
// to replace a placeholder whenever you have one.
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
      alt: "Students competing at a local and international robotics tournament hosted by Stemtrix",
      reverse: false,
      icon: "🏆"
    },
    {
      img: ins,
      title: "Robotics Training",
      text: "In partnership with schools, we offer robotics training using interactive software. Our programs engage students in projects that challenge them to explore scientific concepts and understand the world better.",
      link: "/after-school-robotics",
      alt: "Students receiving hands-on robotics training at a Stemtrix partner school",
      reverse: true,
      icon: "🤖"
    },
    {
      img: null,
      title: "Coding Training",
      text: "From Scratch's visual blocks to real, text-based languages like Python, C++, and HTML/CSS, our coding classes guide learners step by step — building games, apps, and real projects along the way.",
      link: "/coding-training",
      alt: "Student writing code during a Stemtrix coding class",
      reverse: false,
      icon: "💻"
    },
    {
      img: lab,
      title: "Mobile Robotics Labs",
      text: "Our mobile robotics labs bring hands-on robotics experiences directly to communities, homes, and schools. This innovative approach ensures every student can explore robotics, collaborate on projects, and showcase their work.",
      link: "/mobile-robotic-lab",
      alt: "Stemtrix mobile robotics lab set up on location for a community workshop",
      reverse: true,
      icon: "🚐"
    },
    {
      img: null,
      title: "Robotics Birthday Celebrations",
      text: "Turn a birthday into a build day. Our robotics-themed birthday parties bring LEGO builds, guided coding games, and hands-on challenges to celebrate — with every guest going home having built something real.",
      link: "/birthday-celebrations",
      alt: "Children celebrating a robotics-themed birthday party at Stemtrix",
      reverse: false,
      icon: "🎉"
    },
    {
      img: null,
      title: "School Trips & Centre Visits",
      text: "Bring your class to explore our innovation centre in person. Students get a guided, hands-on tour through robotics builds and coding stations designed to spark curiosity in a single memorable visit.",
      link: "/school-trips",
      alt: "School group visiting the Stemtrix innovation centre for a guided robotics and coding tour",
      reverse: true,
      icon: "🚌"
    },
    {
      img: inov,
      title: "Innovation Center",
      text: "Located in Lavington, our innovation center is the hub of our training programs. Here, students design prototypes, work on real-life projects, and receive tailored robotics training alongside computer-based courses.",
      link: "/innovation-centre",
      alt: "Students working on prototypes at the Stemtrix Innovation Center in Lavington",
      reverse: false,
      icon: "💡"
    },
    {
      img: null,
      title: "Supply of Robotics Kits",
      text: "We supply LEGO Education, Arduino, Micro:bit, and other educational robotics kits to schools and organizations, alongside computer packages and STEM equipment for classrooms across East Africa.",
      link: "/robotics-kits",
      alt: "LEGO Education and Arduino robotics kits supplied by Stemtrix",
      reverse: true,
      icon: "📦"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Robotics Training, Coding Classes, Birthday Parties &amp; School Trips | Stemtrix Kenya</title>
        <meta
          name="description"
          content="Stemtrix offers robotics and coding training, robotics tournaments, mobile robotics labs, robotics-themed birthday celebrations, school trips to our innovation centre, and supply of robotics kits for schools across Kenya."
        />
        <meta
          name="keywords"
          content="Stemtrix services, robotics training Kenya, coding classes Kenya, robotics tournaments, mobile robotics lab, robotics birthday party Kenya, school STEM trips Nairobi, robotics kits supply, LEGO Education kits, innovation centre Lavington, STEM education Kenya"
        />
        {/*
          NOTE: replace https://www.stemtrix.co.ke with your actual production domain
          throughout this file (canonical, og:url, og:image, and the JSON-LD block below).
          og:image should ideally be an absolute URL to a real hosted image, not a bundled
          asset path — swap `content={tournament}` for a full https:// URL once you have one.
        */}
        <link rel="canonical" href="https://www.stemtrix.co.ke/services" />

        {/* Open Graph / social preview */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Robotics Training, Coding Classes, Birthday Parties & School Trips | Stemtrix Kenya"
        />
        <meta
          property="og:description"
          content="Robotics and coding training, tournaments, mobile robotics labs, robotics birthday parties, school trips, and robotics kit supply — explore everything Stemtrix offers."
        />
        <meta property="og:image" content={tournament} />
        <meta property="og:url" content="https://www.stemtrix.co.ke/services" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Structured data so search engines understand exactly what we offer */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "Stemtrix",
            url: "https://www.stemtrix.co.ke/services",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Kabarnet Road, off Ngong Road",
              addressLocality: "Nairobi",
              addressCountry: "KE"
            },
            telephone: "+254728128353",
            email: "stemtrix@gmail.com",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Stemtrix Services",
              itemListElement: services.map((service) => ({
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: service.title,
                  description: service.text
                }
              }))
            }
          })}
        </script>
      </Helmet>

      {/* Hero */}
      <header className="services-hero">
        <div className="services-hero-overlay"></div>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 24 }}
            transition={{ duration: 0.7 }}
            className="services-hero-inner"
          >
            <div className="eyebrow justify-content-center">what we offer</div>
            <h1 className="services-hero-title">Innovative Robotics &amp; Coding Services</h1>
            <p className="services-hero-text">
              From tournaments and after-school training to birthday celebrations and school
              trips — every way your child or school can experience robotics, coding, and STEM
              with Stemtrix, all in one place.
            </p>
          </motion.div>
        </Container>
      </header>

      {/* Services list */}
      <Container as="section" className="services-section">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: Math.min(index * 0.06, 0.3) }}
          >
            <Row className={`align-items-center service-row ${service.reverse ? "flex-row-reverse" : ""}`}>
              <Col lg={6} className="mb-4 mb-lg-0">
                <div className="service-image-container">
                  {service.img ? (
                    <img src={service.img} alt={service.alt} className="service-image" loading="lazy" />
                  ) : (
                    <div className="service-image-placeholder" role="img" aria-label={service.alt}>
                      <span>{service.icon}</span>
                    </div>
                  )}
                  <div className="service-icon-badge">{service.icon}</div>
                </div>
              </Col>
              <Col lg={6}>
                <div className="service-content">
                  <h2 className="service-title">{service.title}</h2>
                  <p className="service-description">{service.text}</p>
                  <Link to={service.link} className="service-link">
                    <Button className="service-button" aria-label={`Learn more about ${service.title}`}>
                      Explore {service.title} <FaArrowRight className="ms-2" />
                    </Button>
                  </Link>
                </div>
              </Col>
            </Row>
          </motion.div>
        ))}
      </Container>

      {/* CTA */}
      <section className="services-cta-section">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <Container>
          <h2>Ready to start your robotics journey?</h2>
          <p>Contact us today to learn how our services can benefit your school, family, or organization.</p>
          <Link to="/contact">
            <Button className="services-cta-btn">
              Get Started Today <FaArrowRight className="ms-2" />
            </Button>
          </Link>
        </Container>
      </section>
    </>
  );
};

export default Services;
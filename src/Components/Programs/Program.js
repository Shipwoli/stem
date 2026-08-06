import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import roboticsImg from "./assets/ev.jpeg";
import wedoImg from "./assets/wedo.jpg";
import codingImg from "./assets/scratch.jpeg";
import arduinoImg from "./assets/arduino.jpg";
import programmingImg from "./assets/python.jpeg";
import storytellingImg from "./assets/story.jpeg";
import powerMachineImg from "./assets/power.jpeg";
import architectureImg from "./assets/design.jpeg";
import { Link } from "react-router-dom";
import { FaUsers, FaArrowRight } from "react-icons/fa";
import "./Program.css";

const programsData = [
  {
    title: "Advanced Robotics",
    age: "10-17 years",
    img: roboticsImg,
    description:
      "Develop hands-on skills in designing, building, and programming robots using advanced robotics kits.",
    highlights: [
      "Build and program robots with Mindstorms EV3 & Spike Prime.",
      "Explore Arduino programming and electronic circuits.",
      "Learn Python coding for automation and robotics.",
    ],
    category: "Robotics",
  },
  {
    title: "Arduino Programming",
    img: arduinoImg,
    age: "12-17 years",
    description:
      "Learn to program microcontrollers, integrate sensors, and automate systems using Arduino kits.",
    highlights: [
      "Understand circuits and components.",
      "Write and execute Arduino code.",
      "Design functional electronic prototypes.",
    ],
    category: "Coding",
  },
  {
    title: "Python Coding",
    img: programmingImg,
    age: "12-17 years",
    description:
      "Master the fundamentals of Python programming and apply it to real-world automation and robotics projects.",
    highlights: [
      "Learn Python syntax and logic.",
      "Write scripts for automation and problem-solving.",
      "Develop interactive applications and projects.",
    ],
    category: "Coding",
  },
  {
    title: "Junior Robotics",
    age: "4-9 years",
    img: wedoImg,
    description:
      "Introduce young learners to robotics through fun, interactive WeDo 2.0 projects.",
    highlights: [
      "Build and program simple robots.",
      "Learn basic engineering and automation concepts.",
      "Enhance creativity and problem-solving skills.",
    ],
    category: "Robotics",
  },
  {
    title: "Simple Machines & Engineering",
    img: powerMachineImg,
    age: "6-12 years",
    description:
      "Explore basic mechanical concepts by constructing simple machines like gears, pulleys, and levers.",
    highlights: [
      "Create moving models such as cars, cranes, and lifts.",
      "Understand energy transfer and motion principles.",
      "Develop teamwork and critical thinking skills.",
    ],
    category: "Engineering",
  },
  {
    title: "Design Engineering & Architecture",
    img: architectureImg,
    age: "8-14 years",
    description:
      "Encourage creativity by designing and constructing real-world structures like bridges, buildings, and cities.",
    highlights: [
      "Plan and construct architectural models.",
      "Learn about stability and design principles.",
      "Engage in engineering challenges.",
    ],
    category: "Engineering",
  },
  {
    title: "Robotics: Learn and Tell",
    img: storytellingImg,
    age: "7-12 years",
    description:
      "Make learning fun by combining storytelling with robotics to bring characters and ideas to life.",
    highlights: [
      "Enhance creativity with hands-on storytelling.",
      "Develop communication and teamwork skills.",
      "Use robotics to animate engaging narratives.",
    ],
    category: "Creative",
  },
  {
    title: "Game & Animation Coding",
    age: "6+ years",
    img: codingImg,
    description:
      "Learn to code through game development and animation projects using Scratch and other beginner-friendly tools.",
    highlights: [
      "Create interactive games and animations.",
      "Understand programming logic and problem-solving.",
      "Develop creative thinking and storytelling skills.",
    ],
    category: "Coding",
  },
];

// Group programs by category
const categories = [...new Set(programsData.map((program) => program.category))];

const Programs = () => {
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filteredPrograms =
    activeCategory === "All"
      ? programsData
      : programsData.filter((program) => program.category === activeCategory);

  return (
    <main className="programs-page">
      <Helmet>
        <title>STEM Programs — Robotics, Coding &amp; Engineering for Ages 4–17 | Stemtrix</title>
        <meta
          name="description"
          content="Explore Stemtrix's hands-on STEM programs — robotics, Python and Arduino coding, engineering, and creative storytelling projects — designed for learners aged 4 to 17."
        />
        <meta
          name="keywords"
          content="Stemtrix programs, robotics program Kenya, Python coding for kids, Arduino programming, junior robotics, WeDo 2.0, LEGO Spike Prime, EV3 robotics, engineering for kids, coding classes Kenya, STEM programs Nairobi"
        />
        {/* NOTE: replace with your real production domain */}
        <link rel="canonical" href="https://www.stemtrix.co.ke/programs" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="STEM Programs — Robotics, Coding & Engineering for Ages 4–17 | Stemtrix"
        />
        <meta
          property="og:description"
          content="Robotics, coding, engineering, and creative programs for learners aged 4 to 17 — explore every Stemtrix program in one place."
        />
        <meta property="og:url" content="https://www.stemtrix.co.ke/programs" />
        <meta name="twitter:card" content="summary_large_image" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Stemtrix STEM Programs",
            itemListElement: programsData.map((program, index) => ({
              "@type": "Course",
              position: index + 1,
              name: program.title,
              description: program.description,
              provider: {
                "@type": "EducationalOrganization",
                name: "Stemtrix"
              }
            }))
          })}
        </script>
      </Helmet>

      {/* Hero */}
      <header className="programs-hero">
        <div className="programs-hero-overlay"></div>
        <Container>
          <div className="programs-hero-inner">
            <div className="eyebrow justify-content-center">our programs</div>
            <h1 className="programs-hero-title">Explore Our STEM Programs</h1>
            <p className="programs-hero-text">
              Inspiring the next generation of innovators through hands-on robotics, coding, and
              engineering — with a program for every age from 4 to 17.
            </p>
          </div>
        </Container>
      </header>

      {/* Category Filters */}
      <Container className="programs-filters-wrap">
        <div className="category-filters">
          <button
            className={`filter-btn ${activeCategory === "All" ? "active" : ""}`}
            onClick={() => setActiveCategory("All")}
          >
            All Programs
          </button>
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? "active" : ""}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </Container>

      {/* Programs Grid */}
      <section className="programs-section">
        <Container>
          <Row className="g-4">
            {filteredPrograms.map((program) => (
              <Col key={program.title} md={6} lg={4}>
                <Card className="h-100 program-card">
                  <div className="card-img-container">
                    <Card.Img variant="top" src={program.img} alt={program.title} className="program-img" />
                    <span className={`category-badge cat-${program.category.toLowerCase()}`}>
                      {program.category}
                    </span>
                  </div>
                  <Card.Body>
                    <h3 className="card-title">{program.title}</h3>
                    {program.age && (
                      <p className="age-range">
                        <FaUsers className="age-icon" /> {program.age}
                      </p>
                    )}
                    <p className="program-description">{program.description}</p>
                    <h4 className="highlights-title">Program Highlights</h4>
                    <ul className="highlights-list">
                      {program.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="programs-cta-section">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <Container>
          <h2>Ready to start your STEM journey?</h2>
          <p>
            Join our innovative programs and discover the exciting world of science, technology,
            engineering, and mathematics!
          </p>
          <div className="programs-cta-actions">
            <Link to="/join-us" className="programs-cta-btn primary">
              Register Now <FaArrowRight className="ms-2" />
            </Link>
            <Link to="/contact" className="programs-cta-btn secondary">
              Contact Us
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Programs;
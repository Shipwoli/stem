import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { Helmet } from "react-helmet";
import roboticsImg from "./assets/ev.jpeg";
import wedoImg from "./assets/wedo.jpg";
import codingImg from "./assets/scratch.jpeg";
import arduinoImg from "./assets/arduino.jpg";
import programmingImg from "./assets/python.jpeg";
import storytellingImg from "./assets/story.jpeg";
import powerMachineImg from "./assets/power.jpeg";
import architectureImg from "./assets/design.jpeg";
import { Link } from "react-router-dom";
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
const categories = [...new Set(programsData.map(program => program.category))];

const Programs = () => {
  const [activeCategory, setActiveCategory] = React.useState("All");
  
  const filteredPrograms = activeCategory === "All" 
    ? programsData 
    : programsData.filter(program => program.category === activeCategory);

  return (
    <main className="programs-page">
      <Helmet>
        <title>Our STEM Programs - Hands-on Learning</title>
        <meta
          name="description"
          content="Explore our range of hands-on STEM programs designed to build creativity, problem-solving, and technical skills in young learners."
        />
      </Helmet>

      {/* Hero Section */}
      <div className="hero-section text-center py-5 mb-5">
        <Container>
          <h1 className="display-3 fw-bold mb-3">Explore Our STEM Programs</h1>
          <p className="lead fs-4 mb-4">Inspiring the next generation of innovators through hands-on learning experiences</p>
          <div className="divider mx-auto mb-4"></div>
        </Container>
      </div>

      {/* Category Filters */}
      <Container className="mb-5">
        <div className="category-filters d-flex justify-content-center flex-wrap gap-2">
          <button 
            className={`filter-btn ${activeCategory === "All" ? "active" : ""}`}
            onClick={() => setActiveCategory("All")}
          >
            All Programs
          </button>
          {categories.map((category, index) => (
            <button 
              key={index}
              className={`filter-btn ${activeCategory === category ? "active" : ""}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </Container>

      {/* Programs Section */}
      <section className="programs-section py-5">
        <Container>
          <Row className="g-4">
            {filteredPrograms.map((program, index) => (
              <Col key={index} md={6} lg={4}>
                <Card className="h-100 program-card border-0 shadow-sm">
                  <div className="card-img-container">
                    <Card.Img
                      variant="top"
                      src={program.img}
                      alt={program.title}
                      className="program-img"
                    />
                    <Badge bg="primary" className="category-badge">{program.category}</Badge>
                  </div>
                  <Card.Body>
                    <h3 className="card-title mb-2">{program.title}</h3>
                    {program.age && (
                      <p className="age-range mb-3">
                        <span className="age-icon">👥</span> {program.age}
                      </p>
                    )}
                    <p className="program-description">{program.description}</p>
                    <h4 className="highlights-title">Program Highlights</h4>
                    <ul className="highlights-list">
                      {program.highlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                  </Card.Body>
                  {/* <Card.Footer className="bg-white border-0">
                    <button className="btn btn-primary w-100">Learn More</button>
                  </Card.Footer> */}
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="cta-section text-center py-5 my-5">
  <Container>
    <h2 className="mb-4">Ready to start your STEM journey?</h2>
    <p className="lead mb-4">Join our innovative programs and discover the exciting world of science, technology, engineering, and mathematics!</p>
    <Link to="/join-us" className="btn btn-lg btn-primary me-2">Register Now</Link>
    <Link to="/contact" className="btn btn-lg btn-outline-primary">Contact Us</Link>
  </Container>
</section>
    </main>
  );
};

export default Programs;
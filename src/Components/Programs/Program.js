import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Helmet } from "react-helmet";
import roboticsImg from "./assets/ev.jpeg";
import wedoImg from "./assets/wedo.jpg";
import codingImg from "./assets/scratch.jpeg";
import arduinoImg from "./assets/arduino.jpg";
import programmingImg from "./assets/python.jpeg";
import storytellingImg from "./assets/story.jpeg";
import powerMachineImg from "./assets/power.jpeg";
import architectureImg from "./assets/design.jpeg";
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
  },
  {
    title: "Arduino Programming",
    img: arduinoImg,
    description:
      "Learn to program microcontrollers, integrate sensors, and automate systems using Arduino kits.",
    highlights: [
      "Understand circuits and components.",
      "Write and execute Arduino code.",
      "Design functional electronic prototypes.",
    ],
  },
  {
    title: "Python Coding",
    img: programmingImg,
    description:
      "Master the fundamentals of Python programming and apply it to real-world automation and robotics projects.",
    highlights: [
      "Learn Python syntax and logic.",
      "Write scripts for automation and problem-solving.",
      "Develop interactive applications and projects.",
    ],
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
  },
  {
    title: "Simple Machines & Engineering",
    img: powerMachineImg,
    description:
      "Explore basic mechanical concepts by constructing simple machines like gears, pulleys, and levers.",
    highlights: [
      "Create moving models such as cars, cranes, and lifts.",
      "Understand energy transfer and motion principles.",
      "Develop teamwork and critical thinking skills.",
    ],
  },
  {
    title: "Design Engineering & Architecture",
    img: architectureImg,
    description:
      "Encourage creativity by designing and constructing real-world structures like bridges, buildings, and cities.",
    highlights: [
      "Plan and construct architectural models.",
      "Learn about stability and design principles.",
      "Engage in engineering challenges.",
    ],
  },
  {
    title: "Robotics Through Storytelling",
    img: storytellingImg,
    description:
      "Make learning fun by combining storytelling with robotics to bring characters and ideas to life.",
    highlights: [
      "Enhance creativity with hands-on storytelling.",
      "Develop communication and teamwork skills.",
      "Use robotics to animate engaging narratives.",
    ],
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
  },
];

const Programs = () => {
  return (
    <main className="programs-page">
      <Helmet>
        <title>Our STEM Programs - Hands-on Learning</title>
        <meta
          name="description"
          content="Explore our range of hands-on STEM programs designed to build creativity, problem-solving, and technical skills in young learners."
        />
      </Helmet>

      {/* Page Header */}
      <Container className="text-center my-5">
        <header>
          <h1 className="display-4 glow-heading">Explore Our STEM Programs</h1>
          <p className="lead">Innovative learning through robotics, coding, and engineering.</p>
        </header>
      </Container>

      {/* Programs Section */}
      <section className="programs-section my-5">
        <Container>
          <Row className="g-4">
            {programsData.map((program, index) => (
              <Col key={index} md={6} lg={4}>
                <Card className="h-100 shadow-lg border-0">
                  <div className="card-img-wrapper">
                    <Card.Img
                      src={program.img}
                      alt={program.title}
                      className="program-img rounded-top"
                    />
                  </div>
                  <Card.Body className="text-center">
                    <h3 className="fw-bold">{program.title}</h3>
                    {program.age && <p><strong>Age Group:</strong> {program.age}</p>}
                    <p>{program.description}</p>
                    {program.highlights && (
                      <ul className="text-start">
                        {program.highlights.map((highlight, i) => (
                          <li key={i}>{highlight}</li>
                        ))}
                      </ul>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Programs;

import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Badge, Modal } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { FaShoppingCart, FaStar, FaInfoCircle, FaPhone, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import './Product.css';
import wedo from './assets/wedo.jpg';
import spike from './assets/spike esential.jpg';
import spikep from './assets/spike.jpg';
import ev3 from './assets/mindstorm.jpg';

const products = [
  {
    id: 1,
    name: 'Spike Prime',
    description: 'A versatile robotics kit that combines sensors, motors, and programmable bricks for endless creativity.',
    imageUrl: spike,
    rating: 4.8,
    ageRange: '10-16 years',
    difficulty: 'Intermediate',
    features: [
      'Programmable hub with 6 ports',
      '4 motors and multiple sensors',
      'Scratch and Python compatibility',
      'Over 500 building elements'
    ],
    bestFor: 'Middle school and high school students',
    inStock: true,
    tag: 'Best Seller'
  },
  {
    id: 2,
    name: 'WeDo 2.0',
    description: 'An easy-to-use robotics kit for younger learners, featuring simple building elements and engaging programming.',
    imageUrl: wedo,
  
    rating: 4.6,
    ageRange: '7-10 years',
    difficulty: 'Beginner',
    features: [
      'Bluetooth Smart hub',
      'Motor and motion sensors',
      'Simplified programming interface',
      '280+ building elements'
    ],
    bestFor: 'Elementary school students',
    inStock: true,
    tag: 'Easy Start'
  },
  {
    id: 3,
    name: 'Spike Essential',
    description: 'A comprehensive robotics set that introduces fundamental engineering concepts with fun and interactive activities.',
    imageUrl: spikep,

    rating: 4.7,
    ageRange: '6-12 years',
    difficulty: 'Beginner-Intermediate',
    features: [
      'Colorful building elements',
      'Simple programming interface',
      '40+ hours of learning activities',
      'STEAM curriculum alignment'
    ],
    bestFor: 'Late elementary to early middle school',
    inStock: true,
    tag: 'Most Popular'
  },
  {
    id: 4,
    name: 'EV3 Mindstorms',
    description: 'A powerful robotics kit for advanced users, enabling complex builds and programming challenges.',
    imageUrl: ev3,
    rating: 4.9,
    ageRange: '10+ years',
    difficulty: 'Advanced',
    features: [
      'Intelligent EV3 Brick',
      'Servo motors and advanced sensors',
      'Comprehensive programming interface',
      'Over 600 building elements'
    ],
    bestFor: 'Advanced robotics enthusiasts',
    inStock: true,
    tag: 'Advanced'
  },
];

const phoneNumber = "+254 728 128353";

const ProductPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    setAnimate(true);
  }, []);

  const handleShowDetails = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < Math.floor(rating)) {
        stars.push(<FaStar key={i} className="text-warning" />);
      } else if (i === Math.floor(rating) && rating % 1 >= 0.5) {
        stars.push(<FaStar key={i} className="text-warning half-star" />);
      } else {
        stars.push(<FaStar key={i} className="text-muted" />);
      }
    }
    return stars;
  };

  return (
    <main className="product-page">
      <Helmet>
        <title>Robotics Kits - Explore Our Innovative Robotics Kits | Stemtrix</title>
        <meta
          name="description"
          content="Discover our range of robotics kits including Spike Prime, WeDo 2.0, Spike Essential, and EV3 Mindstorms. Perfect for budding innovators and robotics enthusiasts. Call to order today!"
        />
        <meta
          name="keywords"
          content="Robotics Kits, Spike Prime, WeDo 2.0, Spike Essential, EV3 Mindstorms, Robotics, Stemtrix, STEM, Robotics Education, Robotics Kits for Kids"
        />
      </Helmet>

      {/* Hero Section */}
      <div className="product-hero text-white py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className={`mb-4 mb-lg-0 ${animate ? 'slide-in-left' : ''}`}>
              <h1 className="display-4 fw-bold">Innovative Robotics Kits</h1>
              <p className="lead fs-4 mb-4">
                Empower young minds with cutting-edge technology and hands-on learning experiences that inspire creativity and problem-solving skills.
              </p>
              {/* <Button variant="light" size="lg" className="me-3">
                <FaInfoCircle className="me-2" /> Learn More
              </Button> */}
              <Button variant="outline-light" size="lg" href="#product-catalog">
                View Kits <FaArrowRight className="ms-2" />
              </Button>
            </Col>
            <Col lg={6} className={`text-center ${animate ? 'slide-in-right' : ''}`}>
              <div className="hero-image-container">
                <img 
                  src={spikep} 
                  alt="Spike Prime Robotics Kit" 
                  className="img-fluid hero-image"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Benefits Section */}
      <section className="bg-light py-5">
        <Container>
          <h2 className="text-center mb-5">Why Choose Our Robotics Kits?</h2>
          <Row>
            <Col md={4} className={`mb-4 ${animate ? 'fade-in' : ''}`} style={{ animationDelay: '0.2s' }}>
              <div className="benefit-card text-center p-4">
                <div className="benefit-icon mb-3">
                  <span className="benefit-icon-inner">🧠</span>
                </div>
                <h3>Develop Critical Thinking</h3>
                <p>Our kits challenge students to solve real-world problems, fostering analytical and creative thinking skills.</p>
              </div>
            </Col>
            <Col md={4} className={`mb-4 ${animate ? 'fade-in' : ''}`} style={{ animationDelay: '0.4s' }}>
              <div className="benefit-card text-center p-4">
                <div className="benefit-icon mb-3">
                  <span className="benefit-icon-inner">💻</span>
                </div>
                <h3>Learn Programming</h3>
                <p>Intuitive interfaces make coding accessible and engaging, developing essential digital literacy skills.</p>
              </div>
            </Col>
            <Col md={4} className={`mb-4 ${animate ? 'fade-in' : ''}`} style={{ animationDelay: '0.6s' }}>
              <div className="benefit-card text-center p-4">
                <div className="benefit-icon mb-3">
                  <span className="benefit-icon-inner">🔧</span>
                </div>
                <h3>Hands-on Engineering</h3>
                <p>Build and test mechanical structures, gaining practical experience with engineering principles.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Products Catalog */}
      <Container id="product-catalog" className="my-5">
        <header className="text-center mb-5">
          <h2 className="display-5 fw-bold">Explore Our Robotics Kits</h2>
          <p className="lead text-muted">Find the perfect kit for your educational needs</p>
        </header>
        
        <Row>
          {products.map((product, index) => (
            <Col md={6} lg={3} key={product.id} className={`mb-4 ${animate ? 'fade-in' : ''}`} style={{ animationDelay: `${0.2 * index}s` }}>
              <Card className="product-card h-100 border-0 rounded-lg overflow-hidden">
                {product.tag && (
                  <div className="product-tag">
                    <Badge bg={product.tag === 'Best Seller' ? 'warning' : 
                             product.tag === 'Most Popular' ? 'success' : 
                             product.tag === 'Advanced' ? 'danger' : 'info'}>
                      {product.tag}
                    </Badge>
                  </div>
                )}
                <div className="product-image-container">
                  {product.imageUrl && (
                    <Card.Img
                      variant="top"
                      src={product.imageUrl}
                      alt={`${product.name} Robotics Kit`}
                      className="product-image"
                    />
                  )}
                  <div className="product-overlay">
                    <Button 
                      variant="light" 
                      size="sm" 
                      className="product-details-btn"
                      onClick={() => handleShowDetails(product)}
                    >
                      Quick View
                    </Button>
                  </div>
                </div>
                <Card.Body className="d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-center mb-2">  
                    <Card.Title className="fw-bold">{product.name}</Card.Title>
                    <div className="product-price">{product.price}</div>
                  </div>
                  <div className="mb-2">
                    <div className="d-flex align-items-center">
                      <div className="me-2">{renderStars(product.rating)}</div>
                      <small className="text-muted">({product.rating})</small>
                    </div>
                    <div className="d-flex mt-2">
                      <Badge bg="light" text="dark" className="me-2">{product.ageRange}</Badge>
                      <Badge bg="light" text="dark">{product.difficulty}</Badge>
                    </div>
                  </div>
                  <Card.Text className="product-description flex-grow-1">{product.description}</Card.Text>
                  <div className="mt-auto">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className={product.inStock ? 'text-success' : 'text-danger'}>
                        {product.inStock ? (
                          <><FaCheckCircle className="me-1" /> In Stock</>
                        ) : (
                          <>Out of Stock</>
                        )}
                      </span>
                      <Button 
                        variant="outline-primary" 
                        size="sm"
                        onClick={() => handleShowDetails(product)}
                      >
                        <FaInfoCircle className="me-1" /> Details
                      </Button>
                    </div>
                    <Button
                      variant="primary"
                      className="w-100 order-btn"
                      href={`tel:${phoneNumber}`}
                      disabled={!product.inStock}
                    >
                      <FaPhone className="me-2" /> Call to Order
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Testimonials */}
      <section className="testimonials-section py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">What Educators Are Saying</h2>
          <Row>
            <Col md={4} className="mb-4">
              <div className="testimonial-card text-center p-4">
                <div className="testimonial-avatar mb-3">
                  <img src="/api/placeholder/100/100" alt="Teacher" className="rounded-circle" />
                </div>
                <blockquote className="mb-3">
                  "The Spike Prime kit has transformed our robotics program. Students are engaged like never before and developing amazing projects!"
                </blockquote>
                <div className="testimonial-info">
                  {/* <h5 className="mb-0">Sarah M.</h5>
                  <p className="text-muted">Technology Teacher, Nairobi International School</p> */}
                </div>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="testimonial-card text-center p-4">
                <div className="testimonial-avatar mb-3">
                  <img src="/api/placeholder/100/100" alt="Principal" className="rounded-circle" />
                </div>
                <blockquote className="mb-3">
                  "WeDo 2.0 has been a game-changer for introducing younger students to robotics. The simplicity combined with powerful learning outcomes is impressive."
                </blockquote>
                <div className="testimonial-info">
                  {/* <h5 className="mb-0">John K.</h5>
                  <p className="text-muted">Principal, Mount Kenya Academy</p> */}
                </div>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="testimonial-card text-center p-4">
                <div className="testimonial-avatar mb-3">
                  <img src="/api/placeholder/100/100" alt="STEM Coordinator" className="rounded-circle" />
                </div>
                <blockquote className="mb-3">
                  "The EV3 Mindstorms kit provides the perfect challenge for our advanced students. They're building incredible robots and learning valuable engineering principles."
                </blockquote>
                <div className="testimonial-info">
                  {/* <h5 className="mb-0">Emily O.</h5>
                  <p className="text-muted">STEM Coordinator, Alliance High School</p> */}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="cta-section text-white text-center py-5">
        <Container>
          <h2 className="display-5 mb-4">Ready to Transform Your Robotics Program?</h2>
          <p className="lead mb-4">Our educational specialists can help you select the right kits for your students' needs.</p>
          <Button variant="light" size="lg" href={`tel:${phoneNumber}`}>
            <FaPhone className="me-2" /> Call Us Today: {phoneNumber}
          </Button>
        </Container>
      </section>

      {/* Product Modal */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
        {selectedProduct && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedProduct.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col md={6}>
                  <img 
                    src={selectedProduct.imageUrl} 
                    alt={selectedProduct.name} 
                    className="img-fluid rounded mb-3"
                  />
                  <div className="d-flex align-items-center mb-3">
                    <div className="me-2">{renderStars(selectedProduct.rating)}</div>
                    <small className="text-muted">({selectedProduct.rating})</small>
                  </div>
                  <h4 className="text-primary">{selectedProduct.price}</h4>
                  <p className={selectedProduct.inStock ? 'text-success' : 'text-danger'}>
                    {selectedProduct.inStock ? (
                      <><FaCheckCircle className="me-1" /> In Stock</>
                    ) : (
                      <>Out of Stock</>
                    )}
                  </p>
                </Col>
                <Col md={6}>
                  <h5>Description</h5>
                  <p>{selectedProduct.description}</p>
                  
                  <h5 className="mt-3">Features</h5>
                  <ul className="feature-list">
                    {selectedProduct.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  
                  <div className="product-specs mt-3">
                    <div className="spec-item">
                      <span className="spec-label">Age Range:</span>
                      <span className="spec-value">{selectedProduct.ageRange}</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Difficulty:</span>
                      <span className="spec-value">{selectedProduct.difficulty}</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Best For:</span>
                      <span className="spec-value">{selectedProduct.bestFor}</span>
                    </div>
                  </div>
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
              <Button 
                variant="primary" 
                href={`tel:${phoneNumber}`}
                disabled={!selectedProduct.inStock}
              >
                <FaPhone className="me-2" /> Call to Order
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </main>
  );
};

export default ProductPage;
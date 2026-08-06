import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { Helmet } from "react-helmet-async";
import {
  FaStar,
  FaInfoCircle,
  FaPhone,
  FaCheckCircle,
  FaArrowRight,
  FaBrain,
  FaLaptopCode,
  FaTools,
  FaUserCircle
} from 'react-icons/fa';
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
        stars.push(<FaStar key={i} className="star filled" />);
      } else if (i === Math.floor(rating) && rating % 1 >= 0.5) {
        stars.push(<FaStar key={i} className="star half-star" />);
      } else {
        stars.push(<FaStar key={i} className="star" />);
      }
    }
    return stars;
  };

  return (
    <main className="product-page">
      <Helmet>
        <title>Robotics Kits — Spike Prime, WeDo 2.0, EV3 &amp; More | Stemtrix</title>
        <meta
          name="description"
          content="Explore Stemtrix's robotics kits — Spike Prime, WeDo 2.0, Spike Essential, and EV3 Mindstorms — for classrooms and homes across Kenya. Call to order today."
        />
        <meta
          name="keywords"
          content="Robotics Kits Kenya, Spike Prime, WeDo 2.0, Spike Essential, EV3 Mindstorms, LEGO Education Kenya, robotics kits for kids, STEM kits Nairobi, educational robotics kits"
        />
        {/* NOTE: replace with your real production domain */}
        <link rel="canonical" href="https://www.stemtrix.co.ke/products" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Robotics Kits — Spike Prime, WeDo 2.0, EV3 & More | Stemtrix" />
        <meta
          property="og:description"
          content="Spike Prime, WeDo 2.0, Spike Essential, and EV3 Mindstorms — explore Stemtrix's full range of educational robotics kits."
        />
        <meta property="og:image" content={spikep} />
        <meta property="og:url" content="https://www.stemtrix.co.ke/products" />
        <meta name="twitter:card" content="summary_large_image" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Stemtrix Robotics Kits",
            itemListElement: products.map((product, index) => ({
              "@type": "Product",
              position: index + 1,
              name: product.name,
              description: product.description,
              brand: { "@type": "Brand", name: "Stemtrix" },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: product.rating,
                bestRating: "5"
              }
            }))
          })}
        </script>
      </Helmet>

      {/* Hero */}
      <header className="product-hero">
        <div className="product-hero-overlay"></div>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className={`mb-4 mb-lg-0 ${animate ? 'slide-in-left' : ''}`}>
              <div className="eyebrow">robotics kits</div>
              <h1 className="product-hero-title">Innovative Robotics Kits</h1>
              <p className="product-hero-text">
                Empower young minds with cutting-edge technology and hands-on learning experiences
                that inspire creativity and problem-solving skills.
              </p>
              <Button className="product-hero-btn" href="#product-catalog">
                View Kits <FaArrowRight className="ms-2" />
              </Button>
            </Col>
            <Col lg={6} className={`text-center ${animate ? 'slide-in-right' : ''}`}>
              <div className="hero-image-container">
                <img src={spikep} alt="Spike Prime Robotics Kit" className="hero-image" />
              </div>
            </Col>
          </Row>
        </Container>
      </header>

      {/* Benefits */}
      <section className="benefits-section">
        <Container>
          <div className="section-header centered mx-auto text-center mb-5">
            <div className="eyebrow justify-content-center">why our kits</div>
            <h2 className="section-title">Why Choose Our Robotics Kits?</h2>
          </div>
          <Row className="g-4">
            <Col md={4} className={animate ? 'fade-in' : ''} style={{ animationDelay: '0.15s' }}>
              <div className="benefit-card">
                <div className="benefit-icon">
                  <FaBrain />
                </div>
                <h3>Develop Critical Thinking</h3>
                <p>Our kits challenge students to solve real-world problems, fostering analytical and creative thinking skills.</p>
              </div>
            </Col>
            <Col md={4} className={animate ? 'fade-in' : ''} style={{ animationDelay: '0.3s' }}>
              <div className="benefit-card">
                <div className="benefit-icon">
                  <FaLaptopCode />
                </div>
                <h3>Learn Programming</h3>
                <p>Intuitive interfaces make coding accessible and engaging, developing essential digital literacy skills.</p>
              </div>
            </Col>
            <Col md={4} className={animate ? 'fade-in' : ''} style={{ animationDelay: '0.45s' }}>
              <div className="benefit-card">
                <div className="benefit-icon">
                  <FaTools />
                </div>
                <h3>Hands-on Engineering</h3>
                <p>Build and test mechanical structures, gaining practical experience with engineering principles.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Products Catalog */}
      <section id="product-catalog" className="catalog-section">
        <Container>
          <div className="section-header centered mx-auto text-center mb-5">
            <div className="eyebrow justify-content-center">the catalog</div>
            <h2 className="section-title">Explore Our Robotics Kits</h2>
            <p className="section-subtitle">Find the perfect kit for your educational needs</p>
          </div>

          <Row className="g-4">
            {products.map((product, index) => (
              <Col md={6} lg={3} key={product.id} className={animate ? 'fade-in' : ''} style={{ animationDelay: `${0.1 * index}s` }}>
                <Card className="product-card h-100">
                  {product.tag && (
                    <span className={`product-tag tag-${product.tag.toLowerCase().replace(/\s+/g, '-')}`}>
                      {product.tag}
                    </span>
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
                      <Button className="product-details-btn" onClick={() => handleShowDetails(product)}>
                        Quick View
                      </Button>
                    </div>
                  </div>
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="product-name">{product.name}</Card.Title>
                    <div className="rating-row">
                      <div className="stars">{renderStars(product.rating)}</div>
                      <small>({product.rating})</small>
                    </div>
                    <div className="chip-row">
                      <span className="info-chip">{product.ageRange}</span>
                      <span className="info-chip">{product.difficulty}</span>
                    </div>
                    <Card.Text className="product-description flex-grow-1">{product.description}</Card.Text>
                    <div className="mt-auto">
                      <div className="stock-row">
                        <span className={product.inStock ? 'in-stock' : 'out-of-stock'}>
                          {product.inStock ? (
                            <>
                              <FaCheckCircle className="me-1" /> In Stock
                            </>
                          ) : (
                            <>Out of Stock</>
                          )}
                        </span>
                        <button className="details-link-btn" onClick={() => handleShowDetails(product)}>
                          <FaInfoCircle className="me-1" /> Details
                        </button>
                      </div>
                      <Button
                        className="order-btn w-100"
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
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <Container>
          <div className="section-header centered mx-auto text-center mb-5">
            <div className="eyebrow justify-content-center">educator feedback</div>
            <h2 className="section-title">What Educators Are Saying</h2>
          </div>
          <Row className="g-4">
            <Col md={4}>
              <div className="testimonial-card">
                <div className="testimonial-avatar">
                  <FaUserCircle />
                </div>
                <blockquote>
                  "The Spike Prime kit has transformed our robotics program. Students are engaged
                  like never before and developing amazing projects!"
                </blockquote>
              </div>
            </Col>
            <Col md={4}>
              <div className="testimonial-card">
                <div className="testimonial-avatar">
                  <FaUserCircle />
                </div>
                <blockquote>
                  "WeDo 2.0 has been a game-changer for introducing younger students to robotics.
                  The simplicity combined with powerful learning outcomes is impressive."
                </blockquote>
              </div>
            </Col>
            <Col md={4}>
              <div className="testimonial-card">
                <div className="testimonial-avatar">
                  <FaUserCircle />
                </div>
                <blockquote>
                  "The EV3 Mindstorms kit provides the perfect challenge for our advanced students.
                  They're building incredible robots and learning valuable engineering principles."
                </blockquote>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="product-cta-section">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <Container>
          <h2>Ready to Transform Your Robotics Program?</h2>
          <p>Our educational specialists can help you select the right kits for your students' needs.</p>
          <Button className="product-cta-btn" href={`tel:${phoneNumber}`}>
            <FaPhone className="me-2" /> Call Us Today: {phoneNumber}
          </Button>
        </Container>
      </section>

      {/* Product Modal */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg" centered className="product-modal">
        {selectedProduct && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedProduct.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col md={6}>
                  <img src={selectedProduct.imageUrl} alt={selectedProduct.name} className="modal-image mb-3" />
                  <div className="rating-row mb-2">
                    <div className="stars">{renderStars(selectedProduct.rating)}</div>
                    <small>({selectedProduct.rating})</small>
                  </div>
                  <p className={selectedProduct.inStock ? 'in-stock' : 'out-of-stock'}>
                    {selectedProduct.inStock ? (
                      <>
                        <FaCheckCircle className="me-1" /> In Stock
                      </>
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
                    {selectedProduct.features.map((feature) => (
                      <li key={feature}>{feature}</li>
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
              <Button className="order-btn" href={`tel:${phoneNumber}`} disabled={!selectedProduct.inStock}>
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
import React, { useRef, useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Helmet } from "react-helmet-async";
import emailjs from 'emailjs-com';
import './Contact.css';
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaPaperPlane,
  FaWhatsapp,
  FaStar,
  FaChevronDown,
  FaCommentDots,
  FaCheckCircle
} from 'react-icons/fa';

const FAQ_ITEMS = [
  {
    question: 'How soon can I expect a response?',
    answer: 'We typically respond to all inquiries within 24 hours during business days.'
  },
  {
    question: 'Do you offer demonstrations of your robotics programs?',
    answer:
      'Yes! We regularly host demonstration sessions for schools and interested groups. Contact us to schedule a session.'
  },
  {
    question: 'Can I visit your facility in person?',
    answer: 'Absolutely! We welcome visitors by appointment. Please contact us to arrange a convenient time.'
  },
  {
    question: 'How do I share feedback about my experience?',
    answer:
      "Use the Share Feedback tab above — rate your experience and tell us what stood out or what we could do better. We read every submission."
  }
];

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState({ message: '', variant: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [animation, setAnimation] = useState(false);
  const [activeTab, setActiveTab] = useState('contact'); // 'contact' | 'feedback'
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [openFAQ, setOpenFAQ] = useState(0);

  useEffect(() => {
    setAnimation(true);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    if (activeTab === 'feedback' && rating === 0) {
      setStatus({ message: 'Please select a star rating before submitting.', variant: 'warning' });
      return;
    }

    setIsLoading(true);

    emailjs
      .sendForm('service_524d26b', 'template_erkzf5a', form.current, 'gVucfB5W8IvVScEUw')
      .then(() => {
        setStatus({
          message:
            activeTab === 'feedback'
              ? 'Thank you for your feedback!'
              : 'Message sent successfully!',
          variant: 'success'
        });
        form.current.reset();
        setRating(0);
        setIsLoading(false);

        setTimeout(() => {
          setStatus({ message: '', variant: '' });
        }, 5000);
      })
      .catch(() => {
        setStatus({ message: 'Failed to send the message, please try again later.', variant: 'danger' });
        setIsLoading(false);
      });
  };

  const switchTab = (tab) => {
    setActiveTab(tab);
    setStatus({ message: '', variant: '' });
    setRating(0);
  };

  return (
    <main className="contact-page">
      <Helmet>
        <title>Contact Stemtrix — Robotics, Coding &amp; STEM Education Experts</title>
        <meta
          name="description"
          content="Get in touch with Stemtrix, a leader in robotics, coding, and STEM education. Send us a message, share feedback, or find our contact details and location."
        />
        <meta
          name="keywords"
          content="Stemtrix, Contact, Robotics Education, Coding, STEM, Contact Stemtrix, Email Stemtrix, Feedback, Nairobi"
        />
      </Helmet>

      {/* Hero */}
      <header className="contact-hero">
        <div className="contact-hero-overlay"></div>
        <Container>
          <div className={`contact-hero-inner ${animation ? 'fade-in' : ''}`}>
            <div className="eyebrow justify-content-center">get in touch</div>
            <h1 className="contact-hero-title">Let's Build Something Together</h1>
            <p className="contact-hero-text">
              Have questions about our robotics, coding, or STEM programs? Want to share how your
              experience with Stemtrix has been? We'd love to hear from you.
            </p>
            <div className="contact-quick-links">
              <a href="tel:+254728128353" className="contact-quick-chip">
                <FaPhone /> +254 728 128353
              </a>
              <a href="mailto:stemtrix@gmail.com" className="contact-quick-chip">
                <FaEnvelope /> stemtrix@gmail.com
              </a>
              <a
                href="https://wa.me/+254728128353"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-quick-chip whatsapp"
              >
                <FaWhatsapp /> WhatsApp Us
              </a>
            </div>
          </div>
        </Container>
      </header>

      {/* Info + Form */}
      <section className="contact-body">
        <Container>
          <Row className="g-4">
            <Col lg={5} className={animation ? 'slide-in-left' : ''}>
              <section className="contact-info-card">
                <h3>Contact Information</h3>

                <div className="contact-detail">
                  <div className="contact-detail-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h5>Address</h5>
                    <p>Kabarnet Road, off Ngong Road, Nairobi, Kenya</p>
                  </div>
                </div>

                <div className="contact-detail">
                  <div className="contact-detail-icon">
                    <FaPhone />
                  </div>
                  <div>
                    <h5>Phone</h5>
                    <p>+254 728 128353</p>
                  </div>
                </div>

                <div className="contact-detail">
                  <div className="contact-detail-icon">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h5>Email</h5>
                    <p>stemtrix@gmail.com</p>
                  </div>
                </div>

                <div className="map-container">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.789393854858!2d36.78800467496565!3d-1.3012554986863893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1bf084fdb2c3%3A0x3419f2185799f585!2sStemtrix%20East%20Africa!5e0!3m2!1sen!2ske!4v1784746160657!5m2!1sen!2ske"
                    height="260"
                    style={{ border: 0, width: '100%' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="Stemtrix East Africa - Kilimani"
                  ></iframe>
                </div>

                <div className="business-hours">
                  <h5>Business Hours</h5>
                  <div className="business-hours-row">
                    <span>Monday – Friday</span>
                    <span>8:00 AM – 5:00 PM</span>
                  </div>
                  <div className="business-hours-row">
                    <span>Saturday</span>
                    <span>8:00 AM – 3:00 PM</span>
                  </div>
                </div>
              </section>
            </Col>

            <Col lg={7} className={animation ? 'slide-in-right' : ''}>
              <section className="contact-form-card">
                <div className="contact-tabs" role="tablist">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={activeTab === 'contact'}
                    className={`contact-tab ${activeTab === 'contact' ? 'active' : ''}`}
                    onClick={() => switchTab('contact')}
                  >
                    <FaEnvelope /> Send a Message
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={activeTab === 'feedback'}
                    className={`contact-tab ${activeTab === 'feedback' ? 'active' : ''}`}
                    onClick={() => switchTab('feedback')}
                  >
                    <FaCommentDots /> Share Feedback
                  </button>
                </div>

                {status.message && (
                  <Alert variant={status.variant} className="contact-alert">
                    {status.variant === 'success' && <FaCheckCircle className="me-2" />}
                    {status.message}
                  </Alert>
                )}

                {activeTab === 'contact' ? (
                  <Form ref={form} onSubmit={sendEmail} className="contact-form" key="contact-form">
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Your Name</Form.Label>
                          <Form.Control
                            type="text"
                            name="user_name"
                            placeholder="Enter your name"
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Your Email</Form.Label>
                          <Form.Control
                            type="email"
                            name="user_email"
                            placeholder="Enter your email"
                            required
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Your Phone Number</Form.Label>
                          <Form.Control
                            type="tel"
                            name="user_phone"
                            placeholder="Enter your phone number"
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Subject</Form.Label>
                          <Form.Control type="text" name="subject" placeholder="Enter subject" />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-4">
                      <Form.Label>Your Message</Form.Label>
                      <Form.Control
                        as="textarea"
                        name="message"
                        rows={5}
                        placeholder="Enter your message"
                        required
                      />
                    </Form.Group>

                   

                    <Button type="submit" className="submit-btn w-100" disabled={isLoading}>
                      {isLoading ? (
                        'Sending...'
                      ) : (
                        <>
                          <FaPaperPlane className="me-2" /> Send Message
                        </>
                      )}
                    </Button>

                    <p className="contact-form-footnote">We'll get back to you within 24 hours</p>
                  </Form>
                ) : (
                  <Form ref={form} onSubmit={sendEmail} className="contact-form" key="feedback-form">
                    <Row>
                      <Col md={4}>
                        <Form.Group className="mb-3">
                          <Form.Label>Your Name</Form.Label>
                          <Form.Control type="text" name="user_name" placeholder="Enter your name" required />
                        </Form.Group>
                      </Col>
                      <Col md={4}>
                        <Form.Group className="mb-3">
                          <Form.Label>Your Email</Form.Label>
                          <Form.Control type="email" name="user_email" placeholder="Enter your email" required />
                        </Form.Group>
                      </Col>
                      <Col md={4}>
                        <Form.Group className="mb-3">
                          <Form.Label>Phone Number</Form.Label>
                          <Form.Control
                            type="tel"
                            name="user_phone"
                            placeholder="Enter your phone number"
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-4">
                      <Form.Label>How would you rate your experience?</Form.Label>
                      <div className="star-rating">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            type="button"
                            key={star}
                            className="star-button"
                            aria-label={`${star} star${star > 1 ? 's' : ''}`}
                            onMouseEnter={() => setHoverRating(star)}
                            onMouseLeave={() => setHoverRating(0)}
                            onClick={() => setRating(star)}
                          >
                            <FaStar className={star <= (hoverRating || rating) ? 'filled' : ''} />
                          </button>
                        ))}
                      </div>
                      <input type="hidden" name="subject" value={`Website Feedback — ${rating}/5 stars`} />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label>Tell us more</Form.Label>
                      <Form.Control
                        as="textarea"
                        name="message"
                        rows={5}
                        placeholder="What did you enjoy? What could we do better?"
                        required
                      />
                    </Form.Group>

                    <Button type="submit" className="submit-btn w-100" disabled={isLoading}>
                      {isLoading ? (
                        'Sending...'
                      ) : (
                        <>
                          <FaPaperPlane className="me-2" /> Submit Feedback
                        </>
                      )}
                    </Button>

                    <p className="contact-form-footnote">
                      Your feedback helps us improve our programs for every learner.
                    </p>
                  </Form>
                )}
              </section>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <Container>
          <div className="section-header centered mx-auto text-center mb-4">
            <div className="eyebrow justify-content-center">faqs</div>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>

          <div className="faq-list">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openFAQ === index;
              return (
                <div className={`faq-item ${isOpen ? 'open' : ''}`} key={item.question}>
                  <button
                    type="button"
                    className="faq-question"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFAQ(isOpen ? -1 : index)}
                  >
                    <span>{item.question}</span>
                    <FaChevronDown className="faq-chevron" />
                  </button>
                  <div className="faq-answer" style={{ maxHeight: isOpen ? '240px' : '0px' }}>
                    <p>{item.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Contact;
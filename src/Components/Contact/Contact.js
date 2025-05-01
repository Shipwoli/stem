import React, { useRef, useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import emailjs from 'emailjs-com';
import './Contact.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState({ message: '', variant: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    setAnimation(true);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs.sendForm('service_a6cxi1k', 'template_6pouz1e', form.current, 'gVucfB5W8IvVScEUw')
      .then((result) => {
        setStatus({ message: 'Message sent successfully!', variant: 'success' });
        form.current.reset();  // Clear the form after successful submission
        setIsLoading(false);
        
        // Auto-dismiss the alert after 5 seconds
        setTimeout(() => {
          setStatus({ message: '', variant: '' });
        }, 5000);
      }, (error) => {
        setStatus({ message: 'Failed to send the message, please try again later.', variant: 'danger' });
        setIsLoading(false);
      });
  };

  return (
    <main className="contact-page">
      <Helmet>
        <title>Contact Stemtrix - Connect with Robotics & STEM Education Experts</title>
        <meta
          name="description"
          content="Get in touch with Stemtrix, a leader in robotics education and STEM innovation. Fill out our contact form or use our contact details to reach us today."
        />
        <meta
          name="keywords"
          content="Stemtrix, Contact, Robotics Education, STEM, Contact Stemtrix, Email Stemtrix, Robotics, STEM Innovation"
        />
      </Helmet>

      {/* Hero Section with Background */}
      <div className="contact-hero text-white py-5 mb-5">
        <Container className="text-center">
          <header className={`${animation ? 'fade-in' : ''}`}>
            <h1 className="display-4 fw-bold">Get in Touch</h1>
            <div className="separator my-3"></div>
            <p className="lead fs-4">
              Have questions or want to learn more about our STEM education programs?
              <br />We're here to help you unlock the world of robotics and innovation.
            </p>
          </header>
        </Container>
      </div>

      <Container className="mb-5">
        <Row className="g-4">
          <Col lg={5} className={`mb-4 ${animation ? 'slide-in-left' : ''}`}>
            <section className="contact-info-card h-100 p-4 shadow rounded bg-white">
              <h3 className="mb-4 text-primary">Contact Information</h3>
              
              <div className="contact-detail d-flex align-items-center mb-4">
                <div className="icon-wrapper me-3">
                  <FaMapMarkerAlt className="contact-icon text-primary" />
                </div>
                <div>
                  <h5 className="mb-0">Address</h5>
                  <p className="mb-0">Owashika Road, Gate 238, Nairobi, Kenya</p>
                </div>
              </div>
              
              <div className="contact-detail d-flex align-items-center mb-4">
                <div className="icon-wrapper me-3">
                  <FaPhone className="contact-icon text-primary" />
                </div>
                <div>
                  <h5 className="mb-0">Phone</h5>
                  <p className="mb-0">+254 728 128353</p>
                </div>
              </div>
              
              <div className="contact-detail d-flex align-items-center mb-4">
                <div className="icon-wrapper me-3">
                  <FaEnvelope className="contact-icon text-primary" />
                </div>
                <div>
                  <h5 className="mb-0">Email</h5>
                  <p className="mb-0">stemtrix@gmail.com</p>
                </div>
              </div>
              
              <div className="map-container rounded overflow-hidden mt-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.821077304485!2d36.76222617326074!3d-1.281063398706754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1bf084fdb2c3%3A0x3419f2185799f585!2sStemtrix%20East%20Africa!5e0!3m2!1sen!2ske!4v1723544421306!5m2!1sen!2ske" 
                  height="300"
                  style={{ border: 0, width: '100%' }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Stemtrix Location on Google Maps"
                ></iframe>
              </div>
              
              <div className="business-hours mt-4">
                <h5 className="text-primary">Business Hours</h5>
                <p className="mb-1">Monday - Friday: 8:00 AM - 5:00 PM</p>
                <p className="mb-0">Saturday: 8:00 AM - 3:00 PM</p>
              </div>
            </section>
          </Col>
          
          <Col lg={7} className={`${animation ? 'slide-in-right' : ''}`}>
            <section className="contact-form-card h-100 p-4 shadow rounded bg-white">
              <h3 className="mb-4 text-primary">Send Us a Message</h3>
              
              {status.message && (
                <Alert variant={status.variant} className="animate__animated animate__fadeIn">
                  {status.message}
                </Alert>
              )}
              
              <Form ref={form} onSubmit={sendEmail} className="contact-form">
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="formName" className="mb-3">
                      <Form.Label>Your Name</Form.Label>
                      <Form.Control 
                        type="text" 
                        name="user_name" 
                        placeholder="Enter your name" 
                        className="form-input" 
                        required 
                      />
                    </Form.Group>
                  </Col>
                  
                  <Col md={6}>
                    <Form.Group controlId="formEmail" className="mb-3">
                      <Form.Label>Your Email</Form.Label>
                      <Form.Control 
                        type="email" 
                        name="user_email" 
                        placeholder="Enter your email" 
                        className="form-input" 
                        required 
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group controlId="formPhone" className="mb-3">
                      <Form.Label>Your Phone Number</Form.Label>
                      <Form.Control 
                        type="tel" 
                        name="user_phone" 
                        placeholder="Enter your phone number" 
                        className="form-input" 
                        required 
                      />
                    </Form.Group>
                  </Col>
                  
                  <Col md={6}>
                    <Form.Group controlId="formSubject" className="mb-3">
                      <Form.Label>Subject</Form.Label>
                      <Form.Control 
                        type="text" 
                        name="subject" 
                        placeholder="Enter subject" 
                        className="form-input"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group controlId="formMessage" className="mb-4">
                  <Form.Label>Your Message</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    name="message" 
                    rows={5} 
                    placeholder="Enter your message" 
                    className="form-input" 
                    required 
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Check 
                    type="checkbox"
                    id="privacyCheck"
                    label="I agree to the privacy policy and terms of service"
                    required
                  />
                </Form.Group>

                <Button 
                  variant="primary" 
                  type="submit" 
                  className="submit-btn w-100 py-2" 
                  disabled={isLoading}
                >
                  {isLoading ? 'Sending...' : (
                    <>
                      <FaPaperPlane className="me-2" /> Send Message
                    </>
                  )}
                </Button>
              </Form>
              
              <div className="text-center mt-4">
                <p className="text-muted">We'll get back to you within 24 hours</p>
              </div>
            </section>
          </Col>
        </Row>
      </Container>
      
      {/* FAQ Section */}
      <Container className="mb-5">
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <section className={`faq-section text-center py-4 ${animation ? 'fade-in' : ''}`}>
              <h3 className="mb-4 text-primary">Frequently Asked Questions</h3>
              <div className="accordion" id="contactFAQ">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      How soon can I expect a response?
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#contactFAQ">
                    <div className="accordion-body">
                      We typically respond to all inquiries within 24 hours during business days.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Do you offer demonstrations of your robotics programs?
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#contactFAQ">
                    <div className="accordion-body">
                      Yes! We regularly host demonstration sessions for schools and interested groups. Contact us to schedule a session.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Can I visit your facility in person?
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#contactFAQ">
                    <div className="accordion-body">
                      Absolutely! We welcome visitors by appointment. Please contact us to arrange a convenient time.
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Contact;
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Helmet } from "react-helmet-async";
import emailjs from 'emailjs-com';
import './Sign.css';
import {
  FaUserFriends,
  FaSchool,
  FaChild,
  FaEnvelope,
  FaPhone,
  FaChalkboardTeacher,
  FaIdBadge,
  FaCommentDots,
  FaPaperPlane,
  FaWhatsapp,
  FaCheckCircle
} from 'react-icons/fa';

const INITIAL_FORM = {
  type: 'parent',
  parentName: '',
  childName: '',
  childAge: '',
  email: '',
  phone: '',
  schoolName: '',
  contactPerson: '',
  designation: '',
  message: ''
};

const Sign = () => {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ message: '', variant: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const switchType = (type) => {
    setFormData((prev) => ({ ...INITIAL_FORM, type }));
    setStatus({ message: '', variant: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ message: '', variant: '' });

    let whatsappMessage = `Hello, I'm interested in the STEM program. Here are my details: %0A`;
    if (formData.type === 'parent') {
      whatsappMessage += `👤 Parent Name: ${formData.parentName || 'N/A'}%0A👦 Child Name: ${
        formData.childName || 'N/A'
      }%0A🎂 Child Age: ${formData.childAge || 'N/A'}%0A📧 Email: ${
        formData.email || 'N/A'
      }%0A📞 Phone: ${formData.phone || 'N/A'}`;
    } else {
      whatsappMessage += `🏫 School Name: ${formData.schoolName || 'N/A'}%0A👨‍🏫 Contact Person: ${
        formData.contactPerson || 'N/A'
      }%0A📌 Designation: ${formData.designation || 'N/A'}%0A📧 Email: ${
        formData.email || 'N/A'
      }%0A📞 Phone: ${formData.phone || 'N/A'}%0A📝 Message: ${formData.message || 'N/A'}`;
    }

    window.open(`https://wa.me/+254728128353?text=${whatsappMessage}`, '_blank');

    emailjs
      .send('service_524d26b', 'template_6pouz1e', { ...formData }, 'gVucfB5W8IvVScEUw')
      .then(() => {
        setStatus({ message: 'Form submitted successfully! We\'ll be in touch shortly.', variant: 'success' });
        setFormData((prev) => ({ ...INITIAL_FORM, type: prev.type }));
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        setStatus({
          message: 'Something went wrong sending your details by email, but your WhatsApp message should still have opened.',
          variant: 'danger'
        });
        setIsLoading(false);
      });
  };

  return (
    <main className="sign-page">
      <Helmet>
        <title>Join Stemtrix — Robotics, Coding &amp; STEM Programs</title>
        <meta
          name="description"
          content="Sign up for Stemtrix's robotics, coding, and STEM programs — for parents enrolling a child or schools bringing STEM education to their students."
        />
      </Helmet>

      <div className="sign-hero">
        <div className="sign-hero-overlay"></div>
        <Container>
          <div className="sign-hero-inner">
            <div className="eyebrow justify-content-center">join stemtrix</div>
            <h1 className="sign-hero-title">Join Our STEM Program</h1>
            <p className="sign-hero-text">
              Whether you're a parent enrolling your child or a school bringing robotics, coding,
              and AI to your students — tell us a bit about you and we'll take it from there.
            </p>
          </div>
        </Container>
      </div>

      <section className="sign-body">
        <Container>
          <Row className="justify-content-center">
            <Col lg={7} xl={6}>
              <div className="sign-card">
                <div className="sign-tabs" role="tablist">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={formData.type === 'parent'}
                    className={`sign-tab ${formData.type === 'parent' ? 'active' : ''}`}
                    onClick={() => switchType('parent')}
                  >
                    <FaUserFriends /> Parent
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={formData.type === 'school'}
                    className={`sign-tab ${formData.type === 'school' ? 'active' : ''}`}
                    onClick={() => switchType('school')}
                  >
                    <FaSchool /> School
                  </button>
                </div>

                {status.message && (
                  <Alert variant={status.variant} className="sign-alert">
                    {status.variant === 'success' && <FaCheckCircle className="me-2" />}
                    {status.message}
                  </Alert>
                )}

                <Form onSubmit={handleSubmit} className="sign-form">
                  {formData.type === 'parent' ? (
                    <>
                      <Form.Group className="mb-3">
                        <Form.Label>
                          <FaUserFriends className="label-icon" /> Parent's Name
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="parentName"
                          placeholder="Enter parent's full name"
                          required
                          value={formData.parentName}
                          onChange={handleChange}
                        />
                      </Form.Group>

                      <Row>
                        <Col md={7}>
                          <Form.Group className="mb-3">
                            <Form.Label>
                              <FaChild className="label-icon" /> Child's Name
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="childName"
                              placeholder="Enter child's name"
                              required
                              value={formData.childName}
                              onChange={handleChange}
                            />
                          </Form.Group>
                        </Col>
                        <Col md={5}>
                          <Form.Group className="mb-3">
                            <Form.Label>Child's Age</Form.Label>
                            <Form.Control
                              type="number"
                              name="childAge"
                              placeholder="Age"
                              min="1"
                              max="19"
                              required
                              value={formData.childAge}
                              onChange={handleChange}
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                    </>
                  ) : (
                    <>
                      <Form.Group className="mb-3">
                        <Form.Label>
                          <FaSchool className="label-icon" /> School Name
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="schoolName"
                          placeholder="Enter school name"
                          required
                          value={formData.schoolName}
                          onChange={handleChange}
                        />
                      </Form.Group>

                      <Row>
                        <Col md={7}>
                          <Form.Group className="mb-3">
                            <Form.Label>
                              <FaChalkboardTeacher className="label-icon" /> Contact Person
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="contactPerson"
                              placeholder="Enter contact person's name"
                              required
                              value={formData.contactPerson}
                              onChange={handleChange}
                            />
                          </Form.Group>
                        </Col>
                        <Col md={5}>
                          <Form.Group className="mb-3">
                            <Form.Label>
                              <FaIdBadge className="label-icon" /> Designation
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="designation"
                              placeholder="e.g. Principal"
                              required
                              value={formData.designation}
                              onChange={handleChange}
                            />
                          </Form.Group>
                        </Col>
                      </Row>

                      <Form.Group className="mb-3">
                        <Form.Label>
                          <FaCommentDots className="label-icon" /> Message
                        </Form.Label>
                        <Form.Control
                          as="textarea"
                          name="message"
                          rows={4}
                          placeholder="Tell us a bit about what you're looking for"
                          value={formData.message}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </>
                  )}

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>
                          <FaEnvelope className="label-icon" /> Email Address
                        </Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          placeholder="Enter email address"
                          required
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-4">
                        <Form.Label>
                          <FaPhone className="label-icon" /> Phone Number
                        </Form.Label>
                        <Form.Control
                          type="tel"
                          name="phone"
                          placeholder="Enter phone number"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Button type="submit" className="sign-submit-btn w-100" disabled={isLoading}>
                    {isLoading ? (
                      'Submitting...'
                    ) : (
                      <>
                        <FaWhatsapp className="me-2" /> Submit &amp; Continue on WhatsApp
                      </>
                    )}
                  </Button>

                  <p className="sign-form-footnote">
                    <FaPaperPlane className="me-1" /> We'll also open WhatsApp so you can send your
                    details directly — no message is sent without you pressing send there.
                  </p>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Sign;
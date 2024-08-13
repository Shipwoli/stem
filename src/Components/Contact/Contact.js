import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <Container className="text-center my-5">
        <h1>Contact Us</h1>
        <p className="lead">We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.</p>
      </Container>

      <Container>
        <Row>
          <Col md={6} className="mb-4">
            <h4>Contact Information</h4>
            <p><strong>Address:</strong> Owashika Road, Gate 238, Lavington, Nairobi</p>
            <p><strong>Phone:</strong> +254 790844918</p>
            <p><strong>Email:</strong> info@stemtrix.co.ke</p>
          </Col>
          <Col md={6}>
            <Form>
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Your Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group controlId="formSubject" className="mb-3">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" placeholder="Enter subject" />
              </Form.Group>

              <Form.Group controlId="formMessage" className="mb-3">
                <Form.Label>Your Message</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Enter your message" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;

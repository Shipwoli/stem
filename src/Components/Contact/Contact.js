import React, { useRef, useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState({ message: '', variant: '' });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a6cxi1k', 'template_6pouz1e', form.current, 'gVucfB5W8IvVScEUw')
      .then((result) => {
          setStatus({ message: 'Message sent successfully!', variant: 'success' });
          form.current.reset();  // Clear the form after successful submission
      }, (error) => {
          setStatus({ message: 'Failed to send the message, please try again later.', variant: 'danger' });
      });
  };

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
            <p><strong>Address:</strong> Owashika Road, Gate 238, Nairobi, Kenya</p>
            <p><strong>Phone:</strong> +254 123 456 789</p>
            <p><strong>Email:</strong> info@stemtrix.co.ke</p>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.821077304485!2d36.76222617326074!3d-1.281063398706754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1bf084fdb2c3%3A0x3419f2185799f585!2sStemtrix%20East%20Africa!5e0!3m2!1sen!2ske!4v1723544421306!5m2!1sen!2ske" 
                height="350"
                width="600"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Google Maps Location"
              ></iframe>
            </div>
          </Col>
          <Col md={6}>
            {status.message && <Alert variant={status.variant}>{status.message}</Alert>}
            <Form ref={form} onSubmit={sendEmail}>
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" name="user_name" placeholder="Enter your name" required />
              </Form.Group>

              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Your Email</Form.Label>
                <Form.Control type="email" name="user_email" placeholder="Enter your email" required />
              </Form.Group>

              <Form.Group controlId="formSubject" className="mb-3">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" name="subject" placeholder="Enter subject" />
              </Form.Group>

              <Form.Group controlId="formMessage" className="mb-3">
                <Form.Label>Your Message</Form.Label>
                <Form.Control as="textarea" name="message" rows={5} placeholder="Enter your message" required />
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

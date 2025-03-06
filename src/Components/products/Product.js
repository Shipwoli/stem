import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import './Product.css'; // Ensure to style this in your CSS file
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
    price: '$299',
  },
  {
    id: 2,
    name: 'WeDo 2.0',
    description: 'An easy-to-use robotics kit for younger learners, featuring simple building elements and engaging programming.',
    imageUrl: wedo,
    price: '$179',
  },
  {
    id: 3,
    name: 'Spike Essential',
    description: 'A comprehensive robotics set that introduces fundamental engineering concepts with fun and interactive activities.',
    imageUrl: spikep,
    price: '$229',
  },
  {
    id: 4,
    name: 'EV3 Mindstorms',
    description: 'A powerful robotics kit for advanced users, enabling complex builds and programming challenges.',
    imageUrl: ev3,
    price: '$349',
  },
];

const phoneNumber = "+254 728 128353"; // Replace with your actual phone number

const ProductPage = () => {
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

      <Container className="my-5">
        <header>
          <h1 className="text-center mb-4">Explore Our Robotics Kits</h1>
        </header>
        <section>
          <Row>
            {products.map((product) => (
              <Col md={6} lg={3} key={product.id} className="mb-4">
                <Card className="shadow-lg border-0 rounded">
                  {product.imageUrl && (
                    <Card.Img
                      variant="top"
                      src={product.imageUrl}
                      alt={`${product.name} Robotics Kit`}
                    />
                  )}
                  <Card.Body className="text-center">
                    <Card.Title className="mb-3">{product.name}</Card.Title>
                    <Card.Text className="mb-3">{product.description}</Card.Text>
                    <Button
                      variant="primary"
                      className="w-100"
                      href={`tel:${phoneNumber}`} // Directs to phone dialer
                    >
                      Call to Order
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </section>
      </Container>
    </main>
  );
};

export default ProductPage;

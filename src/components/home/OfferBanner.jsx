import React from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';

const OfferBanner = () => {
  return (
    <section className="py-4">
      <Container>
        <Card className="border-0 shadow-sm" style={{ backgroundColor: 'var(--primary-dark)', color: 'white', borderRadius: '1.5rem' }}>
          <Card.Body className="p-4 p-md-5">
            <Row className="align-items-center">
              <Col md={8} className="mb-3 mb-md-0">
                <h2 className="fw-bold mb-1">Flat 20% OFF</h2>
                <h4 className="mb-3">On Your First Order</h4>
                <div className="d-inline-block px-3 py-1 bg-white text-dark rounded-pill fw-bold mb-4" style={{ border: '2px dashed var(--primary-light)' }}>
                  Use Code: TQB20
                </div>
                <div>
                  <Button variant="primary" className="btn-primary rounded-pill px-4 fw-bold" style={{ width: 'auto' }}>Order Now</Button>
                </div>
              </Col>
              <Col md={4} className="text-center d-none d-md-block" style={{ height: '200px' }}>
                <img src="/offer-food.jpg" alt="Special Offer" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1rem' }} />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};
export default OfferBanner;
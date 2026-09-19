import React from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import './CSS/OfferBanner.css';

const OfferBanner = () => {
  return (
    <section className="py-4">
      <Container>
        <Row className="g-4">
          <Col lg={6}>
            <Card className="border-0 shadow-sm h-100 offer-card primary">
              <Card.Body className="p-4 p-md-4">
                <Row className="align-items-center h-100">
                  <Col xs={7} md={8}>
                    <h2 className="fw-bold mb-1 offer-title">Flat 20% OFF</h2>
                    <h3 className="mb-3 fs-5">On Your First Order</h3>
                    <div className="d-inline-block px-3 py-1 bg-white text-dark rounded-pill fw-bold mb-3 small offer-code-badge">
                      Code: TQB20
                    </div>
                    <div>
                      <Button variant="primary" size="sm" className="btn-primary rounded-pill px-4 fw-bold shadow-sm offer-btn">Order Now</Button>
                    </div>
                  </Col>
                  <Col xs={5} md={4} className="text-center offer-img-wrapper">
                    <img src="/offer-food.jpg" alt="Special Offer" className="offer-img" />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6}>
            <Card className="border-0 shadow-sm h-100 offer-card secondary">
              <Card.Body className="p-4 p-md-4">
                <Row className="align-items-center h-100">
                  <Col xs={7} md={8}>
                    <h2 className="fw-bold mb-1 offer-title">Free Delivery</h2>
                    <h3 className="mb-3 fs-5">On Orders Above ₹149</h3>
                    <div className="d-inline-block px-3 py-1 bg-white text-dark rounded-pill fw-bold mb-3 small offer-code-badge secondary">
                      Code: FREEDEL
                    </div>
                    <div>
                      <Button variant="dark" size="sm" className="btn-dark rounded-pill px-4 fw-bold shadow-sm offer-btn">Claim Now</Button>
                    </div>
                  </Col>
                  <Col xs={5} md={4} className="text-center offer-img-wrapper">
                    <img src="/hero-food.jpg" alt="Free Delivery Offer" className="offer-img" />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default OfferBanner;
import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { FiSearch, FiMapPin } from 'react-icons/fi';
import './CSS/Hero.css';

const Hero = () => {
  return (
    <section className="hero-section position-relative">
      {/* Light Overlay to ensure text readability */}
      <div className="hero-overlay"></div>

      <Container className="hero-content position-relative">
        <Row className="align-items-center">
          <Col lg={6} className="mb-5 mb-lg-0 pe-lg-5">
            <div className="hero-location-badge d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-4 shadow-sm">
              <FiMapPin color="var(--primary-orange)" />
              <span className="small fw-semibold text-dark">Delivering to your Address</span>
            </div>

            <h1 className="hero-title display-5 fw-bold lh-sm mb-3">
              Street Food, <br />
              <span className="hero-title-highlight">अब आपके दरवाजे तक!</span>
              <span className="hero-title-sub fs-4 fw-medium d-block mt-2">Right at your doorstep!</span>
            </h1>
            <p className="hero-subtitle text-muted mb-4 pe-lg-4">
              अपने पसंदीदा लोकल स्टॉल से ताज़ा और स्वादिष्ट खाना ऑर्डर करें।<br />
              <span className="small">Order fresh and tasty food from your favourite local stalls. Real taste, superfast delivery.</span>
            </p>

            <div className="hero-search-wrapper d-flex bg-white rounded-pill shadow-sm mb-4 border p-1 align-items-center">
              <div className="ps-3 d-flex align-items-center">
                <FiSearch color="var(--primary-dark)" size={18} />
              </div>
              <Form.Control
                placeholder="Search for chaat, momos or stalls..."
                className="hero-search-input border-0 shadow-none bg-transparent"
              />
              <Button className="hero-search-btn rounded-pill px-4 fw-bold">
                Search
              </Button>
            </div>
            
            <div className="d-flex align-items-center gap-3 mt-4">
              <span className="small text-muted fw-semibold">Popular:</span>
              <span className="hero-badge badge rounded-pill bg-light text-dark border px-3 py-2">Golgappe</span>
              <span className="hero-badge badge rounded-pill bg-light text-dark border px-3 py-2">Momos</span>
              <span className="hero-badge badge rounded-pill bg-light text-dark border px-3 py-2">Burger</span>
            </div>
          </Col>
          
          <Col lg={6} className="text-center mt-4 mt-lg-0">
            <div className="position-relative">
              <div className="hero-img-wrapper">
                <img src="/hero-food.jpg" alt="Delicious Street Food" className="hero-img" />
              </div>
              
              {/* Floating Badge */}
              <div className="hero-floating-badge position-absolute shadow-lg bg-white p-3 rounded-4">
                <div className="hero-lightning-icon">⚡</div>
                <div>
                  <div className="hero-superfast-text fw-bold">Superfast</div>
                  <div className="small text-muted">Delivery in 15 mins</div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
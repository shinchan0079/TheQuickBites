import React from 'react';
import { Container, Row, Col, Button, Form, InputGroup } from 'react-bootstrap';
import { FiSearch, FiMapPin } from 'react-icons/fi';

const Hero = () => {
  return (
    <section 
      className="hero-section position-relative" 
      style={{ 
        padding: '1rem 0px',
        backgroundColor: 'rgb(216 159 52)',
        backgroundImage: 'url(/hero-bg.jpg)',
        backgroundSize: '300px auto',
        backgroundRepeat: 'repeat',
        backgroundBlendMode: 'multiply'
      }}
    >
      {/* Light Overlay to ensure text readability */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(255, 255, 255, 0.85)' }}></div>

      <Container className="position-relative" style={{ zIndex: 1 }}>
        <Row className="align-items-center">
          <Col lg={6} className="mb-5 mb-lg-0 pe-lg-5">
            <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-4 shadow-sm" style={{ backgroundColor: 'white', border: '1px solid var(--border-color)' }}>
              <FiMapPin color="var(--primary-orange)" />
              <span className="small fw-semibold text-dark">Delivering to Misrauliya, Santpur</span>
            </div>

            <h1 className="display-4 fw-bold lh-sm mb-3" style={{ color: 'var(--primary-dark)' }}>
              Street Food, <br />
              <span style={{ color: 'var(--primary-orange)' }}>अब आपके दरवाजे तक!</span>
              <span className="fs-3 fw-medium d-block mt-2" style={{ color: 'var(--primary-dark)', opacity: 0.8 }}>Right at your doorstep!</span>
            </h1>
            <p className="lead text-muted mb-4 pe-lg-4" style={{ lineHeight: '1.6' }}>
              अपने पसंदीदा लोकल स्टॉल से ताज़ा और स्वादिष्ट खाना ऑर्डर करें।<br />
              <span className="small">Order fresh and tasty food from your favourite local stalls. Real taste, superfast delivery.</span>
            </p>

            <InputGroup className="mb-4 shadow-sm rounded-pill overflow-hidden border" style={{ maxWidth: '450px', backgroundColor: 'white' }}>
              <InputGroup.Text className="bg-white border-0 ps-4 pe-2">
                <FiSearch color="var(--primary-dark)" size={20} />
              </InputGroup.Text>
              <Form.Control
                placeholder="Search for chaat, momos or stalls..."
                className="border-0 py-3 shadow-none"
                style={{ fontSize: '1rem' }}
              />
              <Button variant="dark" className="btn-dark px-4 fw-bold" style={{ borderRadius: '0 99px 99px 0' }}>
                Search
              </Button>
            </InputGroup>
            
            <div className="d-flex align-items-center gap-3 mt-4">
              <span className="small text-muted fw-semibold">Popular:</span>
              <span className="badge rounded-pill bg-light text-dark border px-3 py-2" style={{ cursor: 'pointer' }}>Golgappe</span>
              <span className="badge rounded-pill bg-light text-dark border px-3 py-2" style={{ cursor: 'pointer' }}>Momos</span>
              <span className="badge rounded-pill bg-light text-dark border px-3 py-2" style={{ cursor: 'pointer' }}>Burger</span>
            </div>
          </Col>
          
          <Col lg={6} className="text-center mt-4 mt-lg-0">
            <div style={{ position: 'relative' }}>
              <div 
                style={{ 
                  width: '100%', height: '400px', 
                  borderRadius: '2rem', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', overflow: 'hidden',
                  border: '8px solid white'
                }}
              >
                <img src="/hero-food.jpg" alt="Delicious Street Food" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              
              {/* Floating Badge */}
              <div className="position-absolute shadow-lg bg-white p-3 rounded-4" style={{ bottom: '-20px', left: '-20px', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', backgroundColor: 'var(--primary-light)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>⚡</div>
                <div>
                  <div className="fw-bold" style={{ color: 'var(--primary-dark)' }}>Superfast</div>
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
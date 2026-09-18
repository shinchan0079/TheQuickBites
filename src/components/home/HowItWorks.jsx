import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const HowItWorks = () => {
  const steps = [
    { num: '1', title: 'Choose Food', desc: 'Browse local stalls' },
    { num: '2', title: 'Select Vendor', desc: 'Pick the best rated' },
    { num: '3', title: 'Place Order', desc: 'Pay online or COD' },
    { num: '4', title: 'Fast Delivery', desc: 'Get it hot & fresh' }
  ];

  return (
    <section className="py-5" style={{ backgroundColor: 'var(--bg-offwhite)' }}>
      <Container>
        <div className="text-center mb-5">
          <h3 className="fw-bold mb-2" style={{ color: 'var(--primary-dark)' }}>How It Works</h3>
          <p className="text-muted">Four simple steps to satisfy your cravings</p>
        </div>
        
        <div className="position-relative mt-5">
          {/* Dashed Line behind steps */}
          <div className="d-none d-md-block position-absolute" style={{ top: '35px', left: '15%', right: '15%', height: '2px', borderTop: '3px dashed var(--primary-light)', zIndex: 0, opacity: 0.5 }}></div>
          
          <Row className="g-4 text-center justify-content-center position-relative" style={{ zIndex: 1 }}>
            {steps.map((step, idx) => (
              <Col xs={6} md={3} key={idx}>
                <div 
                  className="mx-auto mb-3 d-flex align-items-center justify-content-center text-white fw-bold shadow-sm hover-card" 
                  style={{ 
                    width: '70px', height: '70px', borderRadius: '50%', 
                    backgroundColor: 'var(--primary-orange)', fontSize: '1.5rem',
                    border: '5px solid white'
                  }}
                >
                  {step.num}
                </div>
                <h6 className="fw-bold mb-1" style={{ color: 'var(--primary-dark)' }}>{step.title}</h6>
                <p className="small text-muted">{step.desc}</p>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};
export default HowItWorks;
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './CSS/HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    { num: '1', title: 'Choose Food', desc: 'Browse local stalls' },
    { num: '2', title: 'Select Vendor', desc: 'Pick the best rated' },
    { num: '3', title: 'Place Order', desc: 'Pay online or COD' },
    { num: '4', title: 'Fast Delivery', desc: 'Get it hot & fresh' }
  ];

  return (
    <section className="py-5 how-section">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-2 how-title">How It Works</h2>
          <p className="text-muted">Four simple steps to satisfy your cravings</p>
        </div>
        
        <div className="position-relative mt-5">
          {/* Dashed Line behind steps */}
          <div className="d-none d-md-block position-absolute how-dashed-line"></div>
          
          <Row className="g-4 text-center justify-content-center position-relative how-steps-row">
            {steps.map((step, idx) => (
              <Col xs={6} md={3} key={idx}>
                <div className="mx-auto mb-3 d-flex align-items-center justify-content-center text-white fw-bold shadow-sm hover-card how-step-circle">
                  {step.num}
                </div>
                <h4 className="fw-bold mb-1 fs-6 how-step-title">{step.title}</h4>
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
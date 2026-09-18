import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FiZap, FiShield, FiHeart, FiSmile } from 'react-icons/fi';

const WhyChooseUs = () => {
  const reasons = [
    { icon: <FiZap size={32} />, title: 'Fast Delivery', desc: 'Get your favourite street food delivered quickly.', color: '#FFBA00' },
    { icon: <FiShield size={32} />, title: 'Safe & Hygienic', desc: 'Proper packaging and safe handling of food.', color: '#A4C639' },
    { icon: <FiHeart size={32} />, title: 'Support Local', desc: 'Help local vendors grow their business.', color: '#FF7B00' },
    { icon: <FiSmile size={32} />, title: 'Real Taste', desc: 'Authentic local street food flavors.', color: '#03331b' }
  ];

  return (
    <section className="py-5 bg-white">
      <Container>
        <div className="text-center mb-5">
          <h3 className="fw-bold mb-2" style={{ color: 'var(--primary-dark)' }}>Why Choose TheQuickBites?</h3>
          <p className="text-muted">We bring the best street food experience to your home.</p>
        </div>
        
        <Row className="g-4">
          {reasons.map((reason, idx) => (
            <Col md={6} lg={3} key={idx}>
              <Card className="border-0 shadow-sm h-100 text-center p-4 hover-card" style={{ borderRadius: '1rem', backgroundColor: 'var(--bg-offwhite)' }}>
                <div className="mx-auto mb-4 d-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'white', color: reason.color, boxShadow: '0 10px 20px rgba(0,0,0,0.05)' }}>
                  {reason.icon}
                </div>
                <Card.Body className="p-0">
                  <Card.Title className="fw-bold mb-3">{reason.title}</Card.Title>
                  <Card.Text className="text-muted small">
                    {reason.desc}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
export default WhyChooseUs;
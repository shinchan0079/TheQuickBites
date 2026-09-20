import React from 'react';
import { Container, Row, Col, Button, Form, Carousel } from 'react-bootstrap';

import './CSS/Hero.css';

const Hero = () => {
  return (
    <section className="hero-section position-relative">
      {/* Light Overlay to ensure text readability */}
      <div className="hero-overlay"></div>

      <Container className="hero-content position-relative">
        <Row className="align-items-center">
          <Col lg={12} className="text-center mt-4 mt-lg-0">
            <div className="position-relative">
              <div className="hero-img-wrapper">
                <Carousel controls={false} indicators={false} fade interval={3000}>
                  <Carousel.Item>
                    <img src="/slider1.jpg" alt="Delicious Chaat" className="hero-img d-block w-100" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src="/slider2.jpg" alt="Food Stall" className="hero-img d-block w-100" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src="/slider3.jpg" alt="Hot Momos" className="hero-img d-block w-100" />
                  </Carousel.Item>
                </Carousel>
              </div>
              
              {/* Floating Badge */}
              {/* <div 
                className="hero-floating-badge position-absolute shadow-lg bg-white p-3 rounded-4"
                style={{ bottom: 0, left: 0, transform: 'translate(-39%, 15%)' }}
              >
                <div className="hero-lightning-icon">⚡</div>
                <div>
                  <div className="hero-superfast-text fw-bold">Superfast</div>
                  <div className="small text-muted">Delivery in 25 mins</div>
                </div>
              </div> */}
            </div>
          </Col>
        </Row>
        
      
      </Container>
    </section>
  );
};

export default Hero;
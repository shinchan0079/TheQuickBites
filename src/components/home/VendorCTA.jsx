import React from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import { FiCheckCircle } from 'react-icons/fi';
import './CSS/VendorCTA.css';

const VendorCTA = () => {
  return (
    <section className="py-5 bg-white">
      <Container>
        <Card className="border-0 shadow-sm overflow-hidden vendor-cta-card">
          <Row className="g-0 align-items-stretch">
            <Col md={7} lg={8} className="p-4 p-md-5 d-flex flex-column justify-content-center text-center text-md-start">
              <h3 className="fw-bold mb-3 vendor-cta-title">Own a Local Food Stall?</h3>
              <p className="text-muted mb-4 lead vendor-cta-desc">
                Grow your business with TheQuickBites. Reach more customers locally, manage orders easily, and increase your daily sales!
              </p>
              
              <div className="d-flex flex-column flex-md-row gap-3 mb-4 justify-content-center justify-content-md-start">
                <div className="d-flex align-items-center gap-2 text-dark fw-semibold">
                  <FiCheckCircle color="var(--primary-orange)" size={20} /> Zero Onboarding Fees
                </div>
                <div className="d-flex align-items-center gap-2 text-dark fw-semibold">
                  <FiCheckCircle color="var(--primary-orange)" size={20} /> Instant Payouts
                </div>
                <div className="d-flex align-items-center gap-2 text-dark fw-semibold">
                  <FiCheckCircle color="var(--primary-orange)" size={20} /> Easy App Management
                </div>
              </div>

              <div>
                <Button variant="dark" className="btn-dark rounded-pill px-5 py-3 fw-bold shadow-sm vendor-cta-btn">
                  Join As Vendor
                </Button>
              </div>
            </Col>
            <Col md={5} lg={4}>
              <div className="vendor-cta-img-wrapper">
                <img src="/vendor_growth.jpg" alt="Vendor Growth" className="vendor-cta-img" />
              </div>
            </Col>
          </Row>
        </Card>
      </Container>
    </section>
  );
};
export default VendorCTA;
import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';

const VendorCTA = () => {
  return (
    <section className="py-5 bg-white">
      <Container>
        <Card className="border-0 shadow-sm text-center" style={{ backgroundColor: 'var(--bg-offwhite)', borderRadius: '1.5rem' }}>
          <Card.Body className="p-5">
            <h3 className="fw-bold mb-3" style={{ color: 'var(--primary-dark)' }}>Own a Local Food Stall?</h3>
            <p className="text-muted mb-4 lead">
              Grow your business with TheQuickBites. Reach more customers locally!
            </p>
            <Button variant="dark" className="btn-dark rounded-pill px-5 py-2 fw-bold" style={{ width: 'auto' }}>
              Join As Vendor
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};
export default VendorCTA;
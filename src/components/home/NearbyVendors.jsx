import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { vendors } from '../../data/vendors';
import { FiHeart, FiStar, FiClock, FiMapPin } from 'react-icons/fi';

const NearbyVendors = () => {
  return (
    <section className="py-5" style={{ backgroundColor: 'var(--bg-offwhite)' }}>
      <Container>
        <div className="d-flex justify-content-between align-items-end mb-4">
          <h3 className="fw-bold mb-0" style={{ color: 'var(--primary-dark)' }}>Nearby Vendors</h3>
          <span className="fw-bold" style={{ color: 'var(--primary-orange)', cursor: 'pointer' }}>View All</span>
        </div>
        <Row className="g-4">
          {vendors.map((vendor) => (
            <Col md={6} lg={4} key={vendor.id}>
              <Card className="border-0 shadow-sm h-100 hover-card" style={{ borderRadius: '1rem', cursor: 'pointer', overflow: 'hidden' }}>
                <div className="vendor-img-placeholder" style={{ height: '160px' }}>
                  <div style={{ position: 'absolute', top: '15px', right: '15px', backgroundColor: 'rgba(255,255,255,0.9)', padding: '0.4rem', borderRadius: '50%', cursor: 'pointer', zIndex: 2 }}>
                    <FiHeart size={20} color="var(--text-muted)" />
                  </div>
                </div>
                <Card.Body className="p-4">
                  <Card.Title className="fw-bold fs-5 mb-3" style={{ color: 'var(--primary-dark)' }}>{vendor.name}</Card.Title>
                  <div className="d-flex gap-3 text-muted small mb-3 flex-wrap">
                    <span className="fw-bold text-white bg-success px-2 py-1 rounded d-flex align-items-center gap-1" style={{ fontSize: '0.8rem' }}>
                      <FiStar size={12} /> {vendor.rating}
                    </span>
                    <span className="d-flex align-items-center gap-1"><FiMapPin size={14} /> {vendor.distance}</span>
                    <span className="d-flex align-items-center gap-1"><FiClock size={14} /> {vendor.time}</span>
                  </div>
                  <Card.Text className="text-muted small border-top pt-3 mt-2" style={{ borderTopStyle: 'dashed !important' }}>
                    {vendor.tags}
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
export default NearbyVendors;
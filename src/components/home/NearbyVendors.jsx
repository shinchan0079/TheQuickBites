import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { vendors } from '../../data/vendors';
import { FiHeart, FiStar, FiClock, FiMapPin, FiChevronRight } from 'react-icons/fi';
import './CSS/NearbyVendors.css';

const getVendorImage = (name) => {
  if (name.includes('Momos') || name.includes('Rolls')) return '/stall_momos.jpg';
  if (name.includes('Burger') || name.includes('Vada Pav')) return '/stall_burger.jpg';
  if (name.includes('Sweets') || name.includes('Kachori')) return '/stall_sweets.jpg';
  return '/stall_chaat.jpg';
};

const NearbyVendors = () => {
  return (
    <section className="py-5 nearby-vendors-section">
      <Container>
        <div className="d-flex justify-content-between align-items-end mb-4">
          <h3 className="fw-bold mb-0 vendors-title">Nearby Vendors</h3>
          <span className="fw-bold d-none d-md-block vendors-view-all">View All</span>
        </div>
        <Row className="g-4">
          {vendors.map((vendor) => (
            <Col xs={12} sm={6} md={4} lg={3} key={vendor.id}>
              <Card className="border-0 shadow-sm h-100 hover-card vendor-card">
                <div className="vendor-img-wrapper">
                  <img src={getVendorImage(vendor.name)} alt={vendor.name} className="vendor-img" />
                  <div className="vendor-heart-icon">
                    <FiHeart size={18} color="var(--text-muted)" />
                  </div>
                </div>
                <Card.Body className="p-3">
                  <Card.Title className="fw-bold fs-6 mb-2 text-truncate vendor-card-title">{vendor.name}</Card.Title>
                  <div className="d-flex gap-2 text-muted small mb-2 flex-wrap">
                    <span className="fw-bold text-white bg-success px-2 py-1 rounded d-flex align-items-center gap-1 vendor-rating-badge">
                      <FiStar size={10} /> {vendor.rating}
                    </span>
                    <span className="d-flex align-items-center gap-1"><FiMapPin size={12} /> {vendor.distance}</span>
                    <span className="d-flex align-items-center gap-1"><FiClock size={12} /> {vendor.time}</span>
                  </div>
                  <Card.Text className="text-muted small border-top pt-2 mt-1 mb-0 vendor-tags">
                    {vendor.tags}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="text-center mt-5">
          <Button variant="outline-dark" className="rounded-pill px-4 py-2 fw-bold d-inline-flex align-items-center gap-2 w-auto vendors-view-more-btn">
            View More Vendors <FiChevronRight />
          </Button>
        </div>
      </Container>
    </section>
  );
};
export default NearbyVendors;
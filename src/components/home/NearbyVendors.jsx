import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FiHeart, FiStar, FiClock, FiMapPin, FiChevronRight } from 'react-icons/fi';
import './CSS/NearbyVendors.css';

const vendors = [
  { id: 1, name: 'Sharma Chaat Bhandar', rating: '4.6', distance: '0.3 km', time: '15-20 mins', tags: 'Chaat • Golgappe • Pani Puri' },
  { id: 2, name: 'Raju Momos Corner', rating: '4.5', distance: '0.8 km', time: '20-25 mins', tags: 'Momos • Spring Roll' },
  { id: 3, name: 'Gupta Burger Wala', rating: '4.2', distance: '1.2 km', time: '25-30 mins', tags: 'Burger • Fast Food' },
  { id: 4, name: 'Mishra Ji Kachori Wale', rating: '4.8', distance: '1.5 km', time: '10-15 mins', tags: 'Kachori • Samosa • Jalebi' },
  { id: 5, name: 'Kolkata Kathi Rolls', rating: '4.4', distance: '2.0 km', time: '20-30 mins', tags: 'Rolls • Fast Food' },
  { id: 6, name: 'Bikaner Sweets', rating: '4.7', distance: '0.5 km', time: '10-20 mins', tags: 'Sweets • Snacks' },
  { id: 7, name: 'Nathusi Kulche', rating: '4.3', distance: '3.1 km', time: '30-40 mins', tags: 'Chole Kulche • North Indian' },
  { id: 8, name: 'Bombay Vada Pav', rating: '4.5', distance: '2.5 km', time: '25-35 mins', tags: 'Vada Pav • Snacks' }
];

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
                  <div className="d-flex gap-2 text-muted text-sm mb-2 flex-wrap">
                    {/* <span className="fw-bold text-white bg-success px-2 py-1 rounded d-flex align-items-center gap-1 vendor-rating-badge">
                      <FiStar size={10} />
                    </span> */}
                    <span className="d-flex align-items-center gap-1"><FiMapPin size={12} /> {vendor.distance}</span>
                    <span className="d-flex align-items-center gap-1"><FiClock size={12} /> {vendor.time}</span>
                  </div>
                  <Card.Text className="text-muted text-sm border-top pt-2 mt-1 mb-0 vendor-tags">
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
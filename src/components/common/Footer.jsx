import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--primary-dark)', color: 'rgba(255,255,255,0.8)', padding: '4rem 0 2rem 0', marginTop: '4rem' }}>
      <Container>
        <Row className="gy-4 mb-5">
          {/* Brand */}
          <Col lg={4} md={6}>
            <div className="mb-3">
              <img src="/logo.png.png" alt="TheQuickBites Logo" style={{ height: '60px', filter: 'brightness(0) invert(1)' }} />
            </div>
            <p className="pe-lg-5" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
              Thele ka Swad, Ab Har Ghar Tak! Humari koshish hai ki aapko aapke favourite local stalls ka khana, ekdum garma-garam aur fresh mile.
            </p>
            <div className="d-flex gap-3 mt-4">
              <div className="social-icon"><FaInstagram /></div>
              <div className="social-icon"><FaFacebookF /></div>
              <div className="social-icon"><FaYoutube /></div>
            </div>
          </Col>

          {/* Quick Links */}
          <Col lg={2} md={6}>
            <h5 className="text-white fw-bold mb-4">Quick Links</h5>
            <ul className="list-unstyled d-flex flex-column gap-2 footer-links">
              <li>Home</li>
              <li>Orders</li>
              <li>Cart</li>
              <li>Profile</li>
            </ul>
          </Col>

          {/* Support */}
          <Col lg={3} md={6}>
            <h5 className="text-white fw-bold mb-4">Support</h5>
            <ul className="list-unstyled d-flex flex-column gap-2 footer-links">
              <li>Help Center</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </Col>

          {/* Contact / Newsletter */}
          <Col lg={3} md={6}>
            <h5 className="text-white fw-bold mb-4">Partner with us</h5>
            <p style={{ fontSize: '0.9rem' }}>Own a local street food stall? Join us and boost your sales.</p>
            <button className="btn w-100 fw-bold" style={{ backgroundColor: 'var(--primary-orange)', color: 'white', borderRadius: '8px', padding: '0.75rem' }}>
              Join As Vendor
            </button>
          </Col>
        </Row>

        <div className="pt-4 border-top" style={{ borderColor: 'rgba(255,255,255,0.1) !important' }}>
          <Row className="align-items-center text-center text-md-start">
            <Col md={6}>
              <p className="mb-0 small">&copy; {new Date().getFullYear()} TheQuickBites. All rights reserved.</p>
            </Col>
            <Col md={6} className="text-md-end mt-2 mt-md-0">
              <span className="small me-3">Made with ❤️ in India</span>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
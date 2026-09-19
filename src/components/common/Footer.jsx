import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa';
import './CSS/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <Container>
        <Row className="gy-4 mb-5">
          {/* Brand */}
          <Col lg={4} md={6}>
            <div className="mb-4 footer-logo-wrapper">
              <img src="/logo.png.png" alt="TheQuickBites Logo" className="footer-logo" />
            </div>
            <p className="pe-lg-5 footer-desc">
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
            <p className="footer-partner-desc">Own a local street food stall? Join us and boost your sales.</p>
            <button className="btn w-100 fw-bold footer-join-btn">
              Join As Vendor
            </button>
          </Col>
        </Row>

        <div className="pt-4 border-top footer-divider">
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
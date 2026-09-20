import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { FiMapPin, FiSearch } from 'react-icons/fi';
import './CSS/Categories.css';

const categories = [
  { id: 1, name: 'Chaat', image: '/cat_chaat.jpg' },
  { id: 2, name: 'Momos', image: '/cat_momos.jpg' },
  { id: 3, name: 'Burger', image: '/cat_burger.jpg' },
  { id: 4, name: 'Paratha', image: '/cat_paratha.jpg' },
  { id: 5, name: 'Snacks', image: '/cat_snacks.jpg' },
  { id: 6, name: 'Drinks', image: '/cat_drinks.jpg' },
  { id: 7, name: 'Sweets', image: '/cat_sweets.jpg' },
  { id: 8, name: 'More', image: '/cat_more.jpg' }
];

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(1);

  return (
    <section className="py-5 bg-white">
      <Container>
        <div className="mb-5 text-center mt-2">

          {/* Search Box Row */}
          <Row className="justify-content-center">
            <Col lg={8} className="d-flex flex-column align-items-center">
              <div className="hero-search-wrapper w-100 d-flex bg-white rounded-pill shadow mb-3 border p-0 align-items-center overflow-hidden" style={{ maxWidth: '600px' }}>
                <div className="ps-4 d-flex align-items-center">
                  <FiSearch color="var(--primary-dark)" size={20} />
                </div>
                <Form.Control
                  placeholder="Search for chaat, momos or stalls..."
                  className="hero-search-input border-0 shadow-none bg-transparent py-3 fs-6"
                />
                <Button style={{ borderRadius: '0 var(--radius-full) var(--radius-full) 0', width: 'auto' }} className="hero-search-btn btn-primary px-3 px-md-5 py-2 py-md-3 fw-bold h-100 m-0">
                  Search
                </Button>
              </div>

              <div className="d-flex align-items-center justify-content-center gap-3 flex-wrap">
                <span className="small text-muted fw-semibold">Popular:</span>
                <span className="hero-badge badge rounded-pill bg-white text-dark shadow-sm border px-3 py-2">Golgappe</span>
                <span className="hero-badge badge rounded-pill bg-white text-dark shadow-sm border px-3 py-2">Momos</span>
                <span className="hero-badge badge rounded-pill bg-white text-dark shadow-sm border px-3 py-2">Burger</span>
                <span className="hero-badge badge rounded-pill bg-white text-dark shadow-sm border px-3 py-2">Kachori</span>
              </div>
            </Col>
          </Row>


          <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-4 shadow-sm bg-white" style={{ border: '1px solid var(--border-color)' }}>
            <FiMapPin color="var(--primary-orange)" />
            <span className="text-sm fw-semibold text-dark">Delivering to your Address</span>
          </div>

          <h1 className="fw-bold lh-sm mb-3 fs-2" style={{ color: 'var(--primary-dark)' }}>
            Street Food, <br className="d-block d-md-none" />
            <span style={{ color: 'var(--primary-orange)' }}>अब आपके दरवाजे तक!</span>
            <span className="fs-4 fw-medium d-block mt-2" style={{ color: 'var(--primary-dark)', opacity: 0.8 }}>Right at your doorstep!</span>
          </h1>
          <p className="text-muted mb-5 px-3 mx-auto" style={{ lineHeight: 1.6, fontSize: '1.05rem', maxWidth: '600px' }}>
            अपने पसंदीदा लोकल स्टॉल से ताज़ा और स्वादिष्ट खाना ऑर्डर करें।<br />
            <span className="small">Order fresh and tasty food from your favourite local stalls. Real taste, superfast delivery.</span>
          </p>
        </div>

        <h2 className="fw-bold mb-4 categories-section-title text-center text-md-start">What's on your mind?</h2>
        <Row className="g-4 text-center">
          {categories.map((cat) => (
            <Col xs={4} md={3} lg={2} key={cat.id}>
              <div
                className={`category-wrapper ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <div className="mx-auto mb-2 shadow-sm d-flex align-items-center justify-content-center category-card">
                  <img src={cat.image} alt={cat.name} className="category-img" />
                </div>
                <span className="fw-semibold category-title">
                  {cat.name}
                </span>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
export default Categories;
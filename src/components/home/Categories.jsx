import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { categories } from '../../data/categories';
import './CSS/Categories.css';

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(1);

  return (
    <section className="py-5 bg-white">
      <Container>
        <h3 className="fw-bold mb-4 categories-section-title">What's on your mind?</h3>
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
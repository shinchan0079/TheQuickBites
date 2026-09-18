import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { categories } from '../../data/categories';

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(1);

  return (
    <section className="py-5 bg-white">
      <Container>
        <h3 className="fw-bold mb-4" style={{ color: 'var(--primary-dark)' }}>What's on your mind?</h3>
        <Row className="g-4 text-center">
          {categories.map((cat) => (
            <Col xs={4} md={3} lg={2} key={cat.id}>
              <div 
                style={{ cursor: 'pointer' }}
                onClick={() => setActiveCategory(cat.id)}
              >
                <div 
                  className={`mx-auto mb-2 shadow-sm d-flex align-items-center justify-content-center category-card ${activeCategory === cat.id ? 'active' : ''}`}
                  style={{ 
                    width: '90px', height: '90px', borderRadius: '50%', 
                    backgroundColor: 'var(--bg-offwhite)', overflow: 'hidden',
                    border: activeCategory === cat.id ? '3px solid var(--primary-orange)' : '3px solid transparent',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <img src={cat.image} alt={cat.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <span className="fw-semibold" style={{ color: activeCategory === cat.id ? 'var(--primary-orange)' : 'var(--text-dark)' }}>
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
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { foods } from '../../data/foods';

const getImage = (name) => {
  if (name.includes('Gol Gappe') || name.includes('Puri')) return '/cat_chaat.jpg';
  if (name.includes('Momos')) return '/cat_momos.jpg';
  if (name.includes('Burger')) return '/cat_burger.jpg';
  return '/cat_snacks.jpg';
};

const PopularFoods = () => {
  return (
    <section className="py-5 bg-white">
      <Container>
        <h3 className="fw-bold mb-4" style={{ color: 'var(--primary-dark)' }}>Popular Near You</h3>
        <Row className="g-4">
          {foods.map((food) => (
            <Col xs={12} sm={6} md={4} lg={3} key={food.id}>
              <Card className="border-0 shadow-sm h-100 hover-card" style={{ borderRadius: '1rem', overflow: 'hidden' }}>
                <div style={{ height: '180px', overflow: 'hidden' }}>
                  <img src={getImage(food.name)} alt={food.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <Card.Body className="d-flex flex-column justify-content-between p-3">
                  <div>
                    <Card.Title className="fw-bold fs-6 mb-1">{food.name}</Card.Title>
                    <Card.Text className="text-muted small mb-3">{food.vendor}</Card.Text>
                  </div>
                  <div className="d-flex justify-content-between align-items-center border-top pt-3 mt-1" style={{ borderTopStyle: 'dashed !important' }}>
                    <div className="fw-bold fs-5" style={{ color: 'var(--primary-dark)' }}>₹{food.price}</div>
                    <Button variant="outline-success" size="sm" className="rounded-pill px-4 fw-bold shadow-sm" style={{ borderColor: 'var(--primary-light)', color: 'var(--primary-dark)' }}>
                      ADD <span style={{ fontSize: '1.2rem', lineHeight: '0' }}>+</span>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
export default PopularFoods;
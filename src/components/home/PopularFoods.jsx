import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { foods } from '../../data/foods';
import { FiChevronRight } from 'react-icons/fi';
import './CSS/PopularFoods.css';

const getImage = (name) => {
  if (name.includes('Gol Gappe') || name.includes('Puri') || name.includes('Samosa')) return '/cat_chaat.jpg';
  if (name.includes('Momos')) return '/cat_momos.jpg';
  if (name.includes('Burger')) return '/cat_burger.jpg';
  return '/cat_snacks.jpg';
};

const PopularFoods = () => {
  return (
    <section className="py-5 bg-white">
      <Container>
        <h3 className="fw-bold mb-4 popular-foods-title">Popular Near You</h3>
        <Row className="g-4">
          {foods.map((food) => (
            <Col xs={12} sm={6} md={4} lg={3} key={food.id}>
              <Card className="border-0 shadow-sm h-100 hover-card food-card">
                <div className="food-img-wrapper">
                  <img src={getImage(food.name)} alt={food.name} className="food-img" />
                </div>
                <Card.Body className="d-flex flex-column justify-content-between p-3">
                  <div>
                    <Card.Title className="fw-bold fs-6 mb-1">{food.name}</Card.Title>
                    <Card.Text className="text-muted small mb-3">{food.vendor}</Card.Text>
                  </div>
                  <div className="d-flex justify-content-between align-items-center border-top pt-3 mt-1 food-footer">
                    <div className="fw-bold fs-5 food-price">₹{food.price}</div>
                    <Button variant="outline-success" size="sm" className="rounded-pill px-3 py-1 fw-bold shadow-sm w-auto food-add-btn">
                      ADD <span className="food-add-icon">+</span>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="text-center mt-5">
          <Button variant="outline-dark" className="rounded-pill px-4 py-2 fw-bold d-inline-flex align-items-center gap-2 w-auto popular-explore-btn">
            Explore Full Menu <FiChevronRight />
          </Button>
        </div>
      </Container>
    </section>
  );
};
export default PopularFoods;
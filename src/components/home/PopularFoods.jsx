import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FiChevronRight } from 'react-icons/fi';
import './CSS/PopularFoods.css';

const foods = [
  { id: 1, name: 'Gol Gappe', vendor: 'Sharma Chaat Bhandar', price: '30', rating: '4.7' },
  { id: 2, name: 'Dahi Puri', vendor: 'Sharma Chaat Bhandar', price: '40', rating: '4.8' },
  { id: 3, name: 'Veg Momos', vendor: 'Raju Momos Corner', price: '50', rating: '4.5' },
  { id: 4, name: 'Aloo Tikki Burger', vendor: 'Gupta Burger Wala', price: '35', rating: '4.4' },
  { id: 5, name: 'Paneer Momos', vendor: 'Raju Momos Corner', price: '70', rating: '4.6' },
  { id: 6, name: 'Samosa Chaat', vendor: 'Sharma Chaat Bhandar', price: '45', rating: '4.7' },
  { id: 7, name: 'Cheese Burger', vendor: 'Gupta Burger Wala', price: '50', rating: '4.5' },
  { id: 8, name: 'Kurkure Momos', vendor: 'Raju Momos Corner', price: '80', rating: '4.8' }
];

const getImage = (name) => {
  if (name.includes('Gol Gappe') || name.includes('Puri') || name.includes('Samosa')) return '/cat_chaat.jpg';
  if (name.includes('Momos')) return '/cat_momos.jpg';
  if (name.includes('Burger')) return '/cat_burger.jpg';
  return '/cat_snacks.jpg';
};

const PopularFoods = ({ cartItems = [], addToCart, decreaseQuantity }) => {
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
                    <Card.Text className="text-muted text-sm mb-3">{food.vendor}</Card.Text>
                  </div>
                  <div className="d-flex justify-content-end align-items-center border-top pt-3 mt-1 gap-4 food-footer">
                    <div className="fw-bold fs-5 food-price mb-0">₹{food.price}</div>
                    {cartItems.find((i) => i.id === food.id) ? (
                      <div className="d-flex align-items-center border border-success rounded-pill px-2 py-1 bg-white">
                        <div 
                          className="px-2 fw-bold text-success cursor-pointer fs-5" 
                          style={{cursor: 'pointer'}}
                          onClick={() => decreaseQuantity(food.id)}
                        >
                          -
                        </div>
                        <div className="px-2 fw-bold text-success">{cartItems.find((i) => i.id === food.id).quantity}</div>
                        <div 
                          className="px-2 fw-bold text-success cursor-pointer fs-5" 
                          style={{cursor: 'pointer'}}
                          onClick={() => addToCart({ ...food, image: getImage(food.name) })}
                        >
                          +
                        </div>
                      </div>
                    ) : (
                      <Button 
                        variant="success" 
                        className="btn-success rounded-pill px-4 py-2 fw-bold shadow-sm food-add-btn"
                        onClick={() => addToCart({ ...food, image: getImage(food.name) })}
                      >
                        ADD
                      </Button>
                    )}
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
import React from 'react';
import { Carousel } from 'react-bootstrap';
import './CSS/Hero.css';

const Hero = () => {
  return (
    <section className="hero-section position-relative">
      <div className="hero-img-wrapper">
        <Carousel controls={true} touch={true} indicators={true} fade interval={3000}>
          <Carousel.Item>
            <img src="/slider1.jpg" alt="Delicious Chaat" className="hero-img d-block w-100" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="/slider2.jpg" alt="Food Stall" className="hero-img d-block w-100" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="/slider3.jpg" alt="Hot Momos" className="hero-img d-block w-100" />
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
};

export default Hero;
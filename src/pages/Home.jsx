import React from 'react';

import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import BottomNav from '../components/common/BottomNav';

import Hero from '../components/home/Hero';
import Categories from '../components/home/Categories';
import OfferBanner from '../components/home/OfferBanner';
import NearbyVendors from '../components/home/NearbyVendors';
import PopularFoods from '../components/home/PopularFoods';
import WhyChooseUs from '../components/home/WhyChooseUs';
import HowItWorks from '../components/home/HowItWorks';
import VendorCTA from '../components/home/VendorCTA';

const Home = ({ cartItems, addToCart, decreaseQuantity }) => {
  return (
    <div className="main-layout">
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <OfferBanner />
        <NearbyVendors />
        <PopularFoods cartItems={cartItems} addToCart={addToCart} decreaseQuantity={decreaseQuantity} />
        <WhyChooseUs />
        <HowItWorks />
        <VendorCTA />
      </main>
      {/* <Footer /> */}
      <BottomNav />
    </div>
  );
};

export default Home;
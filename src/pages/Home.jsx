import React from 'react';

import Hero from '../components/home/Hero';
import Categories from '../components/home/Categories';
import OfferBanner from '../components/home/OfferBanner';
import NearbyVendors from '../components/home/NearbyVendors';
import PopularFoods from '../components/home/PopularFoods';
import WhyChooseUs from '../components/home/WhyChooseUs';
import HowItWorks from '../components/home/HowItWorks';
import VendorCTA from '../components/home/VendorCTA';

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <OfferBanner />
      <NearbyVendors />
      <PopularFoods />
      <WhyChooseUs />
      <HowItWorks />
      <VendorCTA />
    </>
  );
};

export default Home;
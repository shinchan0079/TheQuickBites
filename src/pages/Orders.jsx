import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import BottomNav from '../components/common/BottomNav';

const Orders = () => {
  return (
    <div className="main-layout">
      <Navbar />
      <main className="container" style={{ padding: '2rem 1rem', textAlign: 'center' }}>
        <h2>This is Orders Page</h2>
      </main>
      {/* <Footer /> */}
      <BottomNav />
    </div>
  );
};

export default Orders;
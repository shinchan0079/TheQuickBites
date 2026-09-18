import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import BottomNav from '../components/common/BottomNav';

const MainLayout = () => {
  return (
    <div className="main-layout">
      {/* Navbar will show on desktop, hide on mobile */}
      <Navbar />
      
      <main>
        <Outlet />
      </main>
      
      <Footer />
      {/* BottomNav will show on mobile, hide on desktop */}
      <BottomNav />
    </div>
  );
};

export default MainLayout;

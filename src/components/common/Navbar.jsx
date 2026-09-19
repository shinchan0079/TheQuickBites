import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FiHome, FiClipboard, FiShoppingCart, FiUser, FiMapPin, FiBell, FiChevronDown } from 'react-icons/fi';
import './CSS/Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="custom-navbar">
      <div className="d-flex align-items-center gap-4">
        {/* Logo */}
        <div className="navbar-logo-wrapper" onClick={() => navigate('/')}>
          <img src="/logo.png.png" alt="TheQuickBites Logo" className="navbar-logo" />
        </div>

        {/* Location Selector (Interactive) */}
        <div className="navbar-location d-none d-lg-flex align-items-center text-muted">
          <FiMapPin color="var(--primary-orange)" className="me-2" />
          <span className="fw-semibold me-1 text-dark">Deliver to Address</span>
          <FiChevronDown />
        </div>
      </div>

      {/* Navigation Links */}
      <div className="nav-links d-none d-md-flex">
        <div className={`nav-item ${isActive('/') ? 'active-nav' : ''}`} onClick={() => navigate('/')}>
          <FiHome /> Home
        </div>
        <div className={`nav-item ${isActive('/orders') ? 'active-nav' : ''}`} onClick={() => navigate('/orders')}>
          <FiClipboard /> Orders
        </div>
        <div className={`nav-item ${isActive('/cart') ? 'active-nav' : ''}`} onClick={() => navigate('/cart')}>
          <FiShoppingCart /> Cart
        </div>
      </div>

      {/* Right Side Icons */}
      <div className="d-flex align-items-center gap-3">
        {/* Search Icon (Mobile) */}
        <div className="navbar-mobile-cart d-md-none">
          <FiShoppingCart onClick={() => navigate('/cart')} />
        </div>

        {/* Notification */}
        <div className="navbar-notification d-none d-md-block hover-bg-light rounded-circle">
          <FiBell size={20} color="var(--text-dark)" />
          <span className="navbar-notification-dot"></span>
        </div>

        {/* User Profile / Avatar */}
        <div 
          className="navbar-profile d-flex align-items-center gap-2 hover-bg-light rounded-pill p-1 pe-3" 
          onClick={() => navigate('/profile')}
        >
          <div className="navbar-avatar">
            <FiUser size={16} />
          </div>
          <span className="d-none d-md-block fw-semibold text-sm">User</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
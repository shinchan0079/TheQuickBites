import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FiHome, FiClipboard, FiShoppingCart, FiUser, FiMapPin, FiBell, FiChevronDown } from 'react-icons/fi';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="desktop-navbar">
      <div className="d-flex align-items-center gap-4">
        {/* Logo */}
        <div style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }} onClick={() => navigate('/')}>
          <img src="/logo.png.png" alt="TheQuickBites Logo" style={{ height: '48px', objectFit: 'contain' }} />
        </div>

        {/* Location Selector (Interactive) */}
        <div className="d-none d-lg-flex align-items-center text-muted" style={{ cursor: 'pointer', fontSize: '0.9rem', padding: '0.5rem 1rem', borderRadius: '99px', backgroundColor: 'var(--bg-offwhite)' }}>
          <FiMapPin color="var(--primary-orange)" className="me-2" />
          <span className="fw-semibold me-1 text-dark">Santpur, Misrauliya</span>
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
        <div className="d-md-none" style={{ cursor: 'pointer', fontSize: '1.25rem' }}>
          <FiShoppingCart onClick={() => navigate('/cart')} />
        </div>

        {/* Notification */}
        <div style={{ position: 'relative', cursor: 'pointer', padding: '0.5rem' }} className="d-none d-md-block hover-bg-light rounded-circle">
          <FiBell size={20} color="var(--text-dark)" />
          <span style={{ position: 'absolute', top: '4px', right: '4px', width: '8px', height: '8px', backgroundColor: 'var(--primary-orange)', borderRadius: '50%' }}></span>
        </div>

        {/* User Profile / Avatar */}
        <div 
          className="d-flex align-items-center gap-2 hover-bg-light rounded-pill p-1 pe-3" 
          style={{ cursor: 'pointer', border: '1px solid var(--border-color)' }}
          onClick={() => navigate('/profile')}
        >
          <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--primary-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
            <FiUser size={16} />
          </div>
          <span className="d-none d-md-block fw-semibold text-sm">Abhay</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
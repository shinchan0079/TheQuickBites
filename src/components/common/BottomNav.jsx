import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FiHome, FiClipboard, FiShoppingCart, FiUser } from 'react-icons/fi';
import './CSS/BottomNav.css';

const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const navItems = [
    { path: '/', icon: <FiHome />, label: 'Home' },
    { path: '/orders', icon: <FiClipboard />, label: 'Orders' },
    { path: '/cart', icon: <FiShoppingCart />, label: 'Cart' },
    { path: '/profile', icon: <FiUser />, label: 'Profile' },
  ];

  return (
    <div className="bottom-nav">
      {navItems.map((item) => (
        <div 
          key={item.path} 
          className={`bottom-nav-item bottom-nav-wrapper ${location.pathname === item.path ? 'active' : ''}`}
          onClick={() => navigate(item.path)}
        >
          <span className={`bottom-nav-icon ${location.pathname === item.path ? 'active' : 'inactive'}`}>
            {item.icon}
          </span>
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default BottomNav;
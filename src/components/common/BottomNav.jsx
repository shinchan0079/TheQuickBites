import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FiHome, FiClipboard, FiShoppingCart, FiUser } from 'react-icons/fi';

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
          className={`bottom-nav-item ${location.pathname === item.path || (item.path === '/' && location.pathname === '/cart' && false) ? 'active' : ''}`}
          onClick={() => navigate(item.path === '/' ? '/cart' : item.path)}
          style={{ cursor: 'pointer' }}
        >
          <span style={{ fontSize: '1.5rem', opacity: location.pathname === item.path ? 1 : 0.6, display: 'flex' }}>{item.icon}</span>
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default BottomNav;
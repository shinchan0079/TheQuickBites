import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiUser, FiLock, FiEye } from 'react-icons/fi';
import { FaGoogle, FaApple } from 'react-icons/fa';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="login-split">
      {/* Brand Panel (Visible on Desktop) */}
      <div className="login-brand">
        <img src="/logo.png.png" alt="TheQuickBites Logo" style={{ width: '250px', objectFit: 'contain', marginBottom: '1rem' }} />
        <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem' }}>
          Street Food. Local Stalls. Instant Happiness.
        </p>
      </div>

      {/* Auth Card Panel */}
      <div className="login-form-container">
        <div className="login-form-wrapper flex flex-col h-full">
          {/* Mobile Header / Brand */}
          <div className="flex flex-col items-center md-hidden" style={{ marginTop: '3rem', marginBottom: '3rem' }}>
            <img src="/logo.png.png" alt="TheQuickBites Logo" style={{ height: '60px', objectFit: 'contain' }} />
            <p className="text-center text-sm" style={{ marginTop: '1rem', color: 'rgba(255,255,255,0.7)' }}>
              Login to continue your<br/>food journey.
            </p>
          </div>

          {/* Form */}
          <div className="flex flex-col gap-4">
            <div style={{ position: 'relative' }}>
              <FiUser style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.6)', fontSize: '1.2rem' }} />
              <input 
                type="text" 
                placeholder="Mobile Number" 
                style={{ width: '100%', padding: '1rem 1rem 1rem 3rem', borderRadius: '99px', border: 'none', outline: 'none', backgroundColor: 'rgba(255,255,255,0.1)', color: 'white' }}
              />
            </div>
            <div style={{ position: 'relative' }}>
              <FiLock style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.6)', fontSize: '1.2rem' }} />
              <input 
                type="password" 
                placeholder="Password" 
                style={{ width: '100%', padding: '1rem 1rem 1rem 3rem', borderRadius: '99px', border: 'none', outline: 'none', backgroundColor: 'rgba(255,255,255,0.1)', color: 'white' }}
              />
              <FiEye style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', color: 'rgba(255,255,255,0.6)', fontSize: '1.2rem' }} />
            </div>

            <button className="btn btn-primary" style={{ marginTop: '1rem' }} onClick={() => navigate('/cart')}>
              Login
            </button>
          </div>

          {/* Social & Signup */}
          <div className="flex flex-col items-center" style={{ marginTop: 'auto', marginBottom: '2rem' }}>
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '1rem' }}>or continue with</p>
            <div className="flex gap-4">
              <button style={{ width: '50px', height: '50px', borderRadius: '50%', border: 'none', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '1.2rem' }}>
                <FaGoogle color="#DB4437" />
              </button>
              <button style={{ width: '50px', height: '50px', borderRadius: '50%', border: 'none', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '1.4rem' }}>
                <FaApple color="#000000" />
              </button>
            </div>
            <p className="text-sm" style={{ marginTop: '2rem' }}>
              Don't have an account? <span style={{ color: 'var(--primary-orange)', fontWeight: '600', cursor: 'pointer' }}>Sign Up</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div className="auth-layout">
      {/* 
        This is where the left branding panel could also go,
        or it can be placed within the Login page itself as per the user's structure.
      */}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;

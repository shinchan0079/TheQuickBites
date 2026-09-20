import React from 'react';
import './CSS/Login.css';
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  return (
    <>
        <div className="login-page-outer">
            <div className="logo-outer">
              <img src="/images/logo.png" alt="img" />
            </div>

            <div className="headline">
              Login to continue your
              <br />
              food journey.
            </div>

            <div className="login-outer">
              <div className="input-outer">
                <div className="user-icon"><FaRegUser /></div>
                <div className="input-box">
                  <input type="text" placeholder='Mobile Number' className='input-text' />
                </div>
              </div>
              <br />
              <div className="input-outer">
                <div className="user-icon"><RiLockPasswordLine /></div>
                <div className="input-box">
                  <input type="text" placeholder='OTP' className='input-text' />
                </div>
              </div>

              <br />
              <button onClick={() => navigate('/')}>Login</button>

              <br />
              <div className="continue-outer">
                <h3>or continue with</h3>
              </div>

              <br />
              <div className="login-icon-outer">
                <div className="google-icon">
                  <img src="/images/google.png" alt="" />
                </div>
                <div className="apple-icon">
                  <img src="/images/apple.png" alt="" />
                </div>
              </div>

              <br />

              <div className="footer-line-outer">
                <h3>Don't have an account? <span>Sign Up</span></h3>
              </div>
            </div>
        </div>
    </>
  )
}

export default Login;
import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import './LoginPage.css';
import logo from '../imgs/logo.png';
import userIcon from '../imgs/user.png';
import lockIcon from '../imgs/lock.png';

const LoginPage = () => {
  const navigate = useNavigate(); 

  const handleLogin = () => {
    navigate('/');
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo-img" />
        </div>

        <h2 className="login-title">Log In</h2>

        <form className="login-form">
          
          <div className="input-group">
            <div className="icon-wrapper">
              <img src={userIcon} alt="User" className="input-icon-img" />
            </div>
            <input 
              type="email" 
              placeholder="Enter email" 
              className="form-input" 
            />
          </div>

          <div className="input-group">
            <div className="icon-wrapper">
              <img src={lockIcon} alt="Lock" className="input-icon-img" />
            </div>
            <input 
              type="password" 
              placeholder="Enter password" 
              className="form-input" 
            />
          </div>

          <div className="options-row">
            <label className="remember-me">
              Remember Me
              <input type="checkbox" className="custom-checkbox" />
              <span className="checkmark"></span>
            </label>
          </div>

          <button type="button" className="login-btn" onClick={handleLogin}>
            Login
          </button>

          <div className="forgot-password-row">
        
            <Link to="/ForgetPassword" className="forgot-link">Forget password?</Link>
          </div>

        </form>

        <div className="social-login-section">
          <p>Or login with</p>
          <div className="social-buttons">
            <button className="social-btn">
              <span className="social-icon fb-text">f</span>
              Facebook
            </button>
            <button className="social-btn">
              <span className="social-icon">G</span>
              Google
            </button>
            <button className="social-btn">
              <span className="social-icon in-text">in</span>
              LinkedIn
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;
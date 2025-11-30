import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ForgetPassword.css';
import logo from '../imgs/logo.png';
import userIcon from '../imgs/user.png';

const ForgetPassword = () => {
  const navigate = useNavigate();

  const handleSendCode = () => {

    navigate('/reset-password');
  };

  return (
    <div className="forget-container">
      <div className="forget-wrapper">
        
        {/* Logo Section */}
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo-img" />
        </div>

        <h2 className="forget-title">Forget Password</h2>
        <p className="forget-text">
          Please enter your email address associated with your account to receive a verification code.
        </p>

        <form className="forget-form">
          
          <div className="input-group">
            <div className="icon-wrapper">
              <img src={userIcon} alt="User" className="input-icon-img" />
            </div>
            <input 
              type="email" 
              placeholder="Enter email address" 
              className="form-input" 
            />
          </div>

          <button type="button" className="forget-btn" onClick={handleSendCode}>
            Send Code
          </button>

          <div className="back-login-row">
            <button 
              type="button" 
              className="back-link" 
              onClick={() => navigate('/login')}
            >
              Back to Login
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};

export default ForgetPassword;
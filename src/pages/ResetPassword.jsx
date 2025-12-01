import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ForgetPassword.css';
import userIcon from '../imgs/user.png';
import lockIcon from '../imgs/lock.png';
import { Helmet } from "react-helmet";

const ResetPassword = () => {
  const navigate = useNavigate();

  const handleReset = () => {
    navigate('/'); 
  };

  return (
    <>
        <Helmet>
        <title>Reset Password</title>
        <meta name="description" content="This is the reset password page" />
        <meta property="og:title" content="Analytics" />
        <link rel="icon" type="image/png" href="/icon.png" sizes="16x16" /> 
     </Helmet>
   
    <div className="forget-container">
      <div className="forget-wrapper">
        
        <h2 className="forget-title text-center">Reset Account Password</h2>

        <form className="forget-form">
          
          <p className="form-label">Enter the verification code sent to your email</p>
          
          <div className="input-grouup">
            <div className="icon-wrapper">
              <img src={userIcon} alt="User" className="input-icon-img" />
            </div>
            <input 
              type="text" 
              placeholder="Enter Verification Code" 
              className="form-input" 
            />
          </div>

          <p className="form-label spacer-top">Reset Password</p>

          <div className="input-grouup">
            <div className="icon-wrapper">
              <img src={userIcon} alt="User" className="input-icon-img" />
            </div>
            <input 
              type="password" 
              placeholder="Enter new password" 
              className="form-input" 
            />
          </div>

          <div className="input-grouup">
            <div className="icon-wrapper">
              <img src={lockIcon} alt="Lock" className="input-icon-img" />
            </div>
            <input 
              type="password" 
              placeholder="Confirm password" 
              className="form-input" 
            />
          </div>

          <button type="button" className="forget-btn" onClick={handleReset}>
            Reset Password
          </button>

        </form>

      </div>
    </div>
     </>
  );
};

export default ResetPassword;
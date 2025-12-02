import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ForgetPassword.css';
import logo from '../imgs/logo.png';
import userIcon from '../imgs/user.png';
import { Helmet } from "react-helmet";
import { useLanguage } from '../language/LanguageContext';
import NavButtons from '../common/NavButtons';

const ForgetPassword = () => {
  const navigate = useNavigate();
  const { t, language } = useLanguage(); 

  const handleSendCode = () => {
    navigate('/ResetPassword');
  };

  const isRtl = language === 'ar';
  const directionStyle = { direction: isRtl ? 'rtl' : 'ltr' };
  const inputStyle = { textAlign: isRtl ? 'right' : 'left' };

  return (
    <>
     <Helmet>
        <title>{t.metaForgetTitle}</title>
        <meta name="description" content={t.metaForgetDesc} />
        <meta property="og:title" content={t.forgetTitle} />
        <link rel="icon" type="image/png" href="/icon.png" sizes="16x16" /> 
     </Helmet>
   
   <NavButtons/>
    <div className="forget-container" style={directionStyle}>
      <div className="forget-wrapper">
        
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo-img" />
        </div>

        <h2 className="forget-title">{t.forgetTitle}</h2>
        <p className="forget-text">
          {t.forgetText}
        </p>

        <form className="forget-form">
          
          <div className="input-grouup">
            <div className="icon-wrapper">
              <img src={userIcon} alt="User" className="input-icon-img" />
            </div>
            <input 
              type="email" 
              placeholder={t.enterEmailAddress} 
              className="form-input" 
              style={inputStyle}
            />
          </div>

          <button type="button" className="forget-btn" onClick={handleSendCode}>
            {t.sendCodeBtn}
          </button>

          <div className="back-login-row">
            <button 
              type="button" 
              className="back-link" 
              onClick={() => navigate('/LoginPage')}
            >
              {t.backToLogin}
            </button>
          </div>

        </form>

      </div>
    </div>
     </>
  );
};

export default ForgetPassword;
import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import './LoginPage.css';
import logo from '../imgs/logo.png';
import userIcon from '../imgs/user.png';
import lockIcon from '../imgs/lock.png';
import { Helmet } from "react-helmet";
import { useLanguage } from '../language/LanguageContext';
import NavButtons from '../common/NavButtons';

const LoginPage = () => {
  const navigate = useNavigate(); 
  const { t, language } = useLanguage();

  const handleLogin = () => {
    navigate('/');
  };

  const isRtl = language === 'ar';
  const directionStyle = { direction: isRtl ? 'rtl' : 'ltr' };
  const inputStyle = { textAlign: isRtl ? 'right' : 'left' };

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow"></meta>
        <title>{t.metaTitle}</title>
        <meta name="description" content={t.metaDesc} />
        <meta property="og:title" content="Login" />
        <link rel="icon" type="image/png" href="/icon.png" sizes="16x16" /> 
      </Helmet>

<NavButtons/>

      <div className="login-container" style={directionStyle}>
        <div className="login-wrapper">
          
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo-img" />
          </div>

          <h2 className="login-title">{t.loginTitle}</h2>

          <form className="login-form">
            
            <div className="input-groupp">
              <div className="icon-wrapper">
                <img src={userIcon} alt="User" className="input-icon-img" />
              </div>
              <input 
                type="email" 
                placeholder={t.emailPlaceholder} // Dynamic placeholder
                className="form-input" 
                style={inputStyle}
              />
            </div>

            <div className="input-groupp">
              <div className="icon-wrapper">
                <img src={lockIcon} alt="Lock" className="input-icon-img" />
              </div>
              <input 
                type="password" 
                placeholder={t.passwordPlaceholder}
                className="form-input" 
                style={inputStyle}
              />
            </div>

            <div className="options-row" style={{ justifyContent: isRtl ? 'flex-start' : 'flex-end' }}>
              <label className="remember-me">
                {t.rememberMe}
                <input type="checkbox" className="custom-checkbox" />
                <span className="checkmark"></span>
              </label>
            </div>

            <button type="button" className="login-btn" onClick={handleLogin}>
              {t.loginBtn}
            </button>

            <div className="forgot-password-row" style={{ justifyContent: isRtl ? 'flex-start' : 'flex-end' }}>
              <Link to="/ForgetPassword" className="forgot-link">{t.forgotPassword}</Link>
            </div>

          </form>

          <div className="social-login-section">
            <p>{t.orLoginWith}</p>
            <div className="social-buttons">
              <button className="social-btn">
                <span className="social-icon fb-text">f</span>
                {t.facebook}
              </button>
              <button className="social-btn">
                <span className="social-icon">G</span>
                {t.google}
              </button>
              <button className="social-btn">
                <span className="social-icon in-text">in</span>
                {t.linkedin}
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default LoginPage;
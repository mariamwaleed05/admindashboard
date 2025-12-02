import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ForgetPassword.css'; 
import userIcon from '../imgs/user.png';
import lockIcon from '../imgs/lock.png';
import { Helmet } from "react-helmet";
import { useLanguage } from '../language/LanguageContext';
import NavButtons from '../common/NavButtons';

const ResetPassword = () => {
  const navigate = useNavigate();
  const { t, language } = useLanguage();

  const handleReset = () => {
    navigate('/'); 
  };

  const isRtl = language === 'ar';
  const directionStyle = { direction: isRtl ? 'rtl' : 'ltr' };
  const inputStyle = { textAlign: isRtl ? 'right' : 'left' };

  return (
    <>
      <Helmet>
        <title>{t.metaResetTitle}</title>
        <meta name="description" content={t.metaResetDesc} />
        <meta property="og:title" content={t.metaResetTitle} />
        <link rel="icon" type="image/png" href="/icon.png" sizes="16x16" /> 
      </Helmet>

   <NavButtons/>
   
    <div className="forget-container" style={directionStyle}>
      <div className="forget-wrapper">
        
        <h2 className="forget-title text-center">{t.resetTitle}</h2>

        <form className="forget-form">
          
          <p className="form-label">{t.verifyCodeLabel}</p>
          
          <div className="input-grouup">
            <div className="icon-wrapper">
              <img src={userIcon} alt="User" className="input-icon-img" />
            </div>
            <input 
              type="text" 
              placeholder={t.verifyCodePlaceholder} 
              className="form-input"
              style={inputStyle}
            />
          </div>

          <p className="form-label spacer-top">{t.resetLabel}</p>

          <div className="input-grouup">
            <div className="icon-wrapper">
              <img src={userIcon} alt="User" className="input-icon-img" />
            </div>
            <input 
              type="password" 
              placeholder={t.newPasswordPlaceholder} 
              className="form-input" 
              style={inputStyle}
            />
          </div>

          <div className="input-grouup">
            <div className="icon-wrapper">
              <img src={lockIcon} alt="Lock" className="input-icon-img" />
            </div>
            <input 
              type="password" 
              placeholder={t.confirmPasswordPlaceholder} 
              className="form-input" 
              style={inputStyle}
            />
          </div>

          <button type="button" className="forget-btn" onClick={handleReset}>
            {t.resetBtn}
          </button>

        </form>

      </div>
    </div>
     </>
  );
};

export default ResetPassword;
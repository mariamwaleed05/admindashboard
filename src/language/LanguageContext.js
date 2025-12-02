import React, { createContext, useState, useContext } from 'react';

const translations = {
  en: {
    loginTitle: "Log In",
    emailPlaceholder: "Enter email",
    passwordPlaceholder: "Enter password",
    rememberMe: "Remember Me",
    loginBtn: "Login",
    forgotPassword: "Forget password?",
    orLoginWith: "Or login with",
    facebook: "Facebook",
    google: "Google",
    linkedin: "LinkedIn",
    searchPlaceholder: "Search...",
    metaTitle: "Login Page",
    metaDesc: "This is the login page"
  },
  ar: {
    loginTitle: "تسجيل الدخول",
    emailPlaceholder: "أدخل البريد الإلكتروني",
    passwordPlaceholder: "أدخل كلمة المرور",
    rememberMe: "تذكرني",
    loginBtn: "دخول",
    forgotPassword: "نسيت كلمة المرور؟",
    orLoginWith: "أو سجل الدخول بواسطة",
    facebook: "فيسبوك",
    google: "جوجل",
    linkedin: "لينكد إن",
    searchPlaceholder: "بحث...",
    metaTitle: "صفحة الدخول",
    metaDesc: "هذه صفحة تسجيل الدخول"
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'ar' : 'en'));
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
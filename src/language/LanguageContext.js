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
    metaDesc: "This is the login page",

    forgetTitle: "Forget Password",
    forgetText: "Please enter your email address associated with your account to receive a verification code.",
    enterEmailAddress: "Enter email address",
    sendCodeBtn: "Send Code",
    backToLogin: "Back to Login",
    metaForgetTitle: "Forget Password",
    metaForgetDesc: "Recover your password",

    resetTitle: "Reset Account Password",
    verifyCodeLabel: "Enter the verification code sent to your email",
    verifyCodePlaceholder: "Enter Verification Code",
    resetLabel: "Reset Password",
    newPasswordPlaceholder: "Enter new password",
    confirmPasswordPlaceholder: "Confirm password",
    resetBtn: "Reset Password",
    metaResetTitle: "Reset Password",
    metaResetDesc: "This is the reset password page",

    sidebar: {
      dashboard: "Dashboard",
      analytics: "Analytics",
      services: "Services",
      about: "About",
      mediaLibrary: "Media Library",
      pages: "Pages",
      uiElements: "UI Elements",
      messages: "Messages",
      help: "Help",
      settings: "Settings",
      signOut: "Sign Out",
      role: "Main Admin"
    },

    home: {
      welcome: "Welcome Back Mariam",
      subtitle: "Here is what you missed.",
      metaTitle: "Dashboard Page",
      metaDesc: "This is the dashboard page",
      
      totalViews: "Total Views",
      totalVisitors: "Total Visitors",
      engagementRate: "Engagement Rate",
      contactRequests: "Contact Requests",

      quickActionsTitle: "Quick Actions",
      quickActionsSub: "Common tasks and shortcuts",
      newProject: "New Project",
      manageCategories: "Manage Categories",
      newPage: "New Page",
      viewProjects: "View Projects",

      projectsTitle: "Projects",
      withCover: "With Cover Image",
      with3d: "With 3D Models",
      viewAll: "View All",
      addNew: "Add New",
      categoriesTitle: "Categories",
      manage: "Manage",
      staticPages: "Static Pages",
      completed: "Completed",
      draft: "Draft",

      websiteTraffic: "Website Traffic",
      users: "Users",
      views: "Views",
      trafficSources: "Traffic Sources",
      
      organic: "Organic Search",
      direct: "Direct",
      referral: "Referral",
      social: "Social Media",
      email: "Email",

      topPages: "Top Pages",
      recentActivity: "Recent Activity",
      bounceRate: "Bounce Rate",
      avgSession: "Avg. Session Duration",
      pagesSession: "Pages per Session",
      
      recentProjects: "Recent Projects",
      recentProjSub: "Latest projects added to the system",
      viewAllProjects: "View All Projects →",
      recentPages: "Recent Pages",
      recentPagesSub: "Latest static pages in the system",
      viewAllPages: "View All Pages →",

      seoTitle: "SEO",
      slugName: "Slug Name",
      enterSlug: "Enter Slug Name",
      pageTag: "Page Tag",
      enterTag: "Enter Tag",
      metaDescription: "Meta Description",
      enterMetaDesc: "Enter Meta Description"
    }
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
    metaDesc: "هذه صفحة تسجيل الدخول",

    forgetTitle: "نسيت كلمة المرور",
    forgetText: "يرجى إدخال عنوان بريدك الإلكتروني المرتبط بحسابك لتلقي رمز التحقق.",
    enterEmailAddress: "أدخل عنوان البريد الإلكتروني",
    sendCodeBtn: "إرسال الرمز",
    backToLogin: "العودة لتسجيل الدخول",
    metaForgetTitle: "نسيت كلمة المرور",
    metaForgetDesc: "استعادة كلمة المرور",

    resetTitle: "إعادة تعيين كلمة المرور",
    verifyCodeLabel: "أدخل رمز التحقق المرسل إلى بريدك الإلكتروني",
    verifyCodePlaceholder: "أدخل رمز التحقق",
    resetLabel: "إعادة تعيين كلمة المرور",
    newPasswordPlaceholder: "أدخل كلمة المرور الجديدة",
    confirmPasswordPlaceholder: "تأكيد كلمة المرور",
    resetBtn: "إعادة تعيين كلمة المرور",
    metaResetTitle: "إعادة تعيين كلمة المرور",
    metaResetDesc: "هذه صفحة إعادة تعيين كلمة المرور",

    sidebar: {
      dashboard: "لوحة التحكم",
      analytics: "التحليلات",
      services: "الخدمات",
      about: "عنا",
      mediaLibrary: "مكتبة الوسائط",
      pages: "الصفحات",
      uiElements: "عناصر الواجهة",
      messages: "الرسائل",
      help: "المساعدة",
      settings: "الإعدادات",
      signOut: "تسجيل الخروج",
      role: "المشرف العام"
    },

    home: {
      welcome: "مرحباً بعودتك مريم",
      subtitle: "إليك ما فاتك.",
      metaTitle: "لوحة التحكم",
      metaDesc: "هذه صفحة لوحة التحكم",
      
      totalViews: "إجمالي المشاهدات",
      totalVisitors: "إجمالي الزوار",
      engagementRate: "معدل التفاعل",
      contactRequests: "طلبات التواصل",

      quickActionsTitle: "إجراءات سريعة",
      quickActionsSub: "المهام الشائعة والاختصارات",
      newProject: "مشروع جديد",
      manageCategories: "إدارة التصنيفات",
      newPage: "صفحة جديدة",
      viewProjects: "عرض المشاريع",

      
      projectsTitle: "المشاريع",
      withCover: "مع صورة غلاف",
      with3d: "مع نماذج ثلاثية الأبعاد",
      viewAll: "عرض الكل",
      addNew: "إضافة جديد",
      categoriesTitle: "التصنيفات",
      manage: "إدارة",
      staticPages: "صفحات ثابتة",
      completed: "مكتمل",
      draft: "مسودة",

      websiteTraffic: "زيارات الموقع",
      users: "المستخدمين",
      views: "المشاهدات",
      trafficSources: "مصادر الزيارات",
      
      organic: "بحث عضوي",
      direct: "مباشر",
      referral: "إحالة",
      social: "تواصل اجتماعي",
      email: "بريد إلكتروني",

      topPages: "أعلى الصفحات",
      recentActivity: "النشاط الأخير",
      bounceRate: "معدل الارتداد",
      avgSession: "متوسط مدة الجلسة",
      pagesSession: "الصفحات لكل جلسة",
      
      recentProjects: "أحدث المشاريع",
      recentProjSub: "أحدث المشاريع المضافة للنظام",
      viewAllProjects: "← عرض كل المشاريع", 
      recentPages: "أحدث الصفحات",
      recentPagesSub: "أحدث الصفحات الثابتة في النظام",
      viewAllPages: "← عرض كل الصفحات",

      seoTitle: "تحسين محركات البحث (SEO)",
      slugName: "الاسم اللطيف (Slug)",
      enterSlug: "أدخل الاسم اللطيف",
      pageTag: "وسم الصفحة",
      enterTag: "أدخل الوسم",
      metaDescription: "وصف الميتا",
      enterMetaDesc: "أدخل وصف الميتا"
    }
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
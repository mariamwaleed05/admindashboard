import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import SideBar from '../common/SideBar';
import NavButtons from '../common/NavButtons';
import './Help.css';

const Icons = {
  Search: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>,
  Book: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>,
  Settings: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>,
  CreditCard: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>,
  Shield: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>,
  ChevronDown: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>,
  ChevronUp: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>,
  Mail: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>,
  MessageCircle: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
};

const Help = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I change my account password?",
      answer: "To change your password, navigate to the Settings page, select the 'Account & Security' tab, and enter your new password in the provided fields. Don't forget to click 'Save Changes'."
    },
    {
      question: "Can I upgrade my subscription plan?",
      answer: "Yes, you can upgrade at any time. Go to the Billing section under Settings to view available plans. Pro and Enterprise plans offer additional features and higher limits."
    },
    {
      question: "Where can I find my API keys?",
      answer: "API keys are located in the Developer Settings. Ensure you keep your secret keys secure and never share them in public repositories."
    },
    {
      question: "How do I export my analytics data?",
      answer: "On the Analytics dashboard, there is an 'Export Report' button in the top right corner. You can download reports in CSV or PDF format."
    }
  ];

  return (
    <div className="app-layout">
      <Helmet>
        <title>Help Center</title>
        <meta name="description" content="Support and documentation" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" href="/icon.png" sizes="16x16" /> 
      </Helmet>

      <div className="sidebar-container">
        <SideBar />
      </div>

      <div className="main-content">
        <div className="help-top-spacer">
          <NavButtons />
        </div>

        <div className="help-wrapper">
          
          <div className="help-header-section">
            <h1 className="help-title">Help Center</h1>
            <p className="help-subtitle">How can we help you today?</p>
            
            <div className="help-search-box">
              <span className="help-search-icon"><Icons.Search /></span>
              <input type="text" className="help-search-input" placeholder="Search for articles, guides, or topics..." />
            </div>
          </div>

          <div className="help-grid-categories">
            <div className="help-card">
              <div className="help-icon-circle"><Icons.Book /></div>
              <h3>Documentation</h3>
              <p>Detailed guides and API references.</p>
            </div>
            <div className="help-card">
              <div className="help-icon-circle"><Icons.Settings /></div>
              <h3>Account Setup</h3>
              <p>Manage your profile and preferences.</p>
            </div>
            <div className="help-card">
              <div className="help-icon-circle"><Icons.CreditCard /></div>
              <h3>Billing</h3>
              <p>Invoices, payment methods, and plans.</p>
            </div>
            <div className="help-card">
              <div className="help-icon-circle"><Icons.Shield /></div>
              <h3>Privacy & Security</h3>
              <p>Data protection and security policies.</p>
            </div>
          </div>

          <div className="help-section-faq">
            <h2 className="help-section-title">Frequently Asked Questions</h2>
            <div className="help-faq-list">
              {faqs.map((faq, index) => (
                <div key={index} className={`help-faq-item ${activeAccordion === index ? 'active' : ''}`}>
                  <div className="help-faq-question" onClick={() => toggleAccordion(index)}>
                    <span>{faq.question}</span>
                    <span className="help-chevron">
                      {activeAccordion === index ? <Icons.ChevronUp /> : <Icons.ChevronDown />}
                    </span>
                  </div>
                  <div className="help-faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="help-contact-section">
            <h2 className="help-section-title">Still need help?</h2>
            <div className="help-contact-grid">
              <div className="help-contact-card">
                <div className="help-contact-icon"><Icons.Mail /></div>
                <h3>Email Support</h3>
                <p>Get a response within 24 hours.</p>
                <button className="help-btn-outline">Send Email</button>
              </div>
              <div className="help-contact-card">
                <div className="help-contact-icon"><Icons.MessageCircle /></div>
                <h3>Live Chat</h3>
                <p>Chat with our support team now.</p>
                <button className="help-btn-filled">Start Chat</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Help;
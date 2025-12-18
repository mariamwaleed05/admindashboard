import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate, useLocation } from 'react-router-dom'; 
import SideBar from '../common/SideBar';
import NavButtons from '../common/NavButtons';
import './EmailContent.css';

const Icons = {
  ArrowLeft: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>,
  Reply: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path></svg>,
  Forward: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 14 20 9 15 4"></polyline><path d="M4 20v-7a4 4 0 0 1 4-4h12"></path></svg>,
  Archive: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line></svg>,
  Delete: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>,
  Email: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>,
  Phone: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>,
  Calendar: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>,
  Alert: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>,
  Tag: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>,
};

const EmailContent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { message } = location.state || {};

  useEffect(() => {
    if (!message) {
      navigate('/Messages');
    }
  }, [message, navigate]);

  if (!message) return null;

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });
  };

  return (
    <div className="app-container">
      <Helmet>
        <title>{message.Subject || 'Email Details'}</title>
        <meta name="description" content="Read email content" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      <SideBar />

      <div className="main-content">
        <div className="top-nav-container">
          <NavButtons />
        </div>

        <div className="email-wrapper">
          <button className='button' onClick={() => navigate('/Messages')} >
            <Icons.ArrowLeft /> Back to Messages
          </button>

          <div className="action-bar">
            <button className="btn-action"><Icons.Reply /> Reply</button>
            <button className="btn-action"><Icons.Forward /> Forward</button>
            <button className="btn-action"><Icons.Archive /> Archive</button>
            <button className="btn-action btn-delete"><Icons.Delete /> Delete</button>
          </div>

          <div className="card sender-card">
            <h3>Sender Information</h3>
            <div className="sender-profile">
              <div className="sender-header">
                <span className="sender-name">{message.FullName || 'Unknown Sender'}</span>
                {message.ServiceNeeded && <span className="sender-company">Inquiry: {message.ServiceNeeded}</span>}
              </div>
              <div className="sender-details-grid">
                <div className="detail-item">
                  <span className="icon"><Icons.Email /></span>
                  <span>{message.Email || 'No Email Provided'}</span>
                </div>
                <div className="detail-item">
                  <span className="icon"><Icons.Phone /></span>
                  <span>{message.Phone || 'No Phone Provided'}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="meta-row">
            <div className="card meta-card">
              <div className="meta-icon"><Icons.Calendar /></div>
              <div className="meta-content">
                <h4>Date & Time</h4>
                <p>{formatDate(message.created_at)}</p>
              </div>
            </div>
            <div className="card meta-card">
              <div className="meta-icon"><Icons.Alert /></div>
              <div className="meta-content">
                <h4>Timeline Request</h4>
                <span className="badge-priority">{message.Timeline || 'Not Specified'}</span>
              </div>
            </div>
          </div>

          <div className="card labels-card">
            <div className="label-flex">
              <div className="meta-icon"><Icons.Tag /></div>
              <div className="meta-content">
                <h4>Service & Context</h4>
                <div className="tags-container">
                  {message.ServiceNeeded && (
                    <span className="tag tag-important">{message.ServiceNeeded}</span>
                  )}
                  {message.Subject && (
                    <span className="tag tag-project">{message.Subject}</span>
                  )}
                  <span className="tag">Contact Form</span>
                </div>
              </div>
            </div>
          </div>

         

        </div>
      </div>
    </div>
  );
};

export default EmailContent;
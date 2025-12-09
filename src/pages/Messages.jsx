import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import SideBar from '../common/SideBar';
import NavButtons from '../common/NavButtons';
import RichTextEditor from '../components/RichTextEditor';
import './Messages.css';

const Icons = {
  Eye: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
  ),
  User: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
  ),
  Chart: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
  ),
  Lightning: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
  ),
  Plus: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
  ),
  Search: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
  ),
  Dots: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
  ),
  Close: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
  ),
  Send: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
  )
};

const Messages = () => {
  const [isComposeVisible, setIsComposeVisible] = useState(false);
  const navigate = useNavigate(); 

  const toggleCompose = () => {
    setIsComposeVisible(!isComposeVisible);
  };

  const openCompose = () => {
    setIsComposeVisible(true);
  };

  const handleRowClick = () => {
    navigate('/EmailContent'); 
  };

  return (
    <div className="app-container">
      <Helmet>
        <title>Messages</title>
        <meta name="description" content="This is the Messages page" />
        <meta property="og:title" content="Messages" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" href="/icon.png" sizes="16x16" /> 
      </Helmet>

      <SideBar />

      <div className="main-content">
        <div className="top-nav-container">
            <NavButtons />
        </div>

        <div className="dashboard-wrapper">
          <header className="main-header">
            <h1 className="page-title">Messages Inbox</h1>
            <p className="page-subtitle">Manage contact form submissions</p>
          </header>

          <div className="stats-row">
            <div className="stat-card">
              <div className="stat-icon-box red-icon">
                <Icons.Eye />
              </div>
              <div className="stat-content">
                <h3>Total Messages</h3>
                <p>5,500</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon-box red-icon">
                <Icons.User />
              </div>
              <div className="stat-content">
                <h3>Unread</h3>
                <p>1,200</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon-box red-icon">
                <Icons.Chart />
              </div>
              <div className="stat-content">
                <h3>Emails</h3>
                <p>200</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon-box red-icon">
                <Icons.Lightning />
              </div>
              <div className="stat-content">
                <h3>Contact Forms</h3>
                <p>500</p>
              </div>
            </div>
          </div>

          <div className="inbox-panel">
            <div className="inbox-header">
              <h2>Inbox</h2>
              <button className="btn-compose" onClick={openCompose}>
                Compose Email <span className="icon-spacer"><Icons.Plus /></span>
              </button>
            </div>

            <div className="search-bar">
              <span className="search-icon"><Icons.Search /></span>
              <input type="text" className="search-input" placeholder="Search..." />
            </div>

            <div className="table-responsive">
              <table className="inbox-table">
                <thead>
                  <tr>
                    <th>Status</th>
                    <th>Sender</th>
                    <th>Email</th>
                    <th>Subject</th>
                    <th>Date</th>
                    <th className="text-right">Actions</th>
                  </tr>
                </thead>
                <tbody style={{ cursor: 'pointer' }}> 
                  <tr onClick={handleRowClick} className="clickable-row">
                    <td><span className="badge badge-read">Read</span></td>
                    <td>Sarah Johnson</td>
                    <td className="text-muted">sarah.johnson@email.com</td>
                    <td>Website Design Project Inquiry</td>
                    <td>Nov 22, 2025</td>
                    <td className="text-right"><button className="actionn-btn" onClick={(e) => e.stopPropagation()}><Icons.Dots /></button></td>
                  </tr>
                  <tr onClick={handleRowClick} className="clickable-row">
                    <td><span className="badge badge-new">New</span></td>
                    <td>Michael Chen</td>
                    <td className="text-muted">m.chen@techcorp.com</td>
                    <td className="fw-bold">Collaboration Opportunity</td>
                    <td className="fw-bold">Nov 21, 2025</td>
                    <td className="text-right"><button className="actionn-btn" onClick={(e) => e.stopPropagation()}><Icons.Dots /></button></td>
                  </tr>
                  <tr onClick={handleRowClick} className="clickable-row">
                    <td><span className="badge badge-read">Read</span></td>
                    <td>Emma Rodriguez</td>
                    <td className="text-muted">emma.r@designstudio.com</td>
                    <td>Speaking Engagement Request</td>
                    <td>Nov 20, 2025</td>
                    <td className="text-right"><button className="actionn-btn" onClick={(e) => e.stopPropagation()}><Icons.Dots /></button></td>
                  </tr>
                  <tr onClick={handleRowClick} className="clickable-row">
                    <td><span className="badge badge-read">Read</span></td>
                    <td>David Park</td>
                    <td className="text-muted">david.park@startup.io</td>
                    <td>Portfolio Review Request</td>
                    <td>Nov 19, 2025</td>
                    <td className="text-right"><button className="actionn-btn" onClick={(e) => e.stopPropagation()}><Icons.Dots /></button></td>
                  </tr>
                  <tr onClick={handleRowClick} className="clickable-row">
                    <td><span className="badge badge-read">Read</span></td>
                    <td>Lisa Thompson</td>
                    <td className="text-muted">lisa.thompson@agency.com</td>
                    <td>Job Opportunity - Senior Designer</td>
                    <td>Nov 18, 2025</td>
                    <td className="text-right"><button className="actionn-btn" onClick={(e) => e.stopPropagation()}><Icons.Dots /></button></td>
                  </tr>
                  <tr onClick={handleRowClick} className="clickable-row">
                    <td><span className="badge badge-new">New</span></td>
                    <td>James Wilson</td>
                    <td className="text-muted">james.w@freelance.com</td>
                    <td className="fw-bold">Question About Your Services</td>
                    <td className="fw-bold">Nov 17, 2025</td>
                    <td className="text-right"><button className="actionn-btn" onClick={(e) => e.stopPropagation()}><Icons.Dots /></button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {isComposeVisible && (
            <div className="compose-panel">
              <div className="compose-header">
                <h2>Compose Email</h2>
                <button className="close-btn" onClick={toggleCompose}>
                  <Icons.Close />
                </button>
              </div>
              
              <div className="form-group">
                <label>To</label>
                <input type="text" className="form-input" placeholder="youremail@gmail.com" />
              </div>

              <div className="form-group">
                <label>Subject</label>
                <input type="text" className="form-input" placeholder="Write Subject" />
              </div>

              <RichTextEditor />

              <div className="form-actions">
                <button className="btn-send">
                  Send Email <span className="icon-spacer"><Icons.Send /></span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Messages;
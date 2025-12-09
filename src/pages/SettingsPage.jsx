import React from 'react';
import { Helmet } from 'react-helmet';
import SideBar from '../common/SideBar';
import NavButtons from '../common/NavButtons';
import './SettingsPage.css';

const Icons = {
  User: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>,
  Lock: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>,
  Bell: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>,
  Globe: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>,
  Camera: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>,
  Save: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>
};

const SettingsPage = () => {
  return (
    <div className="app-container">
      <Helmet>
        <title>Settings</title>
        <meta name="description" content="This is the settings page" />
        <meta property="og:title" content="settings" />
        <link rel="icon" type="image/png" href="/icon.png" sizes="16x16" /> 
      </Helmet>

      <SideBar />

      <div className="main-content">
        <div className="top-nav-container">
          <NavButtons />
        </div>

        <div className="settings-wrapper">
          <header className="main-header">
            <h1 className="page-title">Settings</h1>
            <p className="page-subtitle">Manage your account preferences and system settings</p>
          </header>

          <div className="settings-grid">
            
            <div className="card settings-card">
              <div className="card-header">
                <div className="header-icon"><Icons.User /></div>
                <h3>Public Profile</h3>
              </div>
              
              <div className="profile-section">
                <div className="avatar-wrapper">
                  <div className="avatar-placeholder">
                    <span>JD</span>
                  </div>
                  <button className="btn-upload">
                    <Icons.Camera /> Change Photo
                  </button>
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label>First Name</label>
                    <input type="text" className="form-input" defaultValue="John" />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" className="form-input" defaultValue="Doe" />
                  </div>
                  <div className="form-group full-width">
                    <label>Bio</label>
                    <textarea className="form-input" rows="3" placeholder="Tell us a little about yourself..."></textarea>
                  </div>
                </div>
              </div>
            </div>

            <div className="card settings-card">
              <div className="card-header">
                <div className="header-icon"><Icons.Lock /></div>
                <h3>Account & Security</h3>
              </div>
              
              <div className="form-grid">
                <div className="form-group full-width">
                  <label>Email Address</label>
                  <input type="email" className="form-input" defaultValue="john.doe@example.com" />
                </div>
                <div className="form-group">
                  <label>New Password</label>
                  <input type="password" className="form-input" placeholder="Enter new password" />
                </div>
                <div className="form-group">
                  <label>Confirm Password</label>
                  <input type="password" className="form-input" placeholder="Confirm new password" />
                </div>
              </div>
            </div>

            <div className="card settings-card">
              <div className="card-header">
                <div className="header-icon"><Icons.Bell /></div>
                <h3>Notifications</h3>
              </div>

              <div className="toggles-list">
                <div className="toggle-item">
                  <div className="toggle-info">
                    <h4>Email Notifications</h4>
                    <p>Receive emails about your account activity.</p>
                  </div>
                  <label className="switch">
                    <input type="checkbox" defaultChecked />
                    <span className="slider round"></span>
                  </label>
                </div>
                
                <div className="toggle-item">
                  <div className="toggle-info">
                    <h4>Desktop Push Notifications</h4>
                    <p>Receive push notifications on your desktop.</p>
                  </div>
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                  </label>
                </div>

                <div className="toggle-item">
                  <div className="toggle-info">
                    <h4>Monthly Reports</h4>
                    <p>Receive a monthly analytics report.</p>
                  </div>
                  <label className="switch">
                    <input type="checkbox" defaultChecked />
                    <span className="slider round"></span>
                  </label>
                </div>
              </div>
            </div>

            <div className="card settings-card">
              <div className="card-header">
                <div className="header-icon"><Icons.Globe /></div>
                <h3>System Preferences</h3>
              </div>
              
              <div className="form-grid">
                <div className="form-group">
                  <label>Language</label>
                  <select className="form-input select-input">
                    <option>English (US)</option>
                    <option>Arabic</option>
                    <option>French</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Timezone</label>
                  <select className="form-input select-input">
                    <option>(GMT-05:00) Eastern Time</option>
                    <option>(GMT+00:00) London</option>
                    <option>(GMT+01:00) Paris</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="settings-actions">
              <button className="btn-save">
                <Icons.Save /> Save Changes
              </button>
              <button className="btn-cancel">Cancel</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
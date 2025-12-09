import React from 'react';
import { Helmet } from 'react-helmet';
import SideBar from '../common/SideBar';
import NavButtons from '../common/NavButtons';
import './UiElements.css';

const Icons = {
  Check: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>,
  Alert: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>,
  Info: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>,
  X: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>,
  Star: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>,
  Bell: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>,
  Search: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
};

const UiElements = () => {
  return (
    <div className="app-layout">
      <Helmet>
        <title>UI Elements</title>
        <meta name="description" content="Dashboard UI Components" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" href="/icon.png" sizes="16x16" />
      </Helmet>

      <div className="sidebar-container">
        <SideBar />
      </div>

      <div className="main-content">
        <div className="uie-top-spacer">
          <NavButtons />
        </div>

        <div className="uie-wrapper">
          <div className="uie-header">
            <h1 className="uie-title">UI Elements</h1>
            <p className="uie-subtitle">Comprehensive design system components</p>
          </div>

          <div className="uie-grid">
            
            <div className="uie-card">
              <div className="uie-card-header">
                <h3>Buttons</h3>
              </div>
              <div className="uie-card-body">
                <div className="uie-row">
                  <button className="uie-btn primary">Primary</button>
                  <button className="uie-btn secondary">Secondary</button>
                  <button className="uie-btn outline">Outline</button>
                  <button className="uie-btn ghost">Ghost</button>
                </div>
                <div className="uie-row">
                  <button className="uie-btn danger">Delete</button>
                  <button className="uie-btn success">Approve</button>
                  <button className="uie-btn warning">Warning</button>
                  <button className="uie-btn primary" disabled>Disabled</button>
                </div>
                <div className="uie-row">
                  <button className="uie-btn primary icon-left"><Icons.Star /> Star</button>
                  <button className="uie-btn outline icon-right">Next <Icons.X /></button>
                  <button className="uie-btn-circle"><Icons.Bell /></button>
                  <button className="uie-btn-circle primary"><Icons.Check /></button>
                </div>
              </div>
            </div>

            <div className="uie-card">
              <div className="uie-card-header">
                <h3>Alerts & Notifications</h3>
              </div>
              <div className="uie-card-body col">
                <div className="uie-alert success">
                  <div className="uie-alert-icon"><Icons.Check /></div>
                  <div className="uie-alert-content">
                    <span className="uie-alert-title">Success</span>
                    <span className="uie-alert-msg">Changes saved successfully.</span>
                  </div>
                </div>
                <div className="uie-alert warning">
                  <div className="uie-alert-icon"><Icons.Alert /></div>
                  <div className="uie-alert-content">
                    <span className="uie-alert-title">Warning</span>
                    <span className="uie-alert-msg">Your subscription expires soon.</span>
                  </div>
                </div>
                <div className="uie-alert error">
                  <div className="uie-alert-icon"><Icons.X /></div>
                  <div className="uie-alert-content">
                    <span className="uie-alert-title">Error</span>
                    <span className="uie-alert-msg">Failed to connect to server.</span>
                  </div>
                </div>
                <div className="uie-alert info">
                  <div className="uie-alert-icon"><Icons.Info /></div>
                  <div className="uie-alert-content">
                    <span className="uie-alert-title">Info</span>
                    <span className="uie-alert-msg">System update scheduled tonight.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="uie-card">
              <div className="uie-card-header">
                <h3>Form Inputs</h3>
              </div>
              <div className="uie-card-body col">
                <div className="uie-form-group">
                  <label>Email Address</label>
                  <div className="uie-input-wrapper">
                    <input type="text" className="uie-input" placeholder="name@example.com" />
                  </div>
                </div>
                <div className="uie-form-group">
                  <label>With Icon</label>
                  <div className="uie-input-wrapper icon-left">
                    <span className="uie-input-icon"><Icons.Search /></span>
                    <input type="text" className="uie-input" placeholder="Search..." />
                  </div>
                </div>
                <div className="uie-row equal">
                  <div className="uie-form-group">
                    <label>Select Option</label>
                    <select className="uie-input uie-select">
                      <option>Option 1</option>
                      <option>Option 2</option>
                    </select>
                  </div>
                  <div className="uie-form-group">
                    <label>Disabled</label>
                    <input type="text" className="uie-input" placeholder="Disabled" disabled />
                  </div>
                </div>
                <div className="uie-row align-center">
                  <label className="uie-checkbox-label">
                    <input type="checkbox" className="uie-checkbox" defaultChecked />
                    <span>Remember me</span>
                  </label>
                  <label className="uie-radio-label">
                    <input type="radio" name="radio" className="uie-radio" defaultChecked />
                    <span>Option A</span>
                  </label>
                  <label className="uie-radio-label">
                    <input type="radio" name="radio" className="uie-radio" />
                    <span>Option B</span>
                  </label>
                </div>
                <div className="uie-row align-center">
                  <label className="uie-switch">
                    <input type="checkbox" defaultChecked />
                    <span className="uie-slider"></span>
                  </label>
                  <span className="uie-switch-label">Notifications</span>
                  <label className="uie-switch">
                    <input type="checkbox" />
                    <span className="uie-slider"></span>
                  </label>
                  <span className="uie-switch-label">Dark Mode</span>
                </div>
              </div>
            </div>

            <div className="uie-card">
              <div className="uie-card-header">
                <h3>Badges & Avatars</h3>
              </div>
              <div className="uie-card-body col">
                <div className="uie-row">
                  <span className="uie-badge primary">Primary</span>
                  <span className="uie-badge secondary">Secondary</span>
                  <span className="uie-badge success">Success</span>
                  <span className="uie-badge warning">Warning</span>
                  <span className="uie-badge error">Error</span>
                </div>
                <div className="uie-row">
                  <span className="uie-tag">#Design</span>
                  <span className="uie-tag">#Development</span>
                  <span className="uie-tag">#UI/UX</span>
                </div>
                <div className="uie-divider"></div>
                <div className="uie-row">
                  <div className="uie-avatar lg">JD</div>
                  <div className="uie-avatar md">AB</div>
                  <div className="uie-avatar sm">CK</div>
                  <div className="uie-avatar xs">P</div>
                </div>
                <div className="uie-row">
                  <div className="uie-avatar-group">
                    <div className="uie-avatar border">U1</div>
                    <div className="uie-avatar border">U2</div>
                    <div className="uie-avatar border">U3</div>
                    <div className="uie-avatar border">+4</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="uie-card">
              <div className="uie-card-header">
                <h3>Progress & Loading</h3>
              </div>
              <div className="uie-card-body col">
                <div className="uie-progress-container">
                  <div className="uie-progress-label">
                    <span>Project Completion</span>
                    <span>75%</span>
                  </div>
                  <div className="uie-progress-bg">
                    <div className="uie-progress-bar primary w-75"></div>
                  </div>
                </div>
                <div className="uie-progress-container">
                  <div className="uie-progress-label">
                    <span>Storage Used</span>
                    <span>45%</span>
                  </div>
                  <div className="uie-progress-bg">
                    <div className="uie-progress-bar warning w-45"></div>
                  </div>
                </div>
                <div className="uie-progress-container">
                  <div className="uie-progress-label">
                    <span>System Load</span>
                    <span>90%</span>
                  </div>
                  <div className="uie-progress-bg">
                    <div className="uie-progress-bar error w-90"></div>
                  </div>
                </div>
                <div className="uie-row center py-4">
                  <div className="uie-spinner lg"></div>
                  <div className="uie-spinner md"></div>
                  <div className="uie-spinner sm"></div>
                </div>
              </div>
            </div>

            <div className="uie-card">
              <div className="uie-card-header">
                <h3>Tooltips & Popovers</h3>
              </div>
              <div className="uie-card-body center-content">
                <div className="uie-tooltip-demo">
                  <button className="uie-btn outline">Hover Me</button>
                  <div className="uie-tooltip top">Tooltip Text</div>
                </div>
                <div className="uie-popover-demo">
                  <div className="uie-popover">
                    <div className="uie-popover-header">Popover Title</div>
                    <div className="uie-popover-content">This is a popover content area used for displaying detailed info.</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default UiElements;
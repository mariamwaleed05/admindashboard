import React from 'react';
import { Helmet } from 'react-helmet';
import SideBar from '../common/SideBar';
import NavButtons from '../common/NavButtons';
import './EmailContent.css';

const Icons = {
  Reply: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path></svg>,
  Forward: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 14 20 9 15 4"></polyline><path d="M4 20v-7a4 4 0 0 1 4-4h12"></path></svg>,
  Archive: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line></svg>,
  Delete: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>,
  Email: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>,
  Phone: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>,
  Building: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="9" y1="22" x2="9" y2="22.01"></line><line x1="15" y1="22" x2="15" y2="22.01"></line><line x1="9" y1="18" x2="9" y2="18.01"></line><line x1="15" y1="18" x2="15" y2="18.01"></line><line x1="9" y1="14" x2="9" y2="14.01"></line><line x1="15" y1="14" x2="15" y2="14.01"></line><line x1="9" y1="10" x2="9" y2="10.01"></line><line x1="15" y1="10" x2="15" y2="10.01"></line><line x1="9" y1="6" x2="9" y2="6.01"></line><line x1="15" y1="6" x2="15" y2="6.01"></line></svg>,
  Globe: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>,
  Calendar: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>,
  Alert: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>,
  Tag: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>,
  Users: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>,
  Paperclip: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>,
  FilePdf: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7a0b0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>,
  FileXls: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0b7a2a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="8" y1="13" x2="16" y2="17"></line><line x1="16" y1="13" x2="8" y2="17"></line></svg>,
  FileImg: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7a550b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>,
  Download: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
};

const EmailContent = () => {
  return (
    <div className="app-container">
      <Helmet>
        <title>Email Details</title>
        <meta name="description" content="Read email content" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      <SideBar />

      <div className="main-content">
        <div className="top-nav-container">
          <NavButtons />
        </div>

        <div className="email-wrapper">
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
                <span className="sender-name">Sarah Johnson</span>
                <span className="sender-company">TechCorp Solutions</span>
              </div>
              <div className="sender-details-grid">
                <div className="detail-item">
                  <span className="icon"><Icons.Email /></span>
                  <span>sarah.johnson@techcorp.com</span>
                </div>
                <div className="detail-item">
                  <span className="icon"><Icons.Phone /></span>
                  <span>012 758 43440</span>
                </div>
                <div className="detail-item">
                  <span className="icon"><Icons.Building /></span>
                  <span>TechCorp Solutions</span>
                </div>
                <div className="detail-item">
                  <span className="icon"><Icons.Globe /></span>
                  <span>www.techcorp.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="meta-row">
            <div className="card meta-card">
              <div className="meta-icon"><Icons.Calendar /></div>
              <div className="meta-content">
                <h4>Date & Time</h4>
                <p>Tuesday, November 25, 2025</p>
                <p>at 9:30 AM</p>
              </div>
            </div>
            <div className="card meta-card">
              <div className="meta-icon"><Icons.Alert /></div>
              <div className="meta-content">
                <h4>Priority Level</h4>
                <span className="badge-priority">High Priority</span>
              </div>
            </div>
          </div>

          <div className="card labels-card">
            <div className="label-flex">
              <div className="meta-icon"><Icons.Tag /></div>
              <div className="meta-content">
                <h4>Labels & Tags</h4>
                <div className="tags-container">
                  <span className="tag tag-important">Important</span>
                  <span className="tag tag-project">Project</span>
                </div>
              </div>
            </div>
          </div>

          <div className="card cc-card">
            <div className="label-flex">
              <div className="meta-icon"><Icons.Users /></div>
              <div className="meta-content">
                <h4>CC Recipients</h4>
                <p>john.doe@techcorp.com</p>
                <p>mike.smith@techcorp.com</p>
              </div>
            </div>
          </div>

          <div className="card message-card">
            <h3>Message Content</h3>
            <div className="email-body">
              <p>Hi there,</p>
              <br />
              <p>I hope this email finds you well. I wanted to follow up on the Q4 project proposal we discussed last week. I've attached the updated documents with the revisions we talked about.</p>
              <br />
              <p>The main changes include:</p>
              <ul className="email-list">
                <li>- Updated timeline for Phase 2</li>
                <li>- Revised budget allocation</li>
                <li>- New team member assignments</li>
              </ul>
              <br />
              <p>Please review at your earliest convenience and let me know if you have any questions or concerns.</p>
              <br />
              <p>Best regards,<br/>Sarah</p>
            </div>
          </div>

          <div className="card attachments-card">
            <div className="attachment-header">
              <Icons.Paperclip />
              <h3>Attachments (3)</h3>
            </div>
            <div className="attachment-grid">
              
              <div className="attachment-file">
                <div className="file-icon"><Icons.FilePdf /></div>
                <div className="file-info">
                  <span className="file-name">Q4_Proposal_Final.pdf</span>
                  <span className="file-size">2.4 MB</span>
                </div>
                <button className="btn-download"><Icons.Download /></button>
              </div>

              <div className="attachment-file">
                <div className="file-icon"><Icons.FileXls /></div>
                <div className="file-info">
                  <span className="file-name">Budget_Breakdown.xlsx</span>
                  <span className="file-size">1.1 MB</span>
                </div>
                <button className="btn-download"><Icons.Download /></button>
              </div>

              <div className="attachment-file">
                <div className="file-icon"><Icons.FileImg /></div>
                <div className="file-info">
                  <span className="file-name">Timeline_Chart.png</span>
                  <span className="file-size">856 KB</span>
                </div>
                <button className="btn-download"><Icons.Download /></button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EmailContent;
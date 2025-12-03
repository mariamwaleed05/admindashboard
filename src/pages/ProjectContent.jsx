import React from 'react';
import { Helmet } from "react-helmet";
import SideBar from '../common/SideBar';
import NavButtons from '../common/NavButtons';
import './ProjectContent.css';

const ProjectContent = () => {
  return (
    <>
      <Helmet>
        <title>Project Details</title>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>

      <div className="app-layout">
        <div className="sidebar-container">
          <SideBar />
        </div>

        <div className="main-content">
          <NavButtons />

          <div className="pc-container">
            <div className="pc-header-row">
              <div className="pc-title-group">
                <h1>Project Details</h1>
                <p>UX/UI Projects - Fashion App</p>
              </div>
              <button className="pc-back-btn">
                Back To Projects &gt;
              </button>
            </div>

            <div className="pc-card">
              <div className="pc-pink-header">Tags</div>
              <div className="pc-tags-container">
                <div className="pc-tag pc-tag-red">
                  UI Design
                  <div className="pc-close-badge">×</div>
                </div>
                <div className="pc-tag pc-tag-dark">
                  UX Research
                  <div className="pc-close-badge">×</div>
                </div>
                <div className="pc-tag pc-tag-dark">
                  Figma
                  <div className="pc-close-badge">×</div>
                </div>
                <button className="pc-add-btn">+</button>
              </div>
            </div>

            <div className="pc-card">
              <div className="pc-pink-header">Header</div>
              <form className="pc-form">
                <div className="pc-form-group">
                  <label>Project Title</label>
                  <input type="text" placeholder="Enter Title" className="pc-input" />
                </div>

                <div className="pc-form-group">
                  <label>Service Category</label>
                  <div className="pc-select-wrapper">
                    <select defaultValue="" className="pc-input">
                      <option value="" disabled>Select Service</option>
                      <option value="ui">UI Design</option>
                      <option value="ux">UX Research</option>
                      <option value="dev">Development</option>
                    </select>
                  </div>
                </div>

                <div className="pc-form-group">
                  <div className="pc-toolbar">
                    <span>B</span>
                    <span style={{ fontStyle: 'italic' }}>I</span>
                    <span style={{ textDecoration: 'line-through' }}>S</span>
                    <span className="pc-divider">|</span>
                    <span>H<sub>1</sub></span>
                    <span>H<sub>2</sub></span>
                    <span>H<sub>3</sub></span>
                    <span className="pc-divider">|</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                  </div>
                  <label className="pc-desc-label">Description</label>
                  <textarea className="pc-input pc-textarea" rows="8" placeholder="Project Description"></textarea>
                </div>

                <div className="pc-row-three">
                  <div className="pc-form-group">
                    <label>Date</label>
                    <input type="text" placeholder="Enter Date" className="pc-input" />
                  </div>
                  <div className="pc-form-group">
                    <label>Type</label>
                    <input type="text" placeholder="Enter Type" className="pc-input" />
                  </div>
                  <div className="pc-form-group">
                    <label>Duration</label>
                    <input type="text" placeholder="Enter Duration" className="pc-input" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectContent;
import React from 'react';
import './ProjectContent.css';
import SideBar from '../common/SideBar';
import NavButtons from '../common/NavButtons';
import { Helmet } from "react-helmet";
import { useLanguage } from '../language/LanguageContext';

const ProjectContent = () => {
    
  return (
    <>
<Helmet>
        <title>Project Content</title>
        <meta name="description" content="Project Content" />
        <meta property="og:title" content="Dashboard" />
        <link rel="icon" type="image/png" href="/icon.png" sizes="16x16" /> 
     </Helmet>

    <div className="app-layout">
      
      <div className="sidebar-container">
        <SideBar/>
      </div>

      <div className="main-content">
        <NavButtons/>

    <div className="pd-container">
      <div className="pd-top-nav">
        <div className="pd-headings">
          <h1>Project Details</h1>
          <p>UX/UI Projects - Fashion App</p>
        </div>
        <button className="pd-back-btn">
          Back To Projects &gt;
        </button>
      </div>

      <div className="pd-card">
        <div className="pd-section-header">Tags</div>
        
        <div className="pd-tags-wrapper">
          <div className="pd-tag pd-tag-red">
            UI Design
            <span className="pd-close-badge">×</span>
          </div>

          <div className="pd-tag pd-tag-dark">
            UX Research
            <span className="pd-close-badge">×</span>
          </div>

          <div className="pd-tag pd-tag-dark">
            Figma
            <span className="pd-close-badge">×</span>
          </div>

          <button className="pd-add-btn">+</button>
        </div>
      </div>

      <div className="pd-card">
        <div className="pd-section-header">Header</div>

        <form className="pd-form">
          
          <div className="pd-form-group">
            <label>Project Title</label>
            <input type="text" placeholder="Enter Title" />
          </div>

          <div className="pd-form-group">
            <label>Service Category</label>
            <div className="pd-select-wrapper">
              <select defaultValue="">
                <option value="" disabled>Select Service</option>
                <option value="ui">UI Design</option>
                <option value="ux">UX Research</option>
                <option value="dev">Development</option>
              </select>
            </div>
          </div>

          <div className="pd-form-group">
            
            <div className="pd-toolbar">
              <span className="pd-tool-icon">B</span>
              <span className="pd-tool-icon" style={{fontStyle: 'italic'}}>I</span>
              <span className="pd-tool-icon" style={{textDecoration: 'line-through'}}>S</span>
              <span className="pd-tool-divider">|</span>
              <span className="pd-tool-icon">H<sub>1</sub></span>
              <span className="pd-tool-icon">H<sub>2</sub></span>
              <span className="pd-tool-icon">H<sub>3</sub></span>
              <span className="pd-tool-divider">|</span>
              <span className="pd-tool-icon">
                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
              </span>
              <span className="pd-tool-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
              </span>
              <span className="pd-tool-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
              </span>
            </div>

            <div className="pd-form-group">
                <label style={{marginTop: '10px', display:'block'}}>Description</label>
                <textarea rows="6" placeholder="Project Description"></textarea>
            </div>
          </div>

          <div className="pd-row-three">
            <div className="pd-form-group">
              <label>Date</label>
              <input type="text" placeholder="Enter Date" />
            </div>
            <div className="pd-form-group">
              <label>Type</label>
              <input type="text" placeholder="Enter Type" />
            </div>
            <div className="pd-form-group">
              <label>Duration</label>
              <input type="text" placeholder="Enter Duration" />
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
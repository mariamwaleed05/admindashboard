import React from 'react';
import { Helmet } from "react-helmet";
import SideBar from '../common/SideBar';
import NavButtons from '../common/NavButtons';
import './ProjectContent.css';
import RichTextEditor from '../components/RichTextEditor';

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
                    <RichTextEditor />
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

            <div className="pc-card">
              <div className="pc-pink-header">Overview</div>
              <div className="pc-grid-two">
                <div className="pc-form-group">
                  <label>Project Overview</label>
                  <textarea className="pc-input pc-textarea-small" placeholder="Enter Project Overview"></textarea>
                </div>
                <div className="pc-form-group">
                  <label>My Role</label>
                  <textarea className="pc-input pc-textarea-small" placeholder="Add Role"></textarea>
                </div>
                <div className="pc-form-group">
                  <label>Challenges</label>
                  <textarea className="pc-input pc-textarea-small" placeholder="Enter Challenges"></textarea>
                </div>
                <div className="pc-form-group">
                  <label>Technologies</label>
                  <textarea className="pc-input pc-textarea-small" placeholder="Enter technologies"></textarea>
                </div>
                <div className="pc-form-group">
                  <label>Solution</label>
                  <textarea className="pc-input pc-textarea-small" placeholder="Enter Solution"></textarea>
                </div>
                <div className="pc-form-group">
                  <label>Key Achievements</label>
                  <textarea className="pc-input pc-textarea-small" placeholder="Enter Key Achievements"></textarea>
                </div>
              </div>
            </div>

            <div className="pc-card">
              <div className="pc-pink-header">Details</div>
              
              <div className="pc-subheader-row">
                <h3>Key Features</h3>
                <button className="pc-action-btn">Add Feature +</button>
              </div>

              <div className="pc-grid-two">
                <div className="pc-feature-block">
                  <label className="pc-sub-label">Feature 1</label>
                  <input type="text" className="pc-input pc-mb-10" placeholder="Add Title" />
                  <textarea className="pc-input pc-textarea-small" placeholder="Description"></textarea>
                </div>
                <div className="pc-feature-block">
                  <label className="pc-sub-label">Feature 2</label>
                  <input type="text" className="pc-input pc-mb-10" placeholder="Add Title" />
                  <textarea className="pc-input pc-textarea-small" placeholder="Description"></textarea>
                </div>
              </div>

              <div className="pc-subheader-row pc-mt-40">
                <h3>Design Process</h3>
                <button className="pc-action-btn">Add Process +</button>
              </div>

              <div className="pc-process-container">
                <div className="pc-process-item">
                  <label className="pc-sub-label">Process 1</label>
                  <input type="text" className="pc-input pc-mb-10" placeholder="Add Title" />
                    <RichTextEditor />
                  <textarea className="pc-input pc-textarea" rows="6" placeholder="Description"></textarea>
                </div>

                <div className="pc-process-item">
                  <label className="pc-sub-label">Process 2</label>
                  <input type="text" className="pc-input pc-mb-10" placeholder="Add Title" />
                    <RichTextEditor />
                  <textarea className="pc-input pc-textarea" rows="6" placeholder="Description"></textarea>
                </div>
              </div>
            </div>

            <div className="pc-card">
              <div className="pc-pink-header">Gallery</div>
              
              <div className="pc-subheader-row">
                <h3>Project Images</h3>
                <button className="pc-add-image-btn">
                    Add Image <span>+</span>
                </button>
              </div>

              <div className="pc-upload-box">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="17 8 12 3 7 8"></polyline>
                    <line x1="12" y1="3" x2="12" y2="15"></line>
                </svg>
                <span className="pc-upload-text">Upload Image</span>
              </div>

              <div className="pc-form-group pc-mt-20">
                <label>Alt Text</label>
                <input type="text" className="pc-input" placeholder="Add Alt Text" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectContent;
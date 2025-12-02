import React from 'react';
import { Helmet } from "react-helmet";
import SideBar from '../common/SideBar';
import NavButtons from '../common/NavButtons';
import { User, Pencil, Mail, Phone, MapPin, Plus, Trash2, Upload } from 'lucide-react';
import './About.css';

const About = () => {
  const skills = [
    { id: 1, name: 'Branding' },
    { id: 2, name: 'Logo Designs' },
    { id: 3, name: 'User Experience' },
    { id: 4, name: 'Research' }
  ];

  return (
    <>
      <Helmet>
        <title>About | Profile Settings</title>
        <meta name="description" content="Update your personal information" />
      </Helmet>

      <div className="app-layout">
        <div className="sidebar-container">
          <SideBar />
        </div>

        <div className="main-content">
          <NavButtons />

          <div className="about-container">
            
            {/* --- Page Header --- */}
            <div className="ps-header">
              <h1>Profile Settings</h1>
              <p>Update your personal information</p>
            </div>

            {/* --- Section 1: Personal Info Card --- */}
            <div className="ps-card">
              <div className="ps-card-top">
                <span className="ps-section-label">Personal Information</span>
                <button className="ps-edit-btn">
                  <Pencil size={16} />
                  Edit
                </button>
              </div>

              <div className="ps-main-info">
                <div className="ps-avatar">
                  <User size={48} />
                </div>
                <div className="ps-text-info">
                  <h2>Mariam Waleed</h2>
                  <h3>UX/UI Designer & Graphic Designer</h3>
                  <p className="ps-bio">
                    Only thing you will need to know is that I love making unique work that actually stands out.
                  </p>
                </div>
              </div>

              <div className="ps-contact-row">
                <div className="ps-contact-item">
                  <Mail size={18} />
                  <span>mariamwaleed2005@gmail.com</span>
                </div>
                <div className="ps-contact-item">
                  <Phone size={18} />
                  <span>012 758 43440</span>
                </div>
                <div className="ps-contact-item">
                  <MapPin size={18} />
                  <span>Cairo , Egypt</span>
                </div>
              </div>
            </div>

            {/* --- Section 2: Vision & Skills Grid --- */}
            <div className="p-sec-grid">
              
              {/* Vision & Mission Card */}
              <div className="ps-card">
                <div className="ps-card-top">
                  <span className="ps-section-label">Vision & Mission</span>
                  <button className="ps-edit-btn">
                    <Pencil size={14} />
                    Edit
                  </button>
                </div>
                
                <div className="p-form-group">
                  <label>Vision</label>
                  <input type="text" placeholder="Enter Vision" className="p-input white-bg" />
                </div>

                <div className="p-form-group">
                  <label>Mission</label>
                  <input type="text" placeholder="Enter Mission" className="p-input white-bg" />
                </div>
              </div>

              {/* Skills Card */}
              <div className="ps-card">
                <div className="ps-card-top">
                  <span className="ps-section-label">Skills</span>
                  <button className="ps-edit-btn">
                    <Plus size={14} />
                    Add Skill
                  </button>
                </div>

                <div className="p-skills-list">
                  {skills.map((skill) => (
                    <div key={skill.id} className="p-skill-item">
                      <span>{skill.name}</span>
                      <button className="p-icon-btn">
                        <Trash2 size={18} color="#7f1d1d" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          

          </div>
        </div>
      </div>
    </>
  );
}

export default About;
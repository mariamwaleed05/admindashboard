import React from 'react';
import { Helmet } from "react-helmet";
import SideBar from '../common/SideBar';
import NavButtons from '../common/NavButtons';
import { 
  User, Pencil, Mail, Phone, MapPin, Plus, Trash2, Upload, Heart,
  Bold, Italic, Strikethrough, Heading1, Heading2, Heading3, 
  Highlighter, Code, Link as LinkIcon, MessageSquare, ImagePlus 
} from 'lucide-react';
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
            
            <div className="ps-header">
              <h1>Profile Settings</h1>
              <p>Update your personal information</p>
            </div>

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

            <div className="p-sec-grid">
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

            <div className="ps-card">
              <div className="ps-card-top">
                <span className="ps-section-label">Education</span>
                <button className="ps-edit-btn">
                  <Plus size={14} />
                  Add Education
                </button>
              </div>

              <div className="p-form-group">
                <label>University Name</label>
                <input type="text" placeholder="Enter University Name" className="p-input white-bg" />
              </div>

              <div className="p-row-2-col">
                <div className="p-form-group">
                  <label>University Logo</label>
                  <div className="p-upload-box white-bg">
                    <Upload size={24} color="#a1a1aa" />
                    <span>Upload Logo</span>
                  </div>
                </div>
                <div className="p-form-group">
                  <label>Alt Text</label>
                  <input type="text" placeholder="Add Alt Text" className="p-input white-bg p-input-fill" />
                </div>
              </div>

              <div className="p-row-3-col">
                <div className="p-form-group wide-col">
                  <label>Degree Title</label>
                  <input type="text" placeholder="Enter Degree Title" className="p-input white-bg" />
                </div>
                <div className="p-form-group">
                  <label>Date</label>
                  <input type="text" placeholder="Enter Date" className="p-input white-bg" />
                </div>
                <div className="p-form-group">
                  <label>Date</label>
                  <input type="text" placeholder="Enter Date" className="p-input white-bg" />
                </div>
              </div>
            </div>

            <div className="ps-card">
              <div className="ps-card-top">
                <span className="ps-section-label">Work Experience</span>
                <button className="ps-edit-btn">
                  <Plus size={14} />
                  Add Experience
                </button>
              </div>

              <div className="p-form-group">
                <label>Company Name</label>
                <input type="text" placeholder="Enter Company Name" className="p-input white-bg" />
              </div>

              <div className="p-row-2-col">
                <div className="p-form-group">
                  <label>Company Logo</label>
                  <div className="p-upload-box white-bg">
                    <Upload size={24} color="#a1a1aa" />
                    <span>Upload Logo</span>
                  </div>
                </div>
                <div className="p-form-group">
                  <label>Alt Text</label>
                  <input type="text" placeholder="Add Alt Text" className="p-input white-bg p-input-fill" />
                </div>
              </div>

              <div className="p-form-group">
                <label>Position Title</label>
                <input type="text" placeholder="Enter Position Title" className="p-input white-bg" />
              </div>
            </div>

            <div className="ps-card">
              <div className="ps-card-top">
                <span className="ps-section-label">Certificates & Credentials</span>
                <button className="ps-edit-btn">
                  <Plus size={14} />
                  Add Certificate
                </button>
              </div>

              <div className="p-form-group">
                <label>Certificate</label>
                <div className="p-upload-box white-bg p-upload-large">
                  <Upload size={28} color="#a1a1aa" />
                  <span>Upload Certificate</span>
                </div>
              </div>

              <div className="p-form-group">
                <label>Alt Text</label>
                <input type="text" placeholder="Add Alt Text" className="p-input white-bg" />
              </div>
            </div>

            <div className="ps-card">
              <div className="ps-card-top">
                <span className="ps-section-label">Hobbies & Interests</span>
                <button className="ps-edit-btn">
                  <Plus size={14} />
                  Add Hobby
                </button>
              </div>

              <div className="p-empty-state">
                <Heart size={48} className="p-heart-icon" />
                <p>No hobbies added yet. Click "Add Hobby" to get started.</p>
              </div>
            </div>

            <div className="ps-card">
              <div className="ps-card-top">
                <span className="ps-section-label">Contact Information & Social Links</span>
                <button className="ps-edit-btn">
                  <Plus size={14} />
                  Add Link
                </button>
              </div>

              <div className="p-row-2-col">
                <div className="p-form-group">
                  <label>LinkedIn</label>
                  <input type="text" defaultValue="https://www.linkedin.com/in/mariammwaleed/" className="p-input white-bg" />
                </div>
                <div className="p-form-group">
                  <label>Behance</label>
                  <input type="text" defaultValue="https://www.behance.net/mariamwaleed7" className="p-input white-bg" />
                </div>
              </div>

              <div className="p-row-2-col">
                <div className="p-form-group">
                  <label>Instagram</label>
                  <input type="text" defaultValue="https://www.instagram.com/mariammwaleedd/" className="p-input white-bg" />
                </div>
                <div className="p-form-group">
                  <label>Whatsapp</label>
                  <input type="text" defaultValue="01275843440" className="p-input white-bg" />
                </div>
              </div>

              <div className="p-form-group">
                <label>Email</label>
                <input type="text" defaultValue="mariamwaleed2005@gmail.com" className="p-input white-bg" />
              </div>
            </div>

            <div className="ps-card">
              <div className="ps-section-label mb-4">SEO</div>
              
              <div className="p-row-2-col">
                <div className="p-form-group">
                  <label>Slug Name</label>
                  <input type="text" placeholder="Enter Slug Name" className="p-input white-bg" />
                </div>
                <div className="p-form-group">
                  <label>Page Tag</label>
                  <input type="text" placeholder="Enter Tag" className="p-input white-bg" />
                </div>
              </div>

              <div className="seo-toolbar">
                <button title="Bold"><Bold size={18} /></button>
                <button title="Italic"><Italic size={18} /></button>
                <button title="Strikethrough"><Strikethrough size={18} /></button>
                <div className="divider"></div>
                <button title="H1"><Heading1 size={18} /></button>
                <button title="H2"><Heading2 size={18} /></button>
                <button title="H3"><Heading3 size={18} /></button>
                <div className="divider"></div>
                <button title="Highlight"><Highlighter size={18} /></button>
                <button title="Code"><Code size={18} /></button>
                <button title="Link"><LinkIcon size={18} /></button>
                <button title="Comment"><MessageSquare size={18} /></button>
                <button title="Add Image"><ImagePlus size={18} /></button>
              </div>

              <div className="p-form-group">
                <label>Meta Description</label>
                <textarea 
                  placeholder="Enter Meta Description" 
                  className="p-input white-bg p-input-textarea" 
                  rows={4}
                ></textarea>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default About;
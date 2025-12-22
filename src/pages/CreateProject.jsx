import React, { useState } from 'react';
import { Helmet } from "react-helmet";
import SideBar from '../common/SideBar';
import { Link, useNavigate } from 'react-router-dom'; 
import NavButtons from '../common/NavButtons';
import './CreateProject.css';
import RichTextEditor from '../components/RichTextEditor';
import { supabase } from '../SupaBase';

const CreateProject = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Title: '',
    Title_AR: '',
    Type: '',
    Type_AR: '',
    Date: '',
    Date_AR: '',
    Overview: '',
    Overview_AR: '',
    Service: '',
    Service_AR: '',
    HeroImage: '',
    ShortDescription: '',
    ShortDescription_AR: '',
    Duration: '',
    Duration_AR: '',
    Role: '',
    Role_AR: '',
    Challenges: '',
    Challenges_AR: '',
    Technologies: '',
    Technologies_AR: '',
    Solution: '',
    Solution_AR: '',
    Achievements: '',
    Achievements_AR: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { error } = await supabase
        .from("ProjectDetails")
        .insert([formData]);

      if (error) throw error;
      navigate('/PageList');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <Helmet>
        <title>Create Project</title>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>

      <div className="app-layout">
        <div className="sidebar-container">
          <SideBar />
        </div>

        <div className="main-content">
          <NavButtons />

          <form className="pc-container" onSubmit={handleSubmit}>
            <div className="pc-header-row">
              <div className="pc-title-group">
                <h1>Create Project</h1>
                <p>Add details for your new portfolio item</p>
              </div>
              <Link to="/PageList">
                <button type="button" className="pc-back-btn">
                  Back To Projects &gt;
                </button>
              </Link>
            </div>

            <div className="pc-card">
              <div className="pc-pink-header">Header Info</div>
              <div className="pc-form">
                
                <div className="pc-grid-two">
                    <div className="pc-form-group">
                    <label>Project Title <span className="lang-badge">EN</span></label>
                    <input type="text" name="Title" value={formData.Title} onChange={handleChange} placeholder="Enter Title" className="pc-input" dir="ltr" required />
                    </div>
                    <div className="pc-form-group">
                    <label>Project Title <span className="lang-badge">AR</span></label>
                    <input type="text" name="Title_AR" value={formData.Title_AR} onChange={handleChange} placeholder="عنوان المشروع" className="pc-input" dir="rtl" />
                    </div>
                </div>

                <div className="pc-grid-two">
                    <div className="pc-form-group">
                        <label>Service Category <span className="lang-badge">EN</span></label>
                        <div className="pc-select-wrapper">
                            <select name="Service" value={formData.Service} onChange={handleChange} className="pc-input" dir="ltr">
                                <option value="" disabled>Select Service</option>
                                <option value="UX/UI">UX/UI Design</option>
                                <option value="GRAPHIC DESIGN">Graphic Design</option>
                                <option value="CONTENT CREATION">Content Creation</option>
                                <option value="3D MODELING">3D Modeling</option>
                                <option value="MOTION GRAPHICS">Motion Graphics</option>
                                <option value="CODING">Coding</option>
                                <option value="PHOTOGRAPHY">Photography</option>
                            </select>
                        </div>
                    </div>
                    <div className="pc-form-group">
                        <label>Service Category <span className="lang-badge">AR</span></label>
                        <div className="pc-select-wrapper">
                            <select name="Service_AR" value={formData.Service_AR} onChange={handleChange} className="pc-input" dir="rtl">
                                <option value="" disabled>اختر الخدمة</option>
                                <option value="UX/UI">تصميم تجربة وواجهة المستخدم</option>
                                <option value="GRAPHIC DESIGN">التصميم الجرافيكي</option>
                                <option value="CONTENT CREATION">صناعة المحتوى</option>
                                <option value="3D MODELING">النمذجة ثلاثية الأبعاد</option>
                                <option value="MOTION GRAPHICS">موشن جرافيك</option>
                                <option value="CODING">البرمجة</option>
                                <option value="PHOTOGRAPHY">التصوير الفوتوغرافي</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="pc-grid-two pc-mt-20">
                     <div className="pc-form-group">
                        <label>Short Description <span className="lang-badge">EN</span></label>
                        <textarea name="ShortDescription" value={formData.ShortDescription} onChange={handleChange} className="pc-input pc-textarea-small" rows="4" placeholder="Brief summary..." dir="ltr"></textarea>
                     </div>
                     <div className="pc-form-group">
                        <label>Short Description <span className="lang-badge">AR</span></label>
                        <textarea name="ShortDescription_AR" value={formData.ShortDescription_AR} onChange={handleChange} className="pc-input pc-textarea-small" rows="4" placeholder="ملخص سريع..." dir="rtl"></textarea>
                     </div>
                </div>

                <div className="pc-row-three">
                  <div className="pc-form-group">
                    <label>Date <span className="lang-badge">EN</span></label>
                    <input type="text" name="Date" value={formData.Date} onChange={handleChange} placeholder="Oct 2023" className="pc-input" dir="ltr" />
                  </div>
                  <div className="pc-form-group">
                    <label>Type <span className="lang-badge">EN</span></label>
                    <input type="text" name="Type" value={formData.Type} onChange={handleChange} placeholder="Freelance" className="pc-input" dir="ltr" />
                  </div>
                  <div className="pc-form-group">
                    <label>Duration <span className="lang-badge">EN</span></label>
                    <input type="text" name="Duration" value={formData.Duration} onChange={handleChange} placeholder="2 Weeks" className="pc-input" dir="ltr" />
                  </div>
                </div>

                <div className="pc-row-three">
                  <div className="pc-form-group">
                    <label>Date <span className="lang-badge">AR</span></label>
                    <input type="text" name="Date_AR" value={formData.Date_AR} onChange={handleChange} placeholder="أكتوبر ٢٠٢٣" className="pc-input" dir="rtl" />
                  </div>
                  <div className="pc-form-group">
                    <label>Type <span className="lang-badge">AR</span></label>
                    <input type="text" name="Type_AR" value={formData.Type_AR} onChange={handleChange} placeholder="عمل حر" className="pc-input" dir="rtl" />
                  </div>
                  <div className="pc-form-group">
                    <label>Duration <span className="lang-badge">AR</span></label>
                    <input type="text" name="Duration_AR" value={formData.Duration_AR} onChange={handleChange} placeholder="أسبوعين" className="pc-input" dir="rtl" />
                  </div>
                </div>

                <div className="pc-form-group">
                    <label>Hero Image URL</label>
                    <input type="text" name="HeroImage" value={formData.HeroImage} onChange={handleChange} placeholder="https://supabase.co/..." className="pc-input" dir="ltr" />
                </div>

              </div>
            </div>

            <div className="pc-card">
              <div className="pc-pink-header">Overview & Details</div>
              
              <div className="pc-dual-section">
                <div className="pc-form-group">
                  <label>Project Overview <span className="lang-badge">EN</span></label>
                  <textarea name="Overview" value={formData.Overview} onChange={handleChange} className="pc-input pc-textarea-small" placeholder="Enter Project Overview" dir="ltr"></textarea>
                </div>
                <div className="pc-form-group">
                  <label>Project Overview <span className="lang-badge">AR</span></label>
                  <textarea name="Overview_AR" value={formData.Overview_AR} onChange={handleChange} className="pc-input pc-textarea-small" placeholder="نظرة عامة على المشروع" dir="rtl"></textarea>
                </div>
              </div>

              <div className="pc-dual-section">
                <div className="pc-form-group">
                  <label>My Role <span className="lang-badge">EN</span></label>
                  <textarea name="Role" value={formData.Role} onChange={handleChange} className="pc-input pc-textarea-small" placeholder="Add Role" dir="ltr"></textarea>
                </div>
                <div className="pc-form-group">
                  <label>My Role <span className="lang-badge">AR</span></label>
                  <textarea name="Role_AR" value={formData.Role_AR} onChange={handleChange} className="pc-input pc-textarea-small" placeholder="دوري في المشروع" dir="rtl"></textarea>
                </div>
              </div>
            </div>

            <div className="pc-footer-actions">
                <Link to="/PageList" className="pc-link-no-style">
                    <button type="button" className="pc-btn-cancel">Cancel</button>
                </Link>
                <div className="pc-action-group">
                    <button type="submit" className="pc-btn-submit">Publish Project</button>
                </div>
            </div>

          </form> 
        </div>
      </div>
    </>
  );
};

export default CreateProject;
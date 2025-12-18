import React from 'react';
import { Helmet } from "react-helmet";
import SideBar from '../common/SideBar';
import { Link } from 'react-router-dom'; 
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
                {/* <p>UX/UI Projects - Fashion App</p> */}
              </div>
             <Link to="/PageList"><button className="pc-back-btn">
                Back To Projects &gt;
              </button></Link> 
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
              <div className="pc-grid-two pc-mt-20">
                 <div className="pc-form-group">
                    <label>Add Tag <span className="lang-badge">EN</span></label>
                    <input type="text" placeholder="New Tag" className="pc-input" dir="ltr" />
                 </div>
                 <div className="pc-form-group">
                    <label>Add Tag <span className="lang-badge">AR</span></label>
                    <input type="text" placeholder="وسم جديد" className="pc-input" dir="rtl" />
                 </div>
              </div>
            </div>

            <div className="pc-card">
              <div className="pc-pink-header">Header Info</div>
              <form className="pc-form">
                
                <div className="pc-grid-two">
                    <div className="pc-form-group">
                    <label>Project Title <span className="lang-badge">EN</span></label>
                    <input type="text" placeholder="Enter Title" className="pc-input" dir="ltr" />
                    </div>
                    <div className="pc-form-group">
                    <label>Project Title <span className="lang-badge">AR</span></label>
                    <input type="text" placeholder="عنوان المشروع" className="pc-input" dir="rtl" />
                    </div>
                </div>

                <div className="pc-grid-two">
                    <div className="pc-form-group">
                        <label>Service Category <span className="lang-badge">EN</span></label>
                        <div className="pc-select-wrapper">
                            <select defaultValue="" className="pc-input" dir="ltr">
                                <option value="" disabled>Select Service</option>
                                <option value="ux_ui">UX/UI Design</option>
                                <option value="graphic">Graphic Design</option>
                                <option value="content">Content Creation</option>
                                <option value="3d">3D Modeling</option>
                                <option value="motion">Motion Graphics</option>
                                <option value="coding">Coding</option>
                                <option value="photo">Photography</option>
                            </select>
                        </div>
                    </div>
                    <div className="pc-form-group">
                        <label>Service Category <span className="lang-badge">AR</span></label>
                        <div className="pc-select-wrapper">
                            <select defaultValue="" className="pc-input" dir="rtl">
                                <option value="" disabled>اختر الخدمة</option>
                                <option value="ux_ui">تصميم تجربة وواجهة المستخدم</option>
                                <option value="graphic">التصميم الجرافيكي</option>
                                <option value="content">صناعة المحتوى</option>
                                <option value="3d">النمذجة ثلاثية الأبعاد</option>
                                <option value="motion">موشن جرافيك</option>
                                <option value="coding">البرمجة</option>
                                <option value="photo">التصوير الفوتوغرافي</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="pc-form-group">
                    <label className="pc-desc-label">Description <span className="lang-badge">EN</span></label>
                    <div dir="ltr" className="pc-mb-20">
                        <RichTextEditor />
                    </div>
                    
                    <label className="pc-desc-label">Description <span className="lang-badge">AR</span></label>
                    <div dir="rtl">
                        <RichTextEditor />
                    </div>
                </div>

                <div className="pc-grid-two pc-mt-20">
                     <div className="pc-form-group">
                        <label>Short Description <span className="lang-badge">EN</span></label>
                        <textarea className="pc-input pc-textarea-small" rows="4" placeholder="Brief summary..." dir="ltr"></textarea>
                     </div>
                     <div className="pc-form-group">
                        <label>Short Description <span className="lang-badge">AR</span></label>
                        <textarea className="pc-input pc-textarea-small" rows="4" placeholder="ملخص سريع..." dir="rtl"></textarea>
                     </div>
                </div>

                <div className="pc-row-three">
                  <div className="pc-form-group">
                    <label>Date <span className="lang-badge">EN</span></label>
                    <input type="text" placeholder="Oct 2023" className="pc-input" dir="ltr" />
                  </div>
                  <div className="pc-form-group">
                    <label>Type <span className="lang-badge">EN</span></label>
                    <input type="text" placeholder="Freelance" className="pc-input" dir="ltr" />
                  </div>
                  <div className="pc-form-group">
                    <label>Duration <span className="lang-badge">EN</span></label>
                    <input type="text" placeholder="2 Weeks" className="pc-input" dir="ltr" />
                  </div>
                </div>

                <div className="pc-row-three">
                  <div className="pc-form-group">
                    <label>Date <span className="lang-badge">AR</span></label>
                    <input type="text" placeholder="أكتوبر ٢٠٢٣" className="pc-input" dir="rtl" />
                  </div>
                  <div className="pc-form-group">
                    <label>Type <span className="lang-badge">AR</span></label>
                    <input type="text" placeholder="عمل حر" className="pc-input" dir="rtl" />
                  </div>
                  <div className="pc-form-group">
                    <label>Duration <span className="lang-badge">AR</span></label>
                    <input type="text" placeholder="أسبوعين" className="pc-input" dir="rtl" />
                  </div>
                </div>

              </form>
            </div>

            <div className="pc-card">
              <div className="pc-pink-header">Overview & Details</div>
              
              <div className="pc-dual-section">
                <div className="pc-form-group">
                  <label>Project Overview <span className="lang-badge">EN</span></label>
                  <textarea className="pc-input pc-textarea-small" placeholder="Enter Project Overview" dir="ltr"></textarea>
                </div>
                <div className="pc-form-group">
                  <label>Project Overview <span className="lang-badge">AR</span></label>
                  <textarea className="pc-input pc-textarea-small" placeholder="نظرة عامة على المشروع" dir="rtl"></textarea>
                </div>
              </div>

              <div className="pc-dual-section">
                <div className="pc-form-group">
                  <label>My Role <span className="lang-badge">EN</span></label>
                  <textarea className="pc-input pc-textarea-small" placeholder="Add Role" dir="ltr"></textarea>
                </div>
                <div className="pc-form-group">
                  <label>My Role <span className="lang-badge">AR</span></label>
                  <textarea className="pc-input pc-textarea-small" placeholder="دوري في المشروع" dir="rtl"></textarea>
                </div>
              </div>

              <div className="pc-dual-section">
                <div className="pc-form-group">
                  <label>Challenges <span className="lang-badge">EN</span></label>
                  <textarea className="pc-input pc-textarea-small" placeholder="Enter Challenges" dir="ltr"></textarea>
                </div>
                <div className="pc-form-group">
                  <label>Challenges <span className="lang-badge">AR</span></label>
                  <textarea className="pc-input pc-textarea-small" placeholder="التحديات" dir="rtl"></textarea>
                </div>
              </div>

              <div className="pc-dual-section">
                <div className="pc-form-group">
                  <label>Technologies <span className="lang-badge">EN</span></label>
                  <textarea className="pc-input pc-textarea-small" placeholder="Enter technologies" dir="ltr"></textarea>
                </div>
                <div className="pc-form-group">
                  <label>Technologies <span className="lang-badge">AR</span></label>
                  <textarea className="pc-input pc-textarea-small" placeholder="التقنيات المستخدمة" dir="rtl"></textarea>
                </div>
              </div>

              <div className="pc-dual-section">
                <div className="pc-form-group">
                  <label>Solution <span className="lang-badge">EN</span></label>
                  <textarea className="pc-input pc-textarea-small" placeholder="Enter Solution" dir="ltr"></textarea>
                </div>
                <div className="pc-form-group">
                  <label>Solution <span className="lang-badge">AR</span></label>
                  <textarea className="pc-input pc-textarea-small" placeholder="الحل المقترح" dir="rtl"></textarea>
                </div>
              </div>

              <div className="pc-dual-section">
                <div className="pc-form-group">
                  <label>Key Achievements <span className="lang-badge">EN</span></label>
                  <textarea className="pc-input pc-textarea-small" placeholder="Enter Key Achievements" dir="ltr"></textarea>
                </div>
                <div className="pc-form-group">
                  <label>Key Achievements <span className="lang-badge">AR</span></label>
                  <textarea className="pc-input pc-textarea-small" placeholder="أهم الإنجازات" dir="rtl"></textarea>
                </div>
              </div>
            </div>

            <div className="pc-card">
              <div className="pc-pink-header">Features & Process</div>
              
              <div className="pc-subheader-row">
                <h3>Key Features</h3>
                <button className="pc-action-btn">Add Feature +</button>
              </div>

              <div className="pc-grid-two">
                <div className="pc-feature-block">
                  <label className="pc-sub-label">Feature 1 <span className="lang-badge">EN</span></label>
                  <input type="text" className="pc-input pc-mb-10" placeholder="Title EN" dir="ltr" />
                  <textarea className="pc-input pc-textarea-small" placeholder="Description EN" dir="ltr"></textarea>
                  
                  <div className="pc-mt-20"></div>
                  
                  <label className="pc-sub-label">Feature 1 <span className="lang-badge">AR</span></label>
                  <input type="text" className="pc-input pc-mb-10" placeholder="العنوان بالعربية" dir="rtl" />
                  <textarea className="pc-input pc-textarea-small" placeholder="الوصف بالعربية" dir="rtl"></textarea>
                </div>

                <div className="pc-feature-block">
                  <label className="pc-sub-label">Feature 2 <span className="lang-badge">EN</span></label>
                  <input type="text" className="pc-input pc-mb-10" placeholder="Title EN" dir="ltr" />
                  <textarea className="pc-input pc-textarea-small" placeholder="Description EN" dir="ltr"></textarea>

                   <div className="pc-mt-20"></div>

                  <label className="pc-sub-label">Feature 2 <span className="lang-badge">AR</span></label>
                  <input type="text" className="pc-input pc-mb-10" placeholder="العنوان بالعربية" dir="rtl" />
                  <textarea className="pc-input pc-textarea-small" placeholder="الوصف بالعربية" dir="rtl"></textarea>
                </div>
              </div>

              <div className="pc-subheader-row pc-mt-40">
                <h3>Design Process</h3>
                <button className="pc-action-btn">Add Process +</button>
              </div>

              <div className="pc-process-container">
                <div className="pc-process-item">
                  <div className="pc-grid-two">
                    <div>
                        <label className="pc-sub-label">Process 1 <span className="lang-badge">EN</span></label>
                        <input type="text" className="pc-input pc-mb-10" placeholder="Title EN" dir="ltr" />
                        <div dir="ltr"><RichTextEditor /></div>
                    </div>
                    <div>
                        <label className="pc-sub-label">Process 1 <span className="lang-badge">AR</span></label>
                        <input type="text" className="pc-input pc-mb-10" placeholder="العنوان بالعربية" dir="rtl" />
                        <div dir="rtl"><RichTextEditor /></div>
                    </div>
                  </div>
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

              <div className="pc-grid-two pc-mt-20">
                <div className="pc-form-group">
                    <label>Alt Text <span className="lang-badge">EN</span></label>
                    <input type="text" className="pc-input" placeholder="Image Description" dir="ltr" />
                </div>
                <div className="pc-form-group">
                    <label>Alt Text <span className="lang-badge">AR</span></label>
                    <input type="text" className="pc-input" placeholder="وصف الصورة" dir="rtl" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectContent;
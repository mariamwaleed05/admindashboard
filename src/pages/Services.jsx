import React, { useState } from 'react';
import { Helmet } from "react-helmet";
import { useNavigate } from 'react-router-dom';
import { Search, Plus, FileText, Trash2, Edit2, ChevronDown, Layers, ArrowRight, Globe } from 'lucide-react';
import SideBar from '../common/SideBar';
import NavButtons from '../common/NavButtons';
import './Services.css';

const Services = () => {
  const navigate = useNavigate();

  const initialPages = [
    { 
      id: 1, 
      name: 'Hero Page', 
      date: 'Nov 22, 2025', 
      lang: 'en', 
      sections: {
        en: ['Main Headline', 'Hero Image', 'CTA Button'],
        ar: ['العنوان الرئيسي', 'صورة البانر', 'زر الإجراء']
      }
    },
    { 
      id: 2, 
      name: 'Article', 
      date: 'Nov 22, 2025', 
      lang: 'en', 
      sections: {
        en: ['Title', 'Body Text', 'Author Bio'],
        ar: ['عنوان المقال', 'نص المقال', 'نبذة عن الكاتب']
      }
    },
    { 
      id: 3, 
      name: 'Building Portfolio', 
      date: 'Nov 22, 2025', 
      lang: 'en', 
      sections: {
        en: ['Gallery Grid', 'Project Links', 'Testimonials'],
        ar: ['شبكة المعرض', 'روابط المشاريع', 'الشهادات']
      }
    },
    { 
      id: 4, 
      name: 'Project Details', 
      date: 'Nov 22, 2025', 
      lang: 'en', 
      sections: {
        en: ['Header', 'Description', 'Tech Stack'],
        ar: ['الرأس', 'الوصف', 'التقنيات المستخدمة']
      }
    },
    { 
      id: 5, 
      name: 'About Me', 
      date: 'Nov 22, 2025', 
      lang: 'en', 
      sections: {
        en: ['Biography', 'Social Links', 'Resume'],
        ar: ['السيرة الذاتية', 'روابط التواصل', 'السيرة المهنية']
      }
    },
    { 
      id: 6, 
      name: 'Designers', 
      date: 'Nov 22, 2025', 
      lang: 'en', 
      sections: {
        en: ['Team Grid', 'Profiles'],
        ar: ['شبكة الفريق', 'الملفات الشخصية']
      }
    },
    { 
      id: 7, 
      name: 'Services Page', 
      date: 'Nov 22, 2025', 
      lang: 'en', 
      sections: {
        en: ['Service List', 'Pricing Cards'],
        ar: ['قائمة الخدمات', 'بطاقات الأسعار']
      }
    },
    { 
      id: 8, 
      name: 'Contact Me', 
      date: 'Nov 22, 2025', 
      lang: 'en', 
      sections: {
        en: ['Form Fields', 'Map Integration'],
        ar: ['حقول النموذج', 'تكامل الخريطة']
      }
    },
  ];

  const [pages, setPages] = useState(initialPages);
  const [activeDropdownId, setActiveDropdownId] = useState(null);

  const toggleDropdown = (id) => {
    setActiveDropdownId(activeDropdownId === id ? null : id);
  };

  const switchLanguage = (id) => {
    setPages(pages.map(page => 
      page.id === id 
        ? { ...page, lang: page.lang === 'en' ? 'ar' : 'en' } 
        : page
    ));
  };

  const handleEditRedirect = (pageName, lang) => {
    console.log(`Editing ${pageName} in ${lang}`);
    navigate('/project-content'); 
  };

  return (
    <>
      <Helmet>
        <title>Page List</title>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>

      <div className="app-layout">
        <div className="sidebar-container">
          <SideBar />
        </div>

        <div className="main-content">
          <NavButtons />

          <div className="services-container">
            
            <div className="svc-header-row">
              <div className="svc-title-group">
                <h1>Page List</h1>
                <p>Browse through website pages.</p>
              </div>
              <button className="svc-add-btn">
                Add Page <Plus size={18} />
              </button>
            </div>

            <div className="svc-card">
              
              <div className="svc-search-wrapper">
                <Search className="svc-search-icon" size={20} />
                <input type="text" placeholder="Search pages..." className="svc-search-input" />
              </div>

              <div className="svc-grid-layout svc-table-header">
                <div className="col-status">Status</div>
                <div className="col-date">Date</div>
                <div className="col-lang">Content Language</div>
                <div className="col-actions">Actions</div>
              </div>

              <div className="svc-table-body">
                {pages.map((page) => {
                  
                  const currentSections = page.sections[page.lang] || [];
                  const isRtlList = page.lang === 'ar';

                  return (
                    <div className="svc-grid-layout svc-table-row" key={page.id}>
                      
                      <div className="col-status svc-name-group">
                        <div className="svc-icon-box">
                          <FileText size={18} />
                        </div>
                        <span className="svc-page-name">{page.name}</span>
                      </div>

                      <div className="col-date svc-date-text">
                        {page.date}
                      </div>

                      <div className="col-lang svc-lang-wrapper">
                        <button 
                          className={`svc-lang-pill ${page.lang === 'en' ? 'en-active' : 'ar-active'} ${activeDropdownId === page.id ? 'active' : ''}`} 
                          onClick={() => toggleDropdown(page.id)}
                        >
                          {page.lang === 'en' ? (
                            <>
                              <svg width="20" height="15" viewBox="0 0 28 20" fill="none" className="flag-icon">
                                  <rect width="28" height="20" rx="2" fill="#B22234"/>
                                  <path d="M0 0H28V2H0V0Z" fill="white"/>
                                  <path d="M0 4H28V6H0V4Z" fill="white"/>
                                  <path d="M0 8H28V10H0V8Z" fill="white"/>
                                  <path d="M0 12H28V14H0V12Z" fill="white"/>
                                  <path d="M0 16H28V18H0V16Z" fill="white"/>
                                  <rect width="11" height="11" fill="#3C3B6E"/>
                              </svg>
                              <span className="lang-text">English</span>
                            </>
                          ) : (
                            <>
                              <svg width="20" height="15" viewBox="0 0 28 20" fill="none" className="flag-icon">
                                  <rect width="28" height="20" rx="2" fill="#CE1126"/>
                                  <rect y="6.66" width="28" height="6.66" fill="white"/>
                                  <rect y="13.32" width="28" height="6.66" fill="black"/>
                                  <circle cx="14" cy="10" r="2" fill="#C09300"/>
                              </svg>
                              <span className="lang-text">Arabic</span>
                            </>
                          )}
                          <ChevronDown size={14} className={`chevron-anim ${activeDropdownId === page.id ? 'rotate' : ''}`} />
                        </button>

                        {activeDropdownId === page.id && (
                          <div className="svc-dropdown-menu">
                              <div className="svc-dd-header">
                                  <span>{page.lang === 'en' ? 'English Content' : 'المحتوى العربي'}</span>
                                  <span className="svc-dd-badge">{currentSections.length}</span>
                              </div>
                              
                              <ul className="svc-dd-list">
                                  {currentSections.length > 0 ? (
                                    currentSections.map((section, idx) => (
                                        <li 
                                          key={idx} 
                                          className={`svc-dd-item ${isRtlList ? 'rtl-item' : ''}`}
                                        >
                                            <Layers size={14} /> 
                                            <span>{section}</span>
                                        </li>
                                    ))
                                  ) : (
                                    <li className="svc-dd-item empty">No content available</li>
                                  )}
                              </ul>

                              <button 
                                  className="svc-dd-edit-btn"
                                  onClick={() => handleEditRedirect(page.name, page.lang)}
                              >
                                  {page.lang === 'en' ? 'Edit Page' : 'تعديل الصفحة'} <ArrowRight size={14} style={{ transform: isRtlList ? 'rotate(180deg)' : 'none' }} />
                              </button>

                              <div className="svc-dd-divider"></div>

                              <button className="svc-dd-switch-btn" onClick={() => switchLanguage(page.id)}>
                                  <Globe size={14} />
                                  {page.lang === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'}
                              </button>
                          </div>
                        )}
                      </div>

                      <div className="col-actions svc-action-group">
                        <button className="svc-action-btn delete">
                          <Trash2 size={16} />
                        </button>
                        <button className="svc-action-btn edit" onClick={() => handleEditRedirect(page.name, page.lang)}>
                          <Edit2 size={16} />
                        </button>
                      </div>

                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
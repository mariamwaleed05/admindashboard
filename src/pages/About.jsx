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
import { useLanguage } from '../language/LanguageContext';

const About = () => {
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';
  
  const directionStyle = { direction: isRtl ? 'rtl' : 'ltr' };

  const skills = [
    { id: 1, name: t.aboutPage.skill1 },
    { id: 2, name: t.aboutPage.skill2 },
    { id: 3, name: t.aboutPage.skill3 },
    { id: 4, name: t.aboutPage.skill4 }
  ];

  return (
    <>
      <Helmet>
        <title>{t.aboutPage.title} | {t.sidebar.settings}</title>
        <meta name="description" content="Update your personal information" />
      </Helmet>

      <div className="app-layout" style={directionStyle}>
        <div className="sidebar-container">
          <SideBar />
        </div>

        <div className="main-content">
          <NavButtons />

          <div className="about-container">
            
            <div className="ps-header">
              <h1>{t.aboutPage.title}</h1>
              <p>{t.aboutPage.subTitle}</p>
            </div>

            <div className="ps-card">
              <div className="ps-card-top">
                <span className="ps-section-label">{t.aboutPage.personalInfo}</span>
                <button className="ps-edit-btn">
                  <Pencil size={16} style={{ marginLeft: isRtl ? '0.5rem' : 0, marginRight: isRtl ? 0 : '0.5rem' }} />
                  {t.aboutPage.edit}
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
                    {t.aboutPage.bio}
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
                  <span className="ps-section-label">{t.aboutPage.visMisTitle}</span>
                  <button className="ps-edit-btn">
                    <Pencil size={14} style={{ marginLeft: isRtl ? '0.5rem' : 0, marginRight: isRtl ? 0 : '0.5rem' }} />
                    {t.aboutPage.edit}
                  </button>
                </div>
                
                <div className="p-form-group">
                  <label>{t.aboutPage.vision} <span className="lang-badge">EN</span></label>
                  <input type="text" placeholder={t.aboutPage.visionPlace} className="p-input white-bg" dir="ltr" />
                </div>
                <div className="p-form-group">
                  <label>{t.aboutPage.vision} <span className="lang-badge">AR</span></label>
                  <input type="text" placeholder="رؤيتك..." className="p-input white-bg" dir="rtl" />
                </div>

                <div className="p-form-group">
                  <label>{t.aboutPage.mission} <span className="lang-badge">EN</span></label>
                  <input type="text" placeholder={t.aboutPage.missionPlace} className="p-input white-bg" dir="ltr" />
                </div>
                <div className="p-form-group">
                  <label>{t.aboutPage.mission} <span className="lang-badge">AR</span></label>
                  <input type="text" placeholder="مهمتك..." className="p-input white-bg" dir="rtl" />
                </div>
              </div>

              <div className="ps-card">
                <div className="ps-card-top">
                  <span className="ps-section-label">{t.aboutPage.skillsTitle}</span>
                  <button className="ps-edit-btn">
                    <Plus size={14} style={{ marginLeft: isRtl ? '0.5rem' : 0, marginRight: isRtl ? 0 : '0.5rem' }} />
                    {t.aboutPage.addSkill}
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
                <span className="ps-section-label">{t.aboutPage.eduTitle}</span>
                <button className="ps-edit-btn">
                  <Plus size={14} style={{ marginLeft: isRtl ? '0.5rem' : 0, marginRight: isRtl ? 0 : '0.5rem' }} />
                  {t.aboutPage.addEdu}
                </button>
              </div>

              <div className="p-row-2-col">
                <div className="p-form-group">
                  <label>{t.aboutPage.uniName} <span className="lang-badge">EN</span></label>
                  <input type="text" placeholder={t.aboutPage.uniNamePlace} className="p-input white-bg" dir="ltr" />
                </div>
                <div className="p-form-group">
                  <label>{t.aboutPage.uniName} <span className="lang-badge">AR</span></label>
                  <input type="text" placeholder="اسم الجامعة" className="p-input white-bg" dir="rtl" />
                </div>
              </div>

              <div className="p-row-2-col">
                <div className="p-form-group">
                  <label>{t.aboutPage.uniLogo}</label>
                  <div className="p-upload-box white-bg">
                    <Upload size={24} color="#a1a1aa" />
                    <span>{t.aboutPage.uploadLogo}</span>
                  </div>
                </div>
                <div className="p-form-group-stack">
                   <div className="p-form-group">
                      <label>{t.aboutPage.altText} <span className="lang-badge">EN</span></label>
                      <input type="text" placeholder={t.aboutPage.altTextPlace} className="p-input white-bg p-input-fill" dir="ltr" />
                   </div>
                   <div className="p-form-group">
                      <label>{t.aboutPage.altText} <span className="lang-badge">AR</span></label>
                      <input type="text" placeholder="وصف الصورة" className="p-input white-bg p-input-fill" dir="rtl" />
                   </div>
                </div>
              </div>

              <div className="p-row-3-col">
                <div className="p-form-group wide-col">
                  <label>{t.aboutPage.degree} <span className="lang-badge">EN</span></label>
                  <input type="text" placeholder={t.aboutPage.degreePlace} className="p-input white-bg" dir="ltr" />
                  <div style={{ marginTop: '10px' }}></div>
                  <label>{t.aboutPage.degree} <span className="lang-badge">AR</span></label>
                  <input type="text" placeholder="الدرجة العلمية" className="p-input white-bg" dir="rtl" />
                </div>
                <div className="p-form-group">
                  <label>{t.aboutPage.date} <span className="lang-badge">EN</span></label>
                  <input type="text" placeholder={t.aboutPage.datePlace} className="p-input white-bg" dir="ltr" />
                  <div style={{ marginTop: '10px' }}></div>
                  <label>{t.aboutPage.date} <span className="lang-badge">AR</span></label>
                  <input type="text" placeholder="التاريخ" className="p-input white-bg" dir="rtl" />
                </div>
              </div>
            </div>

            <div className="ps-card">
              <div className="ps-card-top">
                <span className="ps-section-label">{t.aboutPage.workTitle}</span>
                <button className="ps-edit-btn">
                  <Plus size={14} style={{ marginLeft: isRtl ? '0.5rem' : 0, marginRight: isRtl ? 0 : '0.5rem' }} />
                  {t.aboutPage.addWork}
                </button>
              </div>

              <div className="p-row-2-col">
                <div className="p-form-group">
                  <label>{t.aboutPage.compName} <span className="lang-badge">EN</span></label>
                  <input type="text" placeholder={t.aboutPage.compNamePlace} className="p-input white-bg" dir="ltr" />
                </div>
                <div className="p-form-group">
                  <label>{t.aboutPage.compName} <span className="lang-badge">AR</span></label>
                  <input type="text" placeholder="اسم الشركة" className="p-input white-bg" dir="rtl" />
                </div>
              </div>

              <div className="p-row-2-col">
                <div className="p-form-group">
                  <label>{t.aboutPage.compLogo}</label>
                  <div className="p-upload-box white-bg">
                    <Upload size={24} color="#a1a1aa" />
                    <span>{t.aboutPage.uploadLogo}</span>
                  </div>
                </div>
                <div className="p-form-group-stack">
                    <div className="p-form-group">
                      <label>{t.aboutPage.altText} <span className="lang-badge">EN</span></label>
                      <input type="text" placeholder={t.aboutPage.altTextPlace} className="p-input white-bg p-input-fill" dir="ltr" />
                    </div>
                    <div className="p-form-group">
                      <label>{t.aboutPage.altText} <span className="lang-badge">AR</span></label>
                      <input type="text" placeholder="وصف الصورة" className="p-input white-bg p-input-fill" dir="rtl" />
                    </div>
                </div>
              </div>

              <div className="p-row-2-col">
                <div className="p-form-group">
                  <label>{t.aboutPage.posTitle} <span className="lang-badge">EN</span></label>
                  <input type="text" placeholder={t.aboutPage.posTitlePlace} className="p-input white-bg" dir="ltr" />
                </div>
                <div className="p-form-group">
                  <label>{t.aboutPage.posTitle} <span className="lang-badge">AR</span></label>
                  <input type="text" placeholder="المسمى الوظيفي" className="p-input white-bg" dir="rtl" />
                </div>
              </div>
            </div>

            <div className="ps-card">
              <div className="ps-card-top">
                <span className="ps-section-label">{t.aboutPage.certTitle}</span>
                <button className="ps-edit-btn">
                  <Plus size={14} style={{ marginLeft: isRtl ? '0.5rem' : 0, marginRight: isRtl ? 0 : '0.5rem' }} />
                  {t.aboutPage.addCert}
                </button>
              </div>

              <div className="p-form-group">
                <label>{t.aboutPage.certLabel}</label>
                <div className="p-upload-box white-bg p-upload-large">
                  <Upload size={28} color="#a1a1aa" />
                  <span>{t.aboutPage.uploadCert}</span>
                </div>
              </div>

              <div className="p-row-2-col">
                <div className="p-form-group">
                  <label>{t.aboutPage.altText} <span className="lang-badge">EN</span></label>
                  <input type="text" placeholder={t.aboutPage.altTextPlace} className="p-input white-bg" dir="ltr" />
                </div>
                <div className="p-form-group">
                  <label>{t.aboutPage.altText} <span className="lang-badge">AR</span></label>
                  <input type="text" placeholder="وصف الصورة" className="p-input white-bg" dir="rtl" />
                </div>
              </div>
            </div>

            <div className="ps-card">
              <div className="ps-card-top">
                <span className="ps-section-label">{t.aboutPage.hobbyTitle}</span>
                <button className="ps-edit-btn">
                  <Plus size={14} style={{ marginLeft: isRtl ? '0.5rem' : 0, marginRight: isRtl ? 0 : '0.5rem' }} />
                  {t.aboutPage.addHobby}
                </button>
              </div>

              <div className="p-empty-state">
                <Heart size={48} className="p-heart-icon" />
                <p>{t.aboutPage.noHobby}</p>
              </div>
            </div>

            <div className="ps-card">
              <div className="ps-card-top">
                <span className="ps-section-label">{t.aboutPage.contactTitle}</span>
                <button className="ps-edit-btn">
                  <Plus size={14} style={{ marginLeft: isRtl ? '0.5rem' : 0, marginRight: isRtl ? 0 : '0.5rem' }} />
                  {t.aboutPage.addLink}
                </button>
              </div>

              <div className="p-row-2-col">
                <div className="p-form-group">
                  <label>{t.aboutPage.linkedin}</label>
                  <input type="text" defaultValue="https://www.linkedin.com/in/mariammwaleed/" className="p-input white-bg" dir="ltr" />
                </div>
                <div className="p-form-group">
                  <label>{t.aboutPage.behance}</label>
                  <input type="text" defaultValue="https://www.behance.net/mariamwaleed7" className="p-input white-bg" dir="ltr" />
                </div>
              </div>

              <div className="p-row-2-col">
                <div className="p-form-group">
                  <label>{t.aboutPage.instagram}</label>
                  <input type="text" defaultValue="https://www.instagram.com/mariammwaleedd/" className="p-input white-bg" dir="ltr" />
                </div>
                <div className="p-form-group">
                  <label>{t.aboutPage.whatsapp}</label>
                  <input type="text" defaultValue="01275843440" className="p-input white-bg" dir="ltr" />
                </div>
              </div>

              <div className="p-form-group">
                <label>{t.aboutPage.email}</label>
                <input type="text" defaultValue="mariamwaleed2005@gmail.com" className="p-input white-bg" dir="ltr" />
              </div>
            </div>

            <div className="ps-card">
              <div className="ps-section-label mb-4">{t.aboutPage.seo}</div>
              
              <div className="p-row-2-col">
                <div className="p-form-group">
                  <label>{t.aboutPage.slug} <span className="lang-badge">EN</span></label>
                  <input type="text" placeholder={t.aboutPage.slugPlace} className="p-input white-bg" dir="ltr" />
                </div>
                <div className="p-form-group">
                  <label>{t.aboutPage.slug} <span className="lang-badge">AR</span></label>
                  <input type="text" placeholder="رابط-الصفحة" className="p-input white-bg" dir="rtl" />
                </div>
              </div>

              <div className="p-row-2-col">
                 <div className="p-form-group">
                  <label>{t.aboutPage.tag} <span className="lang-badge">EN</span></label>
                  <input type="text" placeholder={t.aboutPage.tagPlace} className="p-input white-bg" dir="ltr" />
                </div>
                <div className="p-form-group">
                  <label>{t.aboutPage.tag} <span className="lang-badge">AR</span></label>
                  <input type="text" placeholder="وسم" className="p-input white-bg" dir="rtl" />
                </div>
              </div>

              <div className="seo-toolbar" style={{ direction: 'ltr' }}>
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
                <label>{t.aboutPage.meta} <span className="lang-badge">EN</span></label>
                <textarea 
                  placeholder={t.aboutPage.metaPlace} 
                  className="p-input white-bg p-input-textarea" 
                  rows={4}
                  dir="ltr"
                ></textarea>
              </div>
              
              <div className="p-form-group">
                <label>{t.aboutPage.meta} <span className="lang-badge">AR</span></label>
                <textarea 
                  placeholder="وصف الميتا بالعربية..." 
                  className="p-input white-bg p-input-textarea" 
                  rows={4}
                  dir="rtl"
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
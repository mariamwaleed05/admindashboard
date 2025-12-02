import React from 'react';
import { Helmet } from "react-helmet";
import { Plus, FileText, Trash2, ArrowRight, EyeOff } from 'lucide-react';
import './ProjectDetails.css';
import NavButtons from './../common/NavButtons';
import uxPic from '../imgs/uxpic.png';
import { useLanguage } from '../language/LanguageContext';

const ProjectDetails = () => {
    const { t, language } = useLanguage();
    
    const isRtl = language === 'ar';
    const directionStyle = { direction: isRtl ? 'rtl' : 'ltr' };
    
    const arrowStyle = { transform: isRtl ? 'rotate(180deg)' : 'none' };

    return ( 
        <>
        <Helmet>
            <title>{t.uxProjects.mainTitle}</title>
            <meta name="description" content="Project Details Page" />
            <meta property="og:title" content="Dashboard" />
            <link rel="icon" type="image/png" href="/icon.png" sizes="16x16" /> 
        </Helmet>

        <div className="main-content" style={directionStyle}>
          <NavButtons/>

         <div className="ux-dashboard-wrapper">
      
            <div className="ux-header-section">
                <div className="ux-text-group">
                <h1 className="ux-main-title">{t.uxProjects.mainTitle}</h1>
                <p className="ux-sub-title">{t.uxProjects.subTitle}</p>
                </div>
                <button className="ux-add-btn">
                {t.uxProjects.addBtn}
                <Plus size={20} style={{ marginLeft: isRtl ? 0 : '0.5rem', marginRight: isRtl ? '0.5rem' : 0 }} />
                </button>
            </div>

            <div className="feature-card">
                <div className="feature-bg-image">
                <img 
                    src={uxPic}
                    alt="App Mockup" 
                />
                </div>

                <div className="feature-gradient-overlay"></div>

    
                <div className="card-top-left" style={isRtl ? { right: '24px', left: 'auto' } : {}}>
                    <div className="ux-category-pill">
                        <span className="icon-box-pink">
                        <FileText size={16} />
                        </span>
                        <span className="pill-text">{t.uxProjects.pillText}</span>
                    </div>
                </div>

                <div className="card-top-right" style={isRtl ? { left: '24px', right: 'auto', flexDirection: 'row-reverse' } : {}}>
                    <button className="mini-square-btn delete-action">
                        <Trash2 size={18} />
                    </button>
                    <button className="mini-square-btn count-action">
                        1
                    </button>
                </div>

                <div className="card-bottom-area">
                    <div className="card-text-content">
                        <h2 className="feature-title">{t.uxProjects.featureTitle}</h2>
                        <p className="feature-desc">
                        {t.uxProjects.featureDesc}
                        </p>
                    </div>

                    <div className="card-action-row">
                        <button className="pill-action-btn white-btn">
                            {t.uxProjects.editBtn}
                            <ArrowRight size={18} style={arrowStyle} />
                        </button>

                        <button className="pill-action-btn grey-btn ml-auto" style={isRtl ? { marginRight: 'auto', marginLeft: '0' } : {}}>
                            <EyeOff size={18} className="eye-icon-red" />
                            {t.uxProjects.hideBtn}
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </div>
    </>
    );
}
 
export default ProjectDetails;
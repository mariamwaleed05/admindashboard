import React, { useState } from 'react';
import { Helmet } from "react-helmet";
import { useNavigate } from 'react-router-dom'; 
import NavButtons from '../common/NavButtons';
import SideBar from '../common/SideBar';
import './PageList.css';
import { 
  LayoutGrid, Palette, PenTool, Pencil, Box, Video, Code, Camera,
  FileText, Eye, Trash2, Edit2, Plus 
} from 'lucide-react';
import { useLanguage } from '../language/LanguageContext';

const PageList = () => {
  const { t, language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');
  
  const navigate = useNavigate();

  const services = [
    { id: 'all', label: t.pageList.filterAll, count: 10, icon: LayoutGrid },
    { id: 'uxui', label: t.pageList.filterUx, count: 5, icon: Palette },
    { id: 'graphic', label: t.pageList.filterGraphic, count: 5, icon: PenTool },
    { id: 'content', label: t.pageList.filterContent, count: 5, icon: Pencil },
    { id: '3d', label: t.pageList.filter3d, count: 5, icon: Box },
    { id: 'motion', label: t.pageList.filterMotion, count: 5, icon: Video },
    { id: 'coding', label: t.pageList.filterCoding, count: 5, icon: Code },
    { id: 'photography', label: t.pageList.filterPhoto, count: 5, icon: Camera }
  ];

  const projects = [
    { id: 1, title: 'Fashion App', description: 'Mobile app for booking private buses with real-time tracking and QR code verification', category: 'uxui' },
    { id: 2, title: 'Fashion App', description: 'Mobile app for booking private buses with real-time tracking and QR code verification', category: 'uxui' },
    { id: 3, title: 'Fashion App', description: 'Mobile app for booking private buses with real-time tracking and QR code verification', category: 'graphic' },
    { id: 4, title: 'Fashion App', description: 'Mobile app for booking private buses with real-time tracking and QR code verification', category: 'content' },
    { id: 5, title: 'Fashion App', description: 'Mobile app for booking private buses with real-time tracking and QR code verification', category: '3d' },
    { id: 6, title: 'Fashion App', description: 'Mobile app for booking private buses with real-time tracking and QR code verification', category: 'motion' },
    { id: 7, title: 'Fashion App', description: 'Mobile app for booking private buses with real-time tracking and QR code verification', category: 'coding' },
    { id: 8, title: 'Fashion App', description: 'Mobile app for booking private buses with real-time tracking and QR code verification', category: 'photography' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const isRtl = language === 'ar';
  const directionStyle = { direction: isRtl ? 'rtl' : 'ltr' };

  const handleEditClick = () => {
    navigate('/ProjectDeatils'); 
  };

  return ( 
    <>
      <Helmet>
        <title>{t.pageList.title}</title>
        <meta name="description" content="This is the page list page" />
      </Helmet>

      <div className="app-layout" style={directionStyle}>
        <div className="sidebar-container">
          <SideBar/>
        </div>

        <div className="main-content">
          <NavButtons/>
          
          <div className="project-list-container">
            <div className="project-list-header">
              <div className="header-content">
                <h1>{t.pageList.title}</h1>
                <p>{t.pageList.subtitle}</p>
              </div>
              <button className="add-project-btn">
                {t.pageList.addProject}
                <Plus size={18} style={{ marginLeft: isRtl ? 0 : '0.5rem', marginRight: isRtl ? '0.5rem' : 0 }} />
              </button>
            </div>

            <div className="services-filter">
              {services.map(service => {
                const IconComponent = service.icon;
                return (
                  <button
                    key={service.id}
                    className={`filter-btn ${activeFilter === service.id ? 'active' : ''}`}
                    onClick={() => setActiveFilter(service.id)}
                  >
                    <IconComponent size={16} />
                    {service.label}
                    <span className="count-badge">{service.count}</span>
                  </button>
                );
              })}
            </div>

            <div className="projects-grid">
              {filteredProjects.map(project => (
                <div key={project.id} className="project-card">
                  <div className="project-image">
                    <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=800&fit=crop" alt={project.title} />
                    
                    <div className="overlay-buttons" style={{ direction: 'ltr' }}>
                      <button className="icon-btn doc-btn" title="View Document">
                        <FileText size={20} color="#7f1d1d" />
                      </button>
                      <button className="icon-btn eye-btn" title="Hide/Unhide">
                        <Eye size={20} color="#000000" />
                      </button>
                    </div>
                  </div>

                  <div className="project-content">
                    <div className="project-text">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
       
                    <div className="project-actions-bottom">
                      <button className="action-btnn delete-btn" title="Delete">
                        <Trash2 size={20} color="#dc2626" />
                      </button>
                      
                      {/* 4. Added onClick to the Edit Button */}
                      <button 
                        className="action-btnn edit-btn" 
                        title="Edit"
                        onClick={handleEditClick}
                      >
                        <Edit2 size={20} color="#000000" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
 
export default PageList;
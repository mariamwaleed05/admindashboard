import React, { useState } from 'react';
import { Helmet } from "react-helmet";
import NavButtons from '../common/NavButtons';
import SideBar from '../common/SideBar';
import './PageList.css';
import { 
  LayoutGrid, Palette, PenTool, Pencil, Box, Video, Code, Camera,
  FileText, Eye, Trash2, Edit2, Plus 
} from 'lucide-react';

const PageList = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const services = [
    { id: 'all', label: 'All Projects', count: 10, icon: LayoutGrid },
    { id: 'uxui', label: 'UX/UI Design', count: 5, icon: Palette },
    { id: 'graphic', label: 'Graphic Design', count: 5, icon: PenTool },
    { id: 'content', label: 'Content Creation', count: 5, icon: Pencil },
    { id: '3d', label: '3D Modeling', count: 5, icon: Box },
    { id: 'motion', label: 'Motion Graphics', count: 5, icon: Video },
    { id: 'coding', label: 'Coding', count: 5, icon: Code },
    { id: 'photography', label: 'Photography', count: 5, icon: Camera }
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

  return ( 
    <>
      <Helmet>
        <title>Page List</title>
        <meta name="description" content="This is the page list page" />
      </Helmet>

      <div className="app-layout">
        <div className="sidebar-container">
          <SideBar/>
        </div>

        <div className="main-content">
          <NavButtons/>
          
          <div className="project-list-container">
            <div className="project-list-header">
              <div className="header-content">
                <h1>Project List</h1>
                <p>Browse through my portfolio of work<br/>across different services</p>
              </div>
              <button className="add-project-btn">
                Add Project
                <Plus size={18} />
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
                    
                    <div className="overlay-buttons">
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
                      <button className="action-btnn edit-btn" title="Edit">
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
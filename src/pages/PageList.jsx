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

        
          </div>
        </div>
      </div>
    </>
  );
}
 
export default PageList;
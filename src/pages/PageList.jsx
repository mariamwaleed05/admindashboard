import React, { useEffect, useState } from 'react';
import { Helmet } from "react-helmet";
import { useNavigate, Link } from 'react-router-dom'; 
import NavButtons from '../common/NavButtons';
import SideBar from '../common/SideBar';
import './PageList.css';
import { supabase } from '../SupaBase';
import { 
  LayoutGrid, 
  Monitor, 
  Palette, 
  FileText, 
  Code, 
  Camera, 
  Box, 
  Film, 
  Trash2, 
  Edit2, 
  Plus,
  Image as ImageIcon 
} from 'lucide-react';
import { useLanguage } from '../language/LanguageContext';

const PageList = () => {
  const [projects, setProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');

  const { t, language } = useLanguage();
  const navigate = useNavigate();

  const serviceCategories = [
    { id: 'UX/UI', label: 'UX/UI', icon: Monitor },
    { id: 'GRAPHIC DESIGN', label: 'GRAPHIC DESIGN', icon: Palette },
    { id: 'CONTENT CREATION', label: 'CONTENT CREATION', icon: FileText },
    { id: 'CODING', label: 'CODING', icon: Code },
    { id: 'PHOTOGRAPHY', label: 'PHOTOGRAPHY', icon: Camera },
    { id: '3D MODELING', label: '3D MODELING', icon: Box },
    { id: 'MOTION GRAPHICS', label: 'MOTION GRAPHICS', icon: Film },
  ];

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const { data, error } = await supabase
        .from("ProjectDetails")
        .select("*")
        .order('id', { ascending: false });

      if (error) throw error;
      setProjects(data || []);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this project?")) return;
    try {
      const { error } = await supabase.from("ProjectDetails").delete().eq('id', id);
      if (error) throw error;
      setProjects(prev => prev.filter(p => p.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditClick = (id) => {
    navigate('/ProjectContent', { state: { idToEdit: id } });
  };

  const cleanText = (str) => str ? str.toLowerCase().replace(/\s+/g, '') : "";
  const getProjectType = (p) => p.Type || p.type || "";
  const getCount = (filterId) => projects.filter(p => cleanText(getProjectType(p)) === cleanText(filterId)).length;

  const optimizeSupabaseImage = (url) => {
    if (!url) return "";
    if (url.includes('supabase.co') && url.includes('/storage/v1/object/public')) {
      return `${url}?width=500&resize=cover&quality=80&format=webp`;
    }
    return url;
  };

  const services = [
    { id: 'all', label: 'All', icon: LayoutGrid, count: projects.length },
    ...serviceCategories.map(cat => ({
      id: cat.id,
      label: cat.label,
      icon: cat.icon,
      count: getCount(cat.id)
    }))
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => cleanText(getProjectType(p)) === cleanText(activeFilter));

  const isRtl = language === 'ar';
  const directionStyle = { direction: isRtl ? 'rtl' : 'ltr' };

  return (
    <>
      <Helmet>
        <title>{t.pageList.title}</title>
      </Helmet>

      <div className="app-layout" style={directionStyle}>
        <div className="sidebar-container">
          <SideBar />
        </div>

        <div className="main-content">
          <NavButtons />

          <div className="project-list-container">
            <div className="project-list-header">
              <h1>{t.pageList.title}</h1>
              <Link to="/CreateProject">
                <button className="add-project-btn">
                  {t.pageList.addProject} <Plus size={18} />
                </button>
              </Link>
            </div>

            <div className="services-filter">
              {services.map(service => {
                const Icon = service.icon;
                return (
                  <button
                    key={service.id}
                    className={`filter-btn ${activeFilter === service.id ? 'active' : ''}`}
                    onClick={() => setActiveFilter(service.id)}
                  >
                    <Icon size={16} />
                    {service.label}
                    <span className="count-badge">{service.count}</span>
                  </button>
                );
              })}
            </div>

            <div className="projects-grid">
              {filteredProjects.length === 0 ? (
                <div style={{ gridColumn: "1 / -1", textAlign: "center", padding: "60px", color: "#666" }}>
                  <p style={{fontSize: "1.2rem"}}>No projects found.</p>
                </div>
              ) : (
                filteredProjects.map((project, index) => {
                  const title = project.Title || project.title || "Untitled";
                  const overview = project.Overview || project.overview || "";
                  const type = project.Type || project.type || "Uncategorized";
                  const date = project.Date || project.date || "";
                  const originalImage = project.HeroImage || project.heroimage || ""; 
                  
                  const displayImage = optimizeSupabaseImage(originalImage);
                  const isPriority = index < 6;

                  return (
                    <div key={project.id} className="project-card">
                      
                      <div className="project-image-container">
                        {displayImage ? (
                          <img 
                            src={displayImage} 
                            alt={title} 
                            loading={isPriority ? "eager" : "lazy"}
                            fetchPriority={isPriority ? "high" : "auto"}
                            decoding="async"
                          />
                        ) : (
                          <div className="placeholder-image">
                            <ImageIcon size={40} opacity={0.2} />
                          </div>
                        )}
                      </div>

                      <div className="project-content">
                        <h3>{title}</h3>
                        <p>{overview.substring(0, 100)}{overview.length > 100 ? '...' : ''}</p>
                        
                        <div className="project-meta-tags">
                          <span className="badge">{type}</span>
                          <span className="date-text">{date}</span>
                        </div>

                        <div className="project-actions-bottom">
                          <button className="action-btnn delete-btn" onClick={() => handleDelete(project.id)}>
                            <Trash2 size={20} />
                          </button>
                          <button className="action-btnn edit-btn" onClick={() => handleEditClick(project.id)}>
                            <Edit2 size={20} />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default PageList;
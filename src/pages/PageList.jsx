import React, { useEffect, useState } from 'react';
import { Helmet } from "react-helmet";
import { useNavigate, Link, useLocation } from 'react-router-dom'; 
import NavButtons from '../common/NavButtons';
import SideBar from '../common/SideBar';
import './PageList.css';
import { supabase } from '../SupaBase';
import { 
  LayoutGrid, Monitor, Palette, FileText, Code, Camera, Box, Film, 
  Trash2, Edit2, Plus, Image as ImageIcon, AlertTriangle, CheckCircle 
} from 'lucide-react';
import { useLanguage } from '../language/LanguageContext';

const PageList = () => {
  const [projects, setProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [showConfirm, setShowConfirm] = useState(false);
  const [targetId, setTargetId] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: '' });

  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetchProjects();
    if (location.state?.alert) {
      showAlert(location.state.alert);
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  const showAlert = (msg) => {
    setAlert({ show: true, msg });
    setTimeout(() => setAlert({ show: false, msg: '' }), 3000);
  };

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

  const parseLangText = (data) => {
    if (!data) return "";
    try {
      const parsed = typeof data === 'string' ? JSON.parse(data) : data;
      return parsed[language] || parsed['en'] || "";
    } catch (e) {
      return data;
    }
  };

  const handleDelete = async () => {
    if (!targetId) return;
    try {
      const { error } = await supabase.from("ProjectDetails").delete().eq('id', targetId);
      if (error) throw error;
      setProjects(prev => prev.filter(p => p.id !== targetId));
      setShowConfirm(false);
      setTargetId(null);
      showAlert("Project deleted successfully");
    } catch (error) {
      console.error(error);
    }
  };

  const serviceCategories = [
    { id: 'UX/UI', label: 'UX/UI', icon: Monitor },
    { id: 'GRAPHIC DESIGN', label: 'GRAPHIC DESIGN', icon: Palette },
    { id: 'CONTENT CREATION', label: 'CONTENT CREATION', icon: FileText },
    { id: 'CODING', label: 'CODING', icon: Code },
    { id: 'PHOTOGRAPHY', label: 'PHOTOGRAPHY', icon: Camera },
    { id: '3D MODELING', label: '3D MODELING', icon: Box },
    { id: 'MOTION GRAPHICS', label: 'MOTION GRAPHICS', icon: Film },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => {
        const type = parseLangText(p.Type).toUpperCase();
        return type === activeFilter.toUpperCase();
      });

  return (
    <>
      <Helmet><title>{t.pageList.title}</title></Helmet>

      {alert.show && (
        <div className="alert-toast">
          <CheckCircle size={20} /> {alert.msg}
        </div>
      )}

      {showConfirm && (
        <div className="modal-overlay">
          <div className="modal-container">
            <div className="modal-icon-box"><AlertTriangle size={32} color="#ff4d4d" /></div>
            <h2>Are you sure?</h2>
            <p>This action cannot be undone.</p>
            <div className="modal-actions">
              <button onClick={() => setShowConfirm(false)} className="btn-modal-cancel">Cancel</button>
              <button onClick={handleDelete} className="btn-modal-delete">Delete Project</button>
            </div>
          </div>
        </div>
      )}

      <div className={`app-layout ${language === 'ar' ? 'rtl' : 'ltr'}`}>
        <div className="sidebar-container"><SideBar /></div>
        <div className="main-content">
          <NavButtons />
          <div className="project-list-container">
            <div className="project-list-header">
              <h1>{t.pageList.title}</h1>
              <div className="header-action-gap">
                <Link to="/Messages"><button className="add-project-btn btn-messages">Messages <FileText size={18} /></button></Link>
                <Link to="/ProjectContent"><button className="add-project-btn">{t.pageList.addProject} <Plus size={18} /></button></Link>
              </div>
            </div>

            <div className="services-filter">
              <button className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`} onClick={() => setActiveFilter('all')}>
                <LayoutGrid size={16} /> All <span className="count-badge">{projects.length}</span>
              </button>
              {serviceCategories.map(cat => (
                <button key={cat.id} className={`filter-btn ${activeFilter === cat.id ? 'active' : ''}`} onClick={() => setActiveFilter(cat.id)}>
                  <cat.icon size={16} /> {cat.label}
                </button>
              ))}
            </div>

            <div className="projects-grid">
              {filteredProjects.map((project, index) => {
                const title = parseLangText(project.Title) || "Untitled";
                const info = parseLangText(project.Info) || "";
                const type = parseLangText(project.Type) || "Uncategorized";
                const date = parseLangText(project.Date) || "";
                
                return (
                  <div key={project.id} className="project-card">
                    <div className="project-image-container">
                      {project.HeroImage ? <img src={project.HeroImage} alt={title} /> : <div className="placeholder-image"><ImageIcon size={40} opacity={0.2} /></div>}
                    </div>
                    <div className="project-content">
                      <h3>{title}</h3>
                      <p>{info.substring(0, 100)}{info.length > 100 ? '...' : ''}</p>
                      <div className="project-meta-tags">
                        <span className="badge">{type}</span>
                        <span className="date-text">{date}</span>
                      </div>
                      <div className="project-actions-bottom">
                        <button className="action-btnn" onClick={() => { setTargetId(project.id); setShowConfirm(true); }}><Trash2 size={20} /></button>
                        <button className="action-btnn" onClick={() => navigate('/ProjectContent', { state: { idToEdit: project.id } })}><Edit2 size={20} /></button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageList;
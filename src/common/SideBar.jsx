import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, BarChart3, Briefcase, User, Film, FileText, Wrench, MessageSquare, HelpCircle, Settings, LogOut, Menu, X } from 'lucide-react';
import './SideBar.css';
import myimg from '../imgs/myimg.png'; 
import { useLanguage } from '../language/LanguageContext';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const menuItems = [
    { icon: LayoutDashboard, label: t.sidebar.dashboard, link: '/' },
    { icon: BarChart3, label: t.sidebar.analytics, link: '/Analytics' },
    { icon: Briefcase, label: t.sidebar.services, link: '/PageList' },
    { icon: User, label: t.sidebar.about, link: '/About' },
    { divider: true },
    { icon: Film, label: t.sidebar.mediaLibrary, link: '/MediaLibrary' },
    { icon: FileText, label: t.sidebar.pages, link: '/Services' },
    { icon: Wrench, label: t.sidebar.uiElements, link: '/UiElements' },
    { icon: MessageSquare, label: t.sidebar.messages, link: '/Messages' },
    { divider: true },
    { icon: HelpCircle, label: t.sidebar.help, link: '/Help' },
    { icon: Settings, label: t.sidebar.settings, link: '/Settings' },
    { divider: true },
    { icon: LogOut, label: t.sidebar.signOut, link: '/LoginPage' },
  ];

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <button
        onClick={toggleSidebar}
        className={`burger-btn ${isOpen ? 'open' : ''}`}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div
          className="sidebar-overlay"
          onClick={toggleSidebar}
        />
      )}

      <aside className={`sidebar ${isOpen ? 'open' : ''}`} style={{ direction: 'ltr' }}>
        <div className="sidebar-content">

          <div className="profile-section">
            <img src={myimg} alt="myimg" className="profile-avatar" />
            <div className="profile-info">
              <h3 className="profile-name">Mariam Waleed</h3>
              <p className="profile-role">{t.sidebar.role}</p>
            </div>
          </div>

          <nav className="menu-nav">
            {menuItems.map((item, index) => {
              if (item.divider) {
                return <div key={index} className="menu-divider" />;
              }

              const Icon = item.icon;
              const isActive = location.pathname === item.link;

              return (
                <Link
                  key={index}
                  to={item.link}
                  onClick={() => {
                    if (window.innerWidth < 1024) {
                      toggleSidebar();
                    }
                  }}
                  className={`menu-item ${isActive ? 'active' : ''}`}
                >
                  <Icon size={20} />
                  <span className="menu-label">{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, BarChart3, Briefcase, User, Film, FileText, Wrench, MessageSquare, HelpCircle, Settings, LogOut, Menu, X } from 'lucide-react';
import './SideBar.css';
import myimg from '../imgs/myimg.png'; 

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', link: '/' },
    { icon: BarChart3, label: 'Analytics', link: '/Analytics' },
    { icon: Briefcase, label: 'Services', link: '/Services' },
    { icon: User, label: 'About', link: '/About' },
    { divider: true },
    { icon: Film, label: 'Media Library', link: '/MediaLibrary' },
    { icon: FileText, label: 'Pages', link: '/PageList' },
    { icon: Wrench, label: 'UI Elements', link: '/UiElements' },
    { icon: MessageSquare, label: 'Messages', link: '/Messages' },
    { divider: true },
    { icon: HelpCircle, label: 'Help', link: '/Help' },
    { icon: Settings, label: 'Settings', link: '/Settings' },
    { divider: true },
    { icon: LogOut, label: 'Sign Out', link: '/LoginPage' },
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

      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-content">

          <div className="profile-section">
            <img src={myimg} alt="myimg" />
            <div className="profile-info">
              <h3 className="profile-name">Mariam Waleed</h3>
              <p className="profile-role">Main Admin</p>
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
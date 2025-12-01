import React from 'react';
import './Home.css';
import { useState } from 'react';
import SideBar from '../common/SideBar';
import NavButtons from '../common/NavButtons';
import { Eye, Users, TrendingUp, Send, Plus, FolderOpen, Tag, FileText, ArrowRight } from 'lucide-react';
import { 
  Bold, Italic, Strikethrough, 
  Heading1, Heading2, Heading3, 
  Highlighter, Code, Link as LinkIcon, 
  MessageSquare, ImagePlus 
} from 'lucide-react';
import { Helmet } from "react-helmet";

const Home = () => {
  const stats = [
    { icon: Eye, label: 'Total Views', value: '45,231', change: '+12.5%' },
    { icon: Users, label: 'Total Visitors', value: '12,482', change: '+8.2%' },
    { icon: TrendingUp, label: 'Engagement Rate', value: '68.4%', change: '+3.3%' },
    { icon: Send, label: 'Contact Requests', value: '142', change: '+18.7%' }
  ];

  const quickActions = [
    { icon: Plus, label: 'New Project' },
    { icon: Tag, label: 'Manage Categories' },
    { icon: Plus, label: 'New Page' },
    { icon: FolderOpen, label: 'View Projects' }
  ];

  const categories = ['UI/UX', 'Graphic Design', 'Coding', 'Modeling', 'Motion Graphics', 'Photography', 'Content Creation'];

  const trafficData = [
    { day: 'Mon', users: 3200, views: 4800 },
    { day: 'Tue', users: 3800, views: 5200 },
    { day: 'Wed', users: 4200, views: 5800 },
    { day: 'Thu', users: 5100, views: 6400 },
    { day: 'Fri', users: 4800, views: 7500 },
    { day: 'Sat', users: 4200, views: 6800 },
    { day: 'Sun', users: 3600, views: 5400 }
  ];

  const trafficSources = [
    { name: 'Organic Search', value: 34, color: '#dc2626' },
    { name: 'Direct', value: 25, color: '#991b1b' },
    { name: 'Referral', value: 13, color: '#7f1d1d' },
    { name: 'Social Media', value: 17, color: '#450a0a' },
    { name: 'Email', value: 11, color: '#fee2e2' }
  ];

  const getPoints = (key, height = 200, width = 100) => {
    const maxVal = 8000;
    return trafficData.map((d, i) => {
      const x = (i / (trafficData.length - 1)) * width;
      const y = height - (d[key] / maxVal) * height;
      return `${x},${y}`;
    }).join(' ');
  };

  const getPieGradient = () => {
    let currentDeg = 0;
    const gradientParts = trafficSources.map(source => {
      const deg = (source.value / 100) * 360;
      const part = `${source.color} ${currentDeg}deg ${currentDeg + deg}deg`;
      currentDeg += deg;
      return part;
    });
    return `conic-gradient(${gradientParts.join(', ')})`;
  };
  const [projects] = useState([
    { id: 1, name: 'UX/UI', icon: '📐' },
    { id: 2, name: 'Graphic Design', icon: '🎨' }
  ]);

  const [pages] = useState([
    { id: 1, name: 'Contact Us', route: '/contact', status: 'Complete' },
    { id: 2, name: 'About Us', route: '/about', status: 'Complete' }
  ]);

  const [activities] = useState([
    { id: 1, text: 'New visitor from LinkedIn', subtext: 'Profile viewed', time: '2 minutes ago' },
    { id: 2, text: 'Contact form submitted', subtext: 'john.doe@example.com', time: '15 minutes ago' },
    { id: 3, text: 'Project page viewed', subtext: '/projects/web-app', time: '23 minutes ago' },
    { id: 4, text: 'Resume downloaded', subtext: 'resume.pdf', time: '1 hour ago' },
    { id: 5, text: 'Portfolio shared', subtext: 'Twitter referral', time: '2 hours ago' }
  ]);

  const topPages = [
    { name: 'home', value: 10000 },
    { name: 'projects', value: 7500 },
    { name: 'about', value: 5000 },
    { name: 'contact', value: 3750 },
    { name: 'resume', value: 5000 }
  ];

  return ( 
    <>
    <Helmet>
        <title>Dashboard Page</title>
        <meta name="description" content="This is the dashboard page" />
        <meta property="og:title" content="Dashboard" />
        <link rel="icon" type="image/png" href="/icon.png" sizes="16x16" /> 
     </Helmet>

    <div className="app-layout">
      
      <div className="sidebar-container">
        <SideBar/>
      </div>

      <div className="main-content">
        <NavButtons/>

        <div className="home-container">
          <div className="home-header">
              <h1>Welcome Back Mariam</h1>
              <h3>Here is what you missed.</h3>
          </div>
          
          <div className="dashboard-content">
          
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="card">
                  <div className="card-header">
                    <div className="icon-box">
                      <stat.icon className="icon-md" />
                    </div>
                    <div className="stat-change">
                      <svg className="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                      </svg>
                      <span>{stat.change}</span>
                    </div>
                  </div>
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-value">{stat.value}</div>
                </div>
              ))}
            </div>

            <div className="card" style={{ marginBottom: '1.5rem' }}>
              <h2 className="section-title">Quick Actions</h2>
              <p className="section-subtitle">Common tasks and shortcuts</p>
              <div className="actions-grid">
                {quickActions.map((action, index) => (
                  <button key={index} className="action-btn">
                    <div className="action-icon-box">
                      <action.icon className="icon-md" />
                    </div>
                    <div className="action-text">{action.label}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="content-grid">
              <div className="card">
                <div className="section-header-row">
                  <div className="icon-box"><FolderOpen className="icon-md" /></div>
                  <h2 className="section-title">Projects</h2>
                  <div className="badge">1</div>
                </div>
                <div className="info-rows">
                  <div className="info-row"><FileText className="icon-sm" /><span>With Cover Image</span><span className="ml-auto">0</span></div>
                  <div className="info-row"><FileText className="icon-sm" /><span>With 3D Models</span><span className="ml-auto">0</span></div>
                </div>
                <div className="button-group">
                  <button className="btn-dark">View All <ArrowRight className="icon-sm" /></button>
                  <button className="btn-red"><Plus className="icon-sm" /> Add New</button>
                </div>
              </div>

              <div className="card">
                <div className="section-header-row">
                  <div className="icon-box"><Tag className="icon-md" /></div>
                  <h2 className="section-title">Categories</h2>
                  <div className="badge">7</div>
                </div>
                <div className="tags-container">
                  {categories.map((cat, index) => <span key={index} className="tag-pill">{cat}</span>)}
                </div>
                <button className="btn-dark" style={{ width: '100%' }}>Manage <ArrowRight className="icon-sm" /></button>
              </div>

              <div className="card">
                <div className="section-header-row">
                  <div className="icon-box"><FileText className="icon-md" /></div>
                  <h2 className="section-title">Static Pages</h2>
                  <div className="badge">2</div>
                </div>
                <div className="info-rows">
                  <div className="info-row"><div className="status-dot"></div><span>Completed</span><span className="ml-auto">2</span></div>
                  <div className="info-row"><span className="ml-indent">Draft</span><span className="ml-auto">0</span></div>
                </div>
                <div className="button-group">
                  <button className="btn-dark">View All <ArrowRight className="icon-sm" /></button>
                  <button className="btn-red"><Plus className="icon-sm" /> Add New</button>
                </div>
              </div>
            </div>

            <div className="charts-grid">
              
              <div className="card">
                <div className="section-header-row" style={{ marginBottom: '1.5rem' }}>
                  <div className="icon-box"><TrendingUp className="icon-md" /></div>
                  <h2 className="section-title">Website Traffic</h2>
                </div>
                
                <div className="custom-chart-container">
                  <svg viewBox="0 0 100 200" preserveAspectRatio="none" className="svg-chart">
                    <line x1="0" y1="50" x2="100" y2="50" stroke="#27272a" strokeWidth="0.5" />
                    <line x1="0" y1="100" x2="100" y2="100" stroke="#27272a" strokeWidth="0.5" />
                    <line x1="0" y1="150" x2="100" y2="150" stroke="#27272a" strokeWidth="0.5" />
                    <polyline points={getPoints('users')} fill="none" stroke="#dc2626" strokeWidth="2" />
                    <polyline points={getPoints('views')} fill="none" stroke="#991b1b" strokeWidth="2" />
                  </svg>
                  <div className="chart-x-axis">
                    {trafficData.map((d, i) => <span key={i}>{d.day}</span>)}
                  </div>
                </div>

                <div className="chart-legend">
                  <div className="legend-item"><div className="legend-dot" style={{ backgroundColor: '#dc2626' }}></div><span>Users</span></div>
                  <div className="legend-item"><div className="legend-dot" style={{ backgroundColor: '#991b1b' }}></div><span>Views</span></div>
                </div>
              </div>

              <div className="card">
                <div className="section-header-row" style={{ marginBottom: '1.5rem' }}>
                  <div className="icon-box">
                    <svg className="icon-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="section-title">Traffic Sources</h2>
                </div>
                
                <div className="pie-layout">
                  <div className="pie-wrapper">
                    <div className="custom-pie" style={{ background: getPieGradient() }}></div>
                    <div className="pie-hole"></div>
                  </div>
                  
                  <div className="source-list">
                    {trafficSources.map((source, index) => (
                      <div key={index} className="source-item">
                        <div className="source-color" style={{ backgroundColor: source.color }}></div>
                        <span className="stat-label" style={{ marginBottom: 0 }}>{source.name}</span>
                        <span className="action-text" style={{ color: 'white' }}>{source.value}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>

      <div className="dashboard">
        <div className="dashboard-container">
          <div className="top-section">
            <div className="card">
              <div className="card-header">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                </svg>
                <span>Top Pages</span>
              </div>
              <div className="chart-container">
                <svg width="100%" height="220">
                  {[0, 2500, 5000, 7500, 10000].map((val, i) => (
                    <g key={i}>
                      <line
                        x1="50"
                        y1={200 - (val / 10000) * 170}
                        x2="100%"
                        y2={200 - (val / 10000) * 170}
                        className="grid-line"
                      />
                      <text
                        x="5"
                        y={205 - (val / 10000) * 170}
                        className="grid-text"
                      >
                        {val}
                      </text>
                    </g>
                  ))}
                  
                  {topPages.map((page, i) => {
                    const barWidth = 35;
                    const spacing = 75;
                    const x = 70 + i * spacing;
                    const height = (page.value / 10000) * 170;
                    
                    return (
                      <g key={i}>
                        <rect
                          x={x}
                          y={200 - height}
                          width={barWidth}
                          height={height}
                          className={i === 0 ? 'bar-primary' : 'bar-secondary'}
                          rx="3"
                        />
                        <text
                          x={x + barWidth / 2}
                          y="215"
                          className="bar-label"
                        >
                          {page.name}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                </svg>
                <span>Recent Activity</span>
              </div>
              <div className="activity-list">
                {activities.map((activity) => (
                  <div key={activity.id} className="activity-item">
                    <div className="activity-avatar"></div>
                    <div className="activity-content">
                      <div className="activity-text">{activity.text}</div>
                      <div className="activity-subtext">{activity.subtext}</div>
                      <div className="activity-time">{activity.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="metrics-section">
            <div className="metric-card">
              <div className="metric-header">
                <span>Bounce Rate</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </div>
              <div className="metric-value">42.3%</div>
              <div className="progress-bar">
                <div className="progress-fill" style={{width: '42.3%'}}></div>
              </div>
            </div>

            <div className="metric-card">
              <div className="metric-header">
                <span>Avg. Session Duration</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2">
                  <polyline points="18 15 12 9 6 15"/>
                </svg>
              </div>
              <div className="metric-value">3m 24s</div>
              <div className="progress-bar">
                <div className="progress-fill" style={{width: '65%'}}></div>
              </div>
            </div>

            <div className="metric-card">
              <div className="metric-header">
                <span>Pages per Session</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2">
                  <polyline points="18 15 12 9 6 15"/>
                </svg>
              </div>
              <div className="metric-value">4.8</div>
              <div className="progress-bar">
                <div className="progress-fill" style={{width: '80%'}}></div>
              </div>
            </div>
          </div>

          <div className="bottom-section">
            <div className="card">
              <div className="card-title">Recent Projects</div>
              <div className="card-subtitle">Latest projects added to the system</div>
              <div className="list-items">
                {projects.map((project) => (
                  <div key={project.id} className="list-item">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14 2 14 8 20 8"/>
                    </svg>
                    <span>{project.name}</span>
                  </div>
                ))}
              </div>
              <button className="view-all-btn">View All Projects →</button>
            </div>

            <div className="card">
              <div className="card-title">Recent Pages</div>
              <div className="card-subtitle">Latest static pages in the system</div>
              <div className="list-items">
                {pages.map((page) => (
                  <div key={page.id} className="page-item">
                    <div className="page-info">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                        <polyline points="14 2 14 8 20 8"/>
                      </svg>
                      <div>
                        <div className="page-name">{page.name}</div>
                        <div className="page-route">{page.route}</div>
                      </div>
                    </div>
                    <span className="page-status">{page.status}</span>
                  </div>
                ))}
              </div>
              <button className="view-all-btn">View All Pages →</button>
            </div>
          </div>

       
  <div className="seo-container">
      <h2 className="seo-title">SEO</h2>

      <div className="seo-row">
        <div className="seo-field-group">
          <label>Slug Name</label>
          <input type="text" placeholder="Enter Slug Name" />
        </div>
        <div className="seo-field-group">
          <label>Page Tag</label>
          <input type="text" placeholder="Enter Tag" />
        </div>
      </div>

      <div className="seo-toolbar">
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

      <div className="seo-field-group">
        <label>Meta Description</label>
        <textarea placeholder="Enter Meta Description" rows={6}></textarea>
      </div>
    </div>

        </div>
      </div>
        </div>
      </div>
    </div>

    
    </>
  
  );
}
 
export default Home;
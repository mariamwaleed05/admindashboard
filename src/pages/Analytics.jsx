import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import SideBar from '../common/SideBar';
import NavButtons from '../common/NavButtons';
import './Analytics.css';

const Icons = {
  Calendar: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>,
  ChevronDown: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>,
  ArrowUp: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>,
  ArrowDown: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>,
  Users: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>,
  Activity: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>,
  Clock: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>,
  Eye: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>,
  Download: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>,
  Server: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
};

const RadialGauge = ({ value, label, color }) => {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="anl-gauge">
      <div className="anl-gauge-svg-wrapper">
        <svg width="100" height="100" className="anl-gauge-svg">
          <circle cx="50" cy="50" r={radius} className="anl-gauge-bg" />
          <circle 
            cx="50" cy="50" r={radius} 
            className="anl-gauge-progress" 
            style={{ 
              strokeDasharray: circumference, 
              strokeDashoffset: offset,
              stroke: color
            }} 
          />
        </svg>
        <div className="anl-gauge-text">
          <span className="anl-gauge-val">{value}%</span>
        </div>
      </div>
      <span className="anl-gauge-label">{label}</span>
    </div>
  );
};

const Analytics = () => {
  const [timeRange] = useState('Last 7 Days');

  return (
    <div className="app-layout">
      <Helmet>
        <title>Analytics Dashboard</title>
        <meta name="description" content="Detailed portfolio performance metrics" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      <div className="sidebar-container">
        <SideBar />
      </div>

      <div className="main-content">
        <div className="anl-top-spacer">
          <NavButtons />
        </div>

        <div className="anl-wrapper">
          
          <div className="anl-header-row">
            <div>
              <h1 className="anl-title">Performance Analytics</h1>
              <p className="anl-subtitle">Real-time data insights and traffic overview</p>
            </div>
            <div className="anl-controls">
               <button className="anl-btn-dark anl-control-btn">
                 <Icons.Calendar /> {timeRange} <Icons.ChevronDown />
               </button>
               <button className="anl-btn-red anl-control-btn">
                 <Icons.Download /> Export Report
               </button>
            </div>
          </div>

          <div className="anl-stats-grid">
            <div className="anl-card">
              <div className="anl-card-header">
                <div className="anl-icon-box"><Icons.Users /></div>
                <span className="anl-badge positive">+12.5%</span>
              </div>
              <div className="anl-stat-value">12,450</div>
              <div className="anl-stat-label">Total Users</div>
            </div>
            <div className="anl-card">
              <div className="anl-card-header">
                <div className="anl-icon-box"><Icons.Eye /></div>
                <span className="anl-badge positive">+8.2%</span>
              </div>
              <div className="anl-stat-value">45,902</div>
              <div className="anl-stat-label">Page Views</div>
            </div>
            <div className="anl-card">
              <div className="anl-card-header">
                <div className="anl-icon-box"><Icons.Clock /></div>
                <span className="anl-badge negative">-2.1%</span>
              </div>
              <div className="anl-stat-value">2m 45s</div>
              <div className="anl-stat-label">Avg. Session</div>
            </div>
            <div className="anl-card">
              <div className="anl-card-header">
                <div className="anl-icon-box"><Icons.Activity /></div>
                <span className="anl-badge positive">+5.4%</span>
              </div>
              <div className="anl-stat-value">42.8%</div>
              <div className="anl-stat-label">Bounce Rate</div>
            </div>
          </div>

          <div className="anl-grid-layout main-row">
            
            <div className="anl-card anl-main-chart-card">
              <div className="anl-card-header-row">
                <h3>Traffic Overview</h3>
                <div className="anl-button-group">
                  <button className="anl-btn-dark anl-sm-btn">Daily</button>
                  <button className="anl-btn-dark anl-sm-btn active">Weekly</button>
                </div>
              </div>
              <div className="anl-chart-area">
                <svg viewBox="0 0 800 250" className="anl-svg-chart">
                  <defs>
                    <linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#dc2626" stopOpacity="0.3"/>
                      <stop offset="100%" stopColor="#dc2626" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                  <line x1="0" y1="200" x2="800" y2="200" className="anl-grid-line" />
                  <line x1="0" y1="150" x2="800" y2="150" className="anl-grid-line" />
                  <line x1="0" y1="100" x2="800" y2="100" className="anl-grid-line" />
                  <line x1="0" y1="50" x2="800" y2="50" className="anl-grid-line" />
                  <path d="M0,200 L100,120 L200,160 L300,80 L400,110 L500,40 L600,90 L700,60 L800,120 V250 H0 Z" fill="url(#chartFill)" />
                  <path d="M0,200 L100,120 L200,160 L300,80 L400,110 L500,40 L600,90 L700,60 L800,120" fill="none" stroke="#dc2626" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="300" cy="80" r="5" fill="#18181b" stroke="#dc2626" strokeWidth="2" />
                  <circle cx="500" cy="40" r="5" fill="#18181b" stroke="#dc2626" strokeWidth="2" />
                </svg>
                <div className="anl-chart-labels">
                    <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                </div>
              </div>
            </div>

            <div className="anl-card anl-health-card">
              <div className="anl-card-header-row">
                <h3>System Health</h3>
                <div className="anl-icon-box sm"><Icons.Server /></div>
              </div>
              <div className="anl-gauges-container">
                <RadialGauge value={42} label="CPU Usage" color="#22c55e" />
                <RadialGauge value={78} label="Memory" color="#dc2626" />
                <RadialGauge value={24} label="Disk I/O" color="#007bff" />
              </div>
              <div className="anl-uptime-row">
                <span>Server Uptime</span>
                <span className="anl-badge positive">99.98%</span>
              </div>
              <div className="anl-uptime-row">
                <span>API Latency</span>
                <span className="anl-badge">45ms</span>
              </div>
            </div>

          </div>

          <div className="anl-grid-layout two-col">
            
            <div className="anl-card anl-retention-card">
              <h3>User Retention (Cohort)</h3>
              <div className="anl-heatmap-container">
                <div className="anl-heatmap-labels">
                   <span>W1</span><span>W2</span><span>W3</span><span>W4</span><span>W5</span>
                </div>
                {[...Array(5)].map((_, r) => (
                  <div key={r} className="anl-heatmap-row">
                    <span className="anl-heatmap-date">Oct {r + 1}</span>
                    {[...Array(5)].map((_, c) => {
                      const opacity = c > r ? 0.05 : Math.max(0.1, 1 - (c * 0.2));
                      return <div key={c} className="anl-heat-cell" style={{ opacity: opacity }}>{c > r ? '' : `${Math.floor(opacity * 100)}%`}</div>
                    })}
                  </div>
                ))}
              </div>
            </div>

            <div className="anl-card anl-funnel-card">
              <h3>Conversion Funnel</h3>
              <div className="anl-funnel-wrapper">
                <div className="anl-funnel-step">
                  <span className="anl-funnel-label">Impressions</span>
                  <div className="anl-funnel-bar" style={{ width: '100%' }}>24,500</div>
                </div>
                <div className="anl-funnel-step">
                  <span className="anl-funnel-label">Visits</span>
                  <div className="anl-funnel-bar" style={{ width: '65%' }}>15,900</div>
                </div>
                <div className="anl-funnel-step">
                  <span className="anl-funnel-label">Add to Cart</span>
                  <div className="anl-funnel-bar" style={{ width: '35%' }}>8,500</div>
                </div>
                <div className="anl-funnel-step">
                  <span className="anl-funnel-label">Purchase</span>
                  <div className="anl-funnel-bar final" style={{ width: '15%' }}>3,675</div>
                </div>
              </div>
            </div>

          </div>

          <div className="anl-grid-layout three-col">

            <div className="anl-card anl-social-card">
              <h3>Social Traffic</h3>
              <div className="anl-social-list">
                <div className="anl-social-item">
                  <div className="anl-social-info">
                    <span className="anl-social-name">LinkedIn</span>
                    <span className="anl-social-count">4,500</span>
                  </div>
                  <div className="anl-mini-bar-bg"><div className="anl-mini-bar" style={{ width: '75%' }}></div></div>
                </div>
                <div className="anl-social-item">
                  <div className="anl-social-info">
                    <span className="anl-social-name">Twitter / X</span>
                    <span className="anl-social-count">2,100</span>
                  </div>
                  <div className="anl-mini-bar-bg"><div className="anl-mini-bar" style={{ width: '45%' }}></div></div>
                </div>
                <div className="anl-social-item">
                  <div className="anl-social-info">
                    <span className="anl-social-name">Dribbble</span>
                    <span className="anl-social-count">1,800</span>
                  </div>
                  <div className="anl-mini-bar-bg"><div className="anl-mini-bar" style={{ width: '35%' }}></div></div>
                </div>
                <div className="anl-social-item">
                  <div className="anl-social-info">
                    <span className="anl-social-name">Instagram</span>
                    <span className="anl-social-count">950</span>
                  </div>
                  <div className="anl-mini-bar-bg"><div className="anl-mini-bar" style={{ width: '20%' }}></div></div>
                </div>
              </div>
            </div>

            <div className="anl-card anl-geo-card">
              <h3>Sessions by Country</h3>
              <div className="anl-map-list">
                <div className="anl-country-row">
                    <div className="anl-country-info">
                        <span className="anl-flag">🇺🇸</span> <span>USA</span>
                    </div>
                    <span className="anl-percent">65%</span>
                </div>
                <div className="anl-country-row">
                    <div className="anl-country-info">
                        <span className="anl-flag">🇩🇪</span> <span>Germany</span>
                    </div>
                    <span className="anl-percent">18%</span>
                </div>
                <div className="anl-country-row">
                    <div className="anl-country-info">
                        <span className="anl-flag">🇬🇧</span> <span>UK</span>
                    </div>
                    <span className="anl-percent">12%</span>
                </div>
                <div className="anl-country-row">
                    <div className="anl-country-info">
                        <span className="anl-flag">🇪🇬</span> <span>Egypt</span>
                    </div>
                    <span className="anl-percent">5%</span>
                </div>
              </div>
            </div>

            <div className="anl-card anl-device-card">
              <h3>Device Category</h3>
              <div className="anl-donut-wrapper">
                 <div className="anl-donut">
                    <div className="anl-donut-hole">
                        <span>Devices</span>
                    </div>
                 </div>
                 <div className="anl-legend">
                    <div className="anl-legend-item"><span className="anl-dot red"></span> Mobile (55%)</div>
                    <div className="anl-legend-item"><span className="anl-dot dark-red"></span> Desktop (35%)</div>
                    <div className="anl-legend-item"><span className="anl-dot gray"></span> Tablet (10%)</div>
                 </div>
              </div>
            </div>

          </div>

          <div className="anl-card anl-activity-card">
              <div className="anl-card-header-row">
                  <h3>Recent Audit Log</h3>
                  <button className="anl-view-all-btn">View Full Log</button>
              </div>
              <div className="anl-log-table">
                  <div className="anl-log-row header">
                      <span>User</span>
                      <span>Action</span>
                      <span>Date</span>
                      <span>Status</span>
                  </div>
                  <div className="anl-log-row">
                      <span>admin@tech.com</span>
                      <span>Exported Monthly Report</span>
                      <span>Just now</span>
                      <span className="anl-status-pill success">Success</span>
                  </div>
                  <div className="anl-log-row">
                      <span>sarah.j@design.io</span>
                      <span>Updated "Finance App" case study</span>
                      <span>2 hrs ago</span>
                      <span className="anl-status-pill success">Success</span>
                  </div>
                  <div className="anl-log-row">
                      <span>system_bot</span>
                      <span>API Rate Limit Exceeded</span>
                      <span>5 hrs ago</span>
                      <span className="anl-status-pill warning">Warning</span>
                  </div>
                  <div className="anl-log-row">
                      <span>mike.dev</span>
                      <span>Failed Login Attempt</span>
                      <span>Yesterday</span>
                      <span className="anl-status-pill error">Failed</span>
                  </div>
              </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Analytics;
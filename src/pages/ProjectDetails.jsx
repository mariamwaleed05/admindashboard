import React from 'react';
import { Helmet } from "react-helmet";
import { Plus, FileText, Trash2, ArrowRight, EyeOff } from 'lucide-react';
import './ProjectDetails.css';
import NavButtons from './../common/NavButtons';
import uxPic from '../imgs/uxpic.png';

const ProjectDetails = () => {
    return ( 
        <>

        <Helmet>
        <title>Project Details</title>
        <meta name="description" content="Project Details Page" />
        <meta property="og:title" content="Dashboard" />
        <link rel="icon" type="image/png" href="/icon.png" sizes="16x16" /> 
        </Helmet>

        <div className="main-content">
          <NavButtons/>

         <div className="ux-dashboard-wrapper">
      
      <div className="ux-header-section">
        <div className="ux-text-group">
          <h1 className="ux-main-title">UX/UI Projects</h1>
          <p className="ux-sub-title">Manage portfolio projects</p>
        </div>
        <button className="ux-add-btn">
          Add Project
          <Plus size={20} />
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

        <div className="card-top-left">
          <div className="ux-category-pill">
            <span className="icon-box-pink">
              <FileText size={16} />
            </span>
            <span className="pill-text">UX/UI</span>
          </div>
        </div>

        <div className="card-top-right">
          <button className="mini-square-btn delete-action">
            <Trash2 size={18} />
          </button>
          <button className="mini-square-btn count-action">
            1
          </button>
        </div>

        <div className="card-bottom-area">
          <div className="card-text-content">
            <h2 className="feature-title">Fashion App</h2>
            <p className="feature-desc">
              Mobile app for booking private buses with real-time tracking and QR code verification
            </p>
          </div>

          <div className="card-action-row">
            <button className="pill-action-btn white-btn">
              Edit Project
              <ArrowRight size={18} />
            </button>

            <button className="pill-action-btn grey-btn ml-auto">
              <EyeOff size={18} className="eye-icon-red" />
              Hide
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
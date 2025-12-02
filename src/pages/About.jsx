import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import SideBar from '../common/SideBar';
import { User, Pencil, Mail, Phone, MapPin } from 'lucide-react';
import NavButtons from '../common/NavButtons';
import './About.css';

const About = () => {
    return ( 
        <>
         <Helmet>
        <title>About</title>
        <meta name="description" content="This is the About page" />
        <meta property="og:title" content="About" />
        <link rel="icon" type="image/png" href="/icon.png" sizes="16x16" /> 
     </Helmet>

     <SideBar/>

  <div className="main-content">
          <NavButtons/>
         <div className="ps-container">
      
      <div className="ps-header">
        <h1>Profile Settings</h1>
        <p>Update your personal information</p>
      </div>

      <div className="ps-card">
        <div className="ps-card-top">
          <span className="ps-section-label">Personal Information</span>
          <button className="ps-edit-btn">
            <Pencil size={16} />
            Edit
          </button>
        </div>

        <div className="ps-main-info">
          <div className="ps-avatar">
            <User size={48} />
          </div>
          <div className="ps-text-info">
            <h2>Mariam Waleed</h2>
            <h3>UX/UI Designer & Graphic Designer</h3>
            <p className="ps-bio">
              Only thing you will need to know is that I love making unique work that actually stands out.
            </p>
          </div>
        </div>

        <div className="ps-contact-row">
          <div className="ps-contact-item">
            <Mail size={18} />
            <span>mariamwaleed2005@gmail.com</span>
          </div>
          
          <div className="ps-contact-item">
            <Phone size={18} />
            <span>012 758 43440</span>
          </div>

          <div className="ps-contact-item">
            <MapPin size={18} />
            <span>Cairo , Egypt</span>
          </div>
        </div>

      </div>
    </div>
    </div>

        </>
     );
}
 
export default About;
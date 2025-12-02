import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { Plus, FileText, Trash2, ArrowRight, EyeOff, Layers } from 'lucide-react';
import './ProjectDetails.css'
import NavButtons from './../common/NavButtons';

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
</div>
        </>
     );
}
 
export default ProjectDetails;
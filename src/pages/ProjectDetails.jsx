import React, { Component } from 'react';
import { Helmet } from "react-helmet";

const ProjectDetails = () => {
    return ( 
        <>
           <Helmet>
        <title>{t.home.metaTitle}</title>
        <meta name="description" content={t.home.metaDesc} />
        <meta property="og:title" content="Dashboard" />
        <link rel="icon" type="image/png" href="/icon.png" sizes="16x16" /> 
     </Helmet>
        </>
     );
}
 
export default ProjectDetails;
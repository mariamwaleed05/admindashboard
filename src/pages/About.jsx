import React, { Component } from 'react';
import { Helmet } from "react-helmet";

const About = () => {
    return ( 
        <>
         <Helmet>
        <title>About</title>
        <meta name="description" content="This is the About page" />
        <meta property="og:title" content="About" />
        <link rel="icon" type="image/png" href="/icon.png" sizes="16x16" /> 
     </Helmet>
        </>
     );
}
 
export default About;
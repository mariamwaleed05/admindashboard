import React, { Component } from 'react';
import { Helmet } from "react-helmet";

const UiElements = () => {
    return (  
        <>
         <Helmet>
        <title>UI Elements</title>
        <meta name="description" content="This is the ui elements page" />
        <meta property="og:title" content="ui elements" />
        <link rel="icon" type="image/png" href="/icon.png" sizes="16x16" /> 
     </Helmet>
        </>
    );
}
 
export default UiElements;
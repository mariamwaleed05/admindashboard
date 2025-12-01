import React, { Component } from 'react';
import { Helmet } from "react-helmet";

const SettingsPage = () => {
    return ( 
        <>
         <Helmet>
        <title>Settings</title>
        <meta name="description" content="This is the settings page" />
        <meta property="og:title" content="settings" />
        <link rel="icon" type="image/png" href="/icon.png" sizes="16x16" /> 
     </Helmet>
        </>
     );
}
 
export default SettingsPage;
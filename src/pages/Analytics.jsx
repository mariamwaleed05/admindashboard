import React, { Component } from 'react';
import { Helmet } from "react-helmet";

const Analytics = () => {
    return ( 
        <>
         <Helmet>
        <title>Analytics</title>
        <meta name="description" content="This is the Analytics page" />
        <meta property="og:title" content="Analytics" />
        <link rel="icon" type="image/png" href="/icon.png" sizes="16x16" /> 
     </Helmet>
        </>
     );
}
 
export default Analytics;
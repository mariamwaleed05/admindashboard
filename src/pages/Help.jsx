import React, { Component } from 'react';
import { Helmet } from "react-helmet";

const Help = () => {
    return ( 
        <>
              <Helmet>
                <title>Help</title>
                <meta name="description" content="This is the Help page" />
                <meta property="og:title" content="Help" />
                <link rel="icon" type="image/png" href="/icon.png" sizes="16x16" /> 
             </Helmet>
        </>
     );
}
 
export default Help;
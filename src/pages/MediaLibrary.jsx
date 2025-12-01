import React, { Component } from 'react';
import { Helmet } from "react-helmet";

const MediaLibrary = () => {
    return ( 
        <>
              <Helmet>
                <title>Media Library</title>
                <meta name="description" content="This is the Media Library page" />
                <meta property="og:title" content="Media Library" />
                <link rel="icon" type="image/png" href="/icon.png" sizes="16x16" /> 
             </Helmet>
        </>
     );
}
 
export default MediaLibrary;
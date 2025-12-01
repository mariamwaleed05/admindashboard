import React, { Component } from 'react';
import { Helmet } from "react-helmet";

const PageList = () => {
    return ( 
        <>
        <Helmet>
        <title>Page List</title>
        <meta name="description" content="This is the page list page" />
        <meta property="og:title" content="Page list" />
        <link rel="icon" type="image/png" href="/icon.png" sizes="16x16" /> 
     </Helmet>
        </>
     );
}
 
export default PageList;
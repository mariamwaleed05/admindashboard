import React, { Component } from 'react';
import { Helmet } from "react-helmet";

const Messages = () => {
    return ( 
        <>
              <Helmet>
                <title>Messages</title>
                <meta name="description" content="This is the Messages page" />
                <meta property="og:title" content="Messages" />
                <link rel="icon" type="image/png" href="/icon.png" sizes="16x16" /> 
             </Helmet>
        </>
     );
}
 
export default Messages;
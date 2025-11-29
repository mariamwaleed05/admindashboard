import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './pages/Error';
import Home from './pages/Home';

const RoutingApp = () => {
    return ( 

        <>
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Error />} />

        </Routes>
        </BrowserRouter>
        
        </>
     );
}
 
export default RoutingApp;
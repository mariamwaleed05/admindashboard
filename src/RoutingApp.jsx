import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './pages/Error';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import ForgetPassword from './pages/ForgetPassword';
import ResetPassword from './pages/ResetPassword';

const RoutingApp = () => {
    return ( 

        <>
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/LoginPage' element={<LoginPage />} />
        <Route path='/ForgetPassword' element={<ForgetPassword />} />
        <Route path='/ResetPassword' element={<ResetPassword />} />

        <Route path='*' element={<Error />} />

        </Routes>
        </BrowserRouter>
        
        </>
     );
}
 
export default RoutingApp;
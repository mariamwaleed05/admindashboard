import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './language/LanguageContext'; 
import Error from './pages/Error';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import ForgetPassword from './pages/ForgetPassword';
import ResetPassword from './pages/ResetPassword';
import Analytics from './pages/Analytics';
import Services from './pages/Services';
import About from './pages/About';
import MediaLibrary from './pages/MediaLibrary';
import PageList from './pages/PageList';
import Messages from './pages/Messages';
import Help from './pages/Help';
import SettingsPage from './pages/SettingsPage';
import SideBar from './common/SideBar';
import ProjectDetails from './pages/ProjectDetails';

   const RoutingApp = () => {
    return ( 
        <>
            <LanguageProvider>
        <BrowserRouter>
            <div style={{ display: 'flex' }}>
                <SideBar /> 
                
                <div style={{ flex: 1, padding: '20px' }}>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/LoginPage' element={<LoginPage />} />
                        <Route path='/ForgetPassword' element={<ForgetPassword />} />
                        <Route path='/ResetPassword' element={<ResetPassword />} />
                        <Route path='/Analytics' element={<Analytics />} />
                        <Route path='/Services' element={<Services />} />
                        <Route path='/About' element={<About />} />
                        <Route path='/MediaLibrary' element={<MediaLibrary />} />
                        <Route path='/PageList' element={<PageList />} />
                        <Route path='/ProjectDetails' element={<ProjectDetails />} />
                        <Route path='/Messages' element={<Messages />} />
                        <Route path='/Help' element={<Help />} />
                        <Route path='/Settings' element={<SettingsPage />} />
                        
                        <Route path='*' element={<Error />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
        </LanguageProvider>
        </>
     );
}
 
export default RoutingApp;
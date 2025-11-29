import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import './Home.css';
import SideBar from '../common/SideBar';
import NavButtons from '../common/NavButtons';

const Home = () => {
    return ( 
        <>
        <SideBar/>
        <NavButtons/>
        </>
     );
}
 
export default Home;
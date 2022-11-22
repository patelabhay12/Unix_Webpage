import React from 'react';
import './Home.css';
import Sidebar from '../Pages/Main';
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div className='Home'>
      <Sidebar />
      <div className="homeContainer">
        <NavBar />
        <Outlet />
      </div>
    </div>
  )
}

export default Home;
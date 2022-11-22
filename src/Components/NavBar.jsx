import React from 'react'
import './navstyle.css';
import { CiBellOn } from 'react-icons/ci';
import { CgProfile } from 'react-icons/cg';
import Dash from '../Pages/Dash';

const NavBar = () => {
  // console.log(props.children);
  return (
    <div className="main_bar">
      <div className='navbar'>
        <span>Dashboard</span>
        <div className="left-nav">
          <input placeholder='Search' type="text" className='input' />
          <div className="bell">
            <CiBellOn />
          </div>
          <div className="profile">
            <CgProfile />
          </div>
        </div>
      </div>
      <div className="content">
        {/* <Dash /> */}
      </div>
    </div>
  )
}

export default NavBar;
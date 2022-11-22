import React, { useState } from 'react';
import './main.css';
import IMG1 from '../assets/img1.jpeg';
import { TbLayoutDashboard } from 'react-icons/tb';
import { TbCalendarEvent } from 'react-icons/tb';
import { VscCalendar } from 'react-icons/vsc';
import { BsBook } from 'react-icons/bs';
import { BsFileCheck } from 'react-icons/bs';
import { BsCash } from 'react-icons/bs';
import { HiOutlineBuildingLibrary } from 'react-icons/hi2';
import { BsPatchQuestion } from 'react-icons/bs';
import { AiFillExclamationCircle } from 'react-icons/ai';
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import { IoClose } from 'react-icons/io5';
import { Link, NavLink } from 'react-router-dom';

const Sidebar = () => {
    const [isOpen, setIsopen] = useState(false);
    const toggleHandler = () => {
        isOpen == true ? setIsopen(false) : setIsopen(true);
        console.log(">>>", isOpen);
    }
    const [activeNav, setActiveNav] = useState('#');

    return (
        <div className={`sidebar ${isOpen === true ? 'active' : ''}`}>
            <div className="top">
                <div className='logo-main'>
                    <div className="logo">
                        <img src={IMG1} alt="Logo h ree..." />
                    </div>
                    <span>Unilox</span>
                </div>
                <span className="toggle" onClick={toggleHandler}>{isOpen ? <MdOutlineDashboardCustomize /> : <IoClose />}</span>
            </div>
            <div className="center">
                <div className='main-dash'>
                    <div onClick={() => setActiveNav('#')}
                        className={activeNav === '#' ? 'activate liw' : 'liw'} >
                        <div className="icons">
                            <TbLayoutDashboard />
                        </div>
                        <p className="title">
                            <NavLink to='/dash' className='link' activeClassName='activate'>Dashboard</NavLink></p>

                    </div>
                    <div onClick={() => setActiveNav('#event')}
                        className={activeNav === '#event' ? 'activate liw' : 'liw'}>
                        <div className="icons">
                            <TbCalendarEvent />
                        </div>
                        <p className="title">
                            <Link to='/event' className='link'>
                                Event</Link></p>
                    </div>
                    <div onClick={() => setActiveNav('#attendance')}
                        className={activeNav === '#attendance' ? 'activate liw' : 'liw'}>
                        <div className="icons">
                            <VscCalendar />
                        </div>
                        <p className="title">
                            <Link to='/attendance' className='link'>
                                Attandence </Link></p>
                    </div>
                    <div className='liw'>
                        <div className="icons">
                            <BsBook />
                        </div>
                        <p className="title">Study material</p>
                    </div>
                    <div onClick={() => setActiveNav('#exam')}
                        className={activeNav === '#exam' ? 'activate liw' : 'liw'}>
                        <div className="icons">
                            <BsFileCheck />
                        </div>
                        <p className="title">
                            <Link to='/exam' className='link'>
                            Exam </Link></p>
                    </div>
                    <div className='liw'>
                        <div className="icons">
                            <BsCash />
                        </div>
                        <p className='title'>Fee</p>
                    </div>
                    <div className='liw'>
                        <div className="icons">
                            <HiOutlineBuildingLibrary />
                        </div>
                        <p className='title'>Library</p>
                    </div>
                    <div className='liw'>
                        <div className="icons">
                            <BsPatchQuestion />
                        </div>
                        <p className='title'>Lost & Found</p>
                    </div>
                    <div className='liw'>
                        <div className="icons">
                            <AiFillExclamationCircle />
                        </div>
                        <p className='title'>Complaint</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
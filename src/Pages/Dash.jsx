import React from 'react'
import BoardAtten from './BoardAtten';
// import Attendancechart from './Attendancechart';
import './dash.css';
import Event from './Event';
import InfoAtte from './InfoAtte';

const Dash = () => {
    return (
        <div className="Dash">
            <div className="top-1">
                <span>Good Morning Balram ...</span>
            </div>
            <Event />
            <InfoAtte />
            <BoardAtten />
            <div className="assignment">
                <h3>Your Assignment</h3>
                <div className="main_part">
                    <div className='students_item'>
                        <div className='students_profile'>
                            <div className="profile_left">
                                <p className='circle1'></p>
                                <div className="details">
                                    <p>Abhay Patel</p>
                                    <span>27 Nov 2022</span>
                                </div>
                            </div>
                            <div className="assignstatus">
                                <button>Due</button>
                            </div>
                        </div>
                    </div>
                    <div className='students_item'>
                        <div className='students_profile'>
                            <div className="profile_left">
                                <p className='circle1'></p>
                                <div className="details">
                                    <p>Abhay Patel</p>
                                    <span>1 Dec 2022</span>
                                </div>
                            </div>
                            <div className="assignstatus">
                                <button>Due</button>
                            </div>
                        </div>
                    </div>
                    <div className='students_item'>
                        <div className='students_profile'>
                            <div className="profile_left">
                                <p className='circle1'></p>
                                <div className="details">
                                    <p>Abhay Patel</p>
                                    <span>21 Jan 2023</span>
                                </div>
                            </div>
                            <div className="assignstatus">
                                <button>Due</button>
                            </div>
                        </div>
                    </div>
                    <div className='students_item'>
                        <div className='students_profile'>
                            <div className="profile_left">
                                <p className='circle1'></p>
                                <div className="details">
                                    <p>Abhay Patel</p>
                                    <span>01 Feb 2023</span>
                                </div>
                            </div>
                            <div className="assignstatus_c">
                                <button>Complete</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dash;
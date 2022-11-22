import React from 'react'
import './cssss.css';
import { AiOutlineCalendar } from 'react-icons/ai';
import { AiFillClockCircle } from 'react-icons/ai';
const Eventleft = () => {
    return (
        <div className="boxes">
            <h3>Chemistry class starting soon...</h3>
            <div className="time">
                <div className="left_time">
                    <AiOutlineCalendar />
                    <span>12 feb 2023</span>
                </div>
                <div className="right_time">
                    <AiFillClockCircle />
                    <span>12:10 AM - 2:00 PM</span>
                </div>
            </div>
        </div>
    )
}

export default Eventleft;
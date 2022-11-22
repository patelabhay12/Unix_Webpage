import React from 'react';
import './event.css';
import Eventleft from './Eventleft';
import { FaRupeeSign } from 'react-icons/fa';

const Event = () => {
    return (
        <div className='Event_cont'>
            <div className="span">
                <span>Event</span>
            </div>
            <div className='Event'>
                <div className='left_event'>
                    <Eventleft />
                    <Eventleft />
                </div>
                <div className="right_event pay">
                    <div className="pay_content">
                        <div className="pay_up">
                            <div className='rup'>
                                <FaRupeeSign className='icons_h' />
                                <span>1,50,000.00</span>
                            </div>
                            <p>Payment Due...</p>
                        </div>
                        <div className="pay_down">
                            <button className='button'>Pay Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Event;
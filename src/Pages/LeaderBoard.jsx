import React from 'react'
import './leader.css';
const LeaderBoard = () => {
    return (
        <div className='board'>
            <div className='student_profile'>
                <p className='circle'></p>
                <div className="details">
                    <p>Abhay Patel</p>
                    <span>97.96%</span>
                </div>
            </div>
        </div>
    )
}

export default LeaderBoard;
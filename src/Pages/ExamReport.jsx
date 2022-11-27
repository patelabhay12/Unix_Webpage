import React, { useState } from 'react';
import './exam.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ExamData from './ExamData';
import LeaderBoard from './LeaderBoard';


const ExamReport = () => {
    const percentage = 66;
    return (
        <div className='report'>
            <h4>Unit Test 1 report...</h4>
            <div className="main_rep_up">
                <div className="left_rep">
                    <div className='probar'>
                        <CircularProgressbar value={percentage} text={`Total ${percentage}%`} />
                    </div>
                    <h3>360/1000</h3>
                </div>
                <div className="right_rep">
                    {
                        ExamData.map((item, value) => {
                            return (
                                <div className="subject_rep">
                                    <div className='rep_dub'>
                                        <h4>{item.ob}/{item.to}</h4>
                                        <span>{item.subject}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>


            <div className="bar_chart">

            </div>

            <div className="main_leader_board">
                <h4>LeaderBoard</h4>
                <div className="leader_board">

                    <div className="left_board">
                        <LeaderBoard />
                        <LeaderBoard />
                        <LeaderBoard />
                        <LeaderBoard />
                    </div>
                    <div className="board_main_r">
                            <div className="col_1"></div>
                            <div className="col_2"></div>
                            <div className="col_3"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExamReport; 
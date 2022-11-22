import React from 'react';
import './board.css';
import LeaderBoard from './LeaderBoard';

const BoardAtten = () => {
    return (
        <div className="top_m">
            <h3>Attendance LeaderBoard</h3>

            <div className="main_board">
                <div className="board_main">
                    <div className="left_board">
                        <LeaderBoard />
                        <LeaderBoard />
                        <LeaderBoard />
                        <LeaderBoard />
                    </div>
                </div>
                <div className="right_board">
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

export default BoardAtten;
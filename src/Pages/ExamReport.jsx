import React,{useState} from 'react';
import './exam.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
// import {Bar } from 'react-chartjs-2';
import { BarChart } from 'recharts';


const Data = [
    {
      id: 1,
      year: 2016,
      userGain: 80000,
      userLost: 823
    },
    {
      id: 2,
      year: 2017,
      userGain: 45677,
      userLost: 345
    },
    {
      id: 3,
      year: 2018,
      userGain: 78888,
      userLost: 555
    },
    {
      id: 4,
      year: 2019,
      userGain: 90000,
      userLost: 4555
    },
    {
      id: 5,
      year: 2020,
      userGain: 4300,
      userLost: 234
    }
  ];

const ExamReport = () => {
    const percentage = 66;
    const [UserData, setUsertData] = useState({
        labels:UserData.map((data)=>data.year),
        datasets: [{
            label: "User Gained",
            data:UserData.map((data)=>data.userGain),
        }]
    });
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
                    <div className="subject_rep">
                        <div className='rep_dub'>
                            <h4>30/100</h4>
                            <span>Science</span>
                        </div>
                    </div>
                    <div className="subject_rep">
                        <div className='rep_dub'>
                            <h4>40/100</h4>
                            <span>Math</span>
                        </div>
                    </div>
                    <div className="subject_rep">
                        <div className='rep_dub'>
                            <h4>70/100</h4>
                            <span>English</span>
                        </div>
                    </div>
                    <div className="subject_rep">
                        <div className='rep_dub'>
                            <h4>20/100</h4>
                            <span>Hindi</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="chart_h">
                {/* <BarChart data={UserData}   /> */}
            </div>
        </div>
    )
}

export default ExamReport; 
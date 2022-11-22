import React from 'react';
import './chart.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
// import './custom.css';

const Attendancechart = () => {
    return (
        <div className='chart_h'>
            <div className="featureChart">
                <CircularProgressbar value={65} text={'65%'} strokeWidth={10} style={{ 'background':'linear-gradient(128.11deg, #FFFFFF -15.74%, #FF9090 57.21%, #FF0C0C 153.55%);'}} />
            </div>
            <span>Attendance this Year</span>
        </div>
    )
}

export default Attendancechart;
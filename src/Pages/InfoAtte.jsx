import {React} from 'react';
import './Info.css';
import Attendancechart from './Attendancechart';
import Calender  from '../Pages/Calender.jsx'; 

const InfoAtte = () => {
    return (
        <div className='info'>
            <div className="left_info">
                <div className="info_main">
                    <Attendancechart />
                </div>
            </div>
            <div className="right_info">
                <Calender/>
            </div>
        </div>
    )
}

export default InfoAtte;
import { React, useState } from 'react';
import './cal.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Calender = () => {
    const [value, onChange] = useState(new Date());
    return (
        <div className='cal_main'>
            <Calendar onChange={onChange} value={value} />
        </div>
    )
}

export default Calender;
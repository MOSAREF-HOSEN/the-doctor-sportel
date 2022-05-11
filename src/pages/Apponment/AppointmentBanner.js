import React, { useState } from 'react';
import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const AppointmentBanner = () => {
    const [date, setDate] = useState(new Date())

    return (
        <div class="hero min-h-screen bg-">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                 
                    <DayPicker 
                    mode='single'
                      selected={date}
                      onSelect={setDate}
                    />
                    <small className='text-green-600 ml-12'>date of bath {format(date, 'PP')}.</small>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;
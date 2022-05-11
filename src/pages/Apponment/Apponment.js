import React, { useState } from 'react';
import Footer from '../Sheard/Footer';
import AppointmentBanner from './AppointmentBanner';
import AvalableApponment from './AvalableApponment';

const Apponment = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div>
            <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
            <AvalableApponment date={date} setDate={setDate}></AvalableApponment>
            <Footer></Footer>
        </div>  
    );
};

export default Apponment;
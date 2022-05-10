import React from 'react';
import InfoCart from './InfoCart';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 '>
            <InfoCart cart='Opening Hours' bgName='bg-gradient-to-r from-violet-500 to-fuchsia-500' img={clock}></InfoCart>
            <InfoCart cart='Our Location' bgName='bg-accent' img={marker}></InfoCart>
            <InfoCart cart='contact Us' bgName='bg-gradient-to-r from-violet-500 to-fuchsia-500' img={phone}></InfoCart>
        </div>
    );
};

export default Info;
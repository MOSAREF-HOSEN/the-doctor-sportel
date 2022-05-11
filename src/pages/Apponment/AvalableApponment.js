import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';

const AvalableApponment = ({date}) => {
    const [services,setServices] = useState([])

    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div>
            <h4 className='text-primary text-center ml-12'>date of bath {format(date, 'PP')}.</h4>
        </div>
    );
};

export default AvalableApponment;
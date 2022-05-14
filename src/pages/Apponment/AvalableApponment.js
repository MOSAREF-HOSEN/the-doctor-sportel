import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Sheard/Loading';
import BookingModel from './BookingModel';
import Service from './Service';




const AvalableApponment = ({ date }) => {
    // const [services,setServices] = useState([])
    const [tritment, setTritment] = useState(null)

    const formatedDate = format(date, 'pp')
    const {data:services,isLoading,refetch } = useQuery(['available',formatedDate], () =>  fetch(`http://localhost:5000/available?date=${formatedDate}`)
        .then(res=>res.json()))
        

        if(isLoading){
            return <Loading></Loading>
        }

    return (
        <div>
            <h4 className='text-green-500 text-center ml-12 text-2xl font-semibold'>date of bath {format(date, 'PP')}.</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services?.map(service => <Service
                        key={service._id}
                        service={service}
                        refetch={refetch}
                        setTritment={setTritment}
                    ></Service>)
                }
            </div>
            {
                tritment && <BookingModel
                    date={date}
                    tritment={tritment}
                    setTritment={setTritment}
                ></BookingModel>
            }
        </div>
    );
};

export default AvalableApponment;
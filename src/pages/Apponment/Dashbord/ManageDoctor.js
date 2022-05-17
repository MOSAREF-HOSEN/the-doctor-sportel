import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Sheard/Loading';

const ManageDoctor = () => {
    const {data:doctors,isLoading} = useQuery('doctors',()=>fetch('http://localhost:5000/doctor',{
        headers: {
            'content-type' : 'application/json',
            authorization: `Bearar ${localStorage.getItem('accessToken')}`
         },
    }).then(res=>res.json()))
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-3xl'>Maneg doctor:{doctors.length}</h2>
        </div>
    );
};

export default ManageDoctor;
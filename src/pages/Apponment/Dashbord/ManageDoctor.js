import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Sheard/Loading';
import DoctorRw from './DoctorRw';

const ManageDoctor = () => {
    const { data: doctors, isLoading } = useQuery('doctors', () => fetch('http://localhost:5000/doctor', {
        headers: {
            'content-type': 'application/json',
            authorization: `Bearar ${localStorage.getItem('accessToken')}`
        },
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-3xl'>Maneg doctor:{doctors.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>avatar</th>
                            <th>name</th>
                            <th>speciality</th>
                            <th>acction</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                       {
                           doctors.map((doctor,index)=><DoctorRw
                           key={doctor._key}
                           index={index}
                           doctor={doctor}
                           ></DoctorRw>)
                       }
                    
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageDoctor;
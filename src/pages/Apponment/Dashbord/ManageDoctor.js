import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Sheard/Loading';
import DeleteConfromdoctor from './DeleteConfromdoctor';
import DoctorRw from './DoctorRw';

const ManageDoctor = () => {
    const [deleteDoctor,setDeleteDoctor] = useState(null)
    const { data: doctors, isLoading,refetch } = useQuery('doctors', () => fetch('https://quiet-woodland-65141.herokuapp.com/doctor', {
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
            <h2 className='text-3xl text-secondary  font-serif m-4'>Manage doctor</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
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
                           doctors?.map((doctor,index)=><DoctorRw
                           key={index}
                           index={index}
                           doctor={doctor}
                           refetch={refetch}
                           setDeleteDoctor={setDeleteDoctor}
                           ></DoctorRw>)
                       }
                    
                    </tbody>
                </table>
            </div>
            {deleteDoctor && <DeleteConfromdoctor
            deleteDoctor={setDeleteDoctor}
            refetch={refetch}
            setDeleteDoctor={setDeleteDoctor}
            ></DeleteConfromdoctor>}
        </div>
    );
};

export default ManageDoctor;
import React from 'react';
import { toast } from 'react-toastify';

const DoctorRw = ({ doctor, index, refetch,setDeleteDoctor }) => {
    const { name, speciality, img, email } = doctor

   

    return (
        <tr>
            <th>{index + 1}</th>

            <td> <div class="avatar">
                <div class="w-16 rounded">
                    <img src={img} alt="Tailwind-CSS-Avatar-component" />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{speciality}</td>
            <td>
                <label onClick={()=>setDeleteDoctor(doctor)} for="delete-confrom" class="btn btn-xs btn-error">Delete</label>
               
            </td>

        </tr>
    );
};

export default DoctorRw;
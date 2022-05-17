import React from 'react';

const DoctorRw = ({ doctor, index }) => {
    const { name, speciality,img } = doctor
    return (
        <tr>
            <th>{index + 1}</th>
            
            <td> <div class="avatar">
                <div class="w-20 rounded">
                    <img src={img} alt="Tailwind-CSS-Avatar-component" />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{speciality}</td>
            <td><button class="btn btn-xs btn-error text-white">Delete</button></td>
            <td>Blue</td>
        </tr>
    );
};

export default DoctorRw;
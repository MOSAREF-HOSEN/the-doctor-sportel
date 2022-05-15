import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyApponment = () => {
    const [user] = useAuthState(auth)
    const [apponments, setapponments] = useState([])
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?patient=${user.email}`)
                .then(res => res.json())
                .then(data => setapponments(data))
        }
    }, [user])
    // console.log(apponments);
    return (
        <div>
            {/* <h2>My apponment:{apponments.length}</h2> */}

            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>date</th>
                            <th>Time</th>
                            <th>treatment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            apponments.map((a,index)=><tr>
                                <th>{index+1}</th>
                                <td>{a.patientName}</td>
                                <td>{a.date}</td>
                                <td>{a.slot}</td>
                                <td>{a.slot}</td>
                            </tr>
                            )
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyApponment;
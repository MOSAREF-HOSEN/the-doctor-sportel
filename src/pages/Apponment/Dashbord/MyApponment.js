import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
const MyApponment = () => {
    const [apponments, setapponments] = useState([])
    const [user] = useAuthState(auth)
    const navigate = useNavigate()
    useEffect(() => {
        if (user) {
            fetch(`https://quiet-woodland-65141.herokuapp.com/booking?patient=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res =>{ 
                    // console.log("res",res);
                    if(res.status ===401 || res.status ===403){
                        signOut(auth)
                        localStorage.removeItem('accessToken')
                        navigate('/')

                    }
                   return res.json()
                })
                .then(data => {
                    setapponments(data)
                })
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
                            <th>payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            apponments.map((a, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{a.patientName}</td>
                                <td>{a.date}</td>
                                <td>{a.slot}</td>
                                <td>{a.treatment}</td>
                                <td>
                         {(a.price && !a.paid) && <Link to={`/dashbord/payment/${a._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}
                                    {(a.price && a.paid) &&<button className='btn btn-xs btn-success'>paid</button>}
                                    
                                </td>
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
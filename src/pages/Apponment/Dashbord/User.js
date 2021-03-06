import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Sheard/Loading';
import UserRow from './UserRow';

const User = () => {
    const { data: users, isLoading,refetch } = useQuery('users', () => fetch('https://quiet-woodland-65141.herokuapp.com/user',{
        method:'GET',
        headers:{
            authorization: `Bearar ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    // console.log(users);
    return (
        <div>
            <h2 className='text-2xl text-secondary'>All users:{users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                           users.map(user=><UserRow
                           key={user._id}
                           user={user}
                           refetch={refetch}
                           ></UserRow>)
                       }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default User;
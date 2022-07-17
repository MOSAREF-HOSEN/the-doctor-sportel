import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Histri = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
       
      };
    return (
        <div>
            <div className='w-96 bg-base-100 shadow-xl text-center p-10 rounded-sm m-12'>
                <div className="avatar online">
                    <div className="w-24 rounded-full">
                        <img src={user.photoURL} />
                    </div>
                </div>
                <h3 className='text-secondary text-3xl'>{user.displayName}</h3>
                <p>{user.email}</p>
                <div className="divider"></div> 
                <button onClick={logout} className="btn btn-primary mt-2 uppercase text-white font-semibold bg-gradient-to-r from-primary to-secondary">Log Out</button>
            </div>

        </div>
    );
};

export default Histri;
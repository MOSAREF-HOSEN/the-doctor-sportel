import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
const Dashbord = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <div className="drawer drawer-mobile">
            <input id="dashbord-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-3xl font-bold text-primary mb-6'>Dashbord</h2>
                <Outlet></Outlet>
                

            </div>
            <div className="drawer-side">
                <label htmlFor="dashbord-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to={'/dashbord'}>My apponment</Link></li>
                    <li><Link to={'/dashbord/review'}>My Reveiw</Link></li>
                    <li><Link to={'/dashbord/histri'}>My History</Link></li>
                    {admin && <>
                        <li><Link to={'/dashbord/users'}>All users</Link></li>
                        <li><Link to={'/dashbord/addDoctor'}>add a doctor</Link></li>
                        <li><Link to={'/dashbord/manegedoctor'}>Manege doctor</Link></li>
                    </>}
                    
                </ul>

            </div>
        </div>
    );
};

export default Dashbord;
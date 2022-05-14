import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashbord = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="dashbord-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-3xl font-bold text-primary'>Dashbord</h2>
                <Outlet></Outlet>
                

            </div>
            <div className="drawer-side">
                <label for="dashbord-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to={'/dashbord'}>My apponment</Link></li>
                    <li><Link to={'/dashbord/review'}>My Reveiw</Link></li>
                    
                </ul>

            </div>
        </div>
    );
};

export default Dashbord;
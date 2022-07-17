import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
const MackAppoinment = () => {
    return (
        <section style={{background: `url(${appointment})`
        }} 
        className='flex justify-center items-center p-12'>
            <div className='flex-1 hidden lg:block sm:p-12'>
                <img className='mt-[-190px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='text-xl text-primary'>Appoinment</h3>
                <h2 className='text-3xl text-white'>Make an appointment</h2>
                <p className='text-white mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni deserunt vero quia repudiandae libero voluptas animi dolore a non temporibus cumque recusandae, accusamus corporis hic doloribus officia exercitationem nostrum dolor? Cupiditate rerum dolore distinctio sit earum facere,!</p>
                <button className="btn btn-primary  uppercase text-white font-semibold bg-gradient-to-r from-primary to-secondary">Get Started</button>
            </div>
        </section>
    );
};

export default MackAppoinment;
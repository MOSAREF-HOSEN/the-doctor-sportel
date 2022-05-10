import React from 'react';

const InfoCart = ({ img,cart,bgName}) => {
    return (
        <div className={`card card-side shadow-xl ${bgName} px-3`}>
            <figure className='pl-5'><img src={img} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title text-white">{cart}</h2>
                <p className='text-white'>Click the button to watch on Jetflix app.</p>

            </div>
        </div>


    );
};

export default InfoCart;
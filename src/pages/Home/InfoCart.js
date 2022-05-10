import React from 'react';

const InfoCart = ({ img,cart,bgClass}) => {
    return (
        <div class={`card card-side shadow-xl ${bgClass} px-3`}>
            <figure className='pl-5'><img src={img} alt="Movie" /></figure>
            <div class="card-body">
                <h2 class="card-title text-white">{cart}</h2>
                <p className='text-white'>Click the button to watch on Jetflix app.</p>

            </div>
        </div>


    );
};

export default InfoCart;
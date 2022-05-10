import React from 'react';
import chair from '../../assets/images/chair.png'
const Banner = () => {
    return (
        <div>
            <div class="hero min-h-screen px-12">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair}class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold ">the doctor sportel!</h1>
                        <small class="py-6 block">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</small>
                        <button class="btn btn-primary uppercase text-white font-semibold bg-gradient-to-r from-violet-500 to-fuchsia-500">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
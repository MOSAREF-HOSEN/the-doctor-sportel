import React from 'react';
import treatment from '../../assets/images/treatment.png'
const Exceptional = () => {
    return (
        <div className="hero min-h-screen px-12">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={treatment}className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold ">the doctor sportel!</h1>
                        <small className="py-6 block">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</small>
                        <button className="btn btn-primary  uppercase text-white font-semibold bg-gradient-to-r from-primary to-secondary">Get Started</button>
                    </div>
                </div>
            </div>
    );
};

export default Exceptional;
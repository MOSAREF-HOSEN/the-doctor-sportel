import React from 'react';

const Service = ({ service, setTritment}) => {
    const { name, slots,price } = service
    return (
        <div className="card lg:max-w-lg text-center bg-white shadow-xl">
            <div className="card-body">
                <h2 className="text-3xl   text-green-400">{name}</h2>
                <p>{
                    slots.length > 0
                        ? <span>{slots[0]}</span>
                        : <span className='text-red-500'>No slot Avalable</span>
                }</p>
                <p>{slots.length}{slots.length > 1 ? 'spaces' : 'space'} avaleble</p>
                <p className='text-center text-primary '><small>${price}</small></p>
                <div className="card-actions justify-center">
                  
                    <label 
                    htmlFor="booking" 
                    disabled={slots.length === 0}
                    onClick={() => setTritment(service)}
                    className="btn btn-primary uppercase text-white font-semibold bg-gradient-to-r bg-green-400">Book Apponmentl</label>
                </div>
            </div>
        </div>
    );
};

export default Service;
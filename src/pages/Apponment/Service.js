import React from 'react';

const Service = ({ service, setTritment}) => {
    const { name, slots } = service
    return (
        <div class="card lg:max-w-lg bg-white shadow-xl">
            <div class="card-body">
                <h2 class="card-title text-xl text-green-400">{name}</h2>
                <p>{
                    slots.length > 0
                        ? <span>{slots[0]}</span>
                        : <span className='text-red-500'>No slot Avalable</span>
                }</p>
                <p>{slots.length}{slots.length > 1 ? 'spaces' : 'space'} avaleble</p>
                <div class="card-actions justify-center">
                  
                    <label 
                    for="booking" 
                    disabled={slots.length === 0}
                    onClick={() => setTritment(service)}
                    class="btn btn-primary uppercase text-white font-semibold bg-gradient-to-r bg-green-400">Book Apponmentl</label>
                </div>
            </div>
        </div>
    );
};

export default Service;
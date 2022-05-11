import React from 'react';
import { format } from 'date-fns';
const BookingModel = ({ tritment, date,setTritment }) => {
    const {_id, name, slots } = tritment
    const handelBooking = e =>{
        e.preventDefault()
        const slot = e.target.slot.value
        console.log(_id, name,slot);
        setTritment(null)
    }
    return (
        <div className=''>
            <input type="checkbox" id="booking" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-green-500">booking:{name}</h3>
                    <form onSubmit={handelBooking} className='grid grid-cols-1 gap-3 justify-center mt-2'>
                        <input type="text" disabled value={format(date, 'PP')} class="input input-bordered w-full max-w-xs" />
                        <select name='slot' class="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot =><option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' placeholder="Your Name" class="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' placeholder="Email Address" class="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone Number" class="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="submit" class="btn btn-primary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default BookingModel;
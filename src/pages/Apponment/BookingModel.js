import React from 'react';
import { format } from 'date-fns';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import {  toast } from 'react-toastify';
const BookingModel = ({ tritment, date,setTritment,refetch }) => {
    const {_id, name, slots,price } = tritment
    const [user, loading, error] = useAuthState(auth);
    const formatedDate = format(date, 'pp')
    
    const handelBooking = e =>{
        e.preventDefault()
        const slot = e.target.slot.value

        const booking ={
            treatmentId: _id,
            treatment: name,
            date: formatedDate,
            slot,
            price,
            patient:user.email,
            patientName:user.displayName,
            phone: e.target.phone.value
        }

        fetch('https://quiet-woodland-65141.herokuapp.com/booking',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(booking)
        })
        .then(res=>res.json())
        .then(data=>{
            //close the modal
            // console.log(data);
            if(data.success){
              toast(`appointment is set${formatedDate} at ${slot}`,)
            } 
            else{
                toast.error(`allrady have an appointment${data.booking?.date} at ${data.booking?.slot}`,)
            }
            refetch()
            setTritment(null)
        })


    }
    return (
        <div className=''>
            <input type="checkbox" id="booking" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-green-500">booking:{name}</h3>
                    <form onSubmit={handelBooking} className='grid grid-cols-1 gap-3 justify-center mt-2'>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot,index) =><option key={index} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" disabled name='name' value={user?.displayName} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' disabled value={user?.email} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="submit" className="btn btn-primary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default BookingModel;
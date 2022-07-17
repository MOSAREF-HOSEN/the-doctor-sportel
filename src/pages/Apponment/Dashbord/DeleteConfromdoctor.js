import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfromdoctor = ({deleteDoctor, setDeleteDoctor,refetch}) => {
    const { name,email } = deleteDoctor
    const hendeleDelete = () => {
        fetch(`https://quiet-woodland-65141.herokuapp.com/doctor/${email}`, {
            method: 'DELETE',
            headers: {
             
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`Doctor ${name} is deleted !`)
                    setDeleteDoctor(null)
                    refetch()
                }
            })
    }
    return (
        <div>

            {/* <!-- Put this part before </body> tag --> */}
            <input type="checkbox" id="delete-confrom" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-red-500 text-lg">are you sure youb want to delete {name}</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                        <label for="delete-confrom" className="btn btn-xs">Cancel</label>
                        <button onClick={() => hendeleDelete()} className="btn btn-xs btn-error text-white">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfromdoctor;
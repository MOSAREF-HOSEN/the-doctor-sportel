import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfromdoctor = ({deleteDoctor, setDeleteDoctor,refetch}) => {
    const { name,email } = deleteDoctor
    const hendeleDelete = () => {
        fetch(`http://localhost:5000/doctor/${email}`, {
            method: 'DELETE',
            headers: {
             
                authorization: `Bearar ${localStorage.getItem('accessToken')}`
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
            <input type="checkbox" id="delete-confrom" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-red-500 text-lg">are you sure youb want to delete {name}</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div class="modal-action">
                        <label for="delete-confrom" class="btn btn-xs">Cancel</label>
                        <button onClick={() => hendeleDelete()} class="btn btn-xs btn-error text-white">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfromdoctor;
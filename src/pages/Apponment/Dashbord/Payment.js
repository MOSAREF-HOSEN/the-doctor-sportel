import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Sheard/Loading';
import CheckoutForm from './CheckoutForm';

const Payment = () => {
    const stripePromise = loadStripe('pk_test_51L0f50IawdrGN2QNNfpnsVtZxtypMcOduvIOjMZGVHtw3JrS8VvjmlScnPOs6hqQDWeXdcVYNUxG4cboXDCom4tS00Ame6Z3CS');
    const { id } = useParams()
    const url = `http://localhost:5000/booking/${id}`
    const { data: appionment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearar ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div class="card max-w-md w-50 bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className='text-primary text-2xl font-bold'>Hello {appionment.patientName}</p>
                    <h2 class="card-title">pay for{appionment.treatment}</h2>
                    <p>we wile see your on {appionment.data}at {appionment.slot}</p>
                    <p>please pay ${appionment.price}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>
                </div>
            </div>
        </div>

    );
};

export default Payment;
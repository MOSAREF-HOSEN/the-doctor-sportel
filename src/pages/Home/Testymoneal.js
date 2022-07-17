import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';
const Testymoneal = () => {
    const reviews = [
        {
            _id:1,
            name:'winson herry',
            review: '',
            location: 'califoniya',
            img: people1
        },
        {
            _id:2,
            name:'winson herry',
            review: '',
            location: 'califoniya',
            img: people2
        },
        {
            _id:3,
            name:'winson herry',
            review: '',
            location: 'califoniya',
            img: people3
        }
    ]
    return (
        <section id='Review' className='my-12 mt-16'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-xl text-secondary font-bold">Testymoneal</h4>
                    <h2 className='text-4xl'>what our patients say</h2>
                </div>
                <div>
                    <img className='lg:w-48 w-24' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
           '>
                {
                   reviews.map(review=><Review 
                    key={review._id} review={review}>
                    </Review>)
                }
            </div>
        </section>
    );
};

export default Testymoneal;
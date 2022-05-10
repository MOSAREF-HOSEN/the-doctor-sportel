import React from 'react';
import Service from './Service';
import floright from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
const Services = () => {
    const services = [
        {
            _id:1,
            name:'Floright Treatment',
            discription: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptatem quis sint expedita modi ',
            img:floright
        },
        {
            _id:2,
            name:'cavity fliening',
            discription: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptatem quis sint expedita modi ',
            img:cavity
        },
        {
            _id:3,
            name:'teeth whitening',
            discription: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptatem quis sint expedita modi ',
            img:whitening
        }
    ];
    return (
        <div className='my-28'>
           
            <div className='text-center'>
                <h2 className='text-primary uppercase text-xl'>Our serveces</h2>
                <h2 className='text-4xl '>Services we Provide</h2>
            </div>
            <div>
               {
                   services.map(service=><Service key={service._id}
                   service={service}></Service>)
               }
            </div>
        </div>
    );
};

export default Services;
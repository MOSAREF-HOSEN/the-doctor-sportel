import { Result } from 'postcss';
import React from 'react';
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../../Sheard/Loading';
import doctor from '../../../assets/images/login.png'
const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const { data: services, isLoading } = useQuery('services', () => fetch(`http://localhost:5000/service`).then(res => res.json()))



    //yup emage loade korar jonne

    const imgKey = `12be30ece3459e819fc126db848e42a7`


    const onSubmit = async data => {
        console.log(data);
        const img = data.img[0]
        const formData = new FormData();
        formData.append('image', img)
        const url = `https://api.imgbb.com/1/upload?key=${imgKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.spciality,
                        img: img
                    }
                    //send to your datbasse
                    fetch(`http://localhost:5000/doctor`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearar ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            console.log('doctor', inserted);
                            if (inserted) {
                                toast.success('Doctor add successfuly')
                                reset()
                            }
                            else {
                                toast.error('feale to add Doctor')
                            }
                        })
                }

                // console.log('imgbb',result);
            })


    };
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='mt-12'>
            <h2 className='text-3xl text-secondary font-bold ml-16'>Add A New Doctor</h2>
            <div className='flex align-center justify-around'>
               
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* input email */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="input input-bordered w-full max-w-xs"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'name is Reruired'
                                }
                            })}
                        />
                        <label className="label">

                            {errors.email?.type === "required" && <span className="label-text-alt text-red-600">
                                {errors.email?.message}</span>}

                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="input input-bordered w-full max-w-xs"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Reruired'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Pleash valid Email'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.email?.type === "required" && <span className="label-text-alt text-red-600">{errors.email?.message}</span>}
                            {errors.email?.type === "pattern" && <span className="label-text-alt text-red-600">{errors.email?.message}</span>}

                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">speciality</span>
                        </label>

                        <select {...register('speciality')} class="select input-bordered  w-full max-w-xs">
                            {
                                services.map(servic => <option
                                    key={servic._id}
                                    value={servic.name}
                                >{servic.name}</option>)
                            }
                        </select>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">photo</span>
                        </label>
                        <input
                            type="file"
                            className="input input-bordered w-full max-w-xs"
                            {...register("img", {
                                required: {
                                    value: true,
                                    message: 'img is Reruired'
                                },
                            })}
                        />
                        <label className="label">
                            {errors.email?.type === "required" && <span className="label-text-alt text-red-600">{errors.email?.message}</span>}

                        </label>
                    </div>
                    {/* input password */}


                    <input className='btn w-full max-w-xs' type="submit" value="add" />

                </form>
                <div>
                    <img src={doctor} className="max-w-sm ml-8  rounded-lg " />
                </div>
            </div>
        </div>
    );
};

export default AddDoctor;
import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Sheard/Loading';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate()
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    let errorMassage
    if ( loading || gloading || updating) {
       return <Loading></Loading>
    }
    if (error || gerror || updateError) {
        errorMassage = <p className='text-red-500'>{error?.message || gerror?.message || updateError?.message}</p>
    }
    if (user || guser) {
        console.log(user,guser);
    }
 
    const onSubmit = async data => {
         await createUserWithEmailAndPassword(data.email,data.password)
        await updateProfile({ displayName: data.name});
          alert('Updated profile');
          navigate('/appointment')
    };

    return (
        
             <div className='flex h-screen justify-center items-center mt-6'>
            <div className="card w-96  shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-3xl font-bold text-teal-600">Sign Up</h2>
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
                        {/* input password */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'password is Reruired'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 charactors or longer'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors?.password?.type === "required" && <span className="label-text-alt text-red-600">{errors?.passwoed?.message}</span>}
                                {errors.password?.type === "minLength" && <span className="label-text-alt text-red-600">{errors?.password?.message}</span>}

                            </label>
                        </div>
                        {errorMassage}
                        <input className='btn w-full max-w-xs' type="submit" value="sign Up" />

                    </form>
                    <p><small>Alrady have an account<Link  className='text-primary' to={'/login'}> Pleash Login </Link ></small></p> 
                    {/* or container */}
                    <div className="divider">OR</div>
                    {/* Google Login */}
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-accent">Continue with Google</button>

                </div>
            </div>
        </div>
       
    );
};

export default SignUp;
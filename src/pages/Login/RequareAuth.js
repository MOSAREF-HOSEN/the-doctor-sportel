import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Sheard/Loading';

const RequareAuth = ({children}) => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation()
    if(loading){
        <Loading></Loading>
    }
    if(!user){
        <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default RequareAuth;
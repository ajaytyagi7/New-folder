import { enqueueSnackbar } from 'notistack';
import React, { useEffect, useRef, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const UserAuth = ({ children }) => {

    const navigate = useNavigate();
    
    
    const hasRun = useRef(false);
    // console.log(sessionStorage.getItem('user'));
    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));
    console.log(currentUser);
    useEffect(() => {
        if (currentUser === null && !hasRun.current) {
            enqueueSnackbar('User login is required', { variant: 'error' });
            hasRun.current = true;
        } else if (currentUser !== null) {
            hasRun.current = false;
        }
    }, [currentUser]);


    if (currentUser !== null) {
        return children;
    }else{
        // sessionStorage.setItem('oldUrl', '/JobPost')
        navigate('/Login');
    }
    


}

export default UserAuth
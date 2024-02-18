import { enqueueSnackbar } from 'notistack';
import React, { useEffect, useRef, useState } from 'react'
import { Navigate } from 'react-router-dom';

const CompanyAuth = ({children}) => {
    const hasRun = useRef(false);
    console.log(sessionStorage.getItem('company'));
    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('company')));
    console.log(currentUser);
    useEffect(() => {
        if(currentUser === null&& !hasRun.current) {
            enqueueSnackbar('Company login is required', { variant: 'error' });
            hasRun.current = true;
        }else if (currentUser !== null) {
            hasRun.current = false;
          }
    }, [currentUser]);


    if(currentUser!==null) {
        return children;
    }

    return <Navigate to='/CompanyLogin' />

}

export default CompanyAuth
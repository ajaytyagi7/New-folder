import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import useUserContext from '../UserContext';

const Logout = () => {
    
    const {Logout}=useUserContext();

    useEffect(() => {
        Logout();
    
    },[Logout]);

  return (
    <Navigate to={'/Home'}/>
    
  )
}

export default Logout
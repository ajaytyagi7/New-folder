import { enqueueSnackbar } from "notistack";
import { createContext, useContext, useState } from "react";
import { Navigate } from "react-router-dom";

const UserContext = createContext();

export const UserProvider = ({ childern }) => {

    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

    const [userloggedIn, setuserloggedIn] = useState(currentUser = !null);

    const logout = () => {
        sessionStorage.removeItem('user');
        Navigate('/Login');
        enqueueSnackbar('Loged Out Successfully ', { variant: 'success' });
        setuserloggedIn(false);
    }
    return <UserContext.Provider value={{ currentUser, setCurrentUser, userloggedIn, setuserloggedIn, logout }}>
        {childern}
    </UserContext.Provider>
};

const useUserContext = () => useContext(UserContext);

export default useUserContext;
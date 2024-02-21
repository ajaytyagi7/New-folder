import { createContext, useContext, useState } from "react";

const CompanyContext = createContext();


export const CompanyProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('company')));

    const [companyLoggedin, setCompanyLoggedin] = useState(currentUser!==null);

    const logout = () => {
        sessionStorage.removeItem('company');
        navigate('/CompanyLogin');
        enqueueSnackbar( 'Logged out Successfully', { variant : 'success' } );
       setCompanyLoggedin(false);

    }

    return <CompanyContext.Provider value={{ currentUser, setCurrentUser, companyLoggedin, setCompanyLoggedin, logout }}>
        {children}
    </CompanyContext.Provider>

};

const useCompanyContext = () => useContext(CompanyContext);

export default useCompanyContext;
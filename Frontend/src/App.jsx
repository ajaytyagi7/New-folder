import React from "react"
import './App.css';
import { BrowserRouter, Link, Routes, Route, NavLink } from "react-router-dom";
import Signup from './Component/Signup';
import Navbar from "./Component/Navbar";
import Login from "./Component/Login";
import { SnackbarProvider } from "notistack";
import CompanySignup from "./Component/CompanySignup";
import CompanyLogin from "./Component/CompanyLogin";
import Home from "./Component/Home";
import JobPost from "./Component/JobPost";
import ListingJob from "./Component/ListingJob";
import InterviewDetail from "./Component/InterviewDetail";
import ManageInterviewData from "./Component/ManageInterviewData";
import EmployeApply from "./Component/EmployeApply";
import ManageEmployeData from "./Component/ManageEmployeData";
import Contact from "./Component/Contact";
import About from "./Component/About";
import { CompanyProvider } from "./CompanyContext";
import Footer from "./Component/Footer";
import Logout from "./Component/Logout";
import { UserProvider } from "./UserContext";
import UserAuth from "./auth/userAuth";

const App = () => {

  return (
    <>
      <SnackbarProvider maxSnack={3} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} >

        <BrowserRouter>
          <UserProvider>
            <CompanyProvider>
              <Navbar />


              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='Home' element={<Home />} />
                <Route path='Signup' element={<Signup />} />
                <Route path='Login' element={<Login />} />
                <Route path='CompanySignup' element={<CompanySignup />} />
                <Route path='CompanyLogin' element={<CompanyLogin />} />
                <Route path='JobPost' element={<JobPost />} />
                <Route path='ListingJob' element={<ListingJob />} />
                <Route path='ListingJob/:title/:location' element={<ListingJob />} />
                <Route path='InterviewDetail' element={<UserAuth><InterviewDetail /></UserAuth> }/>
                <Route path='ManageInterviewData' element={<ManageInterviewData />} />
                <Route path='EmployeApply' element={<EmployeApply />} />
                <Route path='ManageEmployeData' element={<ManageEmployeData />} />
                <Route path='Contact' element={<Contact />} />
                <Route path='About' element={<About />} />
                <Route path='Logout' element={<Logout />} />


                <Route path='detail/:id' element={<InterviewDetail />} />
              </Routes>
              <Footer></Footer>
            </CompanyProvider>
          </UserProvider>
        </BrowserRouter>
      </SnackbarProvider>

    </>
  )
}

export default App

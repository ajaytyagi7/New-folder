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
import CompanyDetalis from "./Component/CompanyDetalis";
import JobPost from "./Component/JobPost";
import ListingJob from "./Component/ListingJob";
import InterviewDetail from "./Component/InterviewDetail";
import ManageInterviewData from "./Component/ManageInterviewData";
import EmployeApply from "./Component/EmployeApply";
import Contact from "./Component/Contact";
import About from "./Component/About";
import { CompanyProvider } from "./CompanyContext";

const App = () => {

  return (
    <>
      <SnackbarProvider maxSnack={3} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} >

        <BrowserRouter>

          <CompanyProvider>
            <Navbar />


            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='Home' element={<Home />} />
              <Route path='Signup' element={<Signup />} />
              <Route path='Login' element={<Login />} />
              <Route path='CompanySignup' element={<CompanySignup />} />
              <Route path='CompanyLogin' element={<CompanyLogin />} />
              <Route path='CompanyDetails' element={<CompanyDetalis />} />
              <Route path='JobPost' element={<JobPost />} />
              <Route path='ListingJob' element={<ListingJob />} />
              <Route path='InterviewDetail' element={<InterviewDetail />} />
              <Route path='ManageInterviewData' element={<ManageInterviewData />} />
              <Route path='EmployeApply' element={<EmployeApply />} />
              <Route path='Contact' element={<Contact />} />
              <Route path='About' element={<About />} />

              <Route path='detail/:id' element={<InterviewDetail />} />
            </Routes>
          </CompanyProvider>
        </BrowserRouter>
      </SnackbarProvider>

    </>
  )
}

export default App

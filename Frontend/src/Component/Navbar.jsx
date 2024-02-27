import React from 'react'
import { NavLink, Link } from "react-router-dom";
import useCompanyContext from '../CompanyContext';
import useUserContext from '../UserContext';

const Navbar = () => {

  const { companyLoggedin, logout } = useCompanyContext();
  const {userloggedIn} = useUserContext();

  const showCompanyOptions = () => {
    if (companyLoggedin) {
      return <>
        <li className="nav-item">
          <NavLink className="nav-link" to="/JobPost">
            <button className='btn btn-primary'>Post Job</button>
          </NavLink>
        </li>
      </>
    } else {
      return <>

      </>
    }
  }

  return (
    <div className='bg-secondary'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container ">
          <h2 className='text-decoration-none text-dark fw-bold'>OffBeatCampus</h2>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2  mb-lg-0">

              <li className="nav-item">
                <NavLink className="nav-link" to="/Home">
                  Home
                </NavLink>
              </li>

             
            

              <li className="nav-item">
                <NavLink className="nav-link" to="/ListingJob">
                  Job
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/About">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Contact">
                  Contact Us
                </NavLink>
              </li>



            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {userloggedIn ?
               <li className="nav-item">
               <NavLink className="nav-link " to="/Logout">
                <button className='p-1 btn btn-danger'>Logout</button>
               </NavLink>
             </li>:<>
             <li className="nav-item">
                <NavLink className="nav-link " to="/Login">
                 <p className='fs-4 text-dark'><i class="fa-solid fa-user"></i></p>
                </NavLink>
              </li>

            <li className="nav-item">
                <NavLink className="nav-link" to="/Signup">
                  <p className=' text-dark btn btn-warning nav-hover'>Sign Up</p>
                </NavLink>
              </li>
             </>
             }
              <li className="nav-item">
                <NavLink className="nav-link" to="">
                  <div>
                    <Link className='text-decoration-none ' to={'/CompanySignup'}> <button className='btn btn-secondary nav-hover float-end'>Hire </button></Link>

                  </div>
                </NavLink>
              </li>
              {showCompanyOptions()}
              

            </ul>

          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
             
           
             
             

              
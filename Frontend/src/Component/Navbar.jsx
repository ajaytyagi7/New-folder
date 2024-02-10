import React from 'react'
import { NavLink, Link } from "react-router-dom";
import useCompanyContext from '../CompanyContext';

const Navbar = () => {

  const { companyLoggedin, logout } = useCompanyContext();

  const showCompanyOptions = () => {
    if (companyLoggedin) {
      return <>
        <li className="nav-item">
          <NavLink className="nav-link" to="/JobPost">
            JobPost
          </NavLink>
        </li>
      </>
    }else{
      return <>

      </>
    }
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="" alt="" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <NavLink className="nav-link" to="/Home">
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/Signup">
                  Signup
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Login">
                  Login
                </NavLink>
              </li>



              <li className="nav-item">
                <NavLink className="nav-link" to="/CompanyDetails">
                  CompanyDetalis
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/ListingJob">
                  ListingJob
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Contact">
                  Contact Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/About">
                  About Us
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
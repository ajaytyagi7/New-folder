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
            <img style={{height:60}} src="https://scontent.flko7-3.fna.fbcdn.net/v/t39.30808-1/358679381_617054113864472_8606947404320800031_n.jpg?stp=cp0_dst-jpg_e15_p120x120_q65&_nc_cat=106&ccb=1-7&_nc_sid=4da83f&_nc_ohc=lpH1ur0ci2EAX-ZSyHl&_nc_ht=scontent.flko7-3.fna&oh=00_AfB_oihw18Dbi7H5UefruUNwn1J6VzoY_akfhD8iJkSJ6w&oe=65D14CE6" alt="" />
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
                <NavLink className="nav-link" to="/ListingJob">
                  ListingJob
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Contact">
                  Contact Us
                </NavLink>
              </li>
             

              {showCompanyOptions()}
              <li className="nav-item">
                <NavLink className="nav-link" to="">
                  <div>
                 <Link className='text-decoration-none ' to={'/CompanySignup'}> <button className='btn btn-success float-end'>Hire Employe </button></Link>
                   
                    </div>
                </NavLink>
              </li>

            </ul>

          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
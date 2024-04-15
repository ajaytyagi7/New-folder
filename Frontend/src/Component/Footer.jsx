import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='container-fluid p-4 bg-dark text-white'>
        <div className='row  p-5 '>
            <div className='col-md-3'>
            <h3 className='fw-bold '>OffBeatCampus</h3>
            <p>Welcome to OffBeatCampus, where we believe in connecting talent with opportunity to create a brighter future. With a passion for fostering career growth and building strong professional relationships, we are committed to being a trusted partner in your job search journey.</p>
            </div>
            <div className='col  bg-dark '>
                <h4>About</h4>
                <div className='card-body '>
                    <Link  className='text-white text-decoration-none'>About Us</Link><br />
                    <Link className='text-white text-decoration-none'>Contact Us</Link><br />
                    <Link className='text-white text-decoration-none'>Privacy Policy</Link><br />
                    <Link className='text-white text-decoration-none'>Terms & Conditions</Link><br />
                    <Link className='text-white text-decoration-none '>Career</Link><br />

                </div>
            </div>
            <div className='col-md-3  bg-dark '>
                <h4>Service</h4>
                <div className='card-body '>
                    <Link  className='text-white text-decoration-none'>Job</Link><br />
                    <Link className='text-white text-decoration-none'>Interview</Link><br />
                    <Link className='text-white text-decoration-none'>Help in career</Link><br />
                    <Link className='text-white text-decoration-none'>Best Exeprience</Link><br />

                </div>
            </div>
            <div className='col-md-3  bg-dark'>
                <h4>Contact</h4>
                <div className='card-body'>
                    <Link className='text-white text-decoration-none'><i class="fa-brands fa-instagram"></i> Instagram</Link><br />
                    <Link className='text-white text-decoration-none'><i class="fa-brands fa-facebook"></i> Facebook</Link><br />
                    <Link className='text-white text-decoration-none'><i class="fa-solid fa-x"></i> Tweeter</Link><br />
                </div>
            </div>
        </div><hr />
        <p className='text-center '>© 2024 OffBeatCampus.in Cookie Policy / Privacy / Terms / Data Processing / Accessibility</p>

    </div>
  )
}

export default Footer
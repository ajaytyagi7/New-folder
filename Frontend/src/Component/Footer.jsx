import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='container-fluid bg-dark text-white'>
        <div className='row  p-3 '>
            <h3 className='fw-bold'>offBeatCampus</h3>
            <div className='col  bg-dark '>
                <div className='card-body p-4 '>
                    <Link  className='text-white text-decoration-none'>About Us</Link><br />
                    <Link className='text-white text-decoration-none'>Contact Us</Link><br />
                    <Link className='text-white text-decoration-none'>Privacy Policy</Link><br />
                    <Link className='text-white text-decoration-none'>Terms & Conditions</Link><br />
                </div>
            </div>
            <div className='col  bg-dark'>
                <div className='card-body p-4'>
                    <Link className='text-white text-decoration-none mx-3'>Career</Link><br />
                    <Link className='text-white text-decoration-none'><i class="fa-brands fa-instagram"></i> Instagram</Link><br />
                    <Link className='text-white text-decoration-none'><i class="fa-brands fa-facebook"></i> Facebook</Link><br />
                    <Link className='text-white text-decoration-none'><i class="fa-solid fa-x"></i> Tweeter</Link><br />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
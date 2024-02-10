import React from 'react'

const CompanyDetalis = () => {
  return (
    <div>
        <div className='container'>
            <div className='col-md-5 mx-auto py-5'>
                <div className='card  '>
                    <div className='card-body '>
                    <h1 className='text-center'>Company Detalis</h1>
                    <hr />
                    <label htmlFor="name">Enter Owner Name</label>
                    <input type="text" className='form-control mb-3'/>
                    <label htmlFor="name">Enter Company Name</label>
                    <input type="text" className='form-control mb-3'/>
                    <label htmlFor="">Enter Your number of empolye</label>
                    <input type="text" className='form-control mb-3'/>
                    <label htmlFor="number">Enter Your Number</label>
                    <input type="text" className='form-control mb-3'/>
                    <label htmlFor="number">Enter Your Location</label>
                    <input type="text" className='form-control mb-3'/>
                    <button className='btn btn-dark mt-3 w-100'>Enter</button>
                   
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CompanyDetalis
import { useFormik } from 'formik'
import { enqueueSnackbar } from 'notistack';
import React from 'react'

const EmployeApply = () => {

    const EmployeApply=useFormik({
        initialValues:{
            name:'',
            email:'',
            phone:'',
            DOB:'',
            resume:''

        },

        onSubmit:async(values,{setSubmitting})=>{
            console.log(values);

            const res=await fetch(`${import.meta.env.VITE_API_URL}/apply/add`,{
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                  'Content-Type': 'application/json'
                }
            });
            setSubmitting(false)
            console.log(res.status);

            if(res.status===200){
                enqueueSnackbar('Apply Successfully',{variant:'success'})
            }else{
                enqueueSnackbar('Something Went Wrong',{variant:'error'})
            }

        }
    })
  return (
    <div className='container-fluid apply-bg-img'>
        <div className='col-md-4 p-5 mx-auto '>
            <div className='card'>
                <div className='card-body'>
                    <form onSubmit={EmployeApply.handleSubmit}>
                        <h1 className='text-center'>Apply Interview</h1> <hr />
                        <label htmlFor="name"> Name</label>
                        <span className='ms-4 fs-6 text-danger'>{ EmployeApply.touched.name && EmployeApply.errors.name}</span>
                        <input type="text" className='form-control mb-3' placeholder='Enter your Name' id='name' onChange={EmployeApply.handleChange} value={EmployeApply.values.name} />
                    
                        <label htmlFor="email"> Email</label>
                        <span className='ms-4 fs-6 text-danger'>{ EmployeApply.touched.email && EmployeApply.errors.email}</span>
                        <input type="text" className='form-control mb-3' placeholder=' Enter your email' id='email' onChange={EmployeApply.handleChange} value={EmployeApply.values.email}/>
                    
                        <label htmlFor="phone"> Phone Number</label>
                        <span className='ms-4 fs-6 text-danger'>{ EmployeApply.touched.phone && EmployeApply.errors.phone}</span>
                        <input type="text" className='form-control mb-3' placeholder='Your Phone Number' id='phone' onChange={EmployeApply.handleChange} value={EmployeApply.values.phone} />

                        <label htmlFor="DOB"> Date of Birth</label>
                        <span className='ms-4 fs-6 text-danger'>{ EmployeApply.touched.DOB && EmployeApply.errors.DOB}</span>
                        <input type="date" className='form-control mb-3 ' placeholder='Your DOB' id='DOB' onChange={EmployeApply.handleChange} value={EmployeApply.values.DOB} />

                        <label htmlFor="resume">Upload Resume</label>
                        <span className='ms-4 fs-6 text-danger'>{ EmployeApply.touched.resume && EmployeApply.errors.resume}</span>
                        <input type="file" className='form-control mb-3' id='resume' onChange={EmployeApply.handleChange} value={EmployeApply.values.resume}/>

                        <button className='btn btn-dark w-100 mt-3'>Submit</button>
                        
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EmployeApply
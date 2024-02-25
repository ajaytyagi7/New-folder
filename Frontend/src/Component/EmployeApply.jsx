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
    <div className='container-fluid row'>
        <div className='col-md-6 p-5 mx-auto '>
            <div className=''>
                <div className='card-body'>
                    <form className='bg-white shadow p-4' onSubmit={EmployeApply.handleSubmit}>
                        <h1 className='text-center'>Apply Interview</h1> <hr />
                        <span className='ms-4 fs-6 text-danger'>{ EmployeApply.touched.name && EmployeApply.errors.name}</span>
                        <input type="text" className='form-control mb-3' placeholder='Enter your Name' id='name' onChange={EmployeApply.handleChange} value={EmployeApply.values.name} />
                    
                        <span className='ms-4 fs-6 text-danger'>{ EmployeApply.touched.email && EmployeApply.errors.email}</span>
                        <input type="text" className='form-control mb-3' placeholder=' Enter your email' id='email' onChange={EmployeApply.handleChange} value={EmployeApply.values.email}/>
                    
                        <span className='ms-4 fs-6 text-danger'>{ EmployeApply.touched.phone && EmployeApply.errors.phone}</span>
                        <input type="text" className='form-control mb-3' placeholder='Your Phone Number' id='phone' onChange={EmployeApply.handleChange} value={EmployeApply.values.phone} />

                        <span className='ms-4 fs-6 text-danger'>{ EmployeApply.touched.DOB && EmployeApply.errors.DOB}</span>
                        <input type="date" className='form-control mb-3 ' placeholder='Your DOB' id='DOB' onChange={EmployeApply.handleChange} value={EmployeApply.values.DOB} />

                        <span className='ms-4 fs-6 text-danger'>{ EmployeApply.touched.resume && EmployeApply.errors.resume}</span>
                        <input type="file" className='form-control mb-3' id='resume' onChange={EmployeApply.handleChange} value={EmployeApply.values.resume}/>

                        <button className='btn btn-dark w-100 mt-3'>Submit</button>
                        
                    </form>
                </div>
            </div>
        </div>
        <div className='col-md-6 py-5'>
          <img className='img-fluid'  src="https://img.freepik.com/free-vector/recruitment-concept-with-laptop_23-2148621834.jpg?size=626&ext=jpg&ga=GA1.1.913293683.1703873181&semt=ais" alt="" />

        </div>
    </div>
  )
}

export default EmployeApply
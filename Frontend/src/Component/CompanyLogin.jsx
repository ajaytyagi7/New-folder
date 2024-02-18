import { useFormik } from 'formik'
import { enqueueSnackbar } from 'notistack';
import React from 'react'
import { Link } from 'react-router-dom'
import * as Yup from 'yup';
import useCompanyContext from '../CompanyContext';
import { useNavigate } from 'react-router-dom';


const CompanyLoginSchema=Yup.object().shape({
  email:Yup.string().email('Invalid Email').required('Password Require'),
  password:Yup.string().required('Password is Require').min(8,'Password is too short'),
});




const CompanyLogin = () => {

  const navigate=useNavigate();


  const {setCompanyLoggedin} = useCompanyContext();

  const CompanyLoginForm=useFormik({

    initialValues:{
      email:"",
      password:"",
    },

    onSubmit:async(values) =>{
      console.log(values);
      const res=await fetch(`${import.meta.env.VITE_API_URL}/company/authenticate`,{
        method:'POST',
        body:JSON.stringify(values),
        headers:{
          'Content-type':'application/json'
        }
      });

      const data=await res.json();
      if(res.status==200){
        enqueueSnackbar('Logged in Successfully',{variant:'success'});

        sessionStorage.setItem('company',JSON.stringify(data));
        setCompanyLoggedin(true);
        navigate('/JobPost')

      }else if(res.status==401){
        enqueueSnackbar('Inavlid Email',{variant:'error'});
      }else{
        enqueueSnackbar('Some thing went wrong',{variant:'error'})
      }

    },
  });


  
  return (
    <div className='container-fluid company-login-bg-img  '>
        <div className='col-md-4 mx-auto py-2'>
            <div className='mt-5 '>
                <div className='card-body p-3 '>
                   <form className='rounded bg-white p-4' onSubmit={CompanyLoginForm.handleSubmit}>
                    <h1 className='text-center fw-bold'>Company Login</h1><hr />
                    <span className='ms-4 fs-6 text-danger'>{  CompanyLoginForm.errors.email}</span>
                    <input type="text" className='form-control  border border-secondary'  placeholder='Enter Your Email' id='email' onChange={CompanyLoginForm.handleChange} value={CompanyLoginForm.values.email} />&nbsp;
                    
                    <span className='ms-4 fs-6 text-danger'>{  CompanyLoginForm.errors.password}</span>
                    <input type="text"  className='form-control border border-secondary' placeholder='Enter Your Password' id='password'  onChange={CompanyLoginForm.handleChange} value={CompanyLoginForm.values.password}/>&nbsp;
                    
                    <button className='btn btn-primary w-100 mb-3'>Login</button>&nbsp;
                    <Link className=" text-decoration-none  text-dark" >Don't Have an Account ?<p className='text-primary fw-bold '>Register Sign Up</p></Link>

                    
                    </form> 
                </div>

            </div>
        </div>
    </div>
  )
}

export default CompanyLogin
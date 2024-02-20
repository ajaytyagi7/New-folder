import { useFormik } from 'formik'
import { enqueueSnackbar } from 'notistack';
import React from 'react'
import { Link } from 'react-router-dom'
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import useUserContext from '../CompanyContext';



const LoginSchema=Yup.object().shape({
  email:Yup.string().email('Invalid Email').required('Password Require'),
  password:Yup.string().required('Password is Require').min(8,'Password is too short'),
});




const Login = () => {

  const navigate=useNavigate();

  const {setuserloggedIn} = useUserContext();


  const loginForm=useFormik({

    initialValues:{
      
      email:"",
      password:"",
    },

    onSubmit:async(values) =>{
      console.log(values);
      const res=await fetch(`${import.meta.env.VITE_API_URL}/user/authenticate`,{
        method:'POST',
        body:JSON.stringify(values),
        headers:{
          'Content-type':'application/json'
        }
      });

      const data=await res.json();
      if(res.status==200){
        enqueueSnackbar('Logged in Successfully',{variant:'success'});

        sessionStorage.setItem('user',JSON.stringify(data));
        setuserloggedIn(true);
        navigate('/')
      }else if(res.status==401){
        enqueueSnackbar('Inavlid Email',{variant:'error'});
      }else{
        enqueueSnackbar('Some thing went wrong',{variant:'error'})
      }

    },
  });


  
  return (
    <div className='container-fluid employe-login-bg-img '>
        <div className='col-md-4 mx-auto py-4'>
            <div className=' mt-5'>
                <div className='card-body p-4 mt-2'>
                   <form className='rounded p-4 bg-white' onSubmit={loginForm.handleSubmit}>
                    <h1 className='text-center fw-bold'>Login</h1>
                   <hr />
                    <span className='ms-4 fs-6 text-danger'>{  loginForm.errors.email}</span>
                    <input type="text" className='form-control border border-secondary' placeholder='Enter Your Email' id='email' onChange={loginForm.handleChange} value={loginForm.values.email} />&nbsp;
                    
                    <span className='ms-4 fs-6 text-danger'>{  loginForm.errors.password}</span>
                    <input type="password"  className='form-control border border-secondary' placeholder='Enter Your Password' id='password'  onChange={loginForm.handleChange} value={loginForm.values.password}/>&nbsp;
                    
                    <button className='btn btn-primary w-100'>Login</button>&nbsp;
                    <Link to={'/'} className=" text-decoration-none text-dark "> Don't Have an Account ?<p className='text-primary fw-bold '>Register Sign Up</p></Link>

                    
                    </form> 
                </div>

            </div>
        </div>
    </div>
  )
}

export default Login
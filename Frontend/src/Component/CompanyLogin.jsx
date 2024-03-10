import { useFormik } from 'formik'
import { enqueueSnackbar } from 'notistack';
import React from 'react'
import { Link } from 'react-router-dom'
import * as Yup from 'yup';
import useCompanyContext from '../CompanyContext';
import { useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider,GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";



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
          'Content-Type':'application/json'
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

  const googleLogin = async (credentialResponse) => {

    const emailRes = await fetch(`${import.meta.env.VITE_API_URL}/company/getbyemail/${credentialResponse.email}`);

    if (emailRes.status == 200) {

      const userData = await emailRes.json();
      enqueueSnackbar('Loggedin Successfully ', { variant: 'success' });
      sessionStorage.setItem('company', JSON.stringify(userData));
      setCompanyLoggedin(true);
      const oldUrl = sessionStorage.getItem('oldUrl');
      console.log(oldUrl);
      if (oldUrl !== null) {
        navigate(oldUrl);
        sessionStorage.removeItem('oldUrl');
      } else {
        navigate('/JobPost')
      }
    } else {

      const res = await fetch(`${import.meta.env.VITE_API_URL}/company/add`, {
        method: 'POST',
        body: JSON.stringify({
          name: credentialResponse.name,
          email: credentialResponse.email,
          loginType: 'google'
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (res.status == 200) {
        enqueueSnackbar('Registered Successfully ', { variant: 'success' });
        const data = await res.json();
        sessionStorage.setItem('company', JSON.stringify(data));
        setCompanyLoggedin(true);
        navigate('/JobPost')
      } else {
        enqueueSnackbar('Something went wrong', { variant: 'error' });
      }
    }

  }


  
  return (
    <div className='container-fluid row mb-5 mx-5 '>
        <div className='col-md-4 mx-auto py-2'>
            <div className='mt-5 '>
                <div className='card-body p-3 '>
                   <form className='rounded bg-white p-4 shadow' onSubmit={CompanyLoginForm.handleSubmit}>
                    <h1 className='text-center fw-bold'> Login</h1><hr />
                    <span className='ms-4 fs-6 text-danger'>{  CompanyLoginForm.errors.email}</span>
                    <input type="text" className='form-control  border border-secondary p-2 border border-dark'  placeholder=' Email' id='email' onChange={CompanyLoginForm.handleChange} value={CompanyLoginForm.values.email} />&nbsp;
                    
                    <span className='ms-4 fs-6 text-danger'>{  CompanyLoginForm.errors.password}</span>
                    <input type="text"  className='form-control border border-secondary p-2 border border-dark' placeholder=' Password' id='password'  onChange={CompanyLoginForm.handleChange} value={CompanyLoginForm.values.password}/>&nbsp;
                    <input type="checkbox" className='mt-3 mb-3 p-2'  /><label className='mx-2' htmlFor="remember">Remember me</label>
                    <button className='btn btn-primary w-100 mb-2'>Login</button>&nbsp;
                    <GoogleOAuthProvider clientId="196496969029-n46m3397qmbsuar3boobrodpd45crveb.apps.googleusercontent.com">
                    <GoogleLogin 
                      onSuccess={credentialResponse => {
                        const decoded = jwtDecode(credentialResponse.credential);
                        console.log(decoded);
                        googleLogin(decoded)
                      }}
                      onError={() => {
                        console.log('Login Failed');
                      }}
                    />
                    </GoogleOAuthProvider>
                    <p className='text-center mt-3'>Don't Have an Account ?<Link className=" text-decoration-none  " to={'/CompanySignup'}> Sign Up</Link></p>

                    
                    </form> 
                </div>

            </div>
        </div>
        <div className='col-md-6 '>
          <img className='img-fluid'  src="https://img.freepik.com/premium-vector/illustration-cartoon-female-user-entering-login_241107-682.jpg" alt="" />

        </div>
    </div>
  )
}

export default CompanyLogin
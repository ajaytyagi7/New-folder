import { useFormik } from 'formik'
import { enqueueSnackbar } from 'notistack';
import React from 'react'
import { Link } from 'react-router-dom'
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import useUserContext from '../UserContext';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";


const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid Email').required('Password Require'),
  password: Yup.string().required('Password is Require').min(8, 'Password is too short'),
});




const Login = () => {

  const navigate = useNavigate();

  const { setuserloggedIn } = useUserContext();


  const loginForm = useFormik({

    initialValues: {

      email: "",
      password: "",
    },

    onSubmit: async (values) => {
      console.log(values);
      const res = await fetch(`${import.meta.env.VITE_API_URL}/user/authenticate`, {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const data = await res.json();
      if (res.status == 200) {
        enqueueSnackbar('Logged in Successfully', { variant: 'success' });

        sessionStorage.setItem('user', JSON.stringify(data));
        setuserloggedIn(true);
        const oldUrl = sessionStorage.getItem('oldUrl');
        console.log(oldUrl);
        if (oldUrl !== null) {
          navigate(oldUrl);
          sessionStorage.removeItem('oldUrl');
        } else {
          navigate('/')
        }
      } else if (res.status == 401) {
        enqueueSnackbar('Inavlid Email', { variant: 'error' });
      } else {
        enqueueSnackbar('Some thing went wrong', { variant: 'error' })
      }

    },
  });

  const googleLogin = async (credentialResponse) => {

    const emailRes = await fetch(`${import.meta.env.VITE_API_URL}/user/getbyemail/${credentialResponse.email}`);

    if (emailRes.status == 200) {

      const userData = await emailRes.json();
      enqueueSnackbar('Loggedin Successfully ', { variant: 'success' });
      sessionStorage.setItem('user', JSON.stringify(userData));
      setuserloggedIn(true);
      const oldUrl = sessionStorage.getItem('oldUrl');
      console.log(oldUrl);
      if (oldUrl !== null) {
        navigate(oldUrl);
        sessionStorage.removeItem('oldUrl');
      } else {
        navigate('/')
      }
    } else {

      const res = await fetch(`${import.meta.env.VITE_API_URL}/user/add`, {
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
        sessionStorage.setItem('user', JSON.stringify(data));
        setuserloggedIn(true);
        navigate('/')
      } else {
        enqueueSnackbar('Something went wrong', { variant: 'error' });
      }
    }

  }



  return (
    <div className='container-fluid row '>
      <div className='col-md-4 mx-auto py-5 '>
        <div className=' mt-3 login-card'>
          <div className='card-body  mt-2'>
            <form className='rounded p-4 bg-white shadow' onSubmit={loginForm.handleSubmit}>
              <h1 className='text-center fw-bold fs-1 '><i class="fa-solid fa-user"></i></h1>
              <hr />
              <span className='ms-4 fs-6 text-danger'>{loginForm.errors.email}</span>
              <input type="text" className='form-control border border-secondary p-2 border border-dark' placeholder=' Email Address' id='email' onChange={loginForm.handleChange} value={loginForm.values.email} />&nbsp;

              <span className='ms-4 fs-6 text-danger'>{loginForm.errors.password}</span>
              <input type="password" className='form-control border border-secondary p-2 border border-dark' placeholder=' Password' id='password' onChange={loginForm.handleChange} value={loginForm.values.password} />&nbsp;
              <input type="checkbox" className='mt-3 mb-3 mx-2 p-2' /><label className='' htmlFor="remember">Remember me</label>
              <button className='btn btn-primary w-100'>Login</button>&nbsp;<hr />
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
              <p className='text-center mt-3'>Don't Have an Account ?  <a className=" text-decoration-none" href="/Signup">Signup</a></p>




            </form>
          </div>

        </div>
      </div>
      <div className='col-md-5 '>
        <img className='img-fluid ' src="https://img.freepik.com/free-vector/forgot-password-concept-illustration_114360-1095.jpg?t=st=1709443939~exp=1709447539~hmac=b4037b99ac762b610ac2f67cc5d867ec98724441471dbee122cc20de9260eb9f&w=740" alt="" />

      </div>
    </div>
  )
}

export default Login
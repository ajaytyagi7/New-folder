import React from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { enqueueSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom'
import { GoogleOAuthProvider,GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useCompanyContext } from '../CompanyContext';

const CompanySignupSchema = Yup.object().shape({
  owner: Yup.string().required('Name is Required ').min(4, 'Name is too short'),
  name: Yup.string().required('Name is Required ').min(4, 'Name is too short'),
  email: Yup.string().email('Invalid email').required(' Email is Required'),
  password: Yup.string().required('Password id Required').min(8, 'Password is too short')
    .matches(/[a-z]/, 'Password must include Lowercase letter')
    .matches(/[A-Z]/, 'Password must include uppercase letter')
    .matches(/\W/, 'Password must include Number'),
  confirm: Yup.string().oneOf([Yup.ref('password')], null, 'Confirm Passwords must match ').required('Confirm Password is required')

});


const CompanySignup = () => {

  const navigate = useNavigate();
  const { setCompanyLoggedin } = useCompanyContext();


    const CompanySignup = useFormik({
        initialValues: {
        owner:'',
          name: '',
          email: '',
          password: '',
          confirm: '',
    
        },
    
        onSubmit: async (values, { setSubmitting }) => {
          console.log(values);
    
          const res = await fetch(`${import.meta.env.VITE_API_URL}/company/add`, {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
              'Content-Type': 'application/json'
            }
          });
     
          setSubmitting(false)
          console.log(res.status);
    
          if (res.status == 200) {
            enqueueSnackbar('Register Successfully ', { variant: 'success' });
            navigate('/CompanyLogin');
          } else {
            enqueueSnackbar('Something went wrong', { variant: 'error' });
    
          }
    
    
    
        },
        validationSchema: CompanySignupSchema
      }
      );

      const googleSignup= async (credentialResponse) => {

        const emailRes = await fetch(`${import.meta.env.VITE_API_URL}/company/getbyemail/${credentialResponse.email}`);
    
        if (emailRes.status == 200) {
    
          const userData = await emailRes.json();
          enqueueSnackbar('Signup Successfully ', { variant: 'success' });
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
    <div className='container-fluid row  mx-5 '>
        <div className='col-md-5 mx-auto py-1'>
            
                <div className='card-body p-2 '>
                    <form className='rounded p-3 bg-white shadow ' onSubmit={CompanySignup.handleSubmit}>
                        <h1 className='text-center fw-bold'>Resgistration</h1>
                  
                        <span className='ms-4 fs-6 text-danger'>{ CompanySignup.touched.owner && CompanySignup.errors.owner}</span>
                        <input type="text" className='form-control  border border-secondary p-2  border border-dark '  placeholder=' Owner Name' id='owner' onChange={CompanySignup.handleChange} value={CompanySignup.values.owner} />&nbsp;

                        <span className='ms-4 fs-6 text-danger'>{ CompanySignup.touched.name && CompanySignup.errors.name}</span>
                        <input type="text" className='form-control  border border-secondary p-2 border border-dark '  placeholder=' Company Name' id='name' onChange={CompanySignup.handleChange} value={CompanySignup.values.name} />&nbsp;
                        
                        <span className='ms-4 fs-6 text-danger'>{ CompanySignup.touched.email && CompanySignup.errors.email}</span>
                        <input type="text" className='form-control  border border-secondary p-2  border border-dark'  placeholder='  Email Address' id='email' onChange={CompanySignup.handleChange} value={CompanySignup.values.email} />&nbsp;

                        <span className='ms-4 fs-6 text-danger'>{ CompanySignup.touched.password && CompanySignup.errors.password}</span>
                        <input type="password" className='form-control  border border-secondary p-2 border border-dark '  placeholder=' Password ' id='password' onChange={CompanySignup.handleChange} value={CompanySignup.values.password} />&nbsp;

                        <span className='ms-4 fs-6 text-danger'>{ CompanySignup.touched.confirm && CompanySignup.errors.confirm}</span>
                        <input type="password" className='form-control  border border-secondary p-2 border border-dark '  placeholder=' Confirm Password' id='confirm' onChange={CompanySignup.handleChange} value={CompanySignup.values.confirm} />&nbsp;

                        <button className='btn btn-primary w-100 mb-2' >Sign Up</button>
                        <GoogleOAuthProvider clientId="196496969029-n46m3397qmbsuar3boobrodpd45crveb.apps.googleusercontent.com">
                    <GoogleLogin 
                      onSuccess={credentialResponse => {
                        const decoded = jwtDecode(credentialResponse.credential);
                        console.log(decoded);
                        googleSignup(decoded);
                      }}
                      onError={() => {
                        console.log('Login Failed');
                      }}
                    />
                    </GoogleOAuthProvider>
                       <p className='text-center mt-3'>All Ready Have a Register ? <Link className='text-decoration-none' to={'/CompanyLogin'}> Log In</Link></p>

                    </form>

                </div>

            </div>

        
        <div className='col-md-6 py-5 container-fluid'>
          <img className='img-fluid'  src="https://static.vecteezy.com/system/resources/previews/003/689/226/non_2x/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg" alt="" />

        </div>
    </div>
  )
}

export default CompanySignup
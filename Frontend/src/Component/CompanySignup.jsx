import React from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { enqueueSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom'
import { GoogleOAuthProvider,GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

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
  return (
    <div className='container-fluid row  mx-5'>
        <div className='col-md-5 mx-auto py-3'>
            
                <div className='card-body p-4 '>
                    <form className='rounded p-4 bg-white shadow ' onSubmit={CompanySignup.handleSubmit}>
                        <h1 className='text-center fw-bold'>Resgistration</h1>
                        <hr />
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
                        <GoogleOAuthProvider clientId="675684362324-0ptp96dh2s0162qd0dbhdfepgmgc07n4.apps.googleusercontent.com">
                    <GoogleLogin 
                      onSuccess={credentialResponse => {
                        const decoded = jwtDecode(credentialResponse.credential);
                        console.log(decoded);
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

        
        <div className='col-md-6 py-5'>
          <img className='img-fluid'  src="https://media.istockphoto.com/id/1226932404/vector/password-login-verification-code-push-message-or-sms-for-2fa-authentication-notice-with.jpg?s=612x612&w=0&k=20&c=9RFrAYp-KJhWkCHx6ZS61YwQgUiPJNiIBVbJYtwSGx0=" alt="" />

        </div>
    </div>
  )
}

export default CompanySignup
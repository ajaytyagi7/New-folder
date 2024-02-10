import React from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { enqueueSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom'

const SignupSchema = Yup.object().shape({
  name: Yup.string().required('Name is Required ').min(4, 'Name is too short'),
  email: Yup.string().email('Invalid email').required(' Email is Required'),
  password: Yup.string().required('Password id Required').min(8, 'Password is too short')
    .matches(/[a-z]/, 'Password must include Lowercase letter')
    .matches(/[A-Z]/, 'Password must include uppercase letter')
    .matches(/\W/, 'Password must include Number'),
  confirm: Yup.string().oneOf([Yup.ref('password')], null, 'Confirm Passwords must match ').required('Confirm Password is required')

});

const Signup = () => {


  const navigate = useNavigate();

  const signupForm = useFormik({
    initialValues: {

      name: '',
      email: '',
      password: '',
      confirm: '',

    },

    onSubmit: async (values, { setSubmitting }) => {
      console.log(values);

      const res = await fetch('http://localhost:4000/user/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'content-Type': 'application/json'
        }
      });

      setSubmitting(false)
      console.log(res.status);

      if (res.status == 200) {
        enqueueSnackbar('Register primaryfully ', { variant: 'success' });
        navigate('/Login');
      } else {
        enqueueSnackbar('Something went wrong', { variant: 'error' });

      }



    },
    validationSchema: SignupSchema
  }
  );





   
  return (
    <div className='container-fluid employe-signup-bg-img text-white'>
        <div className='col-md-4 mx-auto py-5'>
            <div className=' rounded-3'>
                <div className='card-body p-4'>
                    <form onSubmit={signupForm.handleSubmit}  >
                        <h1 className='text-center fw-bold'>Create Account</h1>
                        <hr />
                        <span className='ms-4 fs-6 text-danger'>{ signupForm.touched.name && signupForm.errors.name}</span>
                        <input type="text" className='form-control'  style={{borderRadius:50}} placeholder='Enter Your Name' id='name' onChange={signupForm.handleChange} value={signupForm.values.name}/>&nbsp;

                        <span className='ms-4 fs-6 text-danger'>{ signupForm.touched.email && signupForm.errors.email}</span>
                         <input type="text" className='form-control'  style={{borderRadius:50}} placeholder='Enter Your Email' id='email'onChange={signupForm.handleChange} value={signupForm.values.email} />&nbsp;

                         <span className='ms-4 fs-6 text-danger'>{ signupForm.touched.password && signupForm.errors.password}</span>
                        <input type="text" className='form-control'  style={{borderRadius:50}} placeholder='Enter Password' id='password' onChange={signupForm.handleChange} value={signupForm.values.password}/>&nbsp;

                        <span className='ms-4 fs-6 text-danger'>{ signupForm.touched.confirm && signupForm.errors.confirm}</span>
                        <input type="text" className='form-control'  style={{borderRadius:50}} placeholder='Enter Confirm Password' id='confirm' onChange={signupForm.handleChange} value={signupForm.values.confirm}/>&nbsp;

                        <button className='btn btn-primary mt-3 w-100'  style={{borderRadius:50}}>Sign Up</button>&nbsp;

                        <button className='btn btn-light w-100'  style={{borderRadius:50}}>Sign Up With Google</button>
                        
                        <Link to={'/Login'} className='text-decoration-none text-white ' style={{marginLeft:100 }}>Already Have a Register ? Log In</Link>
                    </form>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Signup
import React from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { enqueueSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom'

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
    <div className='container-fluid company-signup-bg-img '>
        <div className='col-md-5 mx-auto py-3'>
            <div className='card'>
                <div className='card-body p-4'>
                    <form className='rounded p-4 bg-white ' onSubmit={CompanySignup.handleSubmit}>
                        <h1 className='text-center fw-bold'>Company Resgistration</h1>
                        <hr />
                        <span className='ms-4 fs-6 text-danger'>{ CompanySignup.touched.owner && CompanySignup.errors.owner}</span>
                        <input type="text" className='form-control  border border-secondary '  placeholder=' Owner Name' id='owner' onChange={CompanySignup.handleChange} value={CompanySignup.values.owner} />&nbsp;

                        <span className='ms-4 fs-6 text-danger'>{ CompanySignup.touched.name && CompanySignup.errors.name}</span>
                        <input type="text" className='form-control  border border-secondary'  placeholder=' Company Name' id='name' onChange={CompanySignup.handleChange} value={CompanySignup.values.name} />&nbsp;
                        
                        <span className='ms-4 fs-6 text-danger'>{ CompanySignup.touched.email && CompanySignup.errors.email}</span>
                        <input type="text" className='form-control  border border-secondary'  placeholder='  Email Address' id='email' onChange={CompanySignup.handleChange} value={CompanySignup.values.email} />&nbsp;

                        <span className='ms-4 fs-6 text-danger'>{ CompanySignup.touched.password && CompanySignup.errors.password}</span>
                        <input type="password" className='form-control  border border-secondary'  placeholder=' Password ' id='password' onChange={CompanySignup.handleChange} value={CompanySignup.values.password} />&nbsp;

                        <span className='ms-4 fs-6 text-danger'>{ CompanySignup.touched.confirm && CompanySignup.errors.confirm}</span>
                        <input type="password" className='form-control  border border-secondary'  placeholder=' Confirm Password' id='confirm' onChange={CompanySignup.handleChange} value={CompanySignup.values.confirm} />&nbsp;

                        <button className='btn btn-primary w-100 mb-2' >Sign Up</button>
                       <p>All Ready Have a Register ? <Link className='text-decoration-none' to={'/CompanyLogin'}> Log In</Link></p>

                    </form>

                </div>

            </div>

        </div>
    </div>
  )
}

export default CompanySignup
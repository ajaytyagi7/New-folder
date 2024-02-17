import React from 'react'
import * as Yup from 'yup';
import {  useFormik } from 'formik';
import { enqueueSnackbar } from 'notistack';



const contactSchema=Yup.object().shape({
    name: Yup.string().required('Name is Required ').min(4, 'Name is too short'),
    email:Yup.string().email('Invalid Email').required('Email Require'),
    message:Yup.string().required('Message  is Require')
  });
  
  const Contact=() => {
  
    
  
  
  
  
    const contactForm=useFormik({
        initialValues:{
          name:'',
          email:'',
          message:'',
        },
        
        onSubmit: async(values,{setSubmitting}) =>{
          console.log(values)
          const res=await fetch(`${import.meta.env.VITE_API_URL}/contact/add`,{
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
              'Content-Type': 'application/json'
            }
          });

          setSubmitting(false)
          console.log(res.status);
    
          if (res.status == 200) {
            enqueueSnackbar('Message Send Successfully ', { variant: 'success' });
            ('/CompanyLogin');
          } else {
            enqueueSnackbar('Something went wrong', { variant: 'error' });
    
          }

    },
    validationSchema:contactSchema
  
    });

  return (
    <div className='container-fluid  bg-secondary'>
        <form className='w-50  mx-auto  mt-4 ' onSubmit={contactForm.handleSubmit}>
            <div className='col-md-8 mx-auto py-5'>
                <div className='card-body p-3'>
                    <h1 className='text-center  fw-bold'>Contact Us</h1> <hr className='text-white' />
                     <span className='ms-4 fs-6 text-danger'>{  contactForm.errors.name}</span>
                    <input type="text" id='name' className='form-control ' placeholder='Enter Your Name' onChange={contactForm.handleChange} value={contactForm.values.name} />
                    <span className='ms-4 fs-6 text-danger'>{  contactForm.errors.email}</span>
                    <input type="text" id='email' className='form-control ' placeholder='Enter Your Email' onChange={contactForm.handleChange} value={contactForm.values.email}/>
                    <span className='ms-4 fs-6 text-danger'>{  contactForm.errors.message}</span>
                   <textarea id="message" className="form-control w-100  bg-white-subtle" placeholder="Write your message here..." onChange={contactForm.handleChange} value={contactForm.values.message}></textarea>
                    <button className='btn btn-primary w-100 mt-4 '>Send Message</button>
                    <p className='fw-bold text-white text-center mt-3'>Contact No- 📞 1800-654-123</p>

                    
                </div>
            </div>
        </form>
    </div>
  )
}

export default Contact
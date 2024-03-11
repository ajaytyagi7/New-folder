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
    <div className='container-fluid row mb-5'>
      <div className='col-md-5 mx-auto py-3'>
        <form className='  mx-auto  mt-4 bg-white  shadow mt-5' onSubmit={contactForm.handleSubmit}>
            
                <div className='card-body p-3'>
                    <h1 className='text-center  fw-bold'>Contact Us</h1> <hr  />
                     <span className='ms-4 fs-6 text-danger'>{  contactForm.errors.name}</span>
                    <input type="text" id='name' className='form-control ' placeholder='Enter Your Name' onChange={contactForm.handleChange} value={contactForm.values.name} />
                    <span className='ms-4 fs-6 text-danger'>{  contactForm.errors.email}</span>
                    <input type="text" id='email' className='form-control ' placeholder='Enter Your Email' onChange={contactForm.handleChange} value={contactForm.values.email}/>
                    <span className='ms-4 fs-6 text-danger'>{  contactForm.errors.message}</span>
                   <textarea id="message" className="form-control w-100  bg-white-subtle" placeholder="Write your message here..." onChange={contactForm.handleChange} value={contactForm.values.message}></textarea>
                    <button className='btn btn-primary w-100 mt-4 '>Send Message</button>
                    <p className='fw-bold text-center mt-3'>Contact No- 📞 1800-654-123</p>

                    
                </div>
            
        </form>
        </div>
        <div className='col-md-6 py-5'>
          <img className='img-fluid'  src="https://media.istockphoto.com/id/1396231491/vector/writing-letters-concept.jpg?s=612x612&w=0&k=20&c=gjDeKxJarOyushiS7dXHUwB4am4Ix3RP7dCGp9h6G4o=" alt="" />

        </div>
       
    </div>
  )
}

export default Contact
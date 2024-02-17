import { useFormik } from 'formik'
import { enqueueSnackbar } from 'notistack'
import React, { useState } from 'react'
import * as Yup from 'yup';

const JobPostSchema=Yup.object().shape({
    title:Yup.string().required('Title is Require'),
   
});




const JobPost = () => {

    const [currentCompany, setCurrentCompany] = useState(JSON.parse(sessionStorage.getItem('company')));

    const JobPostForm=useFormik({
        initialValues:{
            title:'',
            name:'',
            address:'',
            salary:'',
            description:'',
            experience:'',
            company:currentCompany._id,

        },

        onSubmit:async(value)=>{
            console.log(value)
            const res=await fetch(`${import.meta.env.VITE_API_URL}/job/add`,{
                method:'POST',
                body:JSON.stringify(value),
                headers:{
                    'Content-type':'application/json'
                }
            });

            const data=await res.json();
            if(res.status==200){
                enqueueSnackbar('Job Post Successfully',{variant:'success'})
            } else if(res.status==401){
                enqueueSnackbar('Invalid Post ',{variant:'error'})
            }else{
                enqueueSnackbar('Something went wrong',{variant:'error'})
            }

            

        },

        validationSchema:JobPostSchema
    });
  return (
    <div className='container-fluid  bg-secondary'>
        <div className='col-md-6 mx-auto py-5'>
            <div className='card'>
                <div className='card-body'>
                    <form className='rounded  p-4 bg-white' onSubmit={JobPostForm.handleSubmit} >
                        <h1 className='text-center fw-bold'>Post Job</h1> <hr className='text-white' /><hr />
                        <label htmlFor="title">Job Title</label>
                         <span className='ms-4 fs-6 text-danger'>{  JobPostForm.errors.email}</span>
                         <input type="text" className='form-control mb-3 border border-secondary' id='title' onChange={JobPostForm.handleChange} value={JobPostForm.values.title} />

                        <label htmlFor="name">Enter Company Name</label>
                        <span className='ms-4 fs-6 text-danger'>{  JobPostForm.errors.email}</span>
                         <input type="text" className='form-control mb-3  border border-secondary' id='name' onChange={JobPostForm.handleChange} value={JobPostForm.values.name} />

                        <label htmlFor="address"> Enter Address</label>
                         <span className='ms-4 fs-6 text-danger'>{  JobPostForm.errors.email}</span>
                        <input type="text" className='form-control mb-3 border border-secondary' id='address' onChange={JobPostForm.handleChange} value={JobPostForm.values.address} />

                        <label htmlFor="salary">Enter Salary</label>
                         <span className='ms-4 fs-6 text-danger'>{  JobPostForm.errors.email}</span>
                        <input type="text" className='form-control mb-3 border border-secondary' id='salary' onChange={JobPostForm.handleChange} value={JobPostForm.values.salary} />
                        
                        <label htmlFor="salary">Enter experience</label>
                         <span className='ms-4 fs-6 text-danger'>{  JobPostForm.errors.experience}</span>
                        <input type="text" className='form-control mb-3 border border-secondary' id='experience' onChange={JobPostForm.handleChange} value={JobPostForm.values.experience} />
                        
                        <label htmlFor="skill">Enter Skill</label>
                        <span className='ms-4 fs-6 text-danger'>{  JobPostForm.errors.skill}</span>
                        <input type="text" className='form-control mb-3 border border-secondary' id='skill' onChange={JobPostForm.handleChange} value={JobPostForm.values.skill} />

                        <label htmlFor="education">Enter Education</label>
                        <span className='ms-4 fs-6 text-danger'>{  JobPostForm.errors.education}</span>
                        <input type="text" className='form-control mb-3 border border-secondary' id='education' onChange={JobPostForm.handleChange} value={JobPostForm.values.education} />

                        <label htmlFor="jobtype">Enter Job Type</label>
                        <span className='ms-4 fs-6 text-danger'>{  JobPostForm.errors.jobtype}</span>
                        <select className='form-control mb-3 border border-secondary' id="jobtype" onChange={JobPostForm.handleChange}value={JobPostForm.values.jobtype}>
                             <option >
                                
                            </option>
                            <option >
                                Full Time
                            </option>
                            <option >
                                Part Time
                            </option>
                            <option >
                                Work From Home
                            </option>
                        </select >

                        <label htmlFor="benefits">Enter Benefits</label>
                        <span className='ms-4 fs-6 text-danger'>{  JobPostForm.errors.benefits}</span>
                        <input type="text" className='form-control mb-3 border border-secondary' id='benefits' onChange={JobPostForm.handleChange} value={JobPostForm.values.benefits} />

                        <label htmlFor="description">Enter Description</label>
                        <span className='ms-4 fs-6 text-danger'>{  JobPostForm.errors.email}</span>
                         <textarea id="description" className="form-control w-100  bg-white-subtle  border border-secondary" rows="4" cols="50" onChange={JobPostForm.handleChange} value={JobPostForm.values.description}   ></textarea>

                        <button className='btn btn-primary w-100 mt-5'>Post Job</button>

                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default JobPost
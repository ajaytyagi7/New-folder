import { useFormik } from 'formik'
import { enqueueSnackbar } from 'notistack'
import React, { useState } from 'react'
import * as Yup from 'yup';
import MDEditor from '@uiw/react-md-editor/nohighlight';

const JobPostSchema = Yup.object().shape({
    title: Yup.string().required('Title is Require'),

});





const JobPost = () => {

    const [desc, setDesc] = React.useState('');

    const [currentCompany, setCurrentCompany] = useState(JSON.parse(sessionStorage.getItem('company')));

    const JobPostForm = useFormik({
        initialValues: {
            title: '',
            name: '',
            address: '',
            salary: '',
            description: '',
            experience: '',
            company: currentCompany._id,

        },

        onSubmit: async (value) => {
            value.description = desc;
            console.log(value)
            const res = await fetch(`${import.meta.env.VITE_API_URL}/job/add`, {
                method: 'POST',
                body: JSON.stringify(value),
                headers: {
                    'Content-type': 'application/json'
                }
            });

            const data = await res.json();
            if (res.status == 200) {
                enqueueSnackbar('Job Post Successfully', { variant: 'success' })
            } else if (res.status == 401) {
                enqueueSnackbar('Invalid Post ', { variant: 'error' })
            } else {
                enqueueSnackbar('Something went wrong', { variant: 'error' })
            }



        },

        validationSchema: JobPostSchema
    });
    return (
        <div className='container-fluid  mb-5 '>
            <div className='row'>
                <div className='col-md-7 mx-auto py-2 mt-4'>
                    <div className=''>
                        <div className='card-body'>
                            <form className='rounded bg-white shadow   p-4 bg-white' onSubmit={JobPostForm.handleSubmit} >
                                <h1 className='text-center fw-bold'>Post Job</h1> <hr className='text-white' /><hr />
                                <span className='ms-4 fs-6 text-danger'>{JobPostForm.errors.email}</span>
                                <input type="text" className='form-control mb-3 border border-secondary p-3' placeholder='Job Title' id='title' onChange={JobPostForm.handleChange} value={JobPostForm.values.title} />

                            
                                <span className='ms-4 fs-6 text-danger'>{JobPostForm.errors.email}</span>
                                <input type="text" className='form-control mb-3 border border-secondary p-3' placeholder='Enter Address' id='address' onChange={JobPostForm.handleChange} value={JobPostForm.values.address} />

                                <span className='ms-4 fs-6 text-danger'>{JobPostForm.errors.email}</span>
                                <input type="text" className='form-control mb-3 border border-secondary p-3'placeholder='Enter Salary' id='salary' onChange={JobPostForm.handleChange} value={JobPostForm.values.salary} />

                                <span className='ms-4 fs-6 text-danger'>{JobPostForm.errors.experience}</span>
                                <input type="text" className='form-control mb-3 border border-secondary p-3' placeholder='Enter experience' id='experience' onChange={JobPostForm.handleChange} value={JobPostForm.values.experience} />

                                <span className='ms-4 fs-6 text-danger'>{JobPostForm.errors.skill}</span>
                                <input type="text" className='form-control mb-3 border border-secondary p-3' placeholder='Enter Skill' id='skill' onChange={JobPostForm.handleChange} value={JobPostForm.values.skill} />

                                <span className='ms-4 fs-6 text-danger'>{JobPostForm.errors.education}</span>
                                <input type="text" className='form-control mb-3 border border-secondary p-3' placeholder='Enter Education' id='education' onChange={JobPostForm.handleChange} value={JobPostForm.values.education} />

                                <span className='ms-4 fs-6 text-danger'>{JobPostForm.errors.benefits}</span>
                                <input type="text" className='form-control mb-3 border border-secondary p-3' placeholder='Enter Benefits' id='benefits' onChange={JobPostForm.handleChange} value={JobPostForm.values.benefits} />
                                
                                <label htmlFor="jobtype">Job Type</label>
                                <span className='ms-4 fs-6 text-danger'>{JobPostForm.errors.jobtype}</span>
                                <select className='form-control mb-3 border border-secondary p-3' id="jobtype" onChange={JobPostForm.handleChange} value={JobPostForm.values.jobtype}>
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

                               

                                <label htmlFor="description">Description</label>
                                <span className='ms-4 fs-6 text-danger'>{JobPostForm.errors.email}</span>
                                <MDEditor
                                    value={desc}
                                    onChange={setDesc}
                                    plzceholder='Enter Description'
                                />


                                <button className='btn btn-primary w-100 mt-5'>Post Job</button>

                            </form>
                        </div>
                    </div>
                </div>
                <div className='col-md-5 mt-5'>
                    <img  className='img-fluid  bg-white' src="https://img.freepik.com/free-vector/businessman-choosing-options-computer_1262-19222.jpg?w=826&t=st=1708793959~exp=1708794559~hmac=4ef6d01b4810a2d3537a22b71aea36eaee1f487c300819648f85791f8a223000" alt="" />
                    <img className='img-fluid' src="https://img.freepik.com/free-vector/recruit-agent-analyzing-candidates_74855-4565.jpg?w=1060&t=st=1708794073~exp=1708794673~hmac=61f2255663f3b74311551f1d8dde8cce43b287336b8eb6ad16e7cb84719b91a2" alt="" />
                    <img className='img-fluid' src="https://img.freepik.com/premium-vector/human-resources-flat-style-illustration-design_538610-598.jpg?size=626&ext=jpg&ga=GA1.1.913293683.1703873181&semt=ais" alt="" />
                </div>
            </div>
           
        </div>
    )
}

export default JobPost
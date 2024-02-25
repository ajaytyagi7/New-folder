import MDEditor from '@uiw/react-md-editor/nohighlight';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const InterviewDetail = () => {

    const {id} = useParams();

    const [interviewData, setInterviewData] = useState(null)

    const getInterviewData=async() =>{
      const res= await fetch(`${import.meta.env.VITE_API_URL}/job/getbyid/`+id);
      console.log(res.status);

      const data=await res.json();
      console.log(data);
      setInterviewData(data);
    }

    useEffect(() =>{
      getInterviewData();
    },[])

    const displayDetails= () =>{
      if(interviewData !==null){
        return <div >
          <div className='container-fluid row'>
            <div className=' bg-dark-subtle p-4 mt-5 w-75 mx-auto '>
              <div className='row'>
                <div className='col-md-8 p-4'>
                    <div>
                      <h5 className='fw-bold'>{interviewData.title}</h5>
                      <p>{interviewData.company.name}</p>
                      <p>{interviewData.experience}</p>
                      <p><i class="fa-solid fa-location-dot"></i> {interviewData.address}</p>
                      <hr />
                      <Link to={'/EmployeApply'}><button className='btn btn-primary float-end '>Apply </button></Link>
                    </div>
                </div>
                <div className='col-md-4'>
                  <img className='img-fluid' src="https://cdni.iconscout.com/illustration/premium/thumb/searching-for-job-online-4487043-3738450.png" alt="" />
                </div>
              </div>
            </div>
            <div className='card bg-secondary-subtle mx-auto w-75 mt-3 mb-4 '>
              <div className='col-md-12 p-3 '>
                <div>
                  <h5>Job Details</h5><hr />
                  <h6 className='fw-bold'><i class="fa-regular fa-money-bill"></i> Pay</h6>
                  <div className='mx-3 bg-dark-subtle px-2 mb-4'style={{width:140}}>₹{interviewData.salary}</div>
                  <h6 className='fw-bold'><i class="fa-solid fa-briefcase"></i>Experience</h6>
                  <div className='mx-3 bg-dark-subtle px-2 mb-4'style={{width:80}}>{interviewData.experience}</div>
                  <h6 className='fw-bold'><i class="fa-solid fa-computer"></i> Job Type</h6>
                  <div className='mx-3 bg-dark-subtle px-2 mb-4'style={{width:80}}>{interviewData.jobtype}</div><hr />
                  <h5 >Benefits</h5>
                  <p>{interviewData.benefits}</p><hr />
                  <h5>Job Required</h5>
                  <h6 className='fw-bold'><i class="fa-solid fa-kitchen-set"></i> Skill</h6>
                  <div className='bg-darksubtle mx-3 mb-3'>{interviewData.skill}</div>
                  <h6 className='fw-bold'><i class="fa-solid fa-school"></i> Education</h6>
                  <div className='bg-darksubtle mx-3 '>{interviewData.education}</div><hr />

                  <h5>Job Description</h5>
                  <MDEditor.Markdown className='bg-secondary-subtle' source={interviewData.description} style={{ whiteSpace: 'pre-wrap' }} />
                </div>
              </div>
            </div>
                
          </div>
        </div>
      }
    }

  return (
    <div>
      <div className='container'>
        {displayDetails()}
      </div>
    </div>
  )
}

export default InterviewDetail;
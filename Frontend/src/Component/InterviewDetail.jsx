import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const InterviewDetail = () => {

    const {id} = useParams();

    const [interviewData, setInterviewData] = useState(null)

    const getInterviewData=async() =>{
      const res= await fetch('http://localhost:4000/job/getbyid/'+id);
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
        return <div  style={{ overflow: 'hidden' }}>
          <div className='container-fluid row'>
            <div className='card  mx-auto mt-5 '>
              <div className='col p-4'>
                <div>
                  <h5 className='fw-bold'>{interviewData.title}</h5>
                  <p>{interviewData.name}</p>
                  <p>{interviewData.experience}</p>
                  <p><i class="fa-solid fa-location-dot"></i> {interviewData.address}</p>
                  <hr />
                  <Link to={'/EmployeApply'}><button className='btn btn-primary float-end '>Apply Application</button></Link>
                </div>
              </div>
            </div>
            <div className='card mx-auto w-75 mt-3 '>
              <div className='col p-3 '>
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
                  <p>{interviewData.description}</p>
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
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

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
            <div className='card w-75 mx-auto mt-5 '>
              <div className='col p-4'>
                <div>
                  <h5>{interviewData.title}</h5>
                  <p>{interviewData.name}</p>
                  <p>{interviewData.experience}</p>
                  <p>{interviewData.address}</p>
                  <hr />
                  <button className='btn btn-primary float-end '>Apply Application</button>
                </div>
              </div>
            </div>
            <div className='card mx-auto w-75 mt-3 '>
              <div className='col p-3 '>
                <div>
                  <h4>Job Details</h4><hr />
                  <h6 className='fw-bold'>Pay</h6>
                  <div className='mx-3 bg-dark-subtle px-2 'style={{width:120}}>{interviewData.salary}</div>
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
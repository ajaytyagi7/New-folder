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
          <div className='container'>
            <div className='row'>
              <div className='col-md-9'>
                <div>
                  {interviewData.title}
                  {interviewData.name }
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    }

  return (
    <div>
     
    </div>
  )
}

export default InterviewDetail;
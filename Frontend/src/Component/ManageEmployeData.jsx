import React, { useEffect, useState } from 'react'

const ManageEmployeData = () => {

    const [interviewList, setInterviewList] = useState([])

    const fetchEmployeData=async() =>{
        const res=await fetch('http://localhost:4000/apply/getall/')
        console.log(res.status);

        const data= await res.json();
        console.log(data);
 
        setInterviewList(data);
    }

    useEffect(()=>{
        fetchEmployeData();
    },[]);

    const displayEmployeData=() =>{
        return <table className='table table-secondary'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Date Of Birth</th>
                    <th>Resume</th>
                </tr>
            </thead>
            <tbody>
                {
                    interviewList.map((interview ) =>{
                        return <tr>
                            <td>{interview.name}</td>
                            <td>{interview.email}</td>
                            <td>{interview.phone}</td>
                            <td>{interview.DOB}</td>
                            <td>{interview.resume}</td>
                            <td><button className='btn btn-danger' onClick={()=>deleteEmployeData(interview._id)}>Delete</button></td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    }
  return (
    <div className='container-fluid'>
        {displayEmployeData()}
    </div>
  )
}

export default ManageEmployeData
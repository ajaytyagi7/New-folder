import { enqueueSnackbar } from 'notistack'
import React, { useEffect,useState } from 'react'

const ManageInterviewData = () => {

    const [joblist, setJoblist] = useState([])

    const fetchInterviewData=async() =>{
        const res=await fetch('http://localhost:4000/job/getall')
        console.log(res.status);

        const data= await res.json();
        console.log(data);

        setJoblist(data);
    }
    useEffect(()=>{
        fetchInterviewData();
    },[]);

    const deleteInterviewData=async() =>{
            const res=await fetch('http://localhost:4000/job/delete/' +id,{method:'Delete'});
            console.log(res.status);
            if(res.status===200){
                enqueueSnackbar('Details Deleted Successfully',{variant:'success'});
            }
    }


    const displayManageInterviewData=() =>{
        return <table className='table table-secondary'>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Company Name</th>
                    <th>Address</th>
                    <th>Salary</th>
                    <th>Experience</th>
                    <th></th>

                </tr>
            </thead>
            <tbody>
                {
                    joblist.map((interview ) =>{
                        return <tr>
                            <td>{interview.title}</td>
                            <td>{interview.name}</td>
                            <td>{interview.address}</td>
                            <td>{interview.salary}</td>
                            <td>{interview.experience}</td>
                            <td>
                                <button className='btn btn-danger' onClick={() => { deleteInterviewData(interview._id) }}>Delete</button>
                            </td>

                        </tr>
                    })
                }
            </tbody>
        </table>
    }
  return (
    <div>
        <div className='container'>
            {displayManageInterviewData()}
        </div>
    </div>
  )
}

export default ManageInterviewData
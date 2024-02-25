import { enqueueSnackbar } from 'notistack'
import React, { useEffect,useState } from 'react'

const ManageInterviewData = () => {

    const [joblist, setJoblist] = useState([])
    const [currentCompany, setCurrentCompany] = useState(JSON.parse(sessionStorage.getItem('company')));

    const fetchInterviewData=async() =>{
        const res=await fetch(`${import.meta.env.VITE_API_URL}/job/getbycompany/`+currentCompany._id, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        });
        console.log(res.status);

        const data= await res.json();
        console.log(data);

        setJoblist(data);
    }
    useEffect(()=>{
        fetchInterviewData();
    },[]);

   const deleteInterviewData=async(id) =>{
        const res=await fetch(`${import.meta.env.VITE_API_URL}/job/delete/`+id,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            }
        });
        const data=await res.json();
        console.log(data);
        fetchInterviewData();
        if(res.status==200){
            enqueueSnackbar('Deleted Successfully',{variant:'success'});
        }else{
                enqueueSnackbar('Some thing went wrong',{variant:'error'})
            }
   }

   


    const displayManageInterviewData=() =>{
        return <table className='table table-secondary'>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Address</th>
                    <th>Salary</th>
                    <th>Experience</th>
                    <th>Skill</th>
                    <th>Education</th>
                    <th>Delete Data</th>


                </tr>
            </thead>
            <tbody>
                {
                    joblist.map((interview ) =>{
                        return <tr>
                            <td>{interview.title}</td>
                            <td>{interview.address}</td>
                            <td>{interview.salary}</td>
                            <td>{interview.experience}</td>
                            <td>{interview.skill}</td>
                            <td>{interview.education}</td>
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
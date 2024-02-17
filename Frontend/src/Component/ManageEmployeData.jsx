import React, { useEffect, useState } from 'react'

const ManageEmployeData = () => {

    const [interviewList, setInterviewList] = useState([])

    const fetchEmployeData=async() =>{
        const res=await fetch(`${import.meta.env.VITE_API_URL}/apply/getall/`)
        console.log(res.status);

        const data= await res.json();
        console.log(data);
 
        setInterviewList(data);
    }

    useEffect(()=>{
        fetchEmployeData();
    },[]);

    const deleteEmployeData=async(id) =>{
        const res=await fetch(`${import.meta.env.VITE_API_URL}/apply/delete/`+id,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            }
        });
        const data=await res.json();
        console.log(data);
        fetchEmployeData();

        if(res.status==200){
            enqueueSnackbar('Deleted Successfully',{variant:'success'});
        }else{
                enqueueSnackbar('Some thing went wrong',{variant:'error'})
            }
    }

    const displayEmployeData=() =>{
        return <table className='table table-secondary'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Date Of Birth</th>
                    <th>Resume</th>
                    <th>Delete Data</th>
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
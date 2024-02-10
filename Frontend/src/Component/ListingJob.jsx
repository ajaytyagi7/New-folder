import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ListingJob = () => {



  const [joblist, setJoblist] = useState([])

  const JobRole=['Web Developer','Frontend Developer','Backend Developer','Marketing','BPO','Full Stack Developer']
  const [RoleList, setRoleList] = useState([])

  const filterRole = (e) => {
    console.log(e.target.value);
    const filteredData = RoleList.filter((job) => { return job.price <= parseInt(e.target.value) });

    setProductList(filteredData)
  }

  const SelectJobRole=(e,JobRole) =>{
    console.log(e.target.checked);
    if(RoleList.includes(JobRole)){
      const filterJobRole=RoleList.filter((b) =>{return b !==JobRole});
      if(filterRole.length===0){
        setJoblist(RoleList);
      }else{
        const filterData=joblist.filter((job) =>{return filterJobRole.includes(job.JobRole)})
        setJoblist(filterJobRole)
      }
    }
  }


  const fetchjobData = async () => {
    const res = await fetch('http://localhost:4000/job/getall')
    console.log(res.status);

    const data = await res.json();
    console.table(data);

    setJoblist(data);
  }

  useEffect(() => {
    fetchjobData();
  }, [])




  return (
    <div className='container'>
      <div className='d-flex mt-3 w-50' style={{ position: 'relative', left: 400 }}>
        <input type="text" className='form-control' placeholder='Search job....' />
        <button className='btn btn-success'>Search</button>
      </div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-3'>
            <div className='card bg-secondary-subtle'>
              <div className='card-body'>
                <h4>Filter Job Role</h4>
                       {
                        JobRole.map((JobRole)=>{
                          return <div>
                            <input type="checkbox" checked={RoleList.includes(JobRole)} onChange={(e) =>{SelectJobRole(e,JobRole)}} />
                            <label className='mx-2'>{JobRole}</label>

                          </div>
                        })
                       }     
              </div>

            </div>
          </div>

          <div className='col-md-9 mt-3'>
            <div className='row gy-4'>
              {joblist.map((item) => {
                return (<div className='col-md-9  '>
                  <div className='card p-3  bg-dark-subtle'>
                    <h4>{item.title}</h4>
                    <p>{item.name}</p>
                    <p>→{item.address}</p>
                    <h6>₹ {item.salary}</h6>
                    <p>{item.experience}</p>
                   <p>{item.description}</p>
                    <Link to={"/detail/"+item._id}> <button className='btn btn-primary float-end'>View Details</button></Link>
                  </div>

                </div>)
              })}

            </div>

          </div>

        </div>

      </div>



    </div>
  )
}

export default ListingJob
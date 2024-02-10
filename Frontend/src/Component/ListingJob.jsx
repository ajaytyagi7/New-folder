import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const ListingJob = () => {



  const [joblist, setJoblist] = useState([])
  const [masterlist, setmasterlist] = useState([])
  const searchRef=useRef(null)

  const JobRole=['Web Developer','Frontend Developer','Backend Developer','Marketing','BPO','Full Stack Developer']
  const [RoleList, setRoleList] = useState([])

  const city=['Lucknow','Noida','Delhi','Gurugram','Banglore','Hydrabad']
  const [citylist, setCitylist] = useState([])

  const salary=['15000','20000','30000','250000','35000','40000','45000']
  const [salaryList, setSalaryList] = useState([]);

  const searchJob = () => {
    const filteredData = masterList.filter((role) => {
      return laptop.name.toLowerCase().includes(searchRef.current.value.toLowerCase())
    });
    console.log(filteredData);
    sethandicraftList(filteredData);
  }

  const filterRole = (e) => {
    console.log(e.target.value);
    const filteredData = RoleList.filter((job) => { return job.price <= parseInt(e.target.value) });

    setJoblist(filteredData)
  }

  const filtercity = (e) => {
    console.log(e.target.value);
    const filteredData = citylist.filter((c) => { return c.price <= parseInt(e.target.value) });

    setJoblist(filteredData)
  }

  const filtersalary = (e) => {
    console.log(e.target.value);
    const filteredData = salaryList.filter((s) => { return s.price <= parseInt(e.target.value) });

    setJoblist(filteredData)
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

  const SelectCity=(e,city) =>{
    console.log(e.target.checked);
    if(citylist.includes(city)){
      const filtercity=citylist.filter((b) =>{return b !==city});
      if(filtercity.length===0){
        setJoblist(citylist);
      }else{
        const filterData=joblist.filter((c) =>{return filtercity.includes(c.city)})
        setJoblist(filtercity)
      }
    }
  }

  const SelectSalary=(e,salary) =>{
    console.log(e.target.checked);
    if(salaryList.includes(salary)){
      const filtersalary=salaryList.filter((b) =>{return b !==salary});
      if(filtersalary.length===0){
        setJoblist(salaryList);
      }else{
        const filterData=joblist.filter((s) =>{return filtersalary.includes(s.salary)})
        setJoblist(filtersalary)
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
        <button className='btn btn-success'onPointerLeaveCapture={searchJob}>Search</button>
      </div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-3'>
            <div className='card bg-secondary-subtle'>
              <div className='card-body mt-3'>
                <h4>Filter Job Role</h4>
                       {
                        JobRole.map((JobRole)=>{
                          return <div>
                            <input type="checkbox" checked={RoleList.includes(JobRole)} onChange={(e) =>{SelectJobRole(e,JobRole)}} />
                            <label className='mx-2 '>{JobRole}</label>

                          </div>
                        })
                       } 
                       <hr />
                       <h4>Filter City</h4>  
                       {
                        city.map((city)=>{
                          return <div>
                            <input type="checkbox" checked={citylist.includes(city)} onChange={(e) =>{SelectCity(e,city)}} />
                            <label className='mx-2'>{city}</label>

                          </div>
                        })
                       }   
                        <hr />
                       <h4>Filter Salary</h4>  
                       {
                        salary.map((salary)=>{
                          return <div>
                            <input type="checkbox" checked={salaryList.includes(salary)} onChange={(e) =>{SelectSalary(e,salary)}} />
                            <label className='mx-2'>{salary}</label>

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
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';

import 'swiper/css';
import 'swiper/css/pagination';



import { Pagination, Autoplay } from 'swiper/modules';


const Home = () => {
  const [jobList, setjobList] = useState([])
  const searchRef = useRef(null);

  const searchProduct = () => {
    const filterData = [].filter((job) => {
      return job.name.toLowerCase().includes(searchRef.current.value.toLowerCase());
    });
    console.log(searchProduct)
    setjobList(filterData);
  }
  return (
    <div className='container-fluid'>
        <header className='text-white header row p-5'>
            <div className='col'> 
              <h1 className='  fw-bold 'style={{fontSize:120}}>Your Dream <br />
               Job is Waiting</h1>
               </div>
              <div className='row '>
                <div className='col'>
               <input type="text" className='form-control taxt-dark  ' placeholder='Job title or Company name 'ref={searchRef} />
               </div>
               <div className='col'>
               <input type="text" className='form-control taxt-dark ' placeholder='City or Region ' />
               </div>
               <div className='col'>
              <button className='btn btn-success' onClick={searchProduct}>Search </button>
              </div>
              </div>
        </header>
              
               
            

        <div className='container-fluid '>
            <div className='text-center  bg-secondary-subtle p-5 '>
              <h2 className='text-center fw-bold'>Off Campus Recuritement</h2>
              <h6 className='text-danger mt-4'>Welcome to ability JOBS</h6>
            <h1 className='text-center fw-bold'>Browse Top Catagories</h1>
            </div>
          </div> 

          <div className=' container text-center mt-4 overflow-hidden '>
            <div className='row gx-1 ' style={{gap:20}}>
              <div className='card col'>
                <img className='img-fluid' style={{height:200}}  src="https://img.freepik.com/premium-photo/hand-holding-silver-pen-against-grey-background-with-vignette_1134-82543.jpg?size=626&ext=jpg&ga=GA1.1.913293683.1703873181&semt=ais" alt="" />
                <h5 className='mt-2'>Design & Creative</h5>
              </div>
              <div className='card col'>
                <img className='img-fluid' style={{height:200}} src="https://img.freepik.com/free-photo/multiethnic-team-sharing-ideas-about-industrial-project-using-two-monitors-with-d-gears-metalic_482257-2641.jpg?size=626&ext=jpg&ga=GA1.1.913293683.1703873181&semt=ais" alt="" />
                <h5 className='mt-2'>Design & Development</h5>
              </div>
              <div className='card col '>
                <img className='img-fluid' style={{height:200}} src="https://img.freepik.com/free-photo/medium-shot-woman-working-laptop_23-2150323516.jpg?size=626&ext=jpg&ga=GA1.1.913293683.1703873181&semt=ais" alt="" />
                <h5 className='mt-2'>Web Development</h5>
              </div>
              <div className='card col '>
                <img className='img-fluid' style={{height:200}} src="https://img.freepik.com/free-photo/front-view-pretty-woman-showing-diagrams-working-office_140725-109240.jpg?size=626&ext=jpg&ga=GA1.1.913293683.1703873181&semt=ais" alt="" />
                <h5 className='mt-2'>Sales And Marketing</h5>
              </div>
            </div>
          </div>

          <div className='container text-center p-3'>
            <div className='row gy-3 '>
                <div className='card col bg-secondary-subtle  '>
                    <h1 className='home-campus fw-bold'> Crack Off Campus <br />
                       Inetview</h1>
                    <h4>" Join our dynamic team!  We're on the lookout for passionate individuals ready to make 
                      an impact. Off-campus hiring is now in full swing!  Explore exciting opportunities and take the next step in your career journey with us. Apply today! #Hiring #OffCampusRecruitment #CareerOpportunities #JoinOurTeam"</h4>
                    </div>
                <div className='col'>
                  <img className='img-fluid' style={{borderRadius:10}} src="https://img.freepik.com/free-photo/portrait-serious-executive-explaining-tasks-employee_1262-17994.jpg?size=626&ext=jpg&ga=GA1.1.913293683.1703873181&semt=ais" alt="" />
                </div>
            </div>

          </div>
          <div className='container p-4'>
              <div className=' row gx-6 '>
                  <div className='col'>
                    <img style={{height:100}} src="data:image/png;base64,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" alt="" />
                  </div>
                  <div className='col'>
                    <img style={{height:100}} src="data:image/png;base64,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" alt="" />
                  </div>
                  <div className='col'>
                    <img style={{height:100}} src="data:image/png;base64,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" alt="" />
                  </div>
                  <div className='col'>
                    <img style={{height:100}} src="data:image/png;base64,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" alt="" />
                  </div>
                
              </div>
            </div>

            <div className='container w-100 mt-4'>
              <img className='img-fluid' style={{width:1300,borderRadius:30}} src="https://www.apsanet.org/portals/54/images/Email%20Ad%20Banners%20(1).png?ver=2019-12-13-085645-130" alt="" />
            </div>

            <div className='container p-4 mt-4'style={{gap:20}}>
              <div className='row' style={{gap:20}}>
                <div className=' card col p-2 bg-warning-subtle'>
                  <h3 className='text-center'>No Aggregators or Backfilled Jobs </h3>
                  <p className=' text-center'>Job postings on abilityJOBS.com are here out of intention and commitment to hire job seekers with disabilities. Employers’ purposeful engagement supports their Affirmative Action goals.</p>
                </div>
                <div className=' card col p-2 bg-warning-subtle'>
                  <h3 className='text-center'>Largest Bank of Job Seekers </h3>
                  <p className='text-center'>abilityJOBS is the largest searchable resume bank of talented job seekers with disabilities. Recruiters can actively connect with potential candidates enhancing outreach efforts.</p>
                </div>
              </div>
            </div>
              <marquee behavior="scroll" direction="right" scrollamount="15"><h1 className='text-center mt-3 fw-bold'>Your Go-To Partner for Disability Employment</h1></marquee>

              <div className='container p-2 mt-3'>
                <div className='row  ' style={{gap:10}}>
                  <div className='card col bg-primary-subtle'style={{borderRadius:20}}>
                    <h4 className='text-center p-2'>Employers Looking to Hire</h4>
                    <p className='mt-3 text-center'>Whether you are looking to enrich your workforce with the most dedicated candidates or meet Sec. 503 OFCCP compliance for your Affirmative Action Plan, abilityJOBS can help.</p>
                  </div>
                  <div className='card col bg-primary-subtle' style={{borderRadius:20}}>
                    <h4 className='text-center p-2'>Job Seekers with Disabilities</h4>
                    <p className='mt-3 text-center'>Disabled talent is in high demand. abilityJOBS has thousands of great positions posted by employers who are preapproved and committed to hiring people with disabilities.</p>
                  </div>
                  <div className='card col bg-primary-subtle'style={{borderRadius:20}}>
                    <h4 className='text-center p-2'>Veterans with Disabilities</h4>
                    <p className='mt-3 text-center'>U.S. Veterans with disabilities bring extraordinary talent and experience to the workforce, and employers are noticing. Veterans are encouraged to join abilityJOBS and are reminded to indicate service on profiles and resumes. Employers are searching!</p>
                  </div>
                </div>
              </div>

            <div className='container py-2 'style={{gap:20}}>
              <h3 className='fw-bold'>We Are Supported By..</h3>
            <Swiper
        slidesPerView={5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        
        
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
                  <div>
                    <img style={{height:200}}  src="https://media.designrush.com/inspirations/520099/conversions/pluggy-logo-design-preview.jpg" alt="" />
                  </div>
        </SwiperSlide>
        <SwiperSlide>
                  <div>
                    <img style={{height:200}}  src="https://media.designrush.com/inspirations/129784/conversions/_1529666619_659_applephotos-preview_mobile.jpg" alt="" />
                  </div>
        </SwiperSlide>
        <SwiperSlide>
                  <div>
                    <img style={{height:200}}  src="https://media.designrush.com/inspiration_images/132868/conversions/_1511619525_610_Australian-design-radio-preview_mobile.jpg" alt="" />
                  </div>
        </SwiperSlide>
        <SwiperSlide>
                  <div>
                    <img style={{height:200}}  src="https://media.designrush.com/inspirations/129799/conversions/_1531834692_447_mapper-preview_mobile.jpg" alt="" />
                  </div>
        </SwiperSlide>
        <SwiperSlide>
                  <div>
                    <img style={{height:200}}  src="https://media.designrush.com/inspirations/129792/conversions/_1531237312_377_Postmates-Top-Logo-Design-preview_mobile.jpg" alt="" />
                  </div>
        </SwiperSlide>
        <SwiperSlide>
                  <div>
                    <img style={{height:200}}  src="https://static.wixstatic.com/media/72c0b2_6648e1f9b7ea4cdd9a748d832e241382~mv2.jpg" alt="" />
                  </div>
        </SwiperSlide>
        <SwiperSlide>
                  <div>
                    <img style={{height:200}} src="https://static.wixstatic.com/media/72c0b2_86dde6cc21f543b5beb30d9c68779614~mv2.jpg" alt="" />
                  </div>
        </SwiperSlide>
        <SwiperSlide>
                  <div>
                    <img style={{height:200}}  src="https://media.designrush.com/inspiration_images/134805/conversions/_1512076803_93_Nike-preview_mobile.jpg" alt="" />
                  </div>
        </SwiperSlide>
        </Swiper>
            </div>

          <div className='container p-4'>
              <div className='row'>
                <div className='  col'>
                    <img  src="https://img.freepik.com/free-photo/creative-people-working-office_23-2147656715.jpg?size=626&ext=jpg&ga=GA1.1.913293683.1703873181&semt=sph" alt="" />
                </div>
                <div className='col p-5'>
                    <h6 className=''>HOW WE WORK</h6>
                    <h1 className='fw-bold'>What is an employer for Generation?</h1>
                    <p>With our programs, we solve a wide range of employer challenges – skilled talent shortages, problems with on-the-job performance, reskilling needs, and higher turnover in important roles – with our unique approach and our determined graduates. 

                        We work with our employer partners to ensure they have access to this unique talent pipeline and can meet their entry-level hiring needs.</p>
                    <h4 className='fw-bold'>We Offer To Crack Off Campus Interview</h4>
                </div>
               
              </div>
          </div>
    </div>
  )
}

export default Home
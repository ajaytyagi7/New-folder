import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {fadeIn} from '../variants';

import 'swiper/css';
import 'swiper/css/pagination';



import { Pagination, Autoplay } from 'swiper/modules';


const Home = () => {
  const [jobList, setjobList] = useState([])
  const searchRef = useRef(null);
  const locationRef = useRef(null);

  const navigate = useNavigate();

  const searchProduct = () => {
    navigate(`/ListingJob/${searchRef.current.value}/${locationRef.current.value}`);
  }



  const searchLocation = () => {
    const filterData = [].filter((job) => {
      return job.address.toLowerCase().includes(searchRef.current.value.toLowerCase());
    });
    
    setjobList(filterData);
  }
  return (
    <div className='container-fluid'>
      <header className='text-white header p-5'>
        <div >
          <h1 className='  fw-bold display-1 focus-in-contract '>Your Dream <br />
            Job is Waiting</h1>
        </div>
        
          <div className='row mt-5'>
            <div className='col-md-4'>
              <input type="text" className='form-control taxt-dark border border-dark ' placeholder='Job title or Company name ' ref={searchRef} />
            </div>
            <div className='col-md-4'>
              <input type="text" className='form-control taxt-dark  border border-dark' placeholder='City or Region '  ref={locationRef}/>
            </div>
            <div className='col-md-4'>
              <button className='btn btn-success  border border-dark' onClick={searchProduct}>Search </button>
            </div>
          </div>
       
      </header>




      <motion.div
      variants={fadeIn('right',0.2)}
      initial='hidden'
      whileInView={"show"}
      viewport={{once:false,amount:0.7}}
       className='container-fluid '>
        <div className='text-center p-5 '>
          <h2 className='text-center fw-bold'>Off Campus Recuritement</h2>
          <h6 className='text-danger mt-4'>Welcome to ability JOBS</h6>
          <h1 className='text-center fw-bold'>Browse Top Catagories</h1>
        </div>
      </motion.div>

      <div className=' container text-center mt-4  '>
        <div className='row g-1' >
          <div className=' col-md-3 home-card'>
            <div className='shadow'>
              <div className='card-body'>
                <img className='img-fluid'  src="https://img.freepik.com/premium-photo/hand-holding-silver-pen-against-grey-background-with-vignette_1134-82543.jpg?size=626&ext=jpg&ga=GA1.1.913293683.1703873181&semt=ais" alt="" />
                <h5 className='mt-2'>Design & Creative</h5>
              </div>
            </div>
          </div>
          <div className=' col-md-3 home-card'>
            <div className='shadow'>

              <div className='card-body'>
                <img className='img-fluid'  src="https://img.freepik.com/free-photo/side-view-man-working-desk_23-2149930938.jpg?size=626&ext=jpg&ga=GA1.1.913293683.1703873181&semt=ais" alt="" />

                <h5 className='mt-2'>Design & Development</h5>
                </div>
            </div>
          </div>
          <div className=' col-md-3 home-card'>
          <div className='shadow'>

          <div className='card-body'>

            <img className='img-fluid'  src="https://img.freepik.com/free-photo/medium-shot-woman-working-laptop_23-2150323516.jpg?size=626&ext=jpg&ga=GA1.1.913293683.1703873181&semt=ais" alt="" />
            <h5 className='mt-2'>Web Development</h5>
            </div>
            </div>
          </div>
          <div className=' col-md-3 home-card'>
          <div className='shadow'>

          <div className='card-body'>

            <img className='img-fluid'  src="https://img.freepik.com/free-photo/front-view-pretty-woman-showing-diagrams-working-office_140725-109240.jpg?size=626&ext=jpg&ga=GA1.1.913293683.1703873181&semt=ais" alt="" />
            <h5 className='mt-2'>Sales And Marketing</h5>
            </div>
            </div>
          </div>
        </div>
        </div>

      <div className='container text-center p-3'>
        <div className='row gy-3 '>
          <div 
           
          className='card col-md-6 bg-secondary-subtle  '>
            <h1 className='home-campus fw-bold'> Crack Off Campus <br />
              Inertview</h1>
            <h4>" Join our dynamic team!  We're on the lookout for passionate individuals ready to make
              an impact. Off-campus hiring is now in full swing!  Explore exciting opportunities and take the next step in your career journey with us. Apply today! #Hiring #OffCampusRecruitment #CareerOpportunities #JoinOurTeam"</h4>
          </div>
          <div
          
          className='col-md-6'>
            <img className='img-fluid'  src="https://img.freepik.com/free-photo/portrait-serious-executive-explaining-tasks-employee_1262-17994.jpg?size=626&ext=jpg&ga=GA1.1.913293683.1703873181&semt=ais" alt="" />
          </div>
        </div>

      </div>

      <motion.div 
       variants={fadeIn('up',0.2)}
       initial='hidden'
       whileInView={"show"}
       viewport={{once:false,amount:0.7}}
      className='container p-4  '>
        <div className=' row  '>
          <div className='col-md-3'>
            <div className="card">
              <div className="card-body mx-auto">
               <img className="company-name"  src="data:image/png;base64,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" alt="" />
              </div>
            </div>
          </div>
          <div className='col-md-3'>
           <div className="card">
              <div className="card-body mx-auto">
            <img className="company-name" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRrY3nyW-wbG5iVm0ycxuNhiyWXeg5ZEEzCQ&usqp=CAU" alt="" />
              

              </div>
            </div>
          </div>
          <div className='col-md-3'>
          <div className="card">
              <div className="card-body mx-auto">
              <img className="company-name" src="data:image/png;base64,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" alt="" />
               
              </div>
            </div>
          </div>
          <div className='col-md-3'>
          <div className="card">
              <div className="card-body mx-auto">
            <img className="company-name" src="https://www.businessnewsdaily.com/_next/image?url=https%3A%2F%2Fimages.businessnewsdaily.com%2Fapp%2Fuploads%2F2022%2F08%2F01035726%2Fcontrolio1_logo.png&w=640&q=75" alt="" />
               
              </div>
            </div>
          </div>

        </div>
      </motion.div>

      <div className='container w-100 mt-4'>
        <img className='img-fluid' style={{ width: 1300, borderRadius: 30 }} src="https://www.apsanet.org/portals/54/images/Email%20Ad%20Banners%20(1).png?ver=2019-12-13-085645-130" alt="" />
      </div>

      <motion.div
       variants={fadeIn('left',0.2)}
       initial='hidden'
       whileInView={"show"}
       viewport={{once:false,amount:0.7}}
      className='container p-4 mt-4' style={{ gap: 20 }}>
        <div className='row' style={{ gap: 20 }}>
          <div className=' card col p-2 bg-warning-subtle'>
            <h3 className='text-center'>No Aggregators or Backfilled Jobs </h3>
            <p className=' text-center'>Job postings on abilityJOBS.com are here out of intention and commitment to hire job seekers with disabilities. Employers’ purposeful engagement supports their Affirmative Action goals.</p>
          </div>
          <div className=' card col p-2 bg-warning-subtle'>
            <h3 className='text-center'>Largest Bank of Job Seekers </h3>
            <p className='text-center'>abilityJOBS is the largest searchable resume bank of talented job seekers with disabilities. Recruiters can actively connect with potential candidates enhancing outreach efforts.</p>
          </div>
        </div>
      </motion.div>
      <marquee behavior="scroll" direction="right" scrollamount="15"><h1 className='text-center mt-3 fw-bold'>Your Go-To Partner for Disability Employment</h1></marquee>

      <motion.div 
       variants={fadeIn('right',0.2)}
       initial='hidden'
       whileInView={"show"}
       viewport={{once:false,amount:0.7}}
      className='container p-2 mt-3'>
        <div className='row  ' style={{ gap: 10 }}>
          <div className='card col bg-primary-subtle' style={{ borderRadius: 20 }}>
            <h4 className='text-center p-2'>Employers Looking to Hire</h4>
            <p className='mt-3 text-center'>Whether you are looking to enrich your workforce with the most dedicated candidates or meet Sec. 503 OFCCP compliance for your Affirmative Action Plan, abilityJOBS can help.</p>
          </div>
          <div className='card col bg-primary-subtle' style={{ borderRadius: 20 }}>
            <h4 className='text-center p-2'>Job Seekers with Disabilities</h4>
            <p className='mt-3 text-center'>Disabled talent is in high demand. abilityJOBS has thousands of great positions posted by employers who are preapproved and committed to hiring people with disabilities.</p>
          </div>
          <div className='card col bg-primary-subtle' style={{ borderRadius: 20 }}>
            <h4 className='text-center p-2'>Veterans with Disabilities</h4>
            <p className='mt-3 text-center'>U.S. Veterans with disabilities bring extraordinary talent and experience to the workforce, and employers are noticing. Veterans are encouraged to join abilityJOBS and are reminded to indicate service on profiles and resumes. Employers are searching!</p>
          </div>
        </div>
      </motion.div>

      <div className='container py-2 ' style={{ gap: 20 }}>
        <h3 className='fw-bold mt-5 mb-4'>We Are Supported By..</h3>
        <Swiper 
          slidesPerView={5}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            200: {
              slidesPerView: 1,
              spaceBetween: 30
            },
            550: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            750: {
              slidesPerView: 5,
              spaceBetween: 30
            },
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}


          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div>
              <img className="brand-icon" src="https://media.designrush.com/inspirations/520099/conversions/pluggy-logo-design-preview.jpg" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img className="brand-icon" src="https://media.designrush.com/inspirations/129784/conversions/_1529666619_659_applephotos-preview_mobile.jpg" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img className="brand-icon" src="https://media.designrush.com/inspiration_images/132868/conversions/_1511619525_610_Australian-design-radio-preview_mobile.jpg" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img className="brand-icon" src="https://media.designrush.com/inspirations/129799/conversions/_1531834692_447_mapper-preview_mobile.jpg" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img className="brand-icon" src="https://media.designrush.com/inspirations/129792/conversions/_1531237312_377_Postmates-Top-Logo-Design-preview_mobile.jpg" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img className="brand-icon" src="https://static.wixstatic.com/media/72c0b2_6648e1f9b7ea4cdd9a748d832e241382~mv2.jpg" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img className="brand-icon" src="https://static.wixstatic.com/media/72c0b2_86dde6cc21f543b5beb30d9c68779614~mv2.jpg" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img className="brand-icon" src="https://media.designrush.com/inspiration_images/134805/conversions/_1512076803_93_Nike-preview_mobile.jpg" alt="" />
            </div>
          </SwiperSlide>
          <br />
          <br />
        </Swiper>
      </div>

      <motion.div 
       variants={fadeIn('left',0.2)}
       initial='hidden'
       whileInView={"show"}
       viewport={{once:false,amount:0.7}}
      className='container p-4 mt-5'>
        <div className='row'>
          <div className='  col-md-6'>
            <img className='w-100' src="https://img.freepik.com/free-photo/creative-people-working-office_23-2147656715.jpg?size=626&ext=jpg&ga=GA1.1.913293683.1703873181&semt=sph" alt="" />
          </div>
          <div className='col-md-6 p-5'>
            <h6 className=''>HOW WE WORK</h6>
            <h1 className='fw-bold'>What is an employer for Generation?</h1>
            <p>With our programs, we solve a wide range of employer challenges – skilled talent shortages, problems with on-the-job performance, reskilling needs, and higher turnover in important roles – with our unique approach and our determined graduates.

              We work with our employer partners to ensure they have access to this unique talent pipeline and can meet their entry-level hiring needs.</p>
            <h4 className='fw-bold'>We Offer To Crack Off Campus Interview</h4>
          </div>

        </div>
      </motion.div>
    </div>
  )
}

export default Home
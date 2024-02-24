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
    
    setjobList(filterData);
  }
  const searchLocation = () => {
    const filterData = [].filter((job) => {
      return job.address.toLowerCase().includes(searchRef.current.value.toLowerCase());
    });
    
    setjobList(filterData);
  }
  return (
    <div className='container-fluid'>
      <header className='text-white header row p-5'>
        <div className='col'>
          <h1 className='  fw-bold display-1'>Your Dream <br />
            Job is Waiting</h1>
        </div>
        <div className='row '>
          <div className='col-md-4'>
            <input type="text" className='form-control taxt-dark  ' placeholder='Job title or Company name ' ref={searchRef} />
          </div>
          <div className='col-md-4'>
            <input type="text" className='form-control taxt-dark ' placeholder='City or Region '  ref={searchRef}/>
          </div>
          <div className='col-md-4'>
            <button className='btn btn-success' onClick={searchProduct} onClickCapture={searchLocation}>Search </button>
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
        <div className='row gx-1 ' style={{ gap: 20 }}>
          <div className='card col home-card'>
            <img className='img-fluid'  src="https://img.freepik.com/premium-photo/hand-holding-silver-pen-against-grey-background-with-vignette_1134-82543.jpg?size=626&ext=jpg&ga=GA1.1.913293683.1703873181&semt=ais" alt="" />
            <h5 className='mt-2'>Design & Creative</h5>
          </div>
          <div className='card col home-card'>
            <img className='img-fluid'  src="https://img.freepik.com/free-photo/side-view-man-working-desk_23-2149930938.jpg?size=626&ext=jpg&ga=GA1.1.913293683.1703873181&semt=ais" alt="" />
            <h5 className='mt-2'>Design & Development</h5>
          </div>
          <div className='card col home-card'>
            <img className='img-fluid'  src="https://img.freepik.com/free-photo/medium-shot-woman-working-laptop_23-2150323516.jpg?size=626&ext=jpg&ga=GA1.1.913293683.1703873181&semt=ais" alt="" />
            <h5 className='mt-2'>Web Development</h5>
          </div>
          <div className='card col home-card'>
            <img className='img-fluid'  src="https://img.freepik.com/free-photo/front-view-pretty-woman-showing-diagrams-working-office_140725-109240.jpg?size=626&ext=jpg&ga=GA1.1.913293683.1703873181&semt=ais" alt="" />
            <h5 className='mt-2'>Sales And Marketing</h5>
          </div>
        </div>
      </div>

      <div className='container text-center p-3'>
        <div className='row gy-3 '>
          <div className='card col-md-6 bg-secondary-subtle  '>
            <h1 className='home-campus fw-bold'> Crack Off Campus <br />
              Inetview</h1>
            <h4>" Join our dynamic team!  We're on the lookout for passionate individuals ready to make
              an impact. Off-campus hiring is now in full swing!  Explore exciting opportunities and take the next step in your career journey with us. Apply today! #Hiring #OffCampusRecruitment #CareerOpportunities #JoinOurTeam"</h4>
          </div>
          <div className='col-md-6'>
            <img className='img-fluid' style={{ borderRadius: 10 }} src="https://img.freepik.com/free-photo/portrait-serious-executive-explaining-tasks-employee_1262-17994.jpg?size=626&ext=jpg&ga=GA1.1.913293683.1703873181&semt=ais" alt="" />
          </div>
        </div>

      </div>
      <div className='container p-4'>
        <div className=' row gx-6 '>
          <div className='col'>
            <img className="company-name"  src="data:image/png;base64,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" alt="" />
          </div>
          <div className='col'>
            <img className="company-name" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRrY3nyW-wbG5iVm0ycxuNhiyWXeg5ZEEzCQ&usqp=CAU" alt="" />
          </div>
          <div className='col'>
            <img className="company-name" src="data:image/png;base64,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" alt="" />
          </div>
          <div className='col'>
            <img className="company-name" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSy0CAZBsxu-K_7sKiiJoNsr1PG2zFfl9gpsX12IfO4y_Z4z8WUAXepObVCrlcICjl7z8&usqp=CAU" alt="" />
          </div>

        </div>
      </div>

      <div className='container w-100 mt-4'>
        <img className='img-fluid' style={{ width: 1300, borderRadius: 30 }} src="https://www.apsanet.org/portals/54/images/Email%20Ad%20Banners%20(1).png?ver=2019-12-13-085645-130" alt="" />
      </div>

      <div className='container p-4 mt-4' style={{ gap: 20 }}>
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
      </div>
      <marquee behavior="scroll" direction="right" scrollamount="15"><h1 className='text-center mt-3 fw-bold'>Your Go-To Partner for Disability Employment</h1></marquee>

      <div className='container p-2 mt-3'>
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
      </div>

      <div className='container py-2 ' style={{ gap: 20 }}>
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
        </Swiper>
      </div>

      <div className='container p-4'>
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
      </div>
    </div>
  )
}

export default Home
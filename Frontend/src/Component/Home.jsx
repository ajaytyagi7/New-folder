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
          <h1 className='  fw-bold display-1'>Your Dream <br />
            Job is Waiting</h1>
        </div>
        <div className='row '>
          <div className='col-md-4'>
            <input type="text" className='form-control taxt-dark  ' placeholder='Job title or Company name ' ref={searchRef} />
          </div>
          <div className='col-md-4'>
            <input type="text" className='form-control taxt-dark ' placeholder='City or Region ' />
          </div>
          <div className='col-md-4'>
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
            <img className="company-name"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/2500px-Amazon_icon.svg.png" alt="" />
          </div>
          <div className='col'>
            <img className="company-name" src="data:image/png;base64,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" alt="" />
          </div>
          <div className='col'>
            <img className="company-name" src="" alt="" />
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
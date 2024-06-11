import React, { useState } from 'react';
import Navbar from "../component/Navbar-p";
import CustomInput from '../component/CustomInput'
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Footer from '../component/Footer'
import '../css/Careers.css'
// Initialization for ES Users
import { Input, initMDB } from 'mdb-ui-kit';


const Rent = () => {

  initMDB({ Input });
  return (
    <div>
      <Navbar></Navbar>
      <div className='container'>
  <div className='row mt-5 mb-5'>
    {/* <div className='col-md-1 '></div> */}
    <div className='col-12 col-md-7'>
      <p className='Careers-p'>
        The real estate market offers boundless job opportunities to make your career in it. Inside this sector, the property management jobs hold a lot of worth and progression chances. You can join HJ Real Estates to kickstart your career in various sectors of the real estate market.
      </p>
      <br />
      <p  className='Careers-p'>
        HJ Real Estates has made a remarkable presence felt in Dubai’s dynamic real estate sector. We are among the top recruiters from the real estate sector, having 100+ human resources working for us to deliver excellence and satisfaction. Also, we are actively looking for individuals who can contribute to taking HJ Real Estates’ brand success to new heights.
      </p>
      <br />
      <p  className='Careers-p'>
        We are looking for dedicated, ambitious, and passionate individuals with a keen interest in real estate to join our team and be part of our exciting journey.
      </p>
    </div>
    <div className='d-none d-md-block col-md-1'></div>
    <div className='col-12 col-md-3 mt-5'>
      <h4>Ready to take your real estate career to new heights?</h4>
      <p className='mt-3 Careers-p'>Speak with one of our team</p>
      <button
        type='button'
        className='btn btn-primary btn-rounded mt-3'
        style={{ backgroundColor: '#16248c' }}
        data-mdb-ripple-init
      >
        Submit your cv
      </button>
    </div>
    <div className='d-none d-md-block col-md-1'></div>
  </div>
  <br />
  <div className='row mt-5'>
    <div className='col-12'>
      <h1>Why Choose HJ Real Estates?</h1>
    </div>
    <div className='row mt-5'>
      <div className='col-12 col-sm-6 col-md-3'>
        <div className='' style={{ width: '100%', border: 'none' }}>
          <img
            src='https://hjrealestates.com/wp-content/uploads/2023/09/hj-real-estates-career-training.jpg'
            className='card-img-career'
            alt='...'
          />
          <div className='card-body'>
            <h4 className='card-title mt-3'>Training Excellence</h4>
            <p className='mt-1 Careers-p'>
              At HJ Real Estates, we offer professional training to our joinees. We train our team members investing time and effort to help them be the best in the real estate market.
            </p>
          </div>
        </div>
      </div>
      <div className='col-12 col-sm-6 col-md-3'>
        <div className='' style={{ width: '100%', border: 'none' }}>
          <img
            src='https://hjrealestates.com/wp-content/uploads/2023/09/hj-real-estates-career-culture.jpg'
            className='card-img-career'
            alt='...'
          />
          <div className='card-body'>
            <h4 className='card-title mt-3'>Work-life Balance</h4>
            <p className='mt-1 Careers-p'>
            At HJ Real Estates, we prioritize work-life balance. We create a mutual community for our team by organizing in-house cultural events to unwind and recharge. Enjoy career progression and empower yourself in a dynamic atmosphere.
            </p>
          </div>
        </div>
      </div>
      <div className='col-12 col-sm-6 col-md-3'>
        <div className='' style={{ width: '100%', border: 'none' }}>
          <img
            src='https://hjrealestates.com/wp-content/uploads/2023/09/hj-real-estates-career-incentives.jpg'
            className='card-img-career'
            alt='...'
          />
          <div className='card-body'>
            <h4 className='card-title mt-3'>Attractive Incentives</h4>
            <p className='mt-1 Careers-p'>
            HJ Real Estates offer incentive programs to our staff to encourage and reward them for their hard work and dedication. From performance bonuses to professional development opportunities, we empower our team to reach new heights.
            </p>
          </div>
        </div>
      </div>
      <div className='col-12 col-sm-6 col-md-3'>
        <div className='' style={{ width: '100%', border: 'none' }}>
          <img
            src='https://hjrealestates.com/wp-content/uploads/2023/09/hj-real-estates-career-commision.jpg'
            className='card-img-career'
            alt='...'
          />
          <div className='card-body'>
            <h4 className='card-title mt-3'>Competitive Commission Structure</h4>
            <p className='mt-1 Careers-p'>
            HJ Real Estates supports a forward-thinking approach with our dynamic profit-sharing model for our executives on achieving the set targets. Earn commission on prosperity you create.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br/>
  <div className='row mt-5'>
    <div className='col-md-2 col-sm-12 col-xs-12'>
      <h3>Be A Part of Growth</h3>
    </div>
    <div className='col-md-1 col-sm-12 col-xs-12'></div>
    <div className='col-md-9 col-sm-12 col-xs-12'>
      <p  className='Careers-p'>HJ Real Estates offers various real estate services, including sales, leasing, currency, property management, conveyancing, mortgage advice, 
        short-term rentals, and more. If you want a fulfilling career that rewards professional growth and good money, your search ends with us.</p>
        <p>HJ Real Estates values each team member as a cherished part of our extended family. We prioritize personality and expertise in our recruitment process, allowing you to deal with Dubai’s maximum properties at the best locations.</p>
    </div>
  </div>
  <br/>  <br/>
  <div className='row mt-5 shadow-sm' style={{borderRadius:"10px", border:"none"}}>
    <div className='col-md-12 mt-5'>
      <h4 className='text-center '>SEND RESUME</h4>
      <p className='text-center Careers-p'>Let Us Know About Your Experience With Us</p>
    </div>
    <div className='col-md-4 mt-4'>
          <CustomInput id="name" label="Enter Name" />
        </div>

        <div className='col-md-4 mt-4'>
          <CustomInput id="mobile" label="Mobile Number" />
        </div>

        <div className='col-md-4 mt-4'>
          <CustomInput id="email" label="Email Address" type="email" />
        </div>
    <div className='col-md-5'></div>
    <div className='col-md-3 mt-3' >
      {/* <label class="form-label" for="customFile" >Default file input example</label> */}
      <input type="file" className="custom-file-input" id="customFile" />
            <label className="custom-file-label" htmlFor="customFile">Choose file</label>
            &nbsp;
            <label className="mr-5" htmlFor="">no file selected</label>
</div>
<div className='col-md-4'></div>

<div className='col-md-12 mb-5 mt-5'>
<button type="button" class="btn btn-primary col-md-12"     style={{ backgroundColor: '#16248c' }} data-mdb-ripple-init>Submit</button>

</div>

  </div>
  <br/><br/>
</div>
<br/><br/>
   
      <Footer/>
    </div>
  );
};

export default Rent;

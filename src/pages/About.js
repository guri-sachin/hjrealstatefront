import React, { useState } from 'react';
import Navbar from "../component/Navbar-p";
import CustomInput from '../component/CustomInput'
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Footer from '../component/Footer'
import '../css/About.css'
import Assocaition from '../component/Assocaition'
import { Input, initMDB } from 'mdb-ui-kit';


const About = () => {

  initMDB({ Input });
  return (
    <div>
      <Navbar></Navbar>
      <br/>
      <div className='container about-padd'>
<div className='row mt-5'>
    <div className='col-md-3 col-6'>
        <img src='https://hjrealestates.com/wp-content/uploads/2023/08/hj-real-estates-our-about-burj-khalifa.jpg' alt='...' className='about-img'></img>
        </div>
        <div className='col-md-3 col-6 mt-5'>
        <img src='https://hjrealestates.com/wp-content/uploads/2023/08/hj-real-estates-our-story-sathbir-siingh-sachdeva.jpg' alt='...' className='about-img'></img>
    </div>
    <div className='col-md-6 col-12'>
   <h4 className='about-h'>Celebrating Over 14 Years in the Real Estate Industry
</h4>
<p className='mt-3'>At HJ Real Estates, our clients are at the core. This helped us gain the badge of being one of the most prominent real estate companies based in Dubai, with extensive 
experience spanning over 14 years. Whether you are a property owner, buyer, seller or tenant looking to rent property, we value your aspirations and business needs with 360-degree services for real estate deals.</p>

<p>5 Countries</p>
<p >500+ Property Sold</p> 
<p >250+ Real Estate Experts</p> 
<p>750M AED + Deals
</p>
<p className='mt-2'>—— Our success speaks through the statistics</p>
    </div>
</div>
</div>

<div className='mb-5 col-md-6 col-sm-12 col-xs-12'>
    <img src='https://hjrealestates.com/wp-content/uploads/2023/08/hj-real-estates-about-video-intro.jpg' alt='' className='about-img2'></img>
</div>

<div className='container' style={{padding:"30px"}}>
    <h2 className='text-center'>Our Vision and Mission</h2>
    <div className='row mt-3'>
        <div className='col-md-6'><p>At HJ Real Estates, we understand the value and challenges of property ownership or renting. Our experts are dedicated to guiding you with the right consultancy services 
            and buying and selling to ensure you make the right estate decisions. We have the vision of helping clients from the start to the end in handling real estate transactions of every size and complexity.</p></div>
        <div className='col-md-6'>
            <p>Dubai Real Estate’s future is among the brightest in this market. We manage and resolve all the challenges and complex transactions in this sector for clients so that they have complete satisfaction in their deals.</p>
            <p>Our mission is to guide our clients with the utmost care and respect so that every deal process stays transparent with all the parties involved.</p>
        </div>
    </div>
<br/>
    <div>
        <h2 className='text-center'>Our Expertise</h2>
        <div className='row mt-3'>
            <div className='col-md-12 text-center'>
            We believe in performances and not the promises to ensure a client’s success.
Fundamentally, we ensure the best negotiations for our clients so that our client wins the deal. We specialise in buying, selling, leasing, and property management of different types of properties, be it residential, offplan, ready to move-in or rental.
As property transactions involve lots of legal formalities, our experts cater to all the requirements in the most legitimate manner so that you enjoy the best real estate dealing experience in a hassle-free manner, right from selecting the properties to moving in or renting them.

            </div>
        </div>

    </div>
</div>
<div>
<div className='mb-5 col-md-12 col-sm-12 col-xs-12 mt-5 position-relative about-img-height'>
    <img src='https://hjrealestates.com/wp-content/uploads/2023/08/hj-real-estates-about-our-team-bg.jpg' alt='' className='about-img3'></img>
    <div className='about-overlay-images'>
        <div className='overlay-image'>
            <img src='https://hjrealestates.com/wp-content/uploads/2023/06/hj-real-estates-our-team-sathbir-siingh-sachdeva.jpg' alt='...' className='about-img121 overlay-img about-img-again'></img>
        </div>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <div className='overlay-image'>
            <img src='https://hjrealestates.com/wp-content/uploads/2023/08/hj-real-estates-our-story-jasbier-sachdeva.jpg' alt='...' className='about-img121 overlay-img about-img-again'></img>
        </div>
    </div>
</div>
<br></br>

<div className='mt-5'>
<Assocaition/>
</div>


</div>
      <Footer/>
    </div>
  );
};

export default About;

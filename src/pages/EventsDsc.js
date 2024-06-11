import React, { useState } from 'react';
import Navbar from "../component/Nav";
import Footer from '../component/Footer'


const Events = () => {

  return (
    <div>
      <Navbar></Navbar>
 <div class="col--md-12 mt-5">

<h1 className='text-center'>Upcoming Dubai Real Estate Event in Ghana</h1>

 </div>
 <div className='row mb-5'>
  <div className='col-md-1'></div>
  
  <div className='col-md-5 mt-5'>
  <img src='https://hjrealestates.com/wp-content/uploads/2024/05/hj-real-estates-event-in-ghana.webp' alt='' className='eventdsc-img'></img>
  </div>
  <div className='col-md-6 mt-5'>
    <p  className='mt-5'>Meet leading experts in Dubai real estate from June 22nd to 23rd, 2024, for personal advice sessions. Discover top investment and 
      living options in the UAE and <span style={{fontWeight:"bold"}}>get access to special offers that are only available at this event</span>.</p>

      <p className='mt-5'>Plus, there will be special deals on properties that you won’t find anywhere else! The event is completely free, but you do
         need to register in advance to secure your spot. Join us at the <span style={{fontWeight:"bold"}}>Dubai Real Estate Event in Ghana.</span> </p>
  </div>
 </div>
 <div className='row mb-5'>
 <div className='col-md-1'></div>
  <div className='col-md-5'>    <h1 className='mb-5'>Venue</h1> 
  <h4>The Leela Bhartiya City</h4>
  <p>Bhartiya City, Thanisandra Main Road, Hegde Nagar, Bengaluru – 560064</p>
  <button className='eventsdsc'>Get Direction</button>
  </div>
  <div className='col-md-1'>
    <h1 className='mb-5'>Organisers</h1>
  <img src='https://hjrealestates.com/wp-content/uploads/2024/02/hj-real-estates-director-jasbir-siingh-sachdeva-150x150.jpg' style={{borderRadius:"200px"}}></img>
</div>
  <div className='col-md-3 mt-5'>
  <h4 className='mt-5'>
Jasbier Siingh Sachdeva</h4>
<p >Director, HJ Real Estates</p>

  </div>

 </div>

 <div className='row'>
 <div className='col-md-1'></div>
  <div className='col-md-5'>
    <h4>Why should you attend this Dubai Property Expo?</h4>
    <p>Meet the Best Dubai developers under one roof</p>
    <p>Secure your booking with a minimal amount</p>
    <p>Explore hassle-free financing choices (Pay in cash, online, or in crypto)</p>
    <p>Enjoy 100% ownership of your property</p>
    <p>Flexible payment plans directly from the developer.</p>

    <p></p>
  </div>
  <div className='col-md-6'>
    <h4>Who needs to attend this Dubai Real Estate Event?</h4>
    <p>Individuals considering a move to the UAE.</p>
    <p>Investors seeking an annual passive income of up to 20%.</p>
    <p>Expatriates aiming to secure UAE residence visas for their families.</p>
    <p>Entrepreneurs interested in opening UAE bank accounts and minimizing taxes.</p>
  </div>

 </div>
      <Footer/>
    </div>
  );
};

export default Events;

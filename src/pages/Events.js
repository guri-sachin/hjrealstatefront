import React, { useState } from 'react';
import Navbar from "../component/Nav";
import Footer from '../component/Footer'


const Events = () => {

  return (
    <div>
      <Navbar></Navbar>
      <div style={{padding:"30px"}}>
    <div className='row mt-5' >
    <div className='col-md-1'></div>
<div className='col-md-4'>
    <h1>UPCOMING PROPERTY EVENTS</h1>
</div>
<div className='col-md-1'></div>
<div className='col-md-5'>
    <p>The HJ Real Estates events offer one-on-one consultations with top Dubai real estate experts, 
        take a closer look at the top UAE investment opportunities, and get access to a wide range of 
        truly exclusive deals that do not appear on the regular market.</p>
</div>
<div className='col-md-1'></div>
    </div>

    <div className='row mt-5'>
<div className='col-md-1'></div>
<div className='col-md-8'>1-12 of 14 results


</div>
<div className='col-md-2'><select class="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select></div>
    </div>
  
<div className='row mt-4 events-cards'>
<div className='col-md-3'>
             <div class=" "style={{ border:"none"}}>
  <img src="https://hjrealestates.com/wp-content/uploads/2024/01/hj-real-estates-blog-15-best-places-to-visit-in-dubai-1-1024x683.webp" class="card-img-events" alt="..."/>
  <div class="card-body">
  <br></br>

    <h5 class="card-title">Dubai Property Event in Raipur</h5>
    <br/>
    <p>8TH JUNE 2024 | 10AM - 8PM</p>
   
    <a href=''> Enquire Now</a>

  
  </div>
</div>
</div> 
<div className='col-md-3'>
             <div class=" "style={{width: "15rem", border:"none"}}>
  <img src="https://hjrealestates.com/wp-content/uploads/2024/01/hj-real-estates-blog-15-best-places-to-visit-in-dubai-1-1024x683.webp" class="card-img-events" alt="..."/>
  <div class="card-body">
  <br></br>

    <h5 class="card-title">Dubai Property Event in Raipur</h5>
    <br/>
    <p>8TH JUNE 2024 | 10AM - 8PM</p>
   
    <a href=''> Enquire Now</a>

  
  </div>
</div>
</div>  
<div className='col-md-3'>
             <div class=" "style={{width: "15rem", border:"none"}}>
  <img src="https://hjrealestates.com/wp-content/uploads/2024/01/hj-real-estates-blog-15-best-places-to-visit-in-dubai-1-1024x683.webp" class="card-img-events" alt="..."/>
  <div class="card-body">
  <br></br>

    <h5 class="card-title">Dubai Property Event in Raipur</h5>
    <br/>
    <p>8TH JUNE 2024 | 10AM - 8PM</p>
   
    <a href=''> Enquire Now</a>

  
  </div>
</div>
</div> 
<div className='col-md-3'>
             <div class=" "style={{width: "15rem", border:"none"}}>
  <img src="https://hjrealestates.com/wp-content/uploads/2024/01/hj-real-estates-blog-15-best-places-to-visit-in-dubai-1-1024x683.webp" class="card-img-events" alt="..."/>
  <div class="card-body">
  <br></br>

    <h5 class="card-title">Dubai Property Event in Raipur</h5>
    <br/>
    <p>8TH JUNE 2024 | 10AM - 8PM</p>
   
    <a href=''> Enquire Now</a>

  
  </div>
</div>
</div> 
</div>

    </div>
      <Footer/>
    </div>
  );
};

export default Events;

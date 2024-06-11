import React, { useState } from 'react';
import Navbar from "../component/Navbar-p";
import Footer from '../component/Footer'


const Mortgage = () => {

  return (
    <div>
      <Navbar></Navbar>
    
      <div class="container" style={{padding:"50px"}}>
        <div class="row">
      
          <div
            class="col-md-9 hide-scrollbar container"
            style={{ height: "600px", overflowY: "scroll" }}
          >
           
<p class="">Financial suggestions without sound knowledge and expertise are a loss-making decision, and when it comes to mortgages, it is wise to rely on experts’s advice. Home mortgage advice services also call for expert opinion
, and in Dubai, you can always rely on HJ Real Estates mortgage advisory support for free.</p>
<br/>
<p>We have been operative in Dubai for more than 14- years in the <span className='mort-span'>Dubai real estate</span>  market, and mortgage advisory is one of the services
     that we provide to our clients, educating them about the eligibility criteria, tenancy contracts, DEWA bills, bank documentation,
      work out the monthly payments,
     look out for better interest rates, down payment, and also giving them insight about using the <span className='mort-span'>mortgage calculator.</span></p>
 <br></br>

<p>HJ Real Estates prioritizes your needs, guides you through how mortgages in Dubai work, and is committed to 
    providing you with the exact mortgage advisory that you are looking for in Dubai, UAE.</p>
  <br/>

  <p>TSecuring mortgage approvals should be a simple process. As the best mortgage broker in Dubai, we aim to simplify the approval process, ensuring that the journey to securing a mortgage is straightforward and stress-free regardless of your property venture.</p>
  <br/>
<p>We adopt an approach to mortgage solutions, collaborating with an extensive network of lenders. Our commitment is to work in your best interests rather than ours, ensuring that the mortgage rates we secure in Dubai are tailored to optimize your financial well-being.


</p>
<br/>
<div className='col-md-12 mt-5 mb-5'>
      <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      How can I sell my properties in Dubai through HJ Real Estates?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        To sell with us, contact our sales specialist and schedule a meeting. Once you have been onboarded, we put you at ease at every point.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      What factors determine the market value of Dubai properties?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <p>It is determined by location, amenities available, social and health infrastructure, transport facilities, and more.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      How long does it typically take to sell your property in Dubai?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      On average, properties in high-demand areas may sell more quickly, while others might take longer. But we will work hard to sell your house in time.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      What fees and costs should I expect when selling my property?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      There is a fee associated with selling a property. Contact our team and have a detailed breakdown of the associated costs.      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Can I sell my property if it is currently rented to tenants?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Yes, you can sell a property with tenants. However, specific regulations apply. Existing lease terms, tenant rights, and proper communication are critical. Our team navigates these complexities, ensuring a smooth transition for you and the tenants.      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Can I sell my property if it is currently rented to tenants?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Yes, you can sell a property with tenants. However, specific regulations apply. Existing lease terms, tenant rights, and proper communication are critical. Our team navigates these complexities, ensuring a smooth transition for you and the tenants.      </div>
    </div>
  </div>
  
</div>
</div>
          </div>
          <div class="col-md-3">
            <br />
            <div className="footerloop-column blogs-column ">
          <img src="../img/banner.png" alt="Apartment Ad" />
        
        </div>
          </div>
      
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Mortgage;

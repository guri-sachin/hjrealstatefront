import React, { useState } from 'react';
import Nav from "./Nav";

import PhoneInput from 'react-phone-input-2';
// import 'react-phone-input-2/lib/style.css';
import Footer from './Footer'
import ImageGallery from "./ImageGallery";
import '../App.css';

const Rent = () => {
    const images = [
        '../img/g1.png',
        '../img/g2.png',
        '../img/g3.png',
        '../img/g5.png',
        '../img/g1.png',
    ];
    const [phone, setPhone] = useState('');
  return (
    <div>
      <Nav></Nav>
      <div class="container" style={{ marginTop: "80px", width: "100%" }}>
        <div class="row">
          <div class="col-md-8" style={{paddingLeft:"70px"}}>
            <h1 className="r2">
              Well-maintained Office for
              <br /> rent Al Barsha 1, Dubai
            </h1>

            <p className="r3">
              HJ Real Estates brings you a well-maintained vacant office for
              rent Al Barsha 1, Dubai. The <br /> office space followed the
              popular square layout with 2 parking’s to give you complete ease{" "}
              <br />
              and convenience. It has a chiller-free cooling system, so that you
              can reduce cost and start <br />
              the work the day you move in. The entire space is under CCTV
              surveillance.
            </p>
          </div>
          <div class="col-md-4" >
            <div class="r4">
              <button
                type="button"
                className="btn btn-primary r5"
                style={{ backgroundColor: "#006", borderRadius: "50px" }}
              >
                For Rent
              </button>
              <h4 className="r6">
                AED 110,000/Yearly
                <hr style={{ width: "237px" }} />
              </h4>
              <div class="row cctv">
                <div class="col-md-1 "></div>
                <div class="col-md-3 ">
                  {" "}
                  <i class="fa fa-camera" style={{ color: "#006" }}></i> CCTV
                </div>
                <div class="col-md-4">
                  <i class="fa fa-car" style={{ color: "#006" }}></i> Parking
                </div>
                <div class="col-md-3">
                  {" "}
                  <i class="fa fa-camera" style={{ color: "#006" }}></i> 900 sq
                  
                </div>
                <div class="col-md-1 "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div >
        
            <ImageGallery images={images} />
        </div>
      <div class="container" style={{paddingLeft:"55px"}}>
        <div class="row" style={{ height: "600px" }}>
          <div
            class="col-md-9 hide-scrollbar"
            style={{ height: "600px", overflowY: "scroll" }}
          >
            <div class="container">
              <h6 className='rent-h6'> KEY INFORMATION</h6><br/>
              <div class="row">
                <div class="col-sm">
                  <b>Property Type</b>
                  <br />
                                    <span className='rent-pp'>Office</span>

                </div>
                <div class="col-sm">
                  <b style={{
    fontSize: "14px",
    fontWeight: "600px"}}>Purpose</b>
                  <br />
                  <span className='rent-pp'>  For Rent</span>
                
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm">
                  <b>Area/Size</b>
                  <br />
                  <span className='rent-pp'>  980 sq. ft.</span>

                
                </div>
              </div>
              <hr />
              <br />
              <h6 className='rent-pp'>PROPERTY DESCRIPTION</h6>
              <p className='rent-pp'>
                HJ Real Estates presents you an independently fitted office for
                rent in Al Barsha, Dubai. You get a <br />
                complete electricity back-up if you rent this office space. The
                office has 2 parking’s available, <br />
                providing great ease and convenience to park your vehicles
                safely.
                <br />
              </p>

              <p>
                {" "}
                <b>Note:-</b>
                <span className='rent-pp'>
                We have Studio, 1 BR, 2 BR, 3 BR flats and Villas, Shops, Staff
                Accommodation, Retail Units <br />
                available in Mankhool, Karama, Bur Dubai, Oud Mehta, Sheikh
                Zayed Road, Satwa, Hudaiba, Jumeriah,
                <br /> Jaddaf, Deira and other areas of Dubai.</span>
                <br />
              </p>
              <br />
              <b >Property Features:</b><br/>
              <ul className='rent-pp'>
                <li>Unfurnished</li>
                <li>Square layout</li>
                <li>Vacant</li>
                <li>Partition</li>
                <li>Open for viewing</li>
                <li>2 Free parking’s</li>
                <li>Chiller free</li>
                <li>Attached toilet and pantry</li>
                <li>24*7 security</li>
                <li>CCTV</li>
                <li>Prayer room</li>
                <li>Concierge</li>
                <li>Free Maintenance</li>
                <li>Coffee shop on the ground floor</li>
              </ul>
              <br />
              <h6 style={{fontWeight:"bold"}}>About HJ Real Estates:</h6>

              <p >
                {" "}
                <b>HJ Real Estates</b> <span className='rent-pp'>is your top-notch destination if you are
                looking for exceptional ready-to-move, off <br />
                -plan, and rental properties in Dubai. We have been serving in
                India for more than 20 years and now
                <br /> we are introducing our clients worldwide towards the most
                exciting and profitable property
                <br /> developments in Dubai, UAE. We are headquartered in
                India, with fully operational branch offices in Dubai.
             
                </span>   <br />
              </p>

              <p className='rent-pp'>
                {" "}
                We have a wide range of homes that offer you a mixed combination
                of luxury and functionality,
                <br /> making sure that you find and land safely in your perfect
                living space without any fuss.
              </p>

              <p className='rent-pp'>
                No matter if you are scouting for a move-in-ready home or a
                flexible rental property, or an off-plan
                <br /> property, HJ Real Estates is your one-stop destination
                that simplifies your search funnel. Embark
                <br /> upon on your journey to discover the best home in Dubai
                with us. Our team’s dedication to <br />
                professionalism and customer satisfaction ensures an effortless
                experience. Our main priority is to
                <br /> make sure that you find your dream residence that meets
                and exceeds your expectations.
              </p>

              <br />
              <h6>Contact Us:</h6>

              <p className='rent-pp'>
                {" "}
                To book this property or for more details, please feel free to
                contact our RERA Certified Agent. <br /> <br />
                Abhishakta +971 58 132 6945 <br />
                Company name: HJ Real Estates <br />
                License No: 1099736 <br />
                Office phone no: +971 4326 2191 <br />
                Website: www.hjrealestates.com <br />
              </p>
              <br />
              <h6 className='rent-pp'>PROPERTY FACILITIES & AMENITIES</h6>
              <div class="container rent-pp">
                <div class="row">
                  <div class="col-sm">
                    <i class="fa fa-check-circle"></i> Electricity Back up{" "}
                    <br />
                    <i class="fa fa-check-circle"></i> Cafeteria or Canteen{" "}
                    <br />
                    <i class="fa fa-check-circle"></i> Waste Disposal <br />
                    <i class="fa fa-check-circle"></i> Conference room <br />
                    <i class="fa fa-check-circle"></i> Intercom <br />
                  </div>
                  <div class="col-sm">
                    <i class="fa fa-check-circle"></i> Centrally air-conditioned{" "}
                    <br />
                    <i class="fa fa-check-circle"></i> First aid medical center{" "}
                    <br />
                    <i class="fa fa-check-circle"></i> Maintenance staff <br />
                    <i class="fa fa-check-circle"></i> CCTV surveillance <br />
                  </div>
                  <div class="col-sm">
                    <i class="fa fa-check-circle"></i> Central Heating <br />
                    <i class="fa fa-check-circle"></i> Double glazed window{" "}
                    <br />
                    <i class="fa fa-check-circle"></i> Security staff <br />
                    <i class="fa fa-check-circle"></i> Broadband internet <br />
                  </div>
                </div>
              </div>
            </div>
            <br />
              <h6>Location</h6>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7225.485562274773!2d55.19528!3d25.110567!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b94ab31ca35%3A0x1d6c66f303155ccb!2sAl%20Barsha%20-%20Al%20Barsha%201%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1716031456362!5m2!1sen!2sus" width="800" height="400"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div class="col-md-3" style={{ height: "600px" }}>
            <br />
            <h4 style={{ margin: "5px",fontWeight:"600px" }}>Contact us for a visit</h4> <br />
            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                />
              </div>
              <br />
              <div className="form-group">
                {/* <IntlTelInput
                  containerClassName="intl-tel-input"
                  inputClassName="form-control"
                  initialCountry="in"
                  separateDialCode={true}
                /> */}
                   <PhoneInput
                
                className="phone-input"
      country={'us'}
      value={phone}
    
      onChange={phone => setPhone(phone)}
    />
              </div>
              <br />
              <button
                type="submit"
                className="btn btn-primary form-submit"
                style={{ backgroundColor: "#006" }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Rent;

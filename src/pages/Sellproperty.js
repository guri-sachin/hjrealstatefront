import React, { useState } from 'react';
import Navbar from "../component/Navbar-p";
import Footer from '../component/Footer';
import '../css/Sell.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PhoneInput from 'react-phone-input-2';

const Sellproperty = () => {
  const [phone, setPhone] = useState('');

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-5 mt-5">
            <img
              src="https://hjrealestates.com/wp-content/uploads/2023/09/hj-real-estates-sell-hero.jpg"
              className="sell-imgg"
              alt="Sell Hero"
            />
          </div>
          <div className="col-md-6 mt-5">
            <p className="mt-5">
              It can be difficult to sell your property at the best price if you don’t have the right knowledge about the Dubai real estate market. Our professional sales agents 
              have years of experience selling properties in Dubai and can guide you at every step. Our in-depth knowledge of the global and Dubai Real Estate markets is an added advantage of partnering with us. Trust us for an accurate property valuation that follows all the guidelines and 
              industry standards laid down by government authorities. Experience the difference in selling your properties in Dubai with us.
            </p>
            <h4 className="mt-4" style={{ color: "#2c378f" }}>
              HJ REAL ESTATES
            </h4>
            <div className="row">
              <div className="col-md-6">
                <h4>YOUR TRUSTED PARTNER AT YOUR SERVICE</h4>
              </div>
              <div className="col-md-6">
                <button
                  type="button"
                  className="btn-rounded sell-bntn2"
                  style={{ backgroundColor: "#2c378f", color: "white" }}
                >
                  Request Valuation
                </button>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="row sell-accon"> 
          <div className="col-md-12 col-sm-12">
            <h3 className="mt-5 text-center">We have a well-crafted and Meticulous strategy to sell your house</h3>
            <div className="row sell-card-m">
              {[
                {
                  img: 'https://hjrealestates.com/wp-content/uploads/2023/09/hj-real-estates-sell-property-valuation.png',
                  title: 'Property Valuation',
                  text: 'We know buyers search online for properties, so we use property portals to list available Dubai properties. As web portals are accessible to large audiences, we ensure our property listings are browseable at their convenience, resulting in faster sales at the best prices.'
                },
                {
                  img: 'https://hjrealestates.com/wp-content/uploads/2023/09/hj-real-estates-sell-marketing.png',
                  title: 'Property Valuation',
                  text: 'We know buyers search online for properties, so we use property portals to list available Dubai properties. As web portals are accessible to large audiences, we ensure our property listings are browseable at their convenience, resulting in faster sales at the best prices.'
                },
                {
                  img: 'https://hjrealestates.com/wp-content/uploads/2023/09/hj-real-estates-sell-offer.png',
                  title: 'Property Valuation',
                  text: 'We know buyers search online for properties, so we use property portals to list available Dubai properties. As web portals are accessible to large audiences, we ensure our property listings are browseable at their convenience, resulting in faster sales at the best prices.'
                },
                {
                  img: 'https://hjrealestates.com/wp-content/uploads/2023/09/hj-real-estates-sell-transfer-ownership.png',
                  title: 'Property Valuation',
                  text: 'We know buyers search online for properties, so we use property portals to list available Dubai properties. As web portals are accessible to large audiences, we ensure our property listings are browseable at their convenience, resulting in faster sales at the best prices.'
                }
              ].map((card, index) => (
                <div className="col-md-3" key={index}>
                  <div className="card mt-5 shadow mb-5" style={{ width: "17rem", border: "none" }}>
                    <div className="card-body">
                      <img src={card.img} alt={card.title} style={{ height: "64px", width: "64px" }} />
                      <h5 className="card-title">{card.title}</h5>
                      <p className="card-text">{card.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="row sell-icon">
          <div className="col-md-6">
            <h2 className="mt-4">Why Choose Us?</h2>
            <p className="mt-4">
              We have 14 years of experience in the Dubai real estate market. Our trained agents deliver first-class service for real estate deals. Choose HJ Real Estates to
              buy or sell your property in Dubai and experience our property management service. As property managers and brokers with a global presence, we have all the expertise related to real estate 
              contacts and are well-versed in all the neighborhoods in Dubai if you wish to buy a property here.
            </p>
            <p className="mt-4">
              Our large network of links with reputable architects, engineers, developers, and lawyers can help you find better properties and assist 
              with legal issues professionally. We’re your trusted partner with deep knowledge of the Dubai Real Estate market, so your property’s 
              success story begins with us. Contact us, and let’s embark on this journey together.
            </p>
            <button
              type="button"
              className="btn-rounded sell-bntn3"
              style={{ backgroundColor: "#2c378f", color: "white" }}
            >
              Request Valuation
            </button>
          </div>
          <div className="col-md-6">
            <img
              src="https://hjrealestates.com/wp-content/uploads/2023/09/hj-real-estates-sell-about-us.jpg"
              className="sell-img2"
              alt="About Us"
            />
          </div>
        </div>
        <div className="row mb-5 mt-5">
          <div className="col-md-12 mt-5 mb-5">
            <div className="accordion sell-accon" id="accordionExample">
              {[
                {
                  header: 'How can I sell my properties in Dubai through HJ Real Estates?',
                  body: 'To sell with us, contact our sales specialist and schedule a meeting. Once you have been onboarded, we put you at ease at every point.'
                },
                {
                  header: 'What factors determine the market value of Dubai properties?',
                  body: 'It is determined by location, amenities available, social and health infrastructure, transport facilities, and more.'
                },
                {
                  header: 'How long does it typically take to sell your property in Dubai?',
                  body: 'On average, properties in high-demand areas may sell more quickly, while others might take longer. But we will work hard to sell your house in time.'
                },
                {
                  header: 'What fees and costs should I expect when selling my property?',
                  body: 'There is a fee associated with selling a property. Contact our team and have a detailed breakdown of the associated costs.'
                },
                {
                  header: 'Can I sell my property if it is currently rented to tenants?',
                  body: 'Yes, you can sell a property with tenants. However, specific regulations apply. Existing lease terms, tenant rights, and proper communication are critical. Our team navigates these complexities, ensuring a smooth transition for you and the tenants.'
                }
              ].map((item, index) => (
                <div className="accordion-item" key={index}>
                  <h2 className="accordion-header" id={`heading${index}`}>
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${index}`}
                      aria-expanded={index === 0 ? "true" : "false"}
                      aria-controls={`collapse${index}`}
                    >
                      {item.header}
                    </button>
                  </h2>
                  <div
                    id={`collapse${index}`}
                    className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                    aria-labelledby={`heading${index}`}
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      {item.body}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-md-1"></div>
        <div className="col-md-4 mt-5">
          <img
            src="https://hjrealestates.com/wp-content/uploads/2023/09/hj-real-estates-sell-cta-768x768.jpg"
            className="sell-img2"
            alt="Buy Home"
          />
        </div>
        <div className="col-md-5 mt-5">
          <form>
            <h3>Request a Property Valuation</h3>
            <div className="row">
              <div className="col-md-6 mt-2">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                />
              </div>
              <div className="col-md-6 mt-2">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div className="col-md-6 mt-2">
                <label className="form-label">Mobile</label>
                <PhoneInput
                  country={'us'}
                  value={phone}
                  onChange={setPhone}
                  inputClass="form-control"
                />
              </div>
              <div className="col-md-6 mt-2">
                <label className="form-label">Property Type</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Property Type"
                />
              </div>
              <div className="col-md-12 mt-2">
                <label className="form-label">Message</label>
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="col-md-12 mt-2">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Sellproperty;

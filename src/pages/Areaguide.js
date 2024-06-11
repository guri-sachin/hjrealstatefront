import React from "react";
import Nav from "../component/Nav";
import Footer from "../component/Footer";
import "../css/Guide.css";
import { useNavigate } from 'react-router-dom';

const Areaguide = () => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/guide'); // Replace with your target route
  };

  return (
    <div>
      <Nav />
      <div className="container">
        <div className="row mt-5">
          <div className="col-12">
            <h1 className="areag-h1">Areas in Dubai</h1>
          </div>
        </div>
        <div className="row g">
          <div className="col-md-9 g1 hide-scrollbar">
            <div className="row">
              <div className="col-md-1 col-0"></div>
              <div className="col-md-5 col-12 mb-4">
                <div className="card" style={{border:"none"}} onClick={handleCardClick}>
                  <img src="https://hjrealestates.com/wp-content/uploads/2023/12/hj-real-estates-al-sufouh.webp" className="card-img-areaguide" alt="..."/>
                  <div className="card-body">
                    <br />
                    <a><h4>Al Sufouh</h4></a>
                    <h6 className="mt-3">Explore</h6>
                  </div>
                </div>
              </div>  
              <div className="col-md-5 col-12 mb-4">
                <div className="card" style={{border:"none"}}>
                  <img src="https://hjrealestates.com/wp-content/uploads/2024/04/hj-real-estates-area-guides-al-furjan-1024x698.webp" className="card-img-areaguide" alt="..."/>
                  <div className="card-body">
                    <br />
                    <a><h4>Al Sufouh</h4></a>
                    <h6 className="mt-3">Explore</h6>
                  </div>
                </div>
              </div>
            </div>
            <br/>
            <div className="row">
              <div className="col-md-1 col-0"></div>
              <div className="col-md-5 col-12 mb-4">
                <div className="card" style={{border:"none"}}>
                  <img src="https://hjrealestates.com/wp-content/uploads/2024/04/hj-real-estates-rashid-yachts-marina-1-1024x681.webp" className="card-img-areaguide" alt="..."/>
                  <div className="card-body">
                    <br />
                    <a><h4>Al Sufouh</h4></a>
                    <h6 className="mt-3">Explore</h6>
                  </div>
                </div>
              </div>  
              <div className="col-md-5 col-12 mb-4">
                <div className="card" style={{border:"none"}}>
                  <img src="https://hjrealestates.com/wp-content/uploads/2023/12/hj-real-estates-city-of-arabia-1024x683.webp" className="card-img-areaguide" alt="..."/>
                  <div className="card-body">
                    <br />
                    <a><h4>Al Sufouh</h4></a>
                    <h6 className="mt-3">Explore</h6>
                  </div>
                </div>
              </div>
            </div>
            <br/>
            <div className="row">
              <div className="col-md-1 col-0"></div>
              <div className="col-md-5 col-12 mb-4">
                <div className="card" style={{border:"none"}}>
                  <img src="https://hjrealestates.com/wp-content/uploads/2023/09/hj-real-estates-guides-the-valley-featured-image-1024x526.jpg" className="card-img-areaguide" alt="..."/>
                  <div className="card-body">
                    <br />
                    <a><h4>Al Sufouh</h4></a>
                    <h6 className="mt-3">Explore</h6>
                  </div>
                </div>
              </div>  
              <div className="col-md-5 col-12 mb-4">
                <div className="card" style={{border:"none"}}>
                  <img src="https://hjrealestates.com/wp-content/uploads/2023/11/hj-real-estates-guides-sobha-hartland-featured-1024x724.webp" className="card-img-areaguide" alt="..."/>
                  <div className="card-body">
                    <br />
                    <a><h4>Al Sufouh</h4></a>
                    <h6 className="mt-3">Explore</h6>
                  </div>
                </div>
              </div>
            </div>
            <br/>
            <div className="row">
              <div className="col-md-1 col-0"></div>
              <div className="col-md-5 col-12 mb-4">
                <div className="card" style={{border:"none"}}>
                  <img src="https://hjrealestates.com/wp-content/uploads/2024/04/hj-real-estates-guides-mrb-city-featured-image-1024x576.webp" className="card-img-areaguide" alt="..."/>
                  <div className="card-body">
                    <br />
                    <a><h4>Al Sufouh</h4></a>
                    <h6 className="mt-3">Explore</h6>
                  </div>
                </div>
              </div>  
              <div className="col-md-5 col-12 mb-4">
                <div className="card" style={{border:"none"}}>
                  <img src="https://hjrealestates.com/wp-content/uploads/2024/02/hj-real-estates-blogs-property-investment-in-dubai-1024x554.webp" className="card-img-areaguide" alt="..."/>
                  <div className="card-body">
                    <br />
                    <a><h4>Al Sufouh</h4></a>
                    <h6 className="mt-3">Explore</h6>
                  </div>
                </div>
              </div>
            </div>
            <br/>
            <div className="row">
              <div className="col-md-1 col-0"></div>
              <div className="col-md-5 col-12 mb-4">
                <div className="card" style={{border:"none"}}>
                  <img src="https://hjrealestates.com/wp-content/uploads/2024/02/hj-real-estates-blogs-property-investment-in-dubai-1024x554.webp" className="card-img-areaguide" alt="..."/>
                  <div className="card-body">
                    <br />
                    <a><h4>Al Sufouh</h4></a>
                    <h6 className="mt-3">Explore</h6>
                  </div>
                </div>
              </div>  
              <div className="col-md-5 col-12 mb-4">
                <div className="card" style={{border:"none"}}>
                  <img src="https://hjrealestates.com/wp-content/uploads/2023/11/hj-real-estates-area-guides-jumeirah-village-triangle.webp" className="card-img-areaguide" alt="..."/>
                  <div className="card-body">
                    <br />
                    <a><h4>Al Sufouh</h4></a>
                    <h6 className="mt-3">Explore</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 g2">
            <div className="banner2">
              <div className="contact-info">
                <button className="text">
                  {" "}
                  <i className="fa fa-phone"></i> +971 4326 2191
                </button>
                <button className="request-details">
                  {" "}
                  <i className="fa fa-envelope"></i> Request Details
                </button>
                <button className="whatsapp">
                  {" "}
                  <i className="fa fa-whatsapp"></i> Click to WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Areaguide;

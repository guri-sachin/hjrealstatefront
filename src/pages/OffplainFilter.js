import React, { useState } from "react";
import Nav from "../component/Nav";
import Footer from "../component/Footer";
import '../css/OffplanFilter.css'
import { width } from "@fortawesome/free-solid-svg-icons/fa0";

function OffplanFilter() {






  return (
    <div className="">
 <Nav/>
 
 <div className="row mb-5 mt-5 offplan-div">
          <div className="col-md-1"></div>
          <div className="col-md-2">
          <div class="input-group">
  <input type="text" class="offplan-input2" placeholder="project, community" aria-label="Example text with button addon" aria-describedby="button-addon1">
  </input>
  <span className="search-icon"> <i className="fa fa-search"></i></span>
</div>
          </div>
          <div className="col-md-2">
          <select class="offplan-input2" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
          </div>
          <div className="col-md-2">
          <select class="offplan-input2" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
          </div>
          <div className="col-md-2">
          <select class="offplan-input2" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
          </div>

          <div className="col-md-3" >
          <button className="filter-butto">
          Reset filters <i class="fa fa-refresh"></i>
        </button>
          </div>
         
 </div>
 <div className="row justify-content-center mb-5">
  <div className="col-md-3 mx-3">
    <div className="card">
      <img
        src="https://hjrealestates.com/wp-content/uploads/2024/05/hj-real-estates-offplan-diamondz-by-danube-featured-1024x720.jpg"
        className="offplan-imgg"
        alt="..."
      />
      <div className="card-body">
        <h6 className="card-title">
        Diamondz by Danube
        </h6>
        <p>by Danube</p>
        <h5>AED 1.1 M</h5>
        <hr/>
        <div className="row">
          <div className="col-md-4 col-sm-4 col-xs-4">
          <a href="#" className="rentcard-action">
              <i className="fa fa-envelope" /> Email
            </a>
          
           
          </div>
          <div className="col-md-4 col-sm-4 col-xs-4">
          <a href="#" className="rentcard-action">
              <i className="fa fa-phone" /> Phone
            </a>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-4">
          <a href="#" className="rentcard-action">
              <i className="fa fa-whatsapp" /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="col-md-3 mx-3">
    <div className="card offplan-cards">
      <img
        src="https://hjrealestates.com/wp-content/uploads/2024/05/hj-real-estates-offplan-binghatti-hills-featured-1024x864.webp"
        className="offplan-imgg"
        alt="..."
      />
   <div className="card-body">
        <h6 className="card-title">
        Diamondz by Danube
        </h6>
        <p>by Danube</p>
        <h5>AED 1.1 M</h5>
        <hr/>
        <div className="row">
          <div className="col-md-4">
          <a href="#" className="rentcard-action">
              <i className="fa fa-envelope" /> Email
            </a>
          
           
          </div>
          <div className="col-md-4">
          <a href="#" className="rentcard-action">
              <i className="fa fa-phone" /> Phone
            </a>
          </div>
          <div className="col-md-4">
          <a href="#" className="rentcard-action">
              <i className="fa fa-whatsapp" /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="col-md-3 mx-3">
    <div className="card offplan-cards">
      <img
        src="https://hjrealestates.com/wp-content/uploads/2024/04/hj-real-estates-offplan-damac-altitude-de-grisogono-tower-featured-1024x715.webp"
        className="offplan-imgg"
        alt="..."
      />
    <div className="card-body">
        <h6 className="card-title">
        Diamondz by Danube
        </h6>
        <p>by Danube</p>
        <h5>AED 1.1 M</h5>
        <hr/>
        <div className="row">
          <div className="col-md-4">
          <a href="#" className="rentcard-action">
              <i className="fa fa-envelope" /> Email
            </a>
          
           
          </div>
          <div className="col-md-4">
          <a href="#" className="rentcard-action">
              <i className="fa fa-phone" /> Phone
            </a>
          </div>
          <div className="col-md-4">
          <a href="#" className="rentcard-action">
              <i className="fa fa-whatsapp" /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<Footer/>
    </div>
  );
}

export default OffplanFilter;

import React, { useState, useEffect } from "react";
import '../css/Newnav.css'
import { MdLanguage, MdTurnedInNot } from "react-icons/md";
import { CiSettings,CiSearch } from "react-icons/ci";
import { MdOutlineMenuOpen } from "react-icons/md";
const Nawnew = () => {

  return (
    <div >
 <div className="row head-icons">
  <div className="col-md-9 "></div>
  <div className="col-md-3 ">
  <span className="sp-actual">
        <MdTurnedInNot /> | <MdOutlineMenuOpen /> | <CiSettings />
        <p className="p-actual">Preferences</p>
      </span>
  </div>
 </div>
 <div className="row sec-head">
  <div className="col-md-6 ">
  <img src="../img/blogo.svg" className="logoicon"></img>
  </div>

  <div className="col-md-6 ">
  <ul className="actual-head2">
    <li>PROPERTIES</li>
    <li>SERVICES</li>
    <li>RESOURCES</li>
    <li>EVENTS
</li>
<li><CiSearch/></li>
<li>
  {/* <button type="button" class="btn btn-outline-secondary btn-lg">Sell With us</button> */}
</li>
    </ul>
  </div>
 </div>
<hr style={{color:"white" ,margin: "0rem"}}/>
 <div className="row sec-head">
  <div className="col-md-7 px-5">
    <h1 className="px-5 mx-2 pt-4" style={{color:"white"}}>Find The Best Dubai Real Estate Property</h1>
  </div>
  <div className="col-md-5">
  <ul className="actual-head3">
    <li>BUY</li>
    <li>RENT</li>
    <li>SELL</li>
    <li>OFFPLAN</li>

<li>
  {/* <button type="button" class="btn btn-outline-secondary btn-lg">Sell With us</button> */}
</li>
    </ul>
  </div>
 </div>
    </div>
  )
}

export default Nawnew

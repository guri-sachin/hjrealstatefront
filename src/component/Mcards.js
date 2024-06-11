import React from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom';


const Mcards = () => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/rent'); // Replace with your target route
  };
  return (
    <div>
  {/* cards */}
  <div className='container'>
  <h4 className='cardtextf'>Properties for Rent in Dubai</h4>
  <br></br>
  <div className='row'>
    <div className='col-md-3'>
  <div class="card shadow mb-2" style={{borderRadius:"30px",border:"none"}} onClick={handleCardClick}>
  <button type="button" class="btn btn-light"style={{ position: "absolute", top: "20px", left: "20px",color:"#16248c",borderRadius:"20px" }}>
   Apartment
    </button>

  <img src="https://hjrealestates.com/wp-content/uploads/2024/05/hj-real-estates-rental-office-space-in-al-barsha-1-featured.webp" class="card-img-top Cardsimg" alt="..." style={{borderRadius:"35px",height:"300px"}}/>
  <div class="card-body">
  <h5 class="card-title">AED 110,000/Yearly</h5>
  <p class="card-text" style={{color:"black"}}>Office for rent Al Barsha 1</p>
   
  </div>
</div>
</div>
<div className='col-md-3'>
  <div class="card shadow mb-2" style={{borderRadius:"30px",border:"none"}}>
  <button type="button" class="btn btn-light"style={{ position: "absolute", top: "20px", left: "20px",color:"#16248c",borderRadius:"20px" }}>
      Apartment
    </button>
  <img src="https://hjrealestates.com/wp-content/uploads/2024/05/hj-real-estates-rental-labor-camp-featured-768x648.webp" class="card-img-top Cardsimg" alt="..." style={{borderRadius:"35px",height:"300px"}}/>
  <div class="card-body">
  <h5 class="card-title">AED 110,000/Yearly</h5>
  <p class="card-text" style={{color:"black"}}>Office for rent Al Barsha 1</p>
  </div>
</div>
</div>
<div className='col-md-3'>
  <div class="card shadow mb-2" style={{borderRadius:"30px",border:"none"}}>
  <button type="button" class="btn btn-light"style={{ position: "absolute", top: "20px", left: "20px",color:"#16248c",borderRadius:"20px" }}>
      Apartment
    </button>
  <img src="https://hjrealestates.com/wp-content/uploads/2024/05/hj-real-estates-rental-al-raea-building-featured-768x648.webp" class="card-img-top Cardsimg" alt="..."  style={{borderRadius:"35px",height:"300px"}}/>
  <div class="card-body">
  <h5 class="card-title">AED 110,000/Yearly</h5>
  <p class="card-text" style={{color:"black"}}>Office for rent Al Barsha 1</p>
  </div>
</div>
</div>
<div className='col-md-3'>
  <div class="card shadow mb-2" style={{borderRadius:"30px",border:"none"}}>
  <button type="button" class="btn btn-light"style={{ position: "absolute", top: "20px", left: "20px",color:"#16248c",borderRadius:"20px" }}>
      Apartment
    </button>
  <img src="https://hjrealestates.com/wp-content/uploads/2024/05/hj-real-estates-rental-al-das-featured-768x648.webp" class="card-img-top Cardsimg" alt="..."  style={{borderRadius:"35px",height:"300px"}}/>
  <div class="card-body">
  <h5 class="card-title">AED 110,000/Yearly</h5>
  <p class="card-text" style={{color:"black"}}>Office for rent Al Barsha 1</p>
  </div>
</div>
</div>
</div>


</div>
    </div>
  )
}

export default Mcards

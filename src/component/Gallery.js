import React from 'react'
import { useNavigate } from 'react-router-dom';
const Gallery = () => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/Guide'); // Replace with your target route
  };
  return (
    
    <div>
       <div className='container footerloop'>
      <h4  style={{margin:"15px"}} className='cardtextf'> Popular Communities</h4>
<div class="main"> 
  <div class="column">
    {/* <a href="/rent" target="_blank" alt="Image Not Found"> */}
    <img id="size" src="https://hjrealestates.com/wp-content/uploads/2023/09/hj-real-estates-guides-arjan-dubailand-featured-image-768x420.jpg" onClick={handleCardClick}/>
    {/* </a> */}
   
  </div>
  <div class="column">
    <a href="https://digitalforge.qa/images/codepen/walls/8.jpg" target="_blank" alt="Image Not Found">
    <img id="size" src="https://hjrealestates.com/wp-content/uploads/2024/02/hj-real-estates-blogs-business-bay-768x552.webp"/>
    </a>
    
  </div>  
  <div class="column">
    <a href="https://digitalforge.qa/images/codepen/walls/14.jpg" target="_blank" alt="Image Not Found">
    <img id="size" src="https://hjrealestates.com/wp-content/uploads/2024/02/hj-real-estates-blogs-dubai-marina-768x552.webp"/>
    </a>
   
  </div>
  <div class="column">
    <a href="https://digitalforge.qa/images/codepen/walls/21.jpg" target="_blank" alt="Image Not Found">
    <img id="size" src="https://hjrealestates.com/wp-content/uploads/2023/09/hj-real-estates-guides-damac-hills-featured-image-768x512.jpg"/>
    </a>
   
  </div>
</div>

<div class="main"> 
  <div class="column">
    <a href="https://digitalforge.qa/images/codepen/walls/1.jpg" target="_blank" alt="Image Not Found">
    <img id="size" src="https://hjrealestates.com/wp-content/uploads/2023/11/hj-real-estates-guides-sobha-hartland-featured-768x543.webp"/>
    </a>
   
  </div>
  <div class="column">
    <a href="https://digitalforge.qa/images/codepen/walls/8.jpg" target="_blank" alt="Image Not Found">
    <img id="size" src="https://hjrealestates.com/wp-content/uploads/2024/04/hj-real-estates-area-guides-al-furjan-768x523.webp"/>
    </a>
    
  </div>  
  <div class="column">
    <a href="https://digitalforge.qa/images/codepen/walls/14.jpg" target="_blank" alt="Image Not Found">
    <img id="size" src="https://hjrealestates.com/wp-content/uploads/2023/12/hj-real-estates-city-of-arabia-768x512.webp"/>
    </a>
   
  </div>
  <div class="column">
    <a href="https://digitalforge.qa/images/codepen/walls/21.jpg" target="_blank" alt="Image Not Found">
    <img id="size" src="https://hjrealestates.com/wp-content/uploads/2023/09/hj-real-estates-guides-the-valley-featured-image-768x394.jpg"/>
    </a>
   
  </div>
</div>
</div>
    </div>
  )
}

export default Gallery

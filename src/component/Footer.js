import React from 'react'

const Footer = ({setPageTitle}) => {
  console.log("page",setPageTitle)
  return (
    <div>
        {/* footer */}
        <footer className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="footer-nav">
              <a href="#home">Home</a>
              <a href="#about-us" >About Us</a>
              <a href="#area-guides">Area Guides</a>
              <a href="#careers">Careers</a>
              <a href="#contact-us">Contact Us</a>
            </div>
            <div className="footer-social">
              <a href="#facebook">
                <i className="fa fa-facebook-f"></i>
              </a>
              <a href="#instagram">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#linkedin">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="#twitter">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#youtube">
                <i className="fa fa-youtube"></i>
              </a>
              <a href="#pinterest">
                <i className="fa fa-pinterest"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-offices">
          <h3 className="ouroffice">Our Offices</h3>
          <div className="container">
            <div className="office">
              <h3>
                <span role="img" aria-label="UAE Flag">
                  <img src="../img/emirates.png"></img>
                </span>
                <br /> Dubai Headquarter
              </h3>
              <p>1104, Silver Tower, Business Bay, Dubai, UAE</p>
              <p>
                <i className="fas fa-phone-alt"></i> +971 4326 2191
              </p>
              <a href="#get-direction">Get Direction</a>
            </div>
            <div className="office">
              <h3>
                <span role="img" aria-label="India Flag">
                  <img src="../img/india.png"></img>
                </span>
                <br /> India Office
              </h3>
              <p>38, West Punjabi Bagh Club Road, New Delhi - 110026</p>
              <p>
                <i className="fas fa-phone-alt"></i> +91 76543 21086
              </p>
              <a href="#get-direction">Get Direction</a>
            </div>
            <div className="office">
              <h3>
                <span role="img" aria-label="Hong Kong Flag">
                  <img src="../img/kong.png"></img>
                </span>
                <br /> Hong Kong Office
              </h3>
              <p>
                Unit 1707, Level 17, Tower 2, Silvercord Centre, Tsim Sha Tsui,
                Kowloon
              </p>
              <p>
                <i className="fas fa-phone-alt"></i> +852 6438 1051
              </p>
              <a href="#get-direction">Get Direction</a>
            </div>
            <div className="office">
              <h3>
                <span role="img" aria-label="Ghana Flag">
                  <img src="../img/ghana.png"></img>
                </span>
                <br /> Ghana Office
              </h3>
              <p>
                28, Ground Floor, Josif Broz Tito Avenue No. 32, Cantonment,
                Accra
              </p>
              <p>
                <i className="fas fa-phone-alt"></i> +233 53 758 6262
              </p>
              <a href="#get-direction">Get Direction</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <p>©2024 HJ Real Estates. All Rights Reserved.</p>
            <p>Privacy Policy & Terms & Conditions</p>
            <p>
              HJ Real Estates is a company registered in Dubai, United Arab
              Emirates (License No. 1099736), 1105, Silver Tower, Business Bay,
              Dubai, UAE.
            </p>
          </div>
        </div>
      </footer>

    
      <a
        href="https://api.whatsapp.com/send?phone=51955081075&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202."
        class="float"
        target="_blank"
      >
        <i class="fa fa-whatsapp my-float"></i>
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=51955081075&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202."
        class="float1"
        target="_blank"
      >
        <i class="fa fa-comment-o my-float1"></i>
      </a>
    </div>
  )
}

export default Footer

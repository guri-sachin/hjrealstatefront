import React from "react";
import Nav from "../component/Nav";
import Footer from "../component/Footer";
import "../css/Guide.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Import the school icon
import { faSchool } from '@fortawesome/free-solid-svg-icons';

const Guide = () => {
  const schools = [
    {
      distance: 1.05,
      name: "Nord Anglia International School",
      icon: "../img/logo.png",
    },
    { distance: 1.13, name: "Safa Community School", icon: "../img/logo.png" },
    {
      distance: 2.21,
      name: "GEMS Al Barsha National School",
      icon: "../img/logo.png",
    },
    {
      distance: 2.21,
      name: "GEMS Al Barsha National School for Boys",
      icon: "../img/logo.png",
    },
    {
      distance: 2.21,
      name: "GEMS Al Barsha National School for Girls",
      icon: "../img/logo.png",
    },
  ];
  const items = [
    {
      icon: "fa fa-credit-card",
      text: "Community is known for buying affordable villas",
    },
    { icon: "fa fa-tree", text: "Gardens and Parks" },
    { icon: "fa fa-home", text: "Enjoy the guaranteed roi" },
    { icon: "fa fa-home", text: "Better amenities and social infrastructures" },
    { icon: "fa fa-home", text: "Outdoor & Indoor Sports Facilities" },
    { icon: "fa fa-home", text: "Retail & Dining Options" },
    { icon: "fa fa-home", text: "Near Hospital" },
    { icon: "fa fa-home", text: "Fitness Centre" },
  ];
  return (
    <div>
      <Nav />
      <div className="container">
        <div className="row g ">
          <div className="col-md-9 g1 hide-scrollbar">
            <div class="banner">
              <img
                src="../img/guidebanner.jpg"
                class="img"
                alt="Arjan Dubai Community"
              />
              <div class="overlay"></div>
           
            </div>
            <div class="banner-content">
                <h1>
                  Arjan Dubai Community & <br />
                  Area Guide
                </h1>
              </div>
            <br />
            <p>
              {" "}
              Arjan, Dubai, is one of the most popular areas well known for its
              mid-rise and low-rise Apartment
              <br /> buildings, which stand as an epitome of luxury, peace, and
              harmony of architectural excellence,
              <br /> style, and comfort. Also, it is located on the interchange
              of Sheikh Mohamed bin Zayed and Umm
              <br /> Suqeim Roads, which facilitates commutability and
              connectivity. This billion-dollar project
              <br /> developed by Dubai Holding is magnificent and lavish. This
              tourism and residential destination is
              <br /> one of the best locations in the world having attractions
              like Emirates Miracle Garden, Dubai
              <br /> Amphitheatre, and Els Golf Club. Renewable energy sources
              incorporated in Arjan apartments
              <br /> makes it eco-friendly. Arjan Al Barsha South is another
              sought-after residential community in the south of Arjan.
              <br />
            </p>
            <br />
            <p>
              Being a part of the developing community, Arjan Dubailand
              popularity can be credited to its
              <br /> proximity to the huge Miracle Garden flower garden
              (world-famous flower garden five minutes
              <br /> away) and Butterfly Park(housing 15,000 butterflies of over
              25 different species).
              <br />
            </p>{" "}
            <br />
            <p>
              The Arjan Dubai map depicts IMG Worlds of Adventure as a short
              15-minute drive away from this <br />
              location. Arjan apartments residents can reach Dubai International
              Airport in 25 minutes and
              <br /> Dubai Marina in 20 minutes by car as no traffic jams are
              present on the local roads. The scenic
              <br /> beauty is calm and serene in the residential quarters of
              the Arjan area.
            </p>
            <br />
            <div className="breakpoint"></div>
            <br />
            <h2>Location</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7228.427936398969!2d55.238993!3d25.060736!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6e62bc9cf949%3A0x643f68939c298463!2sArjan-Dubailand%20-%20Al%20Barsha%20South%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1716182434337!5m2!1sen!2sus"
              width="800"
              height="400"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <br />
            <br />
            <h3>SCHOOLS NEARBY</h3>
            <br />
            <div className="school-list">
              {schools.map((school, index) => (
                <div key={index} className="school-card">
                  <div className="icon">
                  <FontAwesomeIcon icon={faSchool}   style={{ color: "#16248c" }}
                      id="iconsize"/>
                   
                  </div>
                  <div className="details">
                    <div className="distance">{school.distance}KM</div>
                    <div className="name">{school.name}</div>
                  </div>
                </div>
              ))}
            </div>{" "}
            <br />
            <h2>Why Invest in Arjan Dubai?</h2>
            <div className="item-list">
              {items.map((item, index) => (
                <div key={index} className="item-card">
                  <div className="text1">
                    <i
                      class={item.icon}
                      style={{ color: "#16248c" }}
                      id="iconsize"
                    ></i>
                    
                    <br />
                    {item.text}
                  </div>
                </div>
              ))}
            </div>
            <br />
            <div className="breakpoint"></div>
            <br />
            <div className="cta-section">
              <div className="cta-content">
                <h3>Didn't Find What You Were Searching For?</h3>
                <p>
                  If you couldn’t find what you were looking for, <br /> don’t
                  worry. There are other areas to explore.
                </p>
                <button className="cta-button">
                  View All Areas <span className="cta-arrow">→</span>
                </button>
              </div>
              <div className="cta-image">
                <img src="../img/build.png" alt="Dubai Skyline" />
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

export default Guide;

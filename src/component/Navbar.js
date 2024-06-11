import React, { useState, useEffect } from "react";
const Navbar = () => {
  const [navbarBg, setNavbarBg] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavbarBg(true);
    } else {
      setNavbarBg(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
       {/* Navbar */}
    
       <nav
        className={`navbar navbar-expand-lg fixed-top ${
          navbarBg ? "navbar-bg" : "bg-transparent"
        }`}
        style={{ height: "100px"}}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="https://hjrealestates.com/wp-content/uploads/2024/02/hj-real-estates-logo-white.svg" alt="HJ Real Estates" className="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  style={{ color: "white", fontSize: "15px" }}
                >
                  Holidays Homes &nbsp;&nbsp;|{" "}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  style={{ color: "white", fontSize: "15px" }}
                >
                  +971 4326 2191 &nbsp;&nbsp;|
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  style={{ color: "white", fontSize: "15px" }}
                >
                  Menu
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
     

      {/* Header with Video Background */}
      <header className="video-header">
        <div className="overlay"></div>
        <video playsInline autoPlay muted loop>
          <source
            src="../img/hj-real-estates-home-banner.mp4"
            type="video/mp4"
          />
        </video>
        <div className="container text-center text-white" id="c1">
          <h1 id="heading">
            Find The Best Dubai Real
            <br /> Estate Property
          </h1>
          <p>Discover a range of investment opportunities!</p>
        </div>
      </header>

      {/* Search Form */}
      <div className="container mt-5 search-form bg-white p-4 shadow" >
        <div className="row">
          
          <div className="col-md-3">
            <input type="text" className="form-control" placeholder="Location, Developer or Project" />
          </div>
          <div className="col-md-3">
            <select className="form-control">
              <option>All Property Type</option>
            </select>
          </div>
          <div className="col-md-3">
            <select className="form-control">
              <option>All Communities</option>
            </select>
          </div>
          <div className="col-md-3">
            <button className="btn btn-primary w-100" style={{borderRadius:"80px"}}>Search</button>
          </div>
   
        </div>
      </div>
    </div>
  )
}

export default Navbar

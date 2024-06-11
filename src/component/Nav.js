import React, { useState, useEffect } from "react";

const Nav = () => {
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
        className={`navbar navbar-expand-lg ${
          navbarBg ? "navbar-bg" : "bg-transparent"
        }`}
        style={{ height: "90px" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="https://hjrealestates.com/wp-content/uploads/2024/02/hj-real-estates-logo.svg" alt="HJ Real Estates" className="logo" />
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
                  style={{ color: "black", fontSize: "15px" }}
                >
                  Holidays Homes &nbsp;&nbsp;|{" "}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  style={{ color: "black", fontSize: "15px" }}
                >
                  +971 4326 2191 &nbsp;&nbsp;|
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  style={{ color: "black", fontSize: "15px" }}
                >
                  Menu
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav

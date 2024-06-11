import React, { useState, useEffect } from 'react';
import Navbar from "../component/Nav";
import Footer from '../component/Footer';
import '../css/Offplan.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PhoneInput from 'react-phone-input-2';



const Offplan = () => {
          const [phone, setPhone] = useState('');
          const [isSticky, setIsSticky] = useState(false);

          useEffect(() => {
                    const handleScroll = () => {
                              const section = document.querySelector('.sticky-section');
                              if (section && window.pageYOffset >= section.offsetTop) {
                                        setIsSticky(true);
                              } else {
                                        setIsSticky(false);
                              }
                    };

                    window.addEventListener('scroll', handleScroll);

                    return () => {
                              window.removeEventListener('scroll', handleScroll);
                    };
          }, []);



          return (
                    <div>
                              <Navbar />
                              <div className="">
                                        <div className="row hhh">
                                                  <div className="col-md-12 position-relative d-flex justify-content-center align-items-center">
                                                            <img
                                                                      src="https://hjrealestates.com/wp-content/uploads/2023/09/hj-real-estates-sell-hero.jpg"
                                                                      className="offp-imgg"
                                                                      alt="Sell Hero"
                                                            />
                                                            <h1 className='offp-h position-absolute text-center mb-5'>Diamondz by Danube</h1>
                                                            <p className='position-absolute text-center mt-4'>Jumeirah Lake Towers</p>
                                                            <div className='position-absolute'>
                                                                      <div className=''>
                                                                                <div className='div-offplan'>
                                                                                          <div className='row text-center mt-5'>
                                                                                                    <div className='col-md-4'>
                                                                                                              <i class="fa fa-car" style={{ color: "#006" }}></i>
                                                                                                              <h4>Studio, 1, 2, 3 & 4 BR | Apartments</h4></div>
                                                                                                    <div className='col-md-4'>
                                                                                                              <p>Price (AED)</p>
                                                                                                              <h4>1.1 M</h4>
                                                                                                    </div>
                                                                                                    <div className='col-md-4'>
                                                                                                              <i class="fa fa-car" style={{ color: "#006" }}></i>
                                                                                                              <h4>Direct Sales & 0% Commission</h4>
                                                                                                    </div>
                                                                                          </div>
                                                                                </div>
                                                                      </div>

                                                            </div>
                                                  </div>

                                        </div>
                                        <div className={`row pt-3 px-5 ${isSticky ? 'position-fixed w-100 bg-white' : ''}`} style={{ zIndex: '100', top: '0' }}>
                                                  {/* <div className='col-md-1'></div> */}
                                                  <div className='col-md-4'>
                                                            <h4>Diamondz by Danube</h4>
                                                            <p>Studio, 1, 2, 3 & 4 BR <span>407 – 1,973 Sq. Ft.</span></p>
                                                  </div>
                                                  <div className='col-md-2'>
                                                            <p>Price (AED)</p>
                                                            <h5>1.1 M</h5>
                                                  </div>
                                                  <div className='col-md-3'>
                                                            <h4>+971 4326 2191</h4>
                                                  </div>
                                                  <div className='col-md-3'>
                                                            <h4>Whatsapp</h4>
                                                  </div>
                                        </div>
                                        <hr />
                                        <div className="sticky-section mt-5">
                                                  <div className='row'>
                                                            <div className='col-md-1'></div>
                                                            <div className='col-md-10'>

                                                                      <section class="">

                                                                                <section class="">
                                                                                          <div class="row">
                                                                                                    <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
                                                                                                              <div
                                                                                                                        class="bg-image hover-overlay ripple shadow-1-strong rounded"
                                                                                                                        data-ripple-color="light"
                                                                                                              >
                                                                                                                        <img
                                                                                                                                  src="https://mdbcdn.b-cdn.net/img/screens/yt/screen-video-1.webp"
                                                                                                                                  class="w-100"
                                                                                                                        />
                                                                                                                        <a href="#!" data-mdb-modal-init data-mdb-target="#exampleModal1">
                                                                                                                                  <div class="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}></div>
                                                                                                                        </a>
                                                                                                              </div>
                                                                                                    </div>

                                                                                                    <div class="col-lg-3 mb-4 mb-lg-0">
                                                                                                              <div
                                                                                                                        class="bg-image hover-overlay ripple shadow-1-strong rounded"
                                                                                                                        data-ripple-color="light"
                                                                                                              >
                                                                                                                        <img
                                                                                                                                  src="https://mdbcdn.b-cdn.net/img/screens/yt/screen-video-2.webp"
                                                                                                                                  class="w-100"
                                                                                                                        />
                                                                                                                        <a href="#!" data-mdb-modal-init data-mdb-target="#exampleModal2">
                                                                                                                                  <div class="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}></div>
                                                                                                                        </a>
                                                                                                              </div>
                                                                                                    </div>

                                                                                                    <div class="col-lg-3 mb-4 mb-lg-0">
                                                                                                              <div
                                                                                                                        class="bg-image hover-overlay ripple shadow-1-strong rounded"
                                                                                                                        data-ripple-color="light"
                                                                                                              >
                                                                                                                        <img
                                                                                                                                  src="https://mdbcdn.b-cdn.net/img/screens/yt/screen-video-3.webp"
                                                                                                                                  class="w-100"
                                                                                                                        />
                                                                                                                        <a href="#!" data-mdb-modal-init data-mdb-target="#exampleModal3">
                                                                                                                                  <div class="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}></div>
                                                                                                                        </a>
                                                                                                              </div>
                                                                                                    </div>
                                                                                                    <div class="col-lg-3 mb-4 mb-lg-0">
                                                                                                              <div
                                                                                                                        class="bg-image hover-overlay ripple shadow-1-strong rounded"
                                                                                                                        data-ripple-color="light"
                                                                                                              >
                                                                                                                        <img
                                                                                                                                  src="https://mdbcdn.b-cdn.net/img/screens/yt/screen-video-3.webp"
                                                                                                                                  class="w-100"
                                                                                                                        />
                                                                                                                        <a href="#!" data-mdb-modal-init data-mdb-target="#exampleModal3">
                                                                                                                                  <div class="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}></div>
                                                                                                                        </a>
                                                                                                              </div>
                                                                                                    </div>
                                                                                          </div>
                                                                                </section>

                                                                                <section class="">

                                                                                          <div
                                                                                                    class="modal fade"
                                                                                                    id="exampleModal1"
                                                                                                    tabindex="-1"
                                                                                                    aria-labelledby="exampleModal1Label"
                                                                                                    aria-hidden="true"
                                                                                          >
                                                                                                    <div class="modal-dialog modal-lg">
                                                                                                              <div class="modal-content">
                                                                                                                        <div class="ratio ratio-16x9">
                                                                                                                                  <iframe
                                                                                                                                            src="https://www.youtube.com/embed/A3PDXmYoF5U"
                                                                                                                                            title="YouTube video"
                                                                                                                                            allowfullscreen
                                                                                                                                  ></iframe>
                                                                                                                        </div>

                                                                                                                        <div class="text-center py-3">
                                                                                                                                  <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-secondary" data-mdb-dismiss="modal">
                                                                                                                                            Close
                                                                                                                                  </button>
                                                                                                                        </div>
                                                                                                              </div>
                                                                                                    </div>
                                                                                          </div>

                                                                                          <div
                                                                                                    class="modal fade"
                                                                                                    id="exampleModal2"
                                                                                                    tabindex="-1"
                                                                                                    aria-labelledby="exampleModal2Label"
                                                                                                    aria-hidden="true"
                                                                                          >
                                                                                                    <div class="modal-dialog modal-lg">
                                                                                                              <div class="modal-content">
                                                                                                                        <div class="ratio ratio-16x9">
                                                                                                                                  <iframe
                                                                                                                                            src="https://www.youtube.com/embed/wTcNtgA6gHs"
                                                                                                                                            title="YouTube video"
                                                                                                                                            allowfullscreen
                                                                                                                                  ></iframe>
                                                                                                                        </div>

                                                                                                                        <div class="text-center py-3">
                                                                                                                                  <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-secondary" data-mdb-dismiss="modal">
                                                                                                                                            Close
                                                                                                                                  </button>
                                                                                                                        </div>
                                                                                                              </div>
                                                                                                    </div>
                                                                                          </div>

                                                                                          <div
                                                                                                    class="modal fade"
                                                                                                    id="exampleModal3"
                                                                                                    tabindex="-1"
                                                                                                    aria-labelledby="exampleModal3Label"
                                                                                                    aria-hidden="true"
                                                                                          >
                                                                                                    <div class="modal-dialog modal-lg">
                                                                                                              <div class="modal-content">
                                                                                                                        <div class="ratio ratio-16x9">
                                                                                                                                  <iframe
                                                                                                                                            src="https://www.youtube.com/embed/vlDzYIIOYmM"
                                                                                                                                            title="YouTube video"
                                                                                                                                            allowfullscreen
                                                                                                                                  ></iframe>
                                                                                                                        </div>

                                                                                                                        <div class="text-center py-3">
                                                                                                                                  <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-secondary" data-mdb-dismiss="modal">
                                                                                                                                            Close
                                                                                                                                  </button>
                                                                                                                        </div>
                                                                                                              </div>
                                                                                                    </div>
                                                                                          </div>
                                                                                </section>

                                                                      </section>
                                                                      <div className='col-md-8 mt-4'>

                                                                                <h2 style={{ fontSize: "42px" }}>Diamondz by Danube at Jumeirah Lake Towers</h2>
                                                                                <p className='mt-4'>Diamondz property is another luxurious masterpiece by Danube Properties in JLT (Jumeirah Lake Towers).
                                                                                          This new off-plan residential gem promises a luxurious lifestyle and comes with premium studios to 4-bedroom apartments with a pristine pool.
                                                                                          It is a 62-storey residential structure standing tall to gather the attention of people who want to reside in Dubai.
                                                                                          This place isn’t about luxurious living, but also, it’s a smart investment choice for investors who want to experience a higher ROI.</p>

                                                                                <p className='mt-4'>What sets this Diamondz by Danube apart is its prime location in Jumeirah Lake Towers, that is well-known for its vibrant community, a plethora of amenities, and seamless connectivity.
                                                                                          Residents can enjoy easy access to most famous roads such as Sheikh Zayed Road and a close-knit network of metro stations, making commute a mere cakewalk.</p>
                                                                      </div>
                                                            </div>


                                                            <div className='col-md-1'></div>

                                                  </div>

                                                  <div className='row divsection'>
                                                            <div className='col-md-1'></div>
                                                            <div className='col-md-8 divsection2'>

                                                                      <p >Sizes (Sq. Ft.)</p>

                                                            </div>
                                                            <div className='col-md-1'></div>

                                                  </div>

                                                  <div className='row mt-5'>
                                                            <div className='col-md-1'> </div>
                                                            <div className='col-md-10'>
                                                                      <p className='text-center'>Overview</p>
                                                                      <h2 className='text-center'>Diamondz by Danube – To Experience Luxury like never before</h2>
                                                                      <p className='text-center'>With a complete focus on spaciousness and magnificence, residents can expect nothing but exceptionally luxurious living areas embellished with state-of-the-art interiors. Diamondz by Danube,
                                                                                nestled in the heart of Jumeirah Lake Towers (JLT), it rewards the residents with a plethora of amenities and marvelous attractions.</p>
                                                                      <h2 className='text-center mt-2'>Premium Amenities</h2>
                                                                      <p className='text-center mt-2'>One of the most important features that make this property a cream of the crop is its wide range of amenities. The area is well-equipped with the best schools, hospitals, shopping centers, fitness areas, landscaped gardens and parks, serene lakes, making sure that the residents get everything within close proximity. From spacious living to present-day interiors, each apartment reflects luxury in a unique way.</p>
                                                            </div>
                                                            <div className='col-md-1'> </div>

                                                  </div>
                                                  <div className='row divsection mt-5'>
                                                            <div className='col-md-1'></div>
                                                            <div className='col-md-8 divsection2'>



                                                            </div>
                                                            <div className='col-md-1'></div>

                                                  </div>
                                                  <div className='row mt-5 pt-4'>
                                                            <div className='col-md-1'> </div>
                                                            <div className='col-md-10'>
                                                                      <p className='text-center'>Amenities of</p>
                                                                      <h2 className='text-center'>State-of-the-art amenities at Diamondz by Danube Properties, JLT</h2>
                                                                      <p className='text-center mt-4 mb-5'>Diamondz Tower by Danube is well-equipped with a plethora of top-notch facilities and amenities to
                                                                                enhance your lifestyle with awesome tourist attractions and remarkable leisure activities. When you step into this apartment, you will be
                                                                                rewarded with a winning formula of Luxury and convenience.</p>

                                                                      <div className='divAmenities mb-5'></div>

                                                            </div>
                                                            <div className='col-md-1'> </div>

                                                  </div>

                                                  <div className='row mt-5 pt-5' style={{ backgroundColor: "lightgrey" }}>
                                                            <div className='col-md-1'> </div>
                                                            <div className='col-md-10'>
                                                                      <p className='text-center'>Location of</p>
                                                                      <h2 className='text-center'>Location of Diamondz by Danube</h2>
                                                                      <p className='text-center mt-4 mb-5'>Jumeirah Lake towers is a friendly community and is best-suited for individuals and families who
                                                                                want to experience luxurious life in Dubai. The prime locations of Dubai are just a few minutes away from this community. Residents can
                                                                                easily explore Dubai Marina and major highways such as Sheikh Zayed Road.

                                                                      </p>

                                                                      <div className='divLocation mb-5'></div>
                                                                      <div className='mt-3 mb-5'>
                                                                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7225.485562274773!2d55.19528!3d25.110567!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b94ab31ca35%3A0x1d6c66f303155ccb!2sAl%20Barsha%20-%20Al%20Barsha%201%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1716031456362!5m2!1sen!2sus" width="1200" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                                                                      </div>

                                                            </div>
                                                            <div className='col-md-1'> </div>

                                                  </div>

                                                  <div className='row mt-5 pt-5 mb-5'>
                                                            <div className='col-md-1'> </div>
                                                            <div className='col-md-10'>
                                                                      <p className='text-center'>Location of</p>
                                                                      <h2 className='text-center'>Location of Diamondz by Danube</h2>
                                                                      <p className='text-center mt-4 mb-5'>Jumeirah Lake towers is a friendly community and is best-suited for individuals and families who
                                                                                want to experience luxurious life in Dubai. The prime locations of Dubai are just a few minutes away from this community. Residents can
                                                                                easily explore Dubai Marina and major highways such as Sheikh Zayed Road.

                                                                      </p>
                                                                      <div className='row'>
                                                                                <div className='col-md-4'>
                                                                                          <div class="d-grid gap-2 mx-auto">
                                                                                                    {/* <button class="btn btn-primary" type="button" data-mdb-ripple-init>Button</button> */}
                                                                                                    <button type="button" class="btn btn-outline-primary" data-mdb-ripple-init data-mdb-ripple-color="dark">Studio</button>

                                                                                          </div>
                                                                                </div>
                                                                                <div className='col-md-8'>
                                                                                          <img src='https://hjrealestates.com/wp-content/uploads/2024/05/hj-real-estates-diamondz-by-danube-floor-plan-studio.webp' style={{ height: "446px", width: "654px" }}></img>
                                                                                </div>
                                                                      </div>




                                                            </div>
                                                            <div className='col-md-1'> </div>

                                                  </div>

                                                  <div className='row mt-5 pt-5 mb-5'>
                                                            <div className='col-md-1'> </div>
                                                            <div className='col-md-10 mt-5'>

                                                                      <h2 className='text-center'>Have a question?
                                                                      </h2>
                                                                      <p className='text-center mt-4 mb-5'>To answer your queries Diamondz by Danube, Jumeirah Lake Tower</p>

                                                                      <div className="row mb-5 mt-5">
                                                                                <div className="col-md-12 mb-5">
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
                                                            <div className='col-md-1'> </div>

                                                  </div>

                                        </div>



                              </div>

                              <Footer />
                    </div>
          );
};

export default Offplan;

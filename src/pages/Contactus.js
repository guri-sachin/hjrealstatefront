import React, { useState } from 'react';
import Navbar from "../component/Nav";
import CustomInput from '../component/CustomInput'
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Footer from '../component/Footer'
import '../css/Contactus.css'
import Assocaition from '../component/Assocaition'
import { Input, initMDB } from 'mdb-ui-kit';


const Contactus = () => {

  initMDB({ Input });
  const [formData, setFormData] = useState({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      
        const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData({
            ...formData,
            [name]: value
          });
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
          // You can add your form submission logic here
          console.log('Form data submitted:', formData);
        };
      
  return (
    <div>
      <Navbar></Navbar>
      <br/>
      <div className='container'>
          <div className='row mt-5 mb-5'>
          <div className='col-md-1'></div>
<div className='col-md-9'>
          <h1 className='contat-h'>Looking to buy, sell, or just say hello?
Let’s talk!</h1>
</div>
</div>
</div>
<hr/>
<div className='container mt-5'>
<div className='row'>
          <div className='col-md-1'></div>
          <div className='col-md-3'>
                    <h4>Come Visit Us!</h4>
                    <p>1104, Silver Tower, Business Bay,
Dubai, UAE</p>
<h4>Hours</h4>
<p>Mon – Sat
09:00AM – 06:00PM GST</p>
<h4 className='mt-3'>Our Social Media:</h4>
<div className="contact-social">
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
<hr/>
<h4>
Did you know?</h4>
<p >There are many benefits to investing in Dubai real estate. Dubai offers lucrative investment opportunities due to its strong economy, attractive tax benefits,
           and diverse property market. Investors seeking to grow their
           wealth will find the city’s rental market and capital appreciation ideal. Take advantage of this thriving global hub and invest today.</p>
          </div>
          <div className='col-md-4'>
<img src='https://hjrealestates.com/wp-content/uploads/2023/09/hj-real-estates-sathbir-siingh-sachdeva.jpg' alt='...' className='contact-img'></img>
</div>
<div className='col-md-3'>
<h4 className='mb-5'> Online Inquiry</h4>
<form onSubmit={handleSubmit} style={styles.contactform}>
      <div style={styles.contactformGroup}>
        <label htmlFor="name" style={styles.contactlabel}>Enter Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={styles.contactinput}
        />
      </div>
      <div style={styles.contactformGroup}>
        <label htmlFor="email" style={styles.contactlabel}>Enter Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={styles.contactinput}
        />
      </div>
      <div style={styles.contactformGroup}>
        <label htmlFor="phone" style={styles.contactlabel}>Enter Phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          style={styles.contactinput}
        />
      </div>
      <div style={styles.contactformGroup}>
        <label htmlFor="message" style={styles.contactlabel}>Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          style={{ ...styles.contactinput, ...styles.contacttextarea }}
        />
      </div>
      <button type="submit" style={styles.contactbutton}>Submit</button>
    </form>
</div>
<div className='col-md-1'></div>
</div>
</div>

<div className='mt-5'></div>

      <Footer/>
    </div>
  );
};

export default Contactus;

const styles = {
          // contactform: {
          //   maxWidth: '500px',
          //   margin: '0 auto',
          //   padding: '20px',
          //   border: '1px solid #ccc',
          //   borderRadius: '10px',
          //   boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          //   backgroundColor: '#f9f9f9',
          // },
          contactformGroup: {
            marginBottom: '15px',
          },
          contactlabel: {
            display: 'block',
            marginBottom: '5px',
            fontWeight: 'bold',
          },
          contactinput: {
            width: '100%',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            fontSize: '16px',
          },
          contacttextarea: {
            height: '100px',
            resize: 'vertical',
          },
          contactbutton: {
            width: '100%',
            padding: '10px 15px',
            border: 'none',
            borderRadius: '5px',
            backgroundColor: '#2c378f',
            color: '#fff',
            fontSize: '16px',
            cursor: 'pointer',
          },
          buttonHover: {
            backgroundColor: '#218838',
          },
        };
        
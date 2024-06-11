// CustomInput.js
import React from 'react';
import '../css/Careers.css'; // Ensure this path is correct based on your project structure

const CustomInput = ({ id, label, type = "text" }) => {
  return (
    <div className="input-container">
    <input type={type} id={id} className="custom-input" placeholder=" " />
    <label className="custom-label" htmlFor={id}>{label}</label>
  </div>
  );
};

export default CustomInput;

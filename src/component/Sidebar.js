import React from 'react';
import "../css/FilterSidebar.css";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={toggle}>Close</button>
      <ul>
        <li><a href="#">Link 1</a></li>
        <li><a href="#">Link 2</a></li>
        <li><a href="#">Link 3</a></li>
        {/* Add more links as needed */}
      </ul>
    </div>
  );
};

export default Sidebar;

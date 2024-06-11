import React, { useState,useRef,useEffect} from "react";
import Nav from "../component/Nav";
import Footer from "../component/Footer";

import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/NewrentFilter.css'
import Sidebar from '../component/Sidebar';



const properties = [
  {
    id: 1,
    type: "OFFICE",
    price: 110000,
    title: "Office for Rent Al Barsha 1",
    location: "china",
    date: "2023-05-20",
    image:
      "https://t4.ftcdn.net/jpg/02/10/62/03/240_F_210620329_0le9P2aUC9LUqCyf6yqiV8MtVWrzGKi7.jpg",
  },
  {
    id: 2,
    type: "APARTMENT",
    price: 93600,
    title: "Labor Camp for rent in Jebel Ali Industrial Area 1",
    location: "Dubai",
    date: "2023-04-15",
    image:
      "https://t3.ftcdn.net/jpg/02/94/68/98/240_F_294689806_wM7TOHTVmQsuk5dqX3CEzQwvVHlivPMh.jpg",
  },
  {
    id: 3,
    type: "APARTMENT",
    price: 60000,
    title: "Studio Apartment for Rent in Al Mankhool",
    location: "Dubai",
    date: "2023-06-10",
    image:
      "https://t4.ftcdn.net/jpg/03/84/55/29/240_F_384552930_zPoe9zgmCF7qgt8fqSedcyJ6C6Ye3dFs.jpg",
  },
  // Add more properties as needed
];

function RentFilter() {
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [searchTitle, setSearchTitle] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [propertyLocation, setPropertyLocation] = useState("");
  const [sorthide, setsort] = useState(false);
  const [filterhide, setfilter] = useState(true);
  const handleFilter = () => {
    let tempProperties = [...properties];

    // Filter by title
    if (searchTitle.trim() !== "") {
      tempProperties = tempProperties.filter((property) =>
        property.title.toLowerCase().includes(searchTitle.toLowerCase().trim())
      );
    }

    // Filter by type
    if (propertyType !== "") {
      tempProperties = tempProperties.filter(
        (property) => property.type.toUpperCase() === propertyType.toUpperCase()
      );
    }

    // Filter by location
    if (propertyLocation !== "") {
      tempProperties = tempProperties.filter(
        (property) =>
          property.location.toLowerCase() === propertyLocation.toLowerCase()
      );
    }

    // Update filtered properties state
    setFilteredProperties(tempProperties);
    setsort(false);
  };

  const handleReset = () => {
    setSearchTitle("");
    setPropertyType("");
    setPropertyLocation("");
    setFilteredProperties(properties);
  };

  // Call handleFilter whenever any filter changes
  React.useEffect(() => {
    handleFilter();
  }, [searchTitle, propertyType, propertyLocation]);
  const [sortedProperties, setSortedProperties] = useState(properties);

  const handleSort = (sortType) => {
    let sortedArray = [...properties];
    if (sortType === "title-asc") {
      sortedArray.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortType === "title-desc") {
      sortedArray.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sortType === "date-asc") {
      sortedArray.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (sortType === "date-desc") {
      sortedArray.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
    setSortedProperties(sortedArray);
  };

  const handleSortChange = (event) => {
    handleSort(event.target.value);
    setsort(true);
    setfilter(false);
  };

  const Card = ({ type, price, title, location, image }) => {
    return (
      <div className="rentcard">
        <div className="rentcard-type">{type}</div>
        <img src={image} alt={title} className="rentcard-image" />
        <div className="rentcard-content">
          <div className="rentcard-price">AED{price}/Yearly</div>
          <div className="rentcard-title">
            {title} {location}
          </div>

          <div className="rentcard-actions">
            <a href="#" className="rentcard-action">
              <i className="fa fa-envelope" /> Email
            </a>
            <a href="#" className="rentcard-action">
              <i className="fa fa-phone" /> Phone
            </a>
            <a href="#" className="rentcard-action">
              <i className="fa fa-whatsapp" /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    );
  };

// toggle buttons 
const [activeButton, setActiveButton] = useState('BUY');

const handleButtonClick = (button) => {
  setActiveButton(button);
};
const popoverRef = useRef(null);
const popover1Ref = useRef(null);

useEffect(() => {
  const bootstrap = require('bootstrap/dist/js/bootstrap.bundle.min.js');

  const popover = new bootstrap.Popover(popoverRef.current, {
    container: 'body',
    placement: 'bottom',
    content: `<div class="popover-custom-content">
              <!-- Your content here -->
            </div>`,
    html: true,
  });

  return () => {
    popover.dispose();
  };
}, []);
useEffect(() => {
  const bootstrap = require('bootstrap/dist/js/bootstrap.bundle.min.js');

  const popover1 = new bootstrap.Popover(popover1Ref.current, {
    container: 'body',
    placement: 'bottom',
    content: `<div class="popover-custom-content">
    <h5>Price<h5/>
              


            </div>`,
    html: true,
  });

  return () => {
    popover1.dispose();
  };
}, []);



// for sidebar
const [isOpen, setIsOpen] = useState(false);

const toggleSidebar = () => {
  setIsOpen(!isOpen);
};


  return (
    <div className="App">
     {/* <div><Nav/></div> */}
 <div className="mt-5">
     <div className="row pb-5">
    <div className="col-md-1"></div>
          <div className="col-md-3 px-5">
      
            <input type="search" className="custom-input" placeholder="Area,Project,Community">
            </input>
          </div>
          <div className="col-md-8">

          <div className="toggle-button">
      <button
        className={activeButton === 'BUY' ? 'active' : ''}
        onClick={() => handleButtonClick('BUY')}
      >
        BUY
      </button>
      <button
        className={activeButton === 'RENT' ? 'active' : ''}
        onClick={() => handleButtonClick('RENT')}
      >
        RENT
      </button>
    </div>
  &nbsp;  &nbsp;
  <button ref={popover1Ref} type="button" className="buttonnewrent mb-1" data-bs-toggle="popover1">
        PRICE RANGE
      </button>

      &nbsp;  &nbsp;
  <button ref={popoverRef} type="button" className="buttonnewrent mb-1" data-bs-toggle="popover">
        BEDS & BATHS
      </button>
      &nbsp;  &nbsp;
      <button ref={popoverRef} type="button" className="buttonnewrent mb-1" data-bs-toggle="popover">
        HOME TYPE
      </button>
      &nbsp;  &nbsp;
      <button type="button"  onClick={toggleSidebar} className="buttonnewrent mb-1" >Filters</button>
     <Sidebar isOpen={isOpen} toggle={toggleSidebar} />
     &nbsp;  &nbsp;
     <button  type="button" className="buttonnewrent mb-1" >
        View on Map
      </button>

    
 
          </div>

     </div>
      

      <div className="container-xxl">
        <div className="row" style={{marginLeft:'50px',marginRight:'70px'}}>
          <div className="col-md-4">
            <h5 className="rentp">Properties for Rent in Dubai</h5>
            <p>
              1-{filteredProperties.length} of {properties.length} results
            </p>
          </div>
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <div className="filter-sort">
              <select onChange={handleSortChange}>
                <option value="most-recent">Most Recent</option>
                <option value="title-asc">Sort by title (A-Z)</option>
                <option value="title-desc">Sort by title (Z-A)</option>
                <option value="date-asc">Sort by date (oldest)</option>
                <option value="date-desc">Sort by date (newest)</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row" style={{marginLeft:'30px'}}>
            
      <div className="property-list">
        {filterhide && (
          <>
            {filteredProperties.map((property, index) => (
              <Card
                key={index}
                type={property.type}
                price={property.price}
                title={property.title}
                location={property.location}
                image={property.image}
              />
            ))}
          </>
        )}
        {sorthide && (
          <>
            {sortedProperties.map((property, index) => (
              <Card
                key={index}
                type={property.type}
                price={property.price}
                title={property.title}
                location={property.location}
                image={property.image}
              />
            ))}
          </>
        )}
      </div>
    </div>
      </div>
      </div>
<Footer/>
    </div>
  );
}

export default RentFilter;
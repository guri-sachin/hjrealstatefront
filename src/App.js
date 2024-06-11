import React, { useState, useEffect } from "react";
import "./App.css"; // Include your custom CSS
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import News from "./component/News";
import AsSeenon from "./component/AsSeenon";
import Assocaition from "./component/Assocaition";
import Stayinloop from "./component/Stayinloop";
import Gallery from "./component/Gallery";
import Rent from "./component/Rent";
import Nav from "./component/Nav";
import ImageGallery from "./component/ImageGallery";
import Invester from "./component/Invester";
import Blogs from "./component/Blogs";
import Guide from "./pages/Guide";
import PropertyManagment from "./pages/PropertyManagment";
import Sellproperty from "./pages/Sellproperty";
import Mortgage from "./pages/Mortgage";
import Events from "./pages/Events";
import Areaguide from "./pages/Areaguide";
import Careers from "./pages/Careers";
import About from "./pages/About";
import Contactus from "./pages/Contactus";
import RentFilter from "./pages/RentFilter";
import OffplanFilter from "./pages/OffplainFilter";
import FooterM from "./component/FooterM";
import Nawnew from "./component/Nav-new";
import EventsDsc from "./pages/EventsDsc";  
import Offplan from "./pages/Offplan";   
import NewrentFilter from "./pages/NewrentFilter";  



const App = () => {
 
//   <TranslationProvider>
//   <Router>
//     <div>
//       <LanguageSwitcher />
//       <Switch>
//         <Route path="/" exact component={HomePage} />
//         <Route path="/about" component={AboutPage} />
//         <Route path="/contact" component={ContactPage} />
//         {/* Add other routes as needed */}
//       </Switch>
//     </div>
//   </Router>
// </TranslationProvider>
  return (
    <div>
     
 
   <Router>
    <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path="/Navbar" element={<Navbar/>}></Route>
      <Route exact path="/Footer" element={<Footer/>}></Route>
      <Route exact path="/News" element={<News/>}></Route>
      <Route exact path="/AsSeenon" element={<AsSeenon/>}></Route>
      <Route exact path="/Assocaition" element={<Assocaition/>}></Route>
      <Route exact path="/Stayinloop" element={<Stayinloop/>}></Route>
      <Route exact path="/Gallery" element={<Gallery/>}></Route>
      <Route exact path="/Rent" element={<Rent/>}></Route>
      <Route exact path="/Nav" element={<Nav/>}></Route>
      <Route exact path="/imggallery" element={<ImageGallery/>}></Route>
      <Route exact path="/Invester" element={<Invester/>}></Route>
      <Route exact path="/Blogs" element={<Blogs/>}></Route>
      <Route exact path="/Guide" element={<Guide/>}></Route>
      <Route exact path="/PropertyManagment" element={<PropertyManagment/>}></Route>
      <Route exact path="/Sellproperty" element={<Sellproperty/>}></Route>
      <Route exact path="/Mortgage" element={<Mortgage/>}></Route>
      <Route exact path="/Events" element={<Events/>}></Route>
      <Route exact path="/Areaguide" element={<Areaguide/>}></Route>
      <Route exact path="/Careers" element={<Careers/>}></Route>
      <Route exact path="/Contactus" element={<Contactus/>}></Route> 
      <Route exact path="/About" element={<About/>}></Route>  
      <Route exact path="/RentFilter" element={<RentFilter/>}></Route> 
      <Route exact path="/OffplanFilter" element={<OffplanFilter/>}></Route> 
      <Route exact path="/FooterM" element={<FooterM/>}></Route> 
      <Route exact path="/Nawnew" element={<Nawnew/>}></Route>
      <Route exact path="/EventsDsc" element={<EventsDsc/>}></Route>  
      <Route exact path="/Offplan" element={<Offplan/>}></Route>  
      <Route exact path="/NewrentFilter" element={<NewrentFilter/>}></Route>  
    </Routes>
   </Router>
      

      
    
    </div>
  );
};

export default App;

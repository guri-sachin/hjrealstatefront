import React from 'react'
import Navbar from './Navbar'
import AsSeenon from './AsSeenon'
import Stayinloop from './Stayinloop'
import News from './News'
import Assocaition from './Assocaition'
import Footer from './Footer'
import Gallery from './Gallery'
import Mcards from './Mcards'
import Offplan from './Offplan'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className='container'>
      <AsSeenon/><br/>
      <br>
      </br>
      <Mcards/>
      <Stayinloop/><br/>
      <Gallery/><br/>
      <Offplan/><br/>
      <News/>
      <br/>
       <Assocaition/>
      <br/>
      </div>
      <Footer/>
     

    </div>
  )
}

export default Home

import React from 'react'
import './Home.css'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Featured from '../components/Featured'
import PropertyList from '../components/PropertyList'
import FeatureHome from '../components/FeatureHome'
import MailList from '../components/MailList'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className='home'>
        <Navbar/>
        <Header/>
        <div className='homeContainer'>
          <Featured/>
          <h1 className='homeTitle'> browser by property type..</h1>
          <PropertyList/>
          <h1 className='homeTitle'> homes by property type..</h1>
          <FeatureHome/>
          <MailList/>
          <Footer/>

        </div>
    </div>
  )
}

export default Home

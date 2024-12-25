import React from 'react'
import Navbar from '../components/Navbar'
import Freebook from '../components/Freebook'
import Footer from '../components/Footer'
import Banner from '../components/Banner'


function home() {
  return (
    <>
    <Navbar/>
    
    <Banner/>
    <Freebook />
    <Footer/>
    </>
)
}
export default home
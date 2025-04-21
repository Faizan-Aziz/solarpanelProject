import React from 'react'
import Topbar from "../components/Topbar"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import PageHeader from "../components/PageHeader"
import Testimonial from '../components/ServiceComponent/Testimonial';
import WhatsAppStickyButton from '../components/WhatsAppStickyButton'


const Customerreviews = () => {
  return (
   <>
    <Topbar/>
    <Navbar/>
    <PageHeader title="Testimonial" activeBreadcrumb="Testimonial"/>
    <Testimonial/>
    <Footer/>
    <WhatsAppStickyButton/>
   </>

  )
}

export default Customerreviews
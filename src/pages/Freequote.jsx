import React from 'react'
import Topbar from "../components/Topbar"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import PageHeader from "../components/PageHeader"
import ContactSection from "../components/ContactComponent/ContactSection"
import WhatsAppStickyButton from "../components/WhatsAppStickyButton"

const Freequote = () => {
  return (
    <>
    <Topbar/>
    <Navbar/>
    <PageHeader title="Free Quote" activeBreadcrumb="Free Quote"/>
    <ContactSection/>
    <Footer/>
    <WhatsAppStickyButton/>

    </>
  )
}

export default Freequote
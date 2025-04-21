import React from 'react'
import Topbar from "../components/Topbar"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import PageHeader from "../components/PageHeader"
import AboutExperience from "../components/AboutComponent/AboutExperience"
import Feature from "../components/AboutComponent/FeatureCounter"
import WhatsAppStickyButton from '../components/WhatsAppStickyButton'


const Featurespage = () => {
  return (
    <>
    <Topbar/>
    <Navbar/>
    <PageHeader title="Features" activeBreadcrumb="Features"/>
    <Feature/>
    <AboutExperience/>
    <Footer/>
    <WhatsAppStickyButton/>
    </>
    
  )
}

export default Featurespage
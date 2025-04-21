import React from "react"
import Topbar from "../components/Topbar"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import PageHeader from "../components/PageHeader"
import Feature from "../components/AboutComponent/FeatureCounter"
import AboutExperience from "../components/AboutComponent/AboutExperience"
import Team from "../components/AboutComponent/Team"
import CEOPanel from "../components/AboutComponent/SolarMissionCEO"
import WhatsAppStickyButton from "../components/WhatsAppStickyButton"





const About = () => {
  return (
    <>
    <Topbar/>
    <Navbar/>
    <PageHeader title="About Us" activeBreadcrumb="About" />
    <Feature/>
    <CEOPanel/>
    <AboutExperience/>
    <Team/>
    <Footer/>
    <WhatsAppStickyButton />

    </>
  )
}

export default About
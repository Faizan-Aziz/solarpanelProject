import React from 'react'
import Topbar from "../components/Topbar"
import Navbar from "../components/Navbar"
import Carousel from "../components/HomeComponent/HeroCarousel"
import Feature from '../components/AboutComponent/FeatureCounter'
import SolarMissionImage from '../components/AboutComponent/SolarMissionCEO'
import AboutExperience from '../components/AboutComponent/AboutExperience'
import Serviceofours from '../components/ServiceComponent/Serviceofours'
import ChooseUs from '../components/ServiceComponent/ChooseUs'
import ProjectsGoing from '../components/ProjectComponent/ProjectsGoing'
import QuoteSection from '../components/ProjectComponent/QuoteComponent'
import Team from '../components/AboutComponent/Team'
import Footer from '../components/Footer'
import WhatsAppStickyButton from "../components/WhatsAppStickyButton"

const Home = () => {
  return (
   <>
   <Topbar/>
   <Navbar/>
   <Carousel/>
   <Feature/>
   <SolarMissionImage/>
   <AboutExperience/>
   <Serviceofours/>
   <ChooseUs/>
   <ProjectsGoing/>
   <QuoteSection/>
   <Team/>
   <Footer/>
   <WhatsAppStickyButton/>
   </>
  )
}

export default Home
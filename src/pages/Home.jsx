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
import OurMajorProjects from '../components/Majorproject/OurMajorProjects'
import OurGallery from '../components/Gallery/Ourgallery'



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
   <OurMajorProjects/>
   <ChooseUs/>
   <ProjectsGoing/>
   <QuoteSection/>
   <OurGallery/>
   <Team/>
   <Footer/>
   <WhatsAppStickyButton/>
   </>
  )
}

export default Home
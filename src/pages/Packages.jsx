import Topbar from "../components/Topbar"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import PageHeader from "../components/PageHeader"
import ProjectsGoing from "../components/ProjectComponent/ProjectsGoing"
import QuoteComponent from "../components/ProjectComponent/QuoteComponent"
import Testimonial from "../components/ServiceComponent/Testimonial"
import WhatsAppStickyButton from "../components/WhatsAppStickyButton"





const Project = () => {
  return (
    <>
    <Topbar/>
    <Navbar/>
    <PageHeader title="Packages" activeBreadcrumb="Packages" />
    <ProjectsGoing/>
    <QuoteComponent/>
    <Testimonial/>
    <Footer/>
    <WhatsAppStickyButton/>
    </>
  )
}

export default Project
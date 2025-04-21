import Topbar from "../components/Topbar"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import PageHeader from "../components/PageHeader"
import ContactSection from "../components/ContactComponent/ContactSection"
import WhatsAppStickyButton from "../components/WhatsAppStickyButton"


const Contact = () => {
  return (
  <>
  <Topbar/>
  <Navbar/>
  <PageHeader title="Contact Us" activeBreadcrumb="Contact Us"/>
  <ContactSection/>
  <Footer/>
  <WhatsAppStickyButton/>
  </>
  
  )
}

export default Contact
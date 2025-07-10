import React from 'react';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Project from './pages/Packages.jsx';
import Service from './pages/Service.jsx'; 
import Featurespage from './pages/Features.jsx';
import Freequote from './pages/Freequote.jsx';
import Customerreviews from './pages/Customerreviews.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './pages/Home.jsx';
import TermsConditions from './pages/Term&Condition.jsx';
import CEOPanel from './components/AboutComponent/SolarMissionCEO.jsx';
import OurSolutions from './components/AboutComponent/OurSolutions.jsx';
import './assets/css/bootstrap.min.css';
import './assets/css/style.css';
import ScrollToTop from './components/ScrolltotopComponent/ScrollToTop.jsx'
import WhatsAppStickyButton from "./components/WhatsAppStickyButton.jsx"
// import OurMajorProjects from './components/Majorproject/OurMajorProjects.jsx';




const App = () => {


  return (
    <>
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Feature" element={<Featurespage />} />
          <Route path="/Freequote" element={<Freequote />} />
          <Route path="/Customerreviews" element={<Customerreviews />} />
          <Route path="/Terms&Conditions" element={<TermsConditions />} />
          <Route path="/moreabout" element={<OurSolutions />} />
          <Route path="/mission" element={<CEOPanel/>} />
          <Route path="/WhatsApp" element={<WhatsAppStickyButton/>} />
          {/* <Route path="/majorProjects" element={<OurMajorProjects/>} /> */}
         
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
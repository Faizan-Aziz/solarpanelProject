import React from 'react';
import About from './pages/about';
import Contact from './pages/Contact';
import Project from './pages/Packages';
import Service from './pages/service'; 
import Featurespage from './pages/Features';
import Freequote from './pages/Freequote';
import Customerreviews from './pages/Customerreviews';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './pages/home';
import TermsConditions from './pages/Term&Condition';
import CEOPanel from './components/AboutComponent/SolarMissionCEO';
import OurSolutions from './components/AboutComponent/OurSolutions';
import './assets/css/bootstrap.min.css';
import './assets/css/style.css';
import ScrollToTop from './components/ScrolltotopComponent/ScrollToTop'
import WhatsAppStickyButton from "./components/WhatsAppStickyButton"



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
         
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
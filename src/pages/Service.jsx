import React from 'react';
import Topbar from '../components/Topbar'; 
import Navbar from '../components/Navbar'; 
import PageHeader from '../components/PageHeader';
import Serviceofours from "../components/ServiceComponent/Serviceofours";
import ChooseUs from '../components/ServiceComponent/ChooseUs';
import Testimonial from '../components/ServiceComponent/Testimonial';
import Footer from '../components/Footer';
import WhatsAppStickyButton from "../components/WhatsAppStickyButton"





const Service = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <PageHeader title="Services" activeBreadcrumb="Services" />
      <Serviceofours/>
      <ChooseUs/>
      <Testimonial/>
      <Footer/>
      <WhatsAppStickyButton/>


    </>
  );
};

export default Service;
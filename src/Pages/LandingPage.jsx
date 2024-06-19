import React from 'react';
import Header from '../Components/header';
import AboutUs from '../Components/aboutus';
import Features from '../Components/features';
import Footer from '../Components/footer';
import Hero from '../Components/hero';
import Testimonials from '../Components/testimonials';


const LandingPage = () => (
  <div className='bg-white'>
    <Header />
    <Hero />
    <Features />
    <AboutUs />
    <Testimonials />
    <Footer />
  </div>
);

export default LandingPage;

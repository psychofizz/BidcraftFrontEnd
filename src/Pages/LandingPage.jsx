import React from 'react';
import AboutUs from '../Components/aboutus';
import Features from '../Components/features';
import Hero from '../Components/hero';
import Testimonials from '../Components/testimonials';


const LandingPage = () => (
  <div className='bg-white overflow-x-hidden'>
    <Hero />
    <Features />
    <AboutUs />
    <Testimonials />
  </div>
);

export default LandingPage;

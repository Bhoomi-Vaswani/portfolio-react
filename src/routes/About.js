import React from 'react';
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Bannerimg2 from '../Components/Bannerimg2';
import AboutMe from "../Components/AboutMe";

function About() {
  return (
    <div>
      <NavBar/>
      <Bannerimg2 heading="ABOUT ME." />
      <AboutMe/>
      <Footer/>

      
    </div>
  )
}

export default About;

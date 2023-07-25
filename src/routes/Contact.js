import React from 'react';
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Bannerimg2 from '../Components/Bannerimg2';
import Form from "../Components/Form";

function Contact() {
  return (
    <div>
      <NavBar/>
      <Bannerimg2 heading="CONTACT & COLLAB." text="Get in Touch, Let's discuss and collab" /> 
      <Form/>
      <Footer/>
      
    </div>
  )
}

export default Contact;

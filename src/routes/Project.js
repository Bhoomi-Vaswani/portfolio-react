import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Bannerimg2 from "../Components/Bannerimg2";
import Work from "../Components/Work";

function Project() {
  return (
    <div>
      <NavBar/>
      <Bannerimg2 heading="PROJECTS." text="Some of my most recent works, soon to add more." />
      <Work/>
      <Footer/>
      
    </div>
  )
}

export default Project;

import React from "react";
import NavBar from "../Components/NavBar";
import Bannerimg from "../Components/Bannerimg";
import Footer from "../Components/Footer";
import Work from "../Components/Work"

function Home() {
  return (
    <div>
      <NavBar/>
      <Bannerimg /> 
      <Work/>
      <Footer />
      
    </div>
  )
}

export default Home;

import React from "react";
import "./Bannerimg.css";
import IntroImg from "../assets/intro-bg.jpg";
import {Link} from "react-router-dom";

function Bannerimg() {
  return (
    <div className="banner">
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="IntroImg" />
        </div>
        <div className="content">
            <p>Hey, I am an ECE Student, React Developer, Content Creator</p>
                <h1>Bhoomika Vaswani</h1>
                
                <div>
                    <Link to="/project" className="btn"> Projects </Link>
                    <Link to="/contact" className="btn btn-light"> Contact </Link>
                </div>
                

        </div>
      
    </div>
  )
}

export default Bannerimg;

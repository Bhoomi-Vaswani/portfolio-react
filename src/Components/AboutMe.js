import React from "react";
import "./AboutMe.css";
import {Link} from "react-router-dom";

function AboutMe() {
  return (
    <div className="about">
        <div className="left">
            <p>I am a 4th year ECE student</p>
            <Link to="/contact">
            <button className="btn"> CONTACT </button>
            </Link>
        </div>
        <div className="right"></div>
      
    </div>
  )
}

export default AboutMe;

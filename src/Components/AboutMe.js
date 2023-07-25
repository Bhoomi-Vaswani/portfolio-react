import React from "react";
import "./AboutMe.css";
import {Link} from "react-router-dom";
import react from "../assets/react.png";
import java from "../assets/java.png";
import js from "../assets/js.png";

function AboutMe() {
  return (
    <div className="about">
        <div className="left">
            <p>I am a 4th year student pursuing Electronics & Communication Engineering at LNCTS. 
              I'm a flexible and quick learner who is exploring new technologies and working on my problem-solving skills.
              </p>
               
            <Link to="/contact">
            <button className="btn"> CONTACT </button>
            </Link>
        </div>
        <div className="right">
          <div className="img-container">
            <div className="top">
              <img src={react} className="img" alt="true"/>
              
            </div>
            <div className="top">
              <img src={java} className="img" alt="true"/>
              
            </div>
            <div className="top">
              <img src={js} className="img" alt="true"/>
              
            </div>
          </div>
        </div>
      
    </div>
  )
}

export default AboutMe;

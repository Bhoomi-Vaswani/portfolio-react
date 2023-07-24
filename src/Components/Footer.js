import React from "react";
import "./Footer.css";
import {FaHome, FaPhone, FaMailBulk, FaInstagram, FaYoutube, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: "#fff" , marginRight: "2rem"}}/>
                    <div>
                        <p>Bhopal, Madhya Pradesh.</p>
                        <p>India.</p>
                    </div>
                </div>
                <div className="phone">
                    <h4>
                    <FaPhone size={20} style={{color:"#fff" , marginRight: "2rem"}}/>
                    +91 98268XXXXX </h4>
                </div>
                <div className="email">
                    <h4>
                    <FaMailBulk size={20} style={{color:"#fff" ,marginRight: "2rem"}}/>
                    2bhoomi5@gmail.com</h4>

                </div>

            </div>
            <div className="right">
                <h4>About Me</h4>
                <p>I am a 4th-year student pursuing Electronic & Communication Engineering from LNCT Group
                    of Colleges, Bhopal.
                </p>
                <div className="social">
                <FaGithub size={30} style={{color:"#fff" ,marginRight: "1rem"}}/>
                <FaTwitter size={30} style={{color:"#fff" ,marginRight: "1rem"}}/>
                <FaInstagram size={30} style={{color:"#fff" ,marginRight: "1rem"}}/>
                <FaYoutube size={30} style={{color:"#fff" ,marginRight: "1rem"}}/>
                <FaLinkedin size={30} style={{color:"#fff" ,marginRight: "1rem"}}/>

                </div>

            </div>
        </div>
      
    </div>
  )
}

export default Footer;

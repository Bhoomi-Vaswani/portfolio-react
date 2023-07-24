import React from "react";
import "./ProjectCard.css";
import { NavLink } from "react-router-dom";


const ProjectCard = (props) => {
  return (
    <div className="project-card"> 
        <img src={props.imgsrc} alt="img"/>
        <h2 className="project-title"> {props.title} </h2>
        <div className="project-desc">
          <p>{props.text}</p>
          <div className="project-btns">
            <NavLink to = {props.view} className="btn"> VIEW </NavLink>
            <NavLink to = {props.souce} className="btn"> SOURCE </NavLink>
          </div>
        </div>
        </div>
  )
}

export default ProjectCard;

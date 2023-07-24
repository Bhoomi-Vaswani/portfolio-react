import React from "react";
import "./ProjectCard.css";
import ProjectCard from "./ProjectCard";
import ProjectCardData from "./ProjectCardData";

const Work = () => {
  return (
    <div className="container">
      <h1 className="project-heading"> Projects </h1>
      <div className="project-container">
        {ProjectCardData.map((val,idx) => {
            return(
                <ProjectCard
                key={idx}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                view={val.view}
                source={val.source}
                />
            )
        })}
        
      </div>
      
    </div>
  )
}

export default Work;

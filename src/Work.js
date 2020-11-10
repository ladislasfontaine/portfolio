import React from "react";
import "./App.css";
import "./Work.css";
import FooterSentence from "./FooterSentence";
import { Link } from "react-router-dom";
import * as Constants from "./constants";

function Work() {

  const projects = Constants.projects.slice().reverse();

  return (
    <div className="allProjectsContainer">
      {projects.map(project =>
        <div className="oneProjectContainer" key={project.id}>
          <Link to={`${process.env.PUBLIC_URL}/project/${project.id}`} className="projectMainImage">
            <img src={`${project.mainImage}`} alt="Main" className="main" />
            <div className="projectLabel">
              CASE STUDY 0{projects.length - project.id + 1}
            </div>
            <img src="shadow.png" alt="Shadow" className="shadow" />
          </Link>
          <Link to={`${process.env.PUBLIC_URL}/project/${project.id}`} className="projectTitle">
            <h1>
              {project.shortName}
            </h1>
            <h2>
              {project.topic}
            </h2>
          </Link>
        </div>
      )}
      <FooterSentence />
    </div>
  );
}

export default Work;

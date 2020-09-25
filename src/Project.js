import React, { useEffect } from "react";
import "./App.css";
import "./Project.css";
import "./Work";
// import { Link } from 'react-router-dom'
import * as Constants from "./constants";
import Footer from "./Footer";

function Project({ match }) {
  useEffect(() => {
    // console.log(Constants.projects[match.params.id - 1])
    // console.log(match.params.id)
  }, []);

  const currentProject = Constants.projects[match.params.id - 1];

  return (
    <div className="Project">
      <div className="Title section">
        <div className="titleText">
          <h3>
            {currentProject.shortName}
          </h3>
          <span className="line">—</span>
          <p>
            {currentProject.shortDescription}
          </p>
        </div>
        <div className="diapoImages"></div>
      </div>

      <div className="Banner Role">
        <div>
          <h4>My Role</h4>
          <span className="line">—</span>
        </div>
        <ol>
        {currentProject.roles.map((role, index) =>
          <li><span className="primaryColor index">0{index + 1}</span> {role}</li>
        )}
        </ol>
      </div>

      <div className="stack section">
        {currentProject.stack.map((category, index) => 
          <div className="stackCategory">
            <h4>{Object.keys(category)[0]}</h4>
            <span className="line">—</span>
            <ul>
              {Object.values(category)[0].map((techno) =>
                <li>{techno}</li>
              )}
            </ul>
          </div>
        )}
      </div>

      <div className="Banner links">
        <div>
          <h4>Source Code <br />& Website</h4>
          <span className="line">—</span>
        </div>
        {currentProject.urlWebsite &&
          <a href={currentProject.urlWebsite} target="_blank" rel="noopener noreferrer">
            <div className="svgIcon svgSite"></div>
          </a>
        }
        {currentProject.urlGithub.client &&
          <a href={currentProject.urlGithub.client} target="_blank" rel="noopener noreferrer">
            <div className="svgIcon svgHtml"></div>
          </a>
        }
        {currentProject.urlGithub.server &&
          <a href={currentProject.urlGithub.server} target="_blank" rel="noopener noreferrer">
            <div className="svgIcon svgHtml"></div>
          </a>
        }
      </div>

      <div className="features section">
        <div>
          <h4>Features</h4>
          <span className="line">—</span>
        </div>
        <ul>
          {currentProject.features.map((feature) =>
            <li>{feature}</li>  
          )}
        </ul>
      </div>

      <Footer project={currentProject} />
    </div>
  );
}

export default Project;

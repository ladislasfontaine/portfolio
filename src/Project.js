import React, { useEffect } from "react";
import "./App.css";
import "./Project.css";
import "./Work";
import * as Constants from "./constants";
import Footer from "./Footer";

function Project({ match }) {
  useEffect(() => {
    const timer = setInterval(() => {
      const diapoImages = document.querySelector(".diapoImages");
    
      if (!diapoImages)
        return
      if (diapoImages.lastChild.style.opacity === "1") {
        diapoImages.lastChild.style.opacity = "0";
        diapoImages.firstChild.style.opacity = "1"; 
      }
      else {
        diapoImages.lastChild.style.opacity = "1";
        diapoImages.firstChild.style.opacity = "0"; 
      }
    }, 3000);
    return () => clearInterval(timer);
  });

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
        <div className="diapoImages">
        {currentProject.diapoImages.map((image, index) =>
          <img src={process.env.PUBLIC_URL + image} alt="diapo" key={index + 1} />
        )}
        </div>
      </div>

      <div className="Banner Role">
        <div>
          <h4>My Role</h4>
          <span className="line">—</span>
        </div>
        <ol>
        {currentProject.roles.map((role, index) =>
          <li key={index + 1}><span className="primaryColor index">0{index + 1}</span> {role}</li>
        )}
        </ol>
      </div>

      <div className="stack section">
        {currentProject.stack.map((category, index) => 
          <div className="stackCategory"  key={index + 1}>
            <h4>{Object.keys(category)[0]}</h4>
            <span className="line">—</span>
            <ul>
              {Object.values(category)[0].map((techno, index) =>
                <li  key={index + 1}>{techno}</li>
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
        {currentProject.urlWebsite &&
          <a href={currentProject.urlWebsite} target="_blank" rel="noopener noreferrer">
            <div className="svgIcon svgSite"></div>
          </a>
        }
      </div>

      <div className="features section">
        <div>
          <h4>Features</h4>
          <span className="line">—</span>
        </div>
        <ul>
          {currentProject.features.map((feature, index) =>
            <li key={index + 1}>{feature}</li>  
          )}
        </ul>
      </div>

      {currentProject.otherImages.map((image, index) =>
        <div className="section screenshots" key={index + 1}>
          <img src={process.env.PUBLIC_URL + image} alt="screenshot" />
        </div>
      )}

      <Footer project={currentProject} />
    </div>
  );
}

export default Project;

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
      <div className="Title">
        <div className="titleText">
          <h3>
            {currentProject.name}
          </h3>
          <p>
            Web application made for economic and associative players that reinvent our society to make it more resilient. 
          </p>
        </div>
        <div className="diapoImages"></div>
      </div>

      <div className="Role">
        <h3>My Role</h3>
        <ol>
        {currentProject.roles.map((role, index) =>
          <li>0{index + 1} - {role}</li>
        )}
        </ol>
      </div>

      <h3>Website</h3>
      <img src="" alt="" />
      <Footer project={currentProject} />
    </div>
  );
}

export default Project;

import React from 'react'
import './App.css'
import './Work.css'
import { Link } from 'react-router-dom'
import * as Constants from './constants'

function Work () {
  return (
    <div class='allProjectsContainer'>
      {Constants.projects.map(project =>
        <div class='oneProjectContainer' key={project.id}>
          <Link to={`/project/${project.id}`}>
            <img src={`${project.mainImage}`} alt='Main' />
          </Link>
          <Link to={`/project/${project.id}`}>
            <h1>
              {project.name}
            </h1>
            <h3>
              {project.topic}
            </h3>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Work

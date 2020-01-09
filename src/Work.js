import React from 'react'
import './App.css'
import './Work.css'
import { Link } from 'react-router-dom'
import * as Constants from './constants'

function Work () {
  return (
    <div>
      {Constants.projects.map(project =>
        <div key={project.id}>
          <Link to={`/project/${project.id}`}>
            <h1>
              {project.name}
            </h1>
            <h3>
              {project.topic}
            </h3>
            <img src={`${project.mainImage}`} alt='Main' />
          </Link>
        </div>
      )}
    </div>
  )
}

export default Work

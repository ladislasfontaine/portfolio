import React from 'react'
import './App.css'
import './Work.css'
import { Link } from 'react-router-dom'
import * as Constants from './constants'

function Work () {
  return (
    <div className='allProjectsContainer'>
      {Constants.projects.map(project =>
        <div className='oneProjectContainer' key={project.id}>
          <Link to={`/project/${project.id}`} className='projectMainImage'>
            <img src={`${project.mainImage}`} alt='Main' className='main' />
            <div className='projectLabel'>
              CASE STUDY 0{project.id}
            </div>
            <img src='shadow.png' alt='Shadow' className='shadow' />
          </Link>
          <Link to={`/project/${project.id}`} className='projectTitle'>
            <h1>
              {project.name}
            </h1>
            <h2>
              {project.topic}
            </h2>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Work

import React, { useEffect } from 'react'
import './App.css'
import './Work'
// import { Link } from 'react-router-dom'
import * as Constants from './constants'
import Footer from './Footer'

function Project ({ match }) {
  useEffect(() => {
    // console.log(Constants.projects[match.params.id - 1])
    // console.log(match.params.id)
  }, [])

  const currentProject = Constants.projects[match.params.id - 1]

  return (
    <div>
      <h3>
        {currentProject.name}
      </h3>
      <p>
        {currentProject.description}
      </p>
      <img src='' alt='' />
      <h3>My Role</h3>
      <h3>Website</h3>
      <img src='' alt='' />
      <Footer project={currentProject} />
    </div>
  )
}

export default Project

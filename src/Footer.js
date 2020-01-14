import React from 'react'
import './App.css'
import './Footer.css'
import { Link } from 'react-router-dom'
import * as Constants from './constants'

function Footer ({ project }) {
  function scrollToTop () {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function previousId () {
    if (project.id === 1) {
      return Constants.projects.length
    } else {
      return project.id - 1
    }
  }

  function nextId () {
    if (project.id === Constants.projects.length) {
      return 1
    } else {
      return project.id + 1
    }
  }

  return (
    <div className='Footer'>
      <div className='insideFooter'>
        <Link to={`/project/${previousId()}`} className='footerButton'>
          Prev
        </Link>
        <div className='footerTopButton' onClick={scrollToTop}>
          <img src={process.env.PUBLIC_URL + '/icon-arrow.svg'} alt='Arrow' />
          <span>Top</span>
        </div>
        <Link to={`/project/${nextId()}`} className='footerButton'>
          Next
        </Link>
      </div>
    </div>
  )
}

export default Footer

import React from 'react'
import './App.css'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer ({ project }) {
  return (
    <div className='Footer'>
      <div className='insideFooter'>
        <Link to={`/project/${project.id - 1}`} className='footerButton'>
          Prev
        </Link>
        <a href='#Top' className='footerTopButton'>
          <img src={process.env.PUBLIC_URL + '/icon-arrow.svg'} alt='Arrow' />
          <span>Top</span>
        </a>
        <Link to={`/project/${project.id + 1}`} className='footerButton'>
          Next
        </Link>
      </div>
    </div>
  )
}

export default Footer

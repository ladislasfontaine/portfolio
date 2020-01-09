import React from 'react'
import './App.css'
import './Nav.css'
import { Link } from 'react-router-dom'

function Nav () {
  return (
    <nav className='nav'>
      <ul className='nav-left'>
        <li className='logo-li'>
          <Link to='/' className='logo'>
            L
          </Link>
          <div className='logo-shadow' />
        </li>
        <li>
          <Link to='/' className='button home'>
            Work
          </Link>
        </li>
        <li>
          <Link to='/about' className='button about'>
            About
          </Link>
        </li>
      </ul>
      <ul className='nav-right'>
        <li className='icon icon-github'>
          <a
            href='https://github.com/ladislasfontaine'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-github' />
          </a>
        </li>
        <li className='icon icon-mail'>
          <a
            href='mailto:fontaine.ladislas@gmail.com'
            rel='noopener noreferrer'
          >
            <i className='far fa-envelope' />
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav

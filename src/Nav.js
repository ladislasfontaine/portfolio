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
          <i className='fab fa-github' />
        </li>
        <li className='icon icon-mail'>
          <i className='far fa-envelope' />
        </li>
      </ul>
    </nav>
  )
}

export default Nav

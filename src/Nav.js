import React from 'react'
import './App.css'
import './Nav.css'

function Nav () {
  return (
    <nav className='nav'>
      <ul className='nav-left'>
        <li className='logo-li'>
          <a href='' className='logo'>
            L
          </a>
          <div className='logo-shadow' />
        </li>
        <li>
          <a href='' className='button home'>
            Work
          </a>
        </li>
        <li>
          <a href='' className='button about'>
            About
          </a>
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

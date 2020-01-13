import React from 'react'
import './App.css'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer () {
  return (
    <div className='Footer'>
      <h1>
        Footer Component {this.props.project.id}
      </h1>
    </div>
  )
}

export default Footer

import React from 'react'
import './App.css'
import './About.css'

function About () {
  return (
    <div className='About'>
      <div className='aboutSection'>
        <div className='firstAboutSection'>
          <h1 className='aboutTitle'>
            Hi<span className='green'>,</span> I<span className='green'>'</span>m
            Ladislas<span className='green'>.</span>
          </h1>
          <p className='subTitle green'>
            Working hard to be a Backend Developer
          </p>
        </div>
      </div>

      <div className='aboutSection'>
        <img
          src={process.env.PUBLIC_URL + '/about/about-bg-1.png'}
          alt='Man surfing'
          className='backgroundImage'
        />
        <div className='aboutSectionBackground' />
        <div className='aboutSectionContent'>
          <div className='smallImageBackground'>
            <img
              src={process.env.PUBLIC_URL + '/about/lad.png'}
              alt='Avatar'
              className='smallImage'
            />
          </div>
          <div className='aboutSectionText'>
            <h5 className='green'>Born and raised in</h5>
            <h4>France</h4>
          </div>
        </div>
      </div>

      <div className='aboutSection'>
        <img
          src={process.env.PUBLIC_URL + '/about/about-bg-2.png'}
          alt='Man surfing'
          className='backgroundImage'
        />
        <div className='aboutSectionBackground' />
        <div className='aboutSectionContent'>
          <div className='smallImageBackground'>
            <img
              src={process.env.PUBLIC_URL + '/about/ieseg.png'}
              alt='Avatar'
              className='smallImage iesegLogo'
            />
          </div>
          <div className='aboutSectionText'>
            <h5 className='green'>Graduated from</h5>
            <h4 className='iesegName'>IESEG Business School</h4>
          </div>
        </div>
      </div>

      <div className='aboutSection'>
        <img
          src={process.env.PUBLIC_URL + '/about/about-bg-3.png'}
          alt='Man surfing'
          className='backgroundImage'
        />
        <div className='aboutSectionBackground lighterBackground' />
        <div className='aboutSectionContent'>
          <div className='smallImageBackground'>
            <img
              src={process.env.PUBLIC_URL + '/about/ruby.png'}
              alt='Avatar'
              className='smallImage'
            />
          </div>
          <div className='aboutSectionText'>
            <h4>Ruby Lover</h4>
          </div>
        </div>
      </div>

      <div className='lastAboutSection'>
        <p className='green'>Looking for opportunities.</p>
      </div>
    </div>
  )
}

export default About

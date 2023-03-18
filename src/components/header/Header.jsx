import React from 'react'
import './header.css'
import CTAheader from './CTAheader'
import profilepic from '../../assets/My project.png'
import HeaderSocialsMedia from './HeaderSocialsMedia'
const Header = () => {
  return (
     <header>
      <div className="container header-container">
        <h5>Hello I'm </h5>
        <h1>Aarti Meharchandani</h1>
        <h5 className="text-light">Front end Developer</h5>
        <CTAheader />
        <HeaderSocialsMedia />
        <div className="profilepic">
          <img src= {profilepic} alt="Aarti Meharchandani" />
      </div>

      <a href = "contact" className='scroll_down'> Scroll Down </a>
      </div>
      </header>
  )
}

export default Header
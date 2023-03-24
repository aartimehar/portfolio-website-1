import React from 'react'
import './header1.css'
import CTAheader from './CTAheader'
import MY from '../../assets/My project.png'
import HeaderSocialsMedia from './HeaderSocialsMedia'
import '../../index.css'



const Header = () => {
  return (
     <header>
      <div className="container header-container">
        <h5>Hello I'm </h5>
        <h1>Aarti </h1>
        <h5 className="text-dark">{"<Front End Web Developer/>"}</h5>
        <CTAheader />
        <HeaderSocialsMedia />
        <div className="my">
          <img src= {MY} alt="Aarti Meharchandani" />
      </div>

      <a href = "#contact" className='scroll_down'> Scroll Down </a>
      </div>
      </header>
  )
}

export default Header
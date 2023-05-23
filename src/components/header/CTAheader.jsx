import React from 'react'
import CV from '../../assets/Aarti-CV.docx'
import './header1.css'

const CTAheader = () => {
  return (
    <div className='cta-zindex'>
        <div className= "cta-header"></div>
        <a href = {CV} download className='btn header-btn'>Download CV</a>
        <a href = "#contact" className='btn header-btn'> Lets Talk </a>
    </div>
  )
}

export default CTAheader;
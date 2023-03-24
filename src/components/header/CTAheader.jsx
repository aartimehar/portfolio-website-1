import React from 'react'
import CV from '../../assets/Aarti-CV.docx'
import './header1.css'

const CTAheader = () => {
  return (
    <div className='cta-zindex'>
        <div className= "cta-header"></div>
        <a href = {CV} download className='btn'>Download CV</a>
        <a href = "#contact" className='btn btn-header'> Lets Talk </a>
    </div>
  )
}

export default CTAheader;
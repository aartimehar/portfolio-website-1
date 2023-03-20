import React from 'react'
import CV from '../../assets/CV.pdf'
import './header.css'

const CTAheader = () => {
  return (
    <div className='cta-zindex'>
        <div className= "cta-header"></div>
        <a href = {CV} download className='btn'>Download CV</a>
        <a href = "#Contact" className='btn btn-primary'> Lets Talk </a>
    </div>
  )
}

export default CTAheader;
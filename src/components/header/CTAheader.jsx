import React from 'react'
import CV from  '../../assets/CV.pdf'


const CTAheader = () => {
  return (
    <div>
        <div className= 'cta-header'></div>
        <a href = {CV} download className='btn'>Download CV</a>
        <a href = "#Contact" className='btn btn-primary'> Lets Talk </a>
    </div>
  )
}

export default CTAheader;
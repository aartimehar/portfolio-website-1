import React from 'react'
import './About.css'
import {CgAwards} from 'react-icons/cg'
import {GrCertificate} from 'react-icons/gr'
import {GoProject} from 'react-icons/go'
import myPicture from '../../assets//Screenshot 2023-03-17 014237.png'
const About = () => {
  return (
    <section id = 'about'>About
    <h5>Get to Know </h5>
    <h2>About me </h2>

    <div className = 'container about-container'>
    <div className = 'Aboutme'> 
    <div className = 'Aboutme_Image'>
    <img src = {myPicture} alt= "About-image"/>
    </div>
    </div>
    <div className = 'Aboutme_content'>
      <div className = 'Aboutme_cards'>
        <article className='aboutme_card'>
         <CgAwards className='aboutme_icon'/>
          <h5>Experience</h5>
          <small> 1+ year working on digital projects</small>
        </article>
        <article className='aboutme_card'>
        <GrCertificate className='aboutme_icon'/>
          <h5>Skills</h5>
          <small> 1+year working on digital projects</small>
        </article>
        <article className='aboutme_card'>
        <GoProject className='aboutme_icon'/>
          <h5>Projects</h5>
          <small> 1+year working on digital projects</small>
        </article>
    </div>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
      Obcaecati, dignissimos? Debitis exercitationem natus sed 
      architecto eos praesentium optio repellendus maiores. Velit tempora nemo dolorem quidem numquam animi ratione ut vel?
    </p>
    <a href= "#contact" className='btn btn-primary'>Lets Talk</a>
    </div> 
    </div>
    </section>
  )
}

export default About
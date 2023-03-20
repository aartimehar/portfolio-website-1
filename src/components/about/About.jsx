import React from 'react'
import './about.css'
import MY from '../../assets///Fotor_AI.png'
import {CgAwards} from 'react-icons/cg'
import {TbCertificate} from 'react-icons/tb'
import {GoProject} from 'react-icons/go'

const About = () => {
  return (
    <section id = "about">
     <h5>Get to Know </h5>
     <h2>About me </h2>
    <div className = "container about_container">
    <div className = "about_me"> 
    <div className = 'aboutme_image'>
    <img src = {MY} alt= "aboutme-image"/>
    </div>
    </div>


    
    <div className = "aboutme_content">
    <div className = "aboutme_cards">
        <article className="aboutme_card">
         <CgAwards className="aboutme_icon"/>
          <h5>Experience</h5>
          <small className='duration'> 1+ year working </small>
        </article>

        <article className="aboutme_card">
        <TbCertificate className="aboutme_icon"/>
          <h5>Skills</h5>
          <small className='duration'> 1+year working on </small>
        </article>

        <article className="aboutme_card">
        <GoProject className='aboutme_icon'/>
          <h5>Projects</h5>
          <small className='duration'> 1+year working on </small>
        </article>
        </div>

    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
      Obcaecati, dignissimos? Debitis exercitationem natus sed 
      architecto eos praesentium optio repellendus maiores. 
      Velit tempora nemo dolorem quidem numquam animi ratione ut vel?
    </p>
   
    <a href= "#contact" className='btn btn-primary'>Lets Talk</a>
    </div> 
    </div> 
    </section>
  )
}

export default About
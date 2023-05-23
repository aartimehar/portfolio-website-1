import React from 'react'
import './about1.css'
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
    <img src = {MY} className='about_fotorai' alt = 'girl designing the website' />
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
      Hi. My name is Aarti and I’m passionate about crafting 
      meaningful experiences through design and web-development. 
      I bring my unique perspective to both of the technical and 
      visual aspects of digital products to life.
      <br></br>
      <br></br>
      As a supporter of 
      Simon Fitzpatrick,   
      <a href=" https://iep.utm.edu/simplici/#"  aria-label="Simplicity in the Philosophy of Science">
      Simplicity in the Philosophy of Science </a> I agree less is more.
      I have a  <span class="bold"> BA in Project Management </span> from &nbsp;
      <a href="https://www.mdx.ac.uk/"
      aria-label="open link to bootstrap sizing guide.">Middlesex University London . </a>
      The <span class="bold"> IBM Environmental Award </span> from &nbsp;
      <a href="https://www.mdxsu.com/articles/middlesex-uni-awarded-a-1st-for-environmental-impact"
        
        aria-label="IBM Environmental Award" >Middlesex University - for sustainability impact </a>
        and <span class="bold"> active member in </span>
      <a
        href="https://peopleandplanet.org/university-league/2021/u226/middlesex-university"
        
        aria-label="open link to bootstrap sizing guide.">People and Planet Society.</a>
      
      <br></br>
      <br></br>
      I’m happiest when I’m learning a skill, transforming ideas , 
      unleashing creativity and innovation into reality.
    </p>
   <div className='contact-button'>
    <a href= "#contact" className='btn btn-primary'>Lets Talk</a>
    </div>
    </div> 
    </div> 
    </section>
  )
}

export default About
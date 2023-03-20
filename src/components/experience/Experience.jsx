import React from 'react'
import './experience.css'
import {GoVerified} from 'react-icons/go'

const Experience = () => {
  return (
    <section id='experience'> 
    <h5> What are the skills I have </h5>
    <h2> My experience </h2>

    <div className="container experience_container">
      <div className="experience_frontend">
        <h3>Front-end Development</h3>
        <div className="experience_content">
          <article className="experience_details">
            <GoVerified className='experience_details_icon'/>
            <div className='text-align'>
            <h4>HTML</h4>
            <small className='text-light'> Experienced </small>
            </div>
            </article>

            <article className="experience_details">
            <GoVerified className='experience_details_icon'/>
            <div className='text-align'>
            <h4>CSS</h4>
            <small className='text-light'> Experienced </small>
            </div>
            </article>

            <article className="experience_details">
            <GoVerified className='experience_details_icon'/>
            <div className='text-align'>
            <h4>Javascript</h4>
            <small className='text-light'> Experienced </small>
            </div>
            </article>

            <article className="experience_details">
            <GoVerified className='experience_details_icon'/>
            <div className='text-align'>
            <h4>Bootstrap</h4>
            <small className='text-light'> Experienced </small>
            </div>
            </article>

            <article className="experience_details">
            <GoVerified className='experience_details_icon'/>
            <div className='text-align'>
            <h4>Tailwind</h4>
            <small className='text-light'> Experienced </small>
            </div>
            </article>

            <article className="experience_details">
            <GoVerified className='experience_details_icon'/>
            <div className='text-align'>
            <h4>React</h4>
            <small className='text-light'> Experienced </small>
            </div>
            </article>
            </div>
            </div>
            {/* End of Front-end Development */}

            <div className = "UX/UI">
            <h3>UX/UI</h3>
            <div className="experience_content">
            <article className="experience_details">
            <GoVerified className='experience_details_icon'/>
            <div className='text-align'>
            <h4 className='set-gap'>Adobe Illustrator</h4>
            <small className='text-light'> Experienced </small>
            </div>
            </article>

            <article className="experience_details">
            <GoVerified className='experience_details_icon'/>
            <div className='text-align'>
            <h4>Figma</h4>
            <small className='text-light'> Experienced </small>
            </div>
            </article>

            <article className="experience_details">
            <GoVerified className='experience_details_icon'/>
            <div className='text-align'>
            <h4>Canvas</h4>
            <small className='text-light'> Experienced </small>
            </div>
            </article>


            <article className="experience_details">
            <GoVerified className='experience_details_icon'/>
            <div className='text-align'>
            <h4>Blender 3D</h4>
            <small className='text-light'> Experienced </small>
            </div>
            </article>


            <article className="experience_details">
            <GoVerified className='experience_details_icon'/>
            <div className='text-align'>
            <h4>Polypane</h4>
            <small className='text-light'> Experienced </small>
            </div>
            </article>


            <article className="experience_details">
            <GoVerified className='experience_details_icon'/>
            <div className='text-align'>
            <h4>Adobe XD</h4>
            <small className='text-light'> Experienced </small>
            </div>
            </article>


            </div>
          </div>
        
      
      </div>
    
    </section>
  )
}

export default Experience
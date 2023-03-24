import React from 'react'
import {BiCheckCircle} from 'react-icons/bi'
import './services.css'


const Services = () => {
  return (
    <section id = 'services'>
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className = "container services_container">
  <article className = "service">
  <div className = "service_head">
  <h3>UI/UX Design</h3>
  </div>
  <ul className = "service_list">
  <li>
    <BiCheckCircle className='service_icon'/>
    <p> User research and analysis
    </p>
  </li>
  <li>
    <BiCheckCircle className='service_icon'/>
    <p> Information architecture
    </p>
  </li>
  <li>
    <BiCheckCircle className='service_icon'/>
    <p> Wireframing and prototyping
    </p>
  </li>
  <li>
    <BiCheckCircle className='service_icon'/>
    <p> Visual design
    </p>
  </li>
  <li>
    <BiCheckCircle className='service_icon'/>
    <p> Interaction design
    </p>
  </li>
  <li>
    <BiCheckCircle className='service_icon'/>
    <p> Usability testing 
    </p>
  </li>
  <li>
    <BiCheckCircle className='service_icon'/>
    <p> Responsive design
    </p>
  </li>
  <li>
    <BiCheckCircle className='service_icon'/>
    <p> Accessibility
    </p>
  </li>
  <li>
    <BiCheckCircle className='service_icon'/>
    <p> Design system creation
    </p>
  </li>
  <li>
    <BiCheckCircle className='service_icon'/>
    <p> Collaborating with developers
    </p>
  </li>
</ul>
</article>
{/* End of UI/UX */}
<article className = "service">
    <div className = "service_head">
    <h3>Web Development</h3>
    </div>
    <ul className = "service_list">
    <li>
      <BiCheckCircle className='service_icon'/>
      <p> Custom website development
      </p>
    </li>
    <li>
      <BiCheckCircle className='service_icon'/>
      <p> Content Management System development
      </p>
    </li>
    <li>
      <BiCheckCircle className='service_icon'/>
      <p> E-commerce website development
      </p>
    </li>
    <li>
      <BiCheckCircle className='service_icon'/>
      <p> Website maintenance and support
      </p>
    </li>
    <li>
      <BiCheckCircle className='service_icon'/>
      <p> Search Engine Optimization
      </p>
    </li>
    <li>
      <BiCheckCircle className='service_icon'/>
      <p> Responsive design
      </p>
    </li>
    <li>
      <BiCheckCircle className='service_icon'/>
      <p> API integrations 
      </p>
    </li>
    <li>
      <BiCheckCircle className='service_icon'/>
      <p> LWeb hosting and server management 
      </p>
    </li>
    <li>
      <BiCheckCircle className='service_icon'/>
      <p> Website security 
      </p>
    </li>
    <li>
      <BiCheckCircle className='service_icon'/>
      <p> Cross-browser compatibility
      </p>
    </li>
  </ul>
  </article>
  {/* End of web development*/}

  <article className = "service service-content">
    <div className = "service_head">
    <h3>Content Creation</h3>
    </div>
    <ul className = "service_list">
    <li>
      <BiCheckCircle className='service_icon'/>
      <p> Blog writing 
      </p>
    </li>
    <li>
      <BiCheckCircle className='service_icon'/>
      <p> Copywriting 
      </p>
    </li>
    <li>
      <BiCheckCircle className='service_icon'/>
      <p> Social media content creation 
      </p>
    </li>
    <li>
      <BiCheckCircle className='service_icon'/>
      <p> Email marketing 
      </p>
    </li>
    <li>
      <BiCheckCircle className='service_icon'/>
      <p> Content strategy 
      </p>
    </li>
    <li>
      <BiCheckCircle className='service_icon'/>
      <p> Video production
      </p>
    </li>
    <li>
      <BiCheckCircle className='service_icon'/>
      <p> Infographic design 
      </p>
    </li>
    <li>
      <BiCheckCircle className='service_icon'/>
      <p> Podcast production
      </p>
    </li>
    <li>
      <BiCheckCircle className='service_icon'/>
      <p> Content optimization 
      </p>
    </li>
    <li>
      <BiCheckCircle className='service_icon'/>
      <p> Content distribution 
      </p>
    </li>
  </ul>
  </article>
  {/* End of Content Creation */}
</div>
</section>
  )
}

export default Services
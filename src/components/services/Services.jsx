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
    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    </p>
  </li>
  <li>
    <BiCheckCircle className='service_icon'/>
    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    </p>
  </li>
  <li>
    <BiCheckCircle className='service_icon'/>
    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    </p>
  </li>
  <li>
    <BiCheckCircle className='service_icon'/>
    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    </p>
  </li>
  <li>
    <BiCheckCircle className='service_icon'/>
    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    </p>
  </li>
  <li>
    <BiCheckCircle className='service_icon'/>
    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
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
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      </p>
    </li>
    <li>
      <BiCheckCircle className='service_icon'/>
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      </p>
    </li>
    <li>
      <BiCheckCircle className='service_icon'/>
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      </p>
    </li>
    <li>
      <BiCheckCircle className='service_icon'/>
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      </p>
    </li>
    <li>
      <BiCheckCircle className='service_icon'/>
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      </p>
    </li>
    <li>
      <BiCheckCircle className='service_icon'/>
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      </p>
    </li>
  </ul>
  </article>
  {/* End of web development*/}

  <article className = "service">
    <div className = "service_head">
    <h3>Content Creation</h3>
    </div>
    <ul className = "service_list">
    <li>
      <BiCheckCircle className='service_icon'/>
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      </p>
    </li>
    <li>
      <BiCheckCircle className='service_icon'/>
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      </p>
    </li>
    <li>
      <BiCheckCircle className='service_icon'/>
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      </p>
    </li>
    <li>
      <BiCheckCircle className='service_icon'/>
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      </p>
    </li>
    <li>
      <BiCheckCircle className='service_icon'/>
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      </p>
    </li>
    <li>
      <BiCheckCircle className='service_icon'/>
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
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
import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/Password_Monochromatic.png'
import IMG2 from '../../assets/Checklist_Monochromatic.png'
import IMG3 from '../../assets/CSS_Monochromatic.png'
import IMG4 from '../../assets/Online team meeting _Monochromatic.png'
import IMG5 from '../../assets/Question_Flatline.png'
import IMG6 from '../../assets/Weather_Monochromatic.png'

const data= [ 
  {
    id:1 ,
    image:IMG1,
    title: 'SEO Horizeon',
    github:'https://github.com/aartimehar',
    demo: 'https://dribbble.com/shots/20952494-Handyman-App'
  },
  {
    id:2 ,
    image:IMG2,
    title: 'SEO Horizeon',
    github:'https://github.com/aartimehar',
    demo: 'https://dribbble.com/shots/20952494-Handyman-App'
  },
  {
    id:3 ,
    image:IMG3,
    title: 'SEO Horizeon',
    github:'https://github.com/aartimehar',
    demo: 'https://dribbble.com/shots/20952494-Handyman-App'
  },
  {
    id:4 ,
    image:IMG4,
    title: 'SEO Horizeon',
    github:'https://github.com/aartimehar',
    demo: 'https://dribbble.com/shots/20952494-Handyman-App'
  },
  {
    id:5 ,
    image:IMG5,
    title: 'SEO Horizeon',
    github:'https://github.com/aartimehar',
    demo: 'https://dribbble.com/shots/20952494-Handyman-App'
  },
  {
    id:6 ,
    image:IMG6,
    title: 'SEO Horizeon',
    github:'https://github.com/aartimehar',
    demo: 'https://dribbble.com/shots/20952494-Handyman-App'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
    <div className="container portfolio_container">
      {
        data.map (({id , image, title, github,demo}) => {
          return (
            <article  key = {id} className='item-portfolio'>
            <div className="portfolio_image-item"> 
            <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio-item-cta">
            <a href={github} className='btn'>  Github-repo    </a>
            <a href={demo} className='btn btn-primary' target= '_blank'> Live-Demo</a>
            </div>
            </article>
          )
        }
        )
      }
  
    </div>
    </section>
  )
}

export default Portfolio
import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/scott-webb-vrYennkq3QM-unsplash.jpg'
import IMG2 from '../../assets/My-project3.png'
import IMG3 from '../../assets/My-project3.png'
import IMG4 from '../../assets/My-project3.png'
import IMG5 from '../../assets/My-project3.png'
import IMG6 from '../../assets/My-project3.png'

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
    image:IMG1,
    title: 'SEO Horizeon',
    github:'https://github.com/aartimehar',
    demo: 'https://dribbble.com/shots/20952494-Handyman-App'
  },
  {
    id:3 ,
    image:IMG1,
    title: 'SEO Horizeon',
    github:'https://github.com/aartimehar',
    demo: 'https://dribbble.com/shots/20952494-Handyman-App'
  },
  {
    id:4 ,
    image:IMG1,
    title: 'SEO Horizeon',
    github:'https://github.com/aartimehar',
    demo: 'https://dribbble.com/shots/20952494-Handyman-App'
  },
  {
    id:5 ,
    image:IMG1,
    title: 'SEO Horizeon',
    github:'https://github.com/aartimehar',
    demo: 'https://dribbble.com/shots/20952494-Handyman-App'
  },
  {
    id:6 ,
    image:IMG1,
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
            <a href={github} className='btn'>Github</a>
            <a href={demo} className='btn btn-primary' target= '_blank'>Live Demo</a>
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
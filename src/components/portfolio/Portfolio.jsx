import React from 'react'
import './portfolio1.css'
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
    title: 'Password Generator',
    github:'https://github.com/aartimehar/Intermediate-JavaScript-Password-Generator',
    demo: 'https://aartimehar.github.io/Intermediate-JavaScript-Password-Generator/'
  },
  {
    id:2 ,
    image:IMG2,
    title: 'Work Day Scheduler',
    github:'https://github.com/aartimehar/planner-app-challenge',
    demo: ' https://aartimehar.github.io/planner-app-challenge/'
  },
  {
    id:3 ,
    image:IMG3,
    title: ' Grid System ',
    github:'https://github.com/aartimehar/Grid-system',
    demo: 'https://aartimehar.github.io/Grid-system/'
  },
  {
    id:4 ,
    image:IMG4,
    title: 'Team Profile Generator',
    github:'https://github.com/aartimehar/Team-Profile-Generator',
    demo: 'https://aartimehar.github.io/Team-Profile-Generator/'
  },
  {
    id:5 ,
    image:IMG5,
    title: 'Code-Quiz App',
    github:'https://github.com/aartimehar/ubbc-code-quiz-lesson',
    demo: 'https://aartimehar.github.io/ubbc-code-quiz-lesson/index.html'
  },
  {
    id:6 ,
    image:IMG6,
    title: 'Weather Dashboard App',
    github:'https://github.com/aartimehar/WeatherApp-with-UI',
    demo: 'https://aartimehar.github.io/WeatherApp-with-UI/'
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
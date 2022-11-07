import React from 'react'
import './portfolio.css'
import IMG1 from '../../Assets/port1.jpg'
import IMG2 from '../../Assets/port2.jpg'
import IMG3 from '../../Assets/port3.jpg'
import IMG4 from '../../Assets/port4.jpg'
import IMG5 from '../../Assets/port5.jpg'
import IMG6 from '../../Assets/port6.jpg'

const data = [
  {
    id:1,
    image:IMG1,
    title: 'Crypto Currency Dashboard',
    github: 'https://github.com',
    demo: 'https://dribble.com'
  },
  {
    id:2,
    image:IMG2,
    title: 'Charts Template in Figma',
    github: 'https://github.com',
    demo: 'https://dribble.com'
  },
  {
    id:3,
    image:IMG3,
    title: 'Figma Dashboard UI kit',
    github: 'https://github.com',
    demo: 'https://dribble.com'
  },
  {
    id:4,
    image:IMG4,
    title: 'E-learning Lab educational website',
    github: 'https://github.com',
    demo: 'https://dribble.com'
  },
  {
    id:5,
    image:IMG5,
    title: 'Robinhood stock market portfolio',
    github: 'https://github.com',
    demo: 'https://dribble.com'
  },
  {
    id:6,
    image:IMG6,
    title: 'React devdev bootstrap portfolio',
    github: 'https://github.com',
    demo: 'https://dribble.com'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({id,image,title,github,demo}) => {
          return (
            <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
            <a href={github} className='btn' target='_blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio
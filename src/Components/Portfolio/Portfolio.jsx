import React from 'react'
import './portfolio.css'
import IMG1 from '../../Assets/E_Learning_Lab.png'
import IMG2 from '../../Assets/DungeonTime.png'
import IMG3 from '../../Assets/Candy_Time.png'
import IMG4 from '../../Assets/port4.jpg'
import IMG5 from '../../Assets/port5.jpg'
import IMG6 from '../../Assets/port6.jpg'

const data = [
  {
    id:1,
    image:IMG1,
    title: 'E-Learning Lab',
    description:"Online Educational platform made using Django framework. Backend hanlded using python along with SQLite database. Frontend hanleded using HTML/CSS along with Bootstrap.",
    github: 'https://github.com/Abhiraj03/E-Learning-Lab',
    demo: 'https://elearning-lab.org/'
  },
  {
    id:2,
    image:IMG2,
    title: 'DungeonTime using C# in Unity',
    description:"A RPG Dungeon exploration sword and slash game application made using Unity's 2D Developer Kit and 16x16 Dungeon Tileset. (Game under development)",
    github: 'https://github.com/Abhiraj03/DungeonTime',
    demo: 'https://drive.google.com/file/d/17Feo2ZymRJaZZshWDW6Rl-rW23srds4M/view?usp=sharing'
  },
  {
    id:3,
    image:IMG3,
    title: 'CANDY TIME using p5js',
    description:"A candy themed based, colletion of games created using p5js creative coding javascript library. Consists of 5 indivisually developed games.",
    github: 'https://github.com/Abhiraj03/Candy-Time',
    demo: 'https://abhiraj03.github.io/Candy-Time/'
  },
  // {
  //   id:4,
  //   image:IMG4,
  //   title: 'E-learning Lab educational website',
  //   github: 'https://github.com',
  //   demo: 'https://dribble.com'
  // },
  // {
  //   id:5,
  //   image:IMG5,
  //   title: 'Robinhood stock market portfolio',
  //   github: 'https://github.com',
  //   demo: 'https://dribble.com'
  // },
  // {
  //   id:6,
  //   image:IMG6,
  //   title: 'React devdev bootstrap portfolio',
  //   github: 'https://github.com',
  //   demo: 'https://dribble.com'
  // },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({id,image,title,description,github,demo}) => {
          return (
            <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <p>{description}</p>
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
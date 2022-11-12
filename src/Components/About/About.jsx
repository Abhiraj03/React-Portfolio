import './about.css'
import React from 'react'
import ME from '../../Assets/SeaProfile.jpg'
import {FaAward} from 'react-icons/fa'
import {HiUsers} from 'react-icons/hi'
import {RiFoldersFill} from 'react-icons/ri'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>

      <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>3+ Years Coding</small>
          </article>

          <article className='about__card'>
            <HiUsers className='about__icon'/>
            <h5>Languages</h5>
            <small>10+ Coding</small>
          </article>
          
          <article className='about__card'>
            <RiFoldersFill className='about__icon'/>
            <h5>Projects</h5>
            <small>5+ Completed</small>
          </article>
        </div>

        <p>
          I'm a sophomore at ASU's Class of 2025, majorining in Computer Science.
          My interests include software/webapp design and development, artifical intelligence, machine learning,
          game development and robotics.<br/>
          Passion for travelling, learning new things each day.
        </p>

        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
      </div>
    </section>
  )
}

export default About
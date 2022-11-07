import './about.css'
import React from 'react'
import ME from '../../Assets/profile.jpg'
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
            <small>3+ Years Working</small>
          </article>

          <article className='about__card'>
            <HiUsers className='about__icon'/>
            <h5>Clients</h5>
            <small>300+ Worldwide</small>
          </article>
          
          <article className='about__card'>
            <RiFoldersFill className='about__icon'/>
            <h5>Projects</h5>
            <small>80+ Completed</small>
          </article>
        </div>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia dicta praesentium quaerat nemo soluta rem repellat ipsum exercitationem illum temporibus facere possimus eum porro, sed, excepturi laborum esse cum quam distinctio tempore non fuga commodi id molestiae. Itaque nesciunt voluptate quos, dolore odit, nam quas soluta nisi in ipsam ut!
        </p>

        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
      </div>
    </section>
  )
}

export default About
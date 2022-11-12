import React from 'react'
import './nav.css'
import {HiHome} from 'react-icons/hi'
import {FaUserAlt} from 'react-icons/fa'
import {GiWhiteBook} from 'react-icons/gi'
import {MdHomeRepairService} from 'react-icons/md'
import {MdMessage} from 'react-icons/md'
import {AiFillProject} from 'react-icons/ai'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><HiHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUserAlt /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><GiWhiteBook /></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><AiFillProject /></a>
      {/* <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><MdHomeRepairService /></a> */}
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdMessage /></a>
    </nav>
  )
}

export default Nav
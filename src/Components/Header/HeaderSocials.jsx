import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {GrInstagram} from 'react-icons/gr'

function HeaderSocials() {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/abhiraj-chaudhary-0b0010217" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/Abhiraj03" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://www.instagram.com/abhiraj002/" target=" _blank" rel="noreferrer"><GrInstagram /></a>
    </div>
  )
}

export default HeaderSocials
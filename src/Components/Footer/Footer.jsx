import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {RiInstagramFill} from 'react-icons/ri'
import {RiWhatsappFill} from 'react-icons/ri'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>ABHIRAJ</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Expeience</a></li>
        {/* <li><a href="#services">Services</a></li> */}
        <li><a href="#portfolio">Porfolio</a></li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/abhiraj.chaudhary.129" target="_blank" rel="noreferrer"><BsFacebook /></a>
        <a href="https://www.instagram.com/abhiraj002/" target="_blank" rel="noreferrer"><RiInstagramFill /></a>
        <a href="https://wa.me/16026329282/" target="_blank" rel="noreferrer"><RiWhatsappFill /></a>
        <a href="https://github.com/Abhiraj03" target="_blank" rel="noreferrer"><FaGithub /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Abhiraj Chaudhary. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
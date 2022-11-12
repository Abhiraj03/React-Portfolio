import React from 'react'
import './contact.css'
import {HiMail} from 'react-icons/hi'
import {SiMessenger} from 'react-icons/si'
import {RiWhatsappFill} from 'react-icons/ri'
import {useRef} from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_19639zo', 'template_j45j4io', form.current, 'NXp2t2VRyyrsrEm13')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>rajabhirajusa@gmail.com</h5>
            <a href="mailto:rajabhirajusa@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <SiMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>messengerId</h5>
            <a href="https://ig.me/m/abhiraj002" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <RiWhatsappFill className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+1-602-632-9282</h5>
            <a href="https://wa.me/16026329282/" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Full Name' required />
          <input type="email" name="email" placeholder='Email'  required />
          <textarea name="message" rows="7" placeholder='Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      
      </div>
    </section>
  )
}

export default Contact
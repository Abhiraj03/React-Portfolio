import React from 'react'
import Header from './Components/Header/Header'
import About from './Components/About/About'
import Experience from './Components/Experience/Experience'
import Footer from './Components/Footer/Footer'
import Nav from './Components/Nav/Nav'
import Portfolio from './Components/Portfolio/Portfolio'
import Services from './Components/Services/Services'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App
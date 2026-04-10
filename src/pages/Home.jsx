import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'

const Home = () => {
  return (
    <section className='home'>
      <div className='container content text-center'>

        <h1 className='name'>
          Hi, I'm <span>Aadesh Sonawane</span>
        </h1>

        <h2 className='role'>
          <i className="bi bi-code-slash me-2"></i>
          Fullstack Developer
        </h2>

        <p className='desc'>
          I’m a self-taught web developer with a background in hotel management.
          I love building modern, responsive web applications using HTML, CSS,
          Bootstrap and JavaScript.
        </p>

    
        <div className='buttons'>

          <Link className='btn primary' to="https://github.com/aadeshsonawane" target="_blank">
            <i className="bi bi-github me-2"></i> Github
          </Link>

          <Link className='btn outline' to="https://www.linkedin.com/in/aadesh-sonawane-9baa951b6/" target="_blank">
            <i className="bi bi-linkedin me-2"></i> Linkedin
          </Link>

          <Link className='btn outline' to="mailto:aadeshsonawane307@gmail.com">
            <i className="bi bi-envelope-fill me-2"></i> Email
          </Link>

          <Link className='btn outline' to="https://wa.me/8805606015" target="_blank">
            <i className="bi bi-whatsapp me-2"></i> WhatsApp
          </Link>

          <Link className='btn outline' to="tel:8805606015">
            <i className="bi bi-telephone-fill me-2"></i> Call
          </Link>

        </div>

      
        <Link
          className='cv-btn'
          to="https://aadesh-sonawane.tiiny.site/"
          target="_blank"
        >
          <i className="bi bi-download me-2"></i>
          Download CV
        </Link>

      </div>
    </section>
  )
}

export default Home
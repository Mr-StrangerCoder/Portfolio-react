import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'

const Home = () => {
  return (
    <section className='home'>
      <div className='content'>

        <div className='avatar'>AS</div>

        {/* <p className='greeting'>Hello, world!</p> */}

        <h1 className='name'>
          I'm <span>Aadesh Sonawane</span>
        </h1>

        <div className='role-badge'>
          <i className="bi bi-code-slash"></i>
          Fullstack Developer
        </div>

        <p className='desc'>
          A passionate Full Stack Developer focused on building modern, responsive,
          and user-friendly web applications. Hands-on experience with HTML, CSS,
          JavaScript, Bootstrap, and React — turning ideas into real-world projects.
        </p>

        <div className='divider'></div>

        <div className='social-links'>
          <Link className='social-btn github' to="https://github.com/aadeshsonawane" target="_blank">
            <i className="bi bi-github"></i> GitHub
          </Link>
          <Link className='social-btn linkedin' to="https://www.linkedin.com/in/aadesh-sonawane-9baa951b6/" target="_blank">
            <i className="bi bi-linkedin"></i> LinkedIn
          </Link>
          <Link className='social-btn email' to="mailto:aadeshsonawane307@gmail.com">
            <i className="bi bi-envelope-fill"></i> Email
          </Link>
          <Link className='social-btn whatsapp' to="https://wa.me/8805606015" target="_blank">
            <i className="bi bi-whatsapp"></i> WhatsApp
          </Link>
          <Link className='social-btn phone' to="tel:8805606015">
            <i className="bi bi-telephone-fill"></i> Call
          </Link>
        </div>

        <Link className='cv-btn' to="https://aadesh-sonawane.tiiny.site/" target="_blank">
          <i className="bi bi-download"></i> Download CV
        </Link>

      </div>
    </section>
  )
}

export default Home
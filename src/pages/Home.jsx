import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'


const Home = () => {
  return (
    <body className='home text-white conatiner'>
      <div className='conatiner w-50 mx-auto mt-5'>
        <h1 className='gradient-text mb-3  fw-bold text-warning'>Aadesh Sonawane</h1>
        <h3>And i'm a <b className='text-info'>Fullstack Developer</b></h3>
        <p className='fw-bold fs-5 mt-3 mb-4'>I’m Aadesh Sonawane, a self-taught web developer  with a background in hotel management. I’m passionate about turning creative ideas into functional web applications using modern technologies like HTML, CSS, and JavaScript.</p>
        <div className='w-50'>
          <Link className='btn btn-outline-primary btn-sm' to={"https://github.com/aadeshsonawane"}><i class="bi bi-github"></i>Github</Link> 

           <Link className='btn btn-outline-secondary btn-sm' to="https://www.linkedin.com/in/aadesh-sonawane-9baa951b6/"><img class="icon" src="./img/linkedin.png" alt="linkedin"/></Link>
            <Link className='btn btn-outline-info btn-sm'  to="mailto: aadeshsonawane307@gmail.com"><img class="icon" src="./img/email.png" alt="gmail"/></Link>

            <Link className='btn btn-outline-danger btn-sm' to="https://wa.me/8805606015" target="_blank"><img class="icon" src="./img/whatsapp.png" alt="whatsapp"/></Link>

            <Link className='btn btn-outline-success btn-sm'  to="tel:8805606015"><img class="icon" src="./img/viber.png" alt="phone"/></Link>
  
            <Link className='btn btn-outline-warning btn-sm' to="https://aadesh-sonawane.tiiny.site/">Download CV</Link>

        </div>
        
      </div>

        </body>
        )
}

        export default Home
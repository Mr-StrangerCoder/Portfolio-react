import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'



const Home = () => {
  return (
    <body className='home text-white conatiner'>
      <div className='conatiner w-75 mx-auto mt-5'>
        <h1 className='gradient-text mb-3  fw-bold text-warning'>Aadesh Sonawane</h1>
        <h3>And i'm a <b className='text-info'>Fullstack Developer</b></h3>
        <div className='w-75'>
          <p className='fw-bold fs-5 mt-3 mb-4'>I’m Aadesh Sonawane, a self-taught web developer  with a background in hotel management. I’m passionate about turning creative ideas into functional web applications using modern technologies like HTML, CSS, Bootstrap and JavaScript.</p>
        </div>
        
        <div className='w-50'>
          <Link className='btn' to={"https://github.com/aadeshsonawane"}><i class="bi bi-github"></i> Github</Link> 

           <Link className='btn' to="https://www.linkedin.com/in/aadesh-sonawane-9baa951b6/"><i class="bi bi-linkedin"></i> Linkedin</Link>
           
            <Link className='btn'  to="mailto: aadeshsonawane307@gmail.com"><i class="bi bi-envelope-fill"></i> Gmail</Link>

            <Link className='btn' to="https://wa.me/8805606015" target="_blank"><i class="bi bi-whatsapp"></i> Whatsapp</Link>

            <Link className='btn'  to="tel:8805606015"><i class="bi bi-telephone-fill"></i> Phone</Link>
  
            <Link className='btn btn-outline-warning btn-sm' to="https://aadesh-sonawane.tiiny.site/"><i class="bi bi-arrow-down-circle-fill"></i> Download CV</Link>
            
        </div>
        
      </div>
      

        </body>
        )
}

        export default Home
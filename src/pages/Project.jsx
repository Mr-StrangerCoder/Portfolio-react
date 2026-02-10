import React from 'react'
import './project.css'
import img from '../assets/2.jpg'
import Project1 from '../components/Project1'
import Project2 from '../components/Project2'
import Project3 from '../components/Project3'



const Project = () => {
  return (
    <body className='project text-white conatiner w-100'>
      <h2 className="section-title mt-3">My Projects</h2>
      <div className='container-fluid mx-auto'>
        <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
             <Project1/>
            </div>
            <div class="carousel-item">
             <Project2/>
            </div>
            <div class="carousel-item">
             <Project3/>  
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon me-5" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon ms-5" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </body>
  )
}

export default Project


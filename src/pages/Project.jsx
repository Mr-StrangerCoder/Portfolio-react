import React from 'react'
import './project.css'
import Project1 from '../components/Project1'
import Project2 from '../components/Project2'
import Project3 from '../components/Project3'

const Project = () => {


  return (
    <section className='projects '>

      <h1 className='title'>My Projects</h1>

      <div className='container-fluid px-5 ' style={{paddingLeft:"20rem"}}>
        <div
          id="carouselExample"
          className="carousel slide  ms-3"
          data-bs-ride="carousel"
        >
          
          <div className="carousel-indicators ">
            <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" className="active"></button>
            <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2"></button>
          </div>

    
          <div className="carousel-inner ms-5">
            <div className="carousel-item active">
              <Project1 />
            </div>
            <div className="carousel-item">
              <Project2 />
            </div>
            <div className="carousel-item">
              <Project3 />
            </div>
          </div>


          <button
            className="carousel-control-prev "
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
            <span className="visually-hidden">Previous</span>
          </button>

          <button
            className="carousel-control-next"
            
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Project
import React from 'react'
import { Link } from 'react-router-dom'
import "../pages/project.css";

import img1 from '../assets/weather.png'
import img2 from '../assets/musiCloud.png'
import img3 from '../assets/calculator.jpg'
import img4 from "../assets/todo.jpg"

const Project1 = () => {

  const projects = [
    {
      title: "Mausam Vaani",
      img: img1,
      desc: "Real-time weather app using React & API.",
      tech: "HTML, CSS, JS, API",
      live: "https://mausamvaani.netlify.app/",
      code: "https://github.com/Mr-StrangerCoder/Weather-App.git"
    },
    {
      title: "Music App",
      img: img2,
      desc: "Spotify-like music player with clean UI.",
      tech: "HTML, CSS",
      live: "https://mymusicloud.netlify.app",
      code: "https://github.com/Mr-StrangerCoder/Music-House-.git"
    },
    {
      title: "Todo App",
      img: img4,
      desc: "Task manager to add, delete & organize tasks.",
      tech: "React, Bootstrap",
      live: "https://fastidious-lollipop-c36b37.netlify.app/",
      code: "https://github.com/Mr-StrangerCoder/Todo-app.git"
    },
    {
      title: "Calculator",
      img: img3,
      desc: "Simple calculator using React components.",
      tech: "React, Bootstrap Javascript",
      live: "https://github.com/Mr-StrangerCoder/calculator-react",
      code: "https://github.com/Mr-StrangerCoder/calculator-react"
    }
  ]

  return (
    <section className='projects'>
      <div className='container'>

        <h1 className='text-center title mb-4'>My Projects</h1>

        <div className='row g-4'>

          {projects.map((project, index) => (
            <div className='col-12 col-sm-6 col-lg-3' key={index}>

              <div className="project-card">

                <img src={project.img} className="project-img" alt={project.title} />

                <div className="card-body">

                  <h5 className="card-title">{project.title}</h5>

                  <p className="card-text">{project.desc}</p>

                  <p className='tech'>
                    <i className="bi bi-tools me-2"></i>
                    {project.tech}
                  </p>

                  <div className='btn-group d-flex gap-2 mt-2'>

                    <Link to={project.live} target="_blank" className="btn primary">
                      <i className="bi bi-box-arrow-up-right me-1"></i>
                      Live
                    </Link>

                    <Link to={project.code} target="_blank" className="btn outline">
                      <i className="bi bi-github me-1"></i>
                      Code
                    </Link>

                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Project1
import React from 'react'
import { Link } from 'react-router-dom'

import img1 from '../assets/weather.png'
import img2 from '../assets/musiCloud.png'
import img3 from '../assets/calculator.jpg'
import img4 from "../assets/todo.jpg"

 const Project1 = () => {

  const projects = [
    {
      title: "Mausam Vaani",
      img: img1,
      desc: "Built a Weather Application using React and REST API integration to display real-time weather information dynamically.",
      tech: "HTML, CSS, API, JAVASCRIPT",
      live: "https://mausamvaani.netlify.app/",
      code: "https://github.com/Mr-StrangerCoder/Weather-App.git"
    },
    {
      title: "Music Application",
      img: img2,
      desc: "MP3 Music player like spotify, designed a clean user-friendly UI with CSS styling, including play buttons, song.",
      tech: "HTML, CSS",
      live: "https://mymusicloud.netlify.app",
      code: "https://github.com/Mr-StrangerCoder/Music-House-.git"
    },
    {
      title: "Todo-App",
      img: img4,
      desc: "A simple task management app that lets users add, delete, and organize daily tasks.",
      tech: "JS, REACT.JS BOOTSTRAP",
      live: "https://fastidious-lollipop-c36b37.netlify.app/",
      code: "https://github.com/Mr-StrangerCoder/Todo-app.git"
    },
    {
      title: "Calculator",
      img: img3,
      desc: "Built a simple calculator using React to perform basic arithmetic operations. Used React components.",
      tech: "JS, REACT, BOOTSTRAP",
      live: "https://github.com/Mr-StrangerCoder/calculator-react",
      code: "https://github.com/Mr-StrangerCoder/calculator-react"
    }
  ]

  return (
    <div className='container mx-auto mt-2'>
      <div className='d-flex justify-content-center gap-3 flex-wrap'>

        {projects.map((project, index) => {
          return (
            <div key={index}>
              <div className="project-card p-3 px-2" style={{ width: '16rem', height: '28rem' }}>

                <img src={project.img} className="card-img-top project-img" alt={project.title} />

                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>

                  <div className='h-25'>
                    <p className="card-text">{project.desc}</p>
                  </div>

                  <p className='tech'>{project.tech}</p>

                  <div className='btn-group d-flex'>
                    <Link to={project.live} className="btn">Live</Link>
                    <Link to={project.code} className="btn btn-outline">Code</Link>
                  </div>

                </div>
              </div>
            </div>
          )

        })}

      </div>
    </div>
  )
}

export default Project1
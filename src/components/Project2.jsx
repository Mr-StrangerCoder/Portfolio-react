import React from 'react'
import { Link } from 'react-router-dom'
import '../pages/project.css'

import img from '../assets/2.jpg'
import img5 from '../assets/guessnumber.png'

const Project2 = () => {

  const projectData = [
    {
      title: "Guess Number",
      img: img5,
      desc: "Guess the number game using JavaScript & DOM.",
      tech: "HTML, CSS, JS",
      live: "https://guessmefast.netlify.app/",
      code: "https://github.com/Mr-StrangerCoder/guess-number.git"
    },
    {
      title: "Project Demo",
      img: img,
      desc: "Sample project description here.",
      tech: "HTML, CSS",
      live: "#",
      code: "#"
    },
    {
      title: "Project Demo",
      img: img,
      desc: "Sample project description here.",
      tech: "HTML, CSS",
      live: "#",
      code: "#"
    },
    {
      title: "Project Demo",
      img: img,
      desc: "Sample project description here.",
      tech: "HTML, CSS",
      live: "#",
      code: "#"
    }
  ]

  return (
    <div className='container py-3 ms-2'>
      <div className='row g-4 justify-content-center'>
        {projectData.map((item, index) => (
          <div className='col-12 col-sm-6 col-lg-3' key={index}>
            <div className="project-card">
              <div className="img-wrapper">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.desc}</p>
                <p className='tech'>
                  <i className="bi bi-tools"></i>
                  {item.tech}
                </p>
                <div className='btn-group'>
                  <Link to={item.live} target="_blank" className="btn-live">
                    <i className="bi bi-box-arrow-up-right"></i> Live
                  </Link>
                  <Link to={item.code} target="_blank" className="btn-code">
                    <i className="bi bi-github"></i> Code
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Project2
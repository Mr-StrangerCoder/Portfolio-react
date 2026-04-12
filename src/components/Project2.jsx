import React from 'react'
import { Link } from 'react-router-dom'
import "../pages/project.css";

import img from '../assets/2.jpg'
import img5 from "../assets/guessnumber.png"

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
    <div className='container py-3'>

      <div className='row g-4 justify-content-center'>

        {projectData.map((item, index) => (
          <div className='col-12 col-sm-6 col-lg-3' key={index}>

            <div className="project-card h-100 d-flex flex-column">

              {/* Image */}
              <div className="img-wrapper">
                <img src={item.img} alt={item.title} />
              </div>

              {/* Content */}
              <div className="card-body d-flex flex-column">

                <h5 className="card-title">{item.title}</h5>

                <p className="card-text flex-grow-1">
                  {item.desc}
                </p>

                <p className='tech'>
                  <i className="bi bi-tools me-2"></i>
                  {item.tech}
                </p>

                {/* Buttons */}
                <div className='d-flex gap-2 mt-2'>

                  <Link to={item.live} target="_blank" className="btn primary">
                    <i className="bi bi-box-arrow-up-right"></i>
                  </Link>

                  <Link to={item.code} target="_blank" className="btn outline">
                    <i className="bi bi-github"></i>
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
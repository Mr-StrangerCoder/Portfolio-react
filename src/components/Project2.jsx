import React from 'react'
import { Link } from 'react-router-dom'

import img from '../assets/2.jpg'
import img5 from "../assets/guessnumber.png"

const Project2 = () => {

  const projectData = [
    {
      title: "Guess Number",
      img: img5,
      desc: "Developed a Guess the Number Game using JavaScript and DOM manipulation",
      tech: "HTML, CSS , JAVASCRIPT",
      live: "https://guessmefast.netlify.app/",
      code: "https://github.com/Mr-StrangerCoder/guess-number.git"
    },
    {
      title: "Card title",
      img: img,
      desc: "Some quick example text to build on the card title and make up the bulk of the card’s content.",
      tech: "HTML, CSS",
      live: "#",
      code: "#"
    },
    {
      title: "Card title",
      img: img,
      desc: "Some quick example text to build on the card title and make up the bulk of the card’s content.",
      tech: "HTML, CSS",
      live: "#",
      code: "#"
    },
    {
      title: "Card title",
      img: img,
      desc: "Some quick example text to build on the card title and make up the bulk of the card’s content.",
      tech: "HTML, CSS",
      live: "#",
      code: "#"
    }
  ]

  return (
    <div className='container mx-auto mt-2'>
      <div className='d-flex justify-content-center gap-3'>

        {projectData.map((item, index) => {
          return (
            <div key={index}>
              <div className="project-card p-3" style={{ width: '16rem' }}>

                <img src={item.img} className="card-img-top project-img" alt="..." />

                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>

                  <p className="card-text">{item.desc}</p>

                  <p className='tech'>{item.tech}</p>

                  <div className='btn-group d-flex'>
                    <Link to={item.live} className="btn">Live</Link>
                    <Link to={item.code} className="btn btn-outline">Code</Link>
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

export default Project2
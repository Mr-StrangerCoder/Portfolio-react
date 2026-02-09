import React from 'react'
import './project.css'
import { FaLaptopCode, FaShoppingCart, FaUserTie } from "react-icons/fa";



const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    desc: "Personal portfolio built using React with animations and responsive design.",
    icon: <FaUserTie />,
    tech: "React, CSS, Bootstrap"
  },
  {
    id: 2,
    title: "E-Commerce App",
    desc: "Product listing, filter, cart system using API integration.",
    icon: <FaShoppingCart />,
    tech: "React, API, JavaScript"
  },
  {
    id: 3,
    title: "Admin Dashboard",
    desc: "Dashboard with charts, user management and authentication.",
    icon: <FaLaptopCode />,
    tech: "React, Chart.js"
  }
  
];


const Project = () => {
  return (
    <body className='project text-white conatiner'>
      <section className="projects-section">
        <h2 className="section-title">My Projects</h2>

        <div className="projects-container">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-icon">{project.icon}</div>

              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <span className="tech">{project.tech}</span>

              <div className="btn-group">
                <button className="btn">Live</button>
                <button className="btn btn-outline">Code</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </body>
  )
}

export default Project


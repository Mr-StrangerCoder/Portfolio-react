import React from 'react'
import './skills.css'

const Skills = () => {

  const skillsData = [
    { name: "HTML",         icon: "bi bi-filetype-html",  value: 80 },
    { name: "CSS",          icon: "bi bi-filetype-css",   value: 80 },
    { name: "JavaScript",   icon: "bi bi-filetype-js",    value: 70 },
    { name: "Bootstrap",    icon: "bi bi-bootstrap",      value: 60 },
    { name: "React",        icon: "bi bi-filetype-jsx",   value: 75 },
    { name: "Node.js",      icon: "bi bi-server",         value: 75 },
    { name: "MongoDB",      icon: "bi bi-database",       value: 65 },
    { name: "MySQL",        icon: "bi bi-table",          value: 65 },
    { name: "Tailwind CSS", icon: "bi bi-wind",           value: 70 },
    { name: "GitHub",       icon: "bi bi-github",         value: 65 },
  ]

  return (
    <section className='skills'>
      <div className='skills-container'>

        <h1 className='title'>My Skills</h1>

        <div className='row'>
          {skillsData.map((skill, index) => (
            <div key={index} className='col-12 col-md-6'>
              <div className='skill-item'>

                <div className='skill-label'>
                  <span className='skill-name'>
                    <i className={skill.icon}></i>
                    {skill.name}
                  </span>
                  <span className='skill-percent'>{skill.value}%</span>
                </div>

                <div className='progress'>
                  <div
                    className='progress-bar'
                    style={{ width: `${skill.value}%` }}
                  ></div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills
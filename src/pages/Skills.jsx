import React from 'react'
import './skills.css'

const Skills = () => {

  const skillsData = [
    { name: "HTML", value: 80 },
    { name: "CSS", value: 80 },
    { name: "JavaScript", value: 70 },
    { name: "Bootstrap", value: 60 },
    { name: "React", value: 75 },
    { name: "Node.js", value: 75 },
    { name: "MongoDB", value: 65 },
    { name: "MySQL", value: 65 },
    { name: "Tailwind CSS", value: 70 },
    { name: "GitHub", value: 65 }
  ]

  return (
    <body className='skills text-white container'>
      <div className='dark p-4 mx-auto mt-3'>

        <h1 className='text-center fw-bold mb-4' style={{ color: '#3daee9' }}>
          My Skills
        </h1>

        <div className='row'>

          {skillsData.map((skill, index) => {
            return (
              <div key={index} className='col-12 col-md-6 mb-4'>

                
                <div className='d-flex justify-content-between mb-3'>
                  <span>{skill.name}</span>
                  <span>{skill.value}%</span>
                </div>

                {/* Progress Bar */}
                <div className='progress' style={{ height: '8px' }}>
                  <div 
                    className='progress-bar'
                    style={{ width: `${skill.value}%` }}
                  ></div>
                </div>

              </div>
            )
          })}

        </div>

      </div>
    </body>
  )
}

export default Skills
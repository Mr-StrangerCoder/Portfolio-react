import React from 'react'
import './skills.css'

const Skills = () => {

  const skill = {
    html: 80,
    css: 80,
    js: 70,
    bt: 60,
    c: 70,
    react: 75,
    node:75,
    github: 65
  }
  return (
    <body className='skills text-white conatiner'>

      <div className='ps-5 w-75 mx-auto mt-3 bg-dark pt-3'style={{ opacity: "0.8", borderRadius: '2rem'}}>
        <h1 className='text-center fw-bold ' style={{ color: '#3daee9' }}>My Skills</h1>
        <div className='row mt-4'>
          <div className='col-12 col-md-6'>

            <div className='w-75  d-flex '>
              <div>
                <i className="bi bi-filetype-html  me-5"></i>
                <p>HTML</p>
              </div>
              <input className='w-75' type="range" value={skill.html} readOnly /> <p className='ms-5 mt-5'>{skill.html}%</p>
            </div>

            <div className='w-75  d-flex'>
              <div className=''>
                <i class="bi bi-css me-5" ></i>
                <p className='ms-2'>CSS</p>
              </div>
              <input className='w-75' type="range" value={skill.css} readOnly /> <p className='ms-5 mt-5'>{skill.css}%</p>
            </div>


            <div className='w-75  d-flex'>
              <div>
                <i className="bi bi-javascript  me-5"></i>
                <p>javascript</p>
              </div>
              <input className='w-75' type="range" value={skill.js} readOnly /> <p className='ms-5 mt-5'>{skill.js}%</p>
            </div>

            <div className='w-75  d-flex'>
              <div>
                <i className="bi bi-bootstrap"></i>
                <p>Bootstrap</p>
              </div>
              <input className='w-75' type="range" value={skill.html} readOnly /> <p className='ms-5 mt-5'>{skill.bt}%</p>
            </div>




          </div>
          <div className='col-12 col-md-6'>
            <div className='w-75  d-flex '>
              <div>
                <i class="bi bi-c-circle-fill me-5"></i>
                <p className='ms-3'>C</p>
              </div>
              <input className='w-75' type="range" value={skill.html} readOnly /> <p className='ms-5 mt-5'>{skill.c}%</p>
            </div>

            <div className='w-75  d-flex'>
              <div className=''>
                <i class="bi bi-filetype-jsx me-5"></i>
                <p>React</p>
              </div>
              <input className='w-75' type="range" value={skill.css} readOnly /> <p className='ms-5 mt-5'>{skill.react}%</p>
            </div>


            <div className='w-75  d-flex'>
              <div>
                <i class="bi bi-file-earmark-code-fill me-5"></i>
                <p>Node.js</p>
              </div>
              <input className='w-75' type="range" value={skill.js} readOnly /> <p className='ms-5 mt-5'>{skill.node}%</p>
            </div>

            <div className='w-75  d-flex'>
              <div>
                <i class="bi bi-github me-5"></i>
                <p>Github</p>
              </div>
              <input className='w-75' type="range" value={skill.html} readOnly /> <p className='ms-5 mt-5'>{skill.github}%</p>
            </div>



          </div>
        </div>
      </div>


    </body>
  )
}

export default Skills
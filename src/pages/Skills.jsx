import React from 'react'
import './skills.css'
import imghtml from '../assets/html.png'
import imgcss from '../assets/css.webp'

const Skills = () => {

  const skill= {
    html: '80'
  }
  return (
    <body className='skills text-white conatiner'>
      
      <div className='border w-75 mx-auto opacity-box'>
        <h1 className='text-center fw-bold' style={{color: '#3daee9'}}>My Skills</h1>
        <div className='row'>
          <div className='col-12 col-md-6'>

            <div className='w-75  d-flex mb-3'>
                <img className='w-25 ' src={imghtml} alt="" />
              <input className='w-50' type="range" value={skill.html} readOnly /> <p className='ms-5 mt-4'>{skill.html}%</p>
            </div>

            <div className='w-75  d-flex mb-3'>
                <img className='w-25 ' src={imghtml} alt="" />
              <input className='w-50' type="range" value={skill.html} readOnly /> <p className='ms-5 mt-4'>{skill.html}%</p>
            </div>
            

            <div className='w-75  d-flex mb-3'>
                <img className='w-25 ' src={imghtml} alt="" />
              <input className='w-50' type="range" value={skill.html} readOnly /> <p className='ms-5 mt-4'>{skill.html}%</p>
            </div>
            
            <div className='w-75  d-flex mb-3'>
                <img className='w-25' src={imghtml} alt="" />
              <input className='w-50' type="range" value={skill.html} readOnly /> <p className='ms-5 mt-4'>{skill.html}%</p>
            </div>
            
            
            

          </div>
          <div className='col-12 col-md-6'>
             <div className='w-75  d-flex mb-3'>
                <img className='w-25' src={imghtml} alt="" />
              <input className='w-50' type="range" value={skill.html} readOnly /> <p className='ms-5 mt-4'>{skill.html}%</p>
            </div>
            
             <div className='w-75  d-flex mb-3'>
                <img className='w-25' src={imghtml} alt="" />
              <input className='w-50' type="range" value={skill.html} readOnly /> <p className='ms-5 mt-4'>{skill.html}%</p>
            </div>
            
             <div className='w-75  d-flex mb-3'>
                <img className='w-25' src={imghtml} alt="" />
              <input className='w-50' type="range" value={skill.html} readOnly /> <p className='ms-5 mt-4'>{skill.html}%</p>
            </div>
            
             <div className='w-75  d-flex mb-3'>
                <img className='w-25' src={imghtml} alt="" />
              <input className='w-50' type="range" value={skill.html} readOnly /> <p className='ms-5 mt-4'>{skill.html}%</p>
            </div>
            
          </div>
        </div>
      </div>


    </body>
  )
}

export default Skills
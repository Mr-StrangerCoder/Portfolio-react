import React from 'react'
import img from '../assets/2.jpg'
import img1 from '../assets/weather.png'
import { Link } from 'react-router-dom'
import img2 from '../assets/musiCloud.png'
import img3 from '../assets/calculator.jpg'
import img4 from "../assets/todo.jpg"





const Project1 = () => {
  return (
    <div className='container mx-auto mt-2'>
      <div className='d-flex justify-content-center gap-3'>

        <div>
          <div className=" project-card p-3 px-2 " style={{ width: '16rem', height: '28rem' }}>
            <img src={img1} className="card-img-top project-img" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Mausam Vaani</h5>
              <div className='h-25 '>
                <p className="card-text">
                  Built a Weather Application using React and REST API integration to display real-time weather information dynamically.
                </p>
              </div>
              <p className='tech'>HTML, CSS, API, JAVASCRIPT </p>


              <div className='btn-group d-flex'>
                <Link to={"https://mausamvaani.netlify.app/"} className="btn">Live</Link>
                <Link to={'https://github.com/Mr-StrangerCoder/Weather-App.git'} className="btn btn-outline">Code</Link>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className=" project-card p-3 px-2" style={{ width: '16rem' }}>
            <img src={img2} className="card-img-top project-img" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Music Application</h5>
              <p className="card-text">MP3 Music player like spotify, designed a clean user-friendly UI with CSS styling, including play buttons, song.               </p>
              <p className='tech'>HTML, CSS</p>

              <div className='btn-group d-flex'>
                <Link to={"https://mymusicloud.netlify.app"} className="btn">Live</Link>
                <Link to={'https://github.com/Mr-StrangerCoder/Music-House-.git'} className="btn btn-outline">Code</Link>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className=" project-card p-3" style={{ width: '16rem' }}>
            <img src={img4} className="card-img-top project-img" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Todo-App</h5>
              <p className="card-text">A simple task management app that lets users add, delete, and organize daily tasks.
              </p>
              <p className='tech'>JS, REACT.JS BOOTSTRAP</p>

              <div className='btn-group d-flex'>
                <Link to={"https://fastidious-lollipop-c36b37.netlify.app/"} className="btn">Live</Link>
                <Link to={'https://github.com/Mr-StrangerCoder/Todo-app.git'} className="btn btn-outline">Code</Link>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className=" project-card p-3" style={{ width: '16rem' }}>
            <img src={img3} className="card-img-top project-img" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Calculator</h5>
              <p className="card-text"> Built a simple calculator using React to perform basic arithmetic operations.  Used React components.</p>
              <p className='tech'>HTML, CSS</p>

              <div className='btn-group d-flex'>
                <Link to={"https://github.com/Mr-StrangerCoder/calculator-react"} className="btn">Live</Link>
                <Link to={'https://github.com/Mr-StrangerCoder/calculator-react'} className="btn btn-outline">Code</Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Project1
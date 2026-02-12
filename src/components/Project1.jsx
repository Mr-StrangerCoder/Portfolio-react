import React from 'react'
import img from '../assets/2.jpg'
import img1 from '../assets/weather.png'
import { Link } from 'react-router-dom'


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
            <img src={img} className="card-img-top project-img" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
              <p className='tech'>HTML, CSS</p>

              <div className='btn-group d-flex'>
                <a href="#" className="btn">Live</a>
                <a href="#" className="btn btn-outline">Code</a>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className=" project-card p-3" style={{ width: '16rem' }}>
            <img src={img} className="card-img-top project-img" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
              <p className='tech'>HTML, CSS</p>

              <div className='btn-group d-flex'>
                <a href="#" className="btn">Live</a>
                <a href="#" className="btn btn-outline">Code</a>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className=" project-card p-3" style={{ width: '16rem' }}>
            <img src={img} className="card-img-top project-img" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
              <p className='tech'>HTML, CSS</p>

              <div className='btn-group d-flex'>
                <a href="#" className="btn">Live</a>
                <a href="#" className="btn btn-outline">Code</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Project1
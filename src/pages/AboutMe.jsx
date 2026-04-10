import React from 'react'
import './about.css'
import img from '../assets/1123.jpg'

const AboutMe = () => {

  const about = {
    name: 'Aadesh Vasantrao Sonawane',
    role: 'Full Stack Developer',
    description1: 'I am a passionate Full Stack Developer focused on building modern, responsive, and user-friendly web applications.',
    description2: 'I have hands-on experience with HTML, CSS, JavaScript, Bootstrap, and React. I enjoy turning ideas into real-world projects and continuously improving my skills.',
    email: 'aadeshsonawane307@gmail.com',
    location: 'Pune, Maharashtra',
    availability: 'Open to Opportunities'
  }

  return (
    <section className='about'>
      <div className='container about-container'>

        <h1 className='text-center title'>About Me</h1>

        <div className='row align-items-center mt-4'>

          {/* Image */}
          <div className='col-12 col-md-4 text-center mb-4'>
            <img src={img} alt="profile" className='profile-img' />
          </div>

          {/* Content */}
          <div className='col-12 col-md-8'>
            <p>
              I’m <span className="highlight">{about.name}</span>, {about.description1}
            </p>

            <p>{about.description2}</p>

            {/* Info Box */}
            <div className="info-box mt-3">

              <p><i className="bi bi-person-fill me-2"></i><strong>Role:</strong> {about.role}</p>

              <p><i className="bi bi-envelope-fill me-2"></i><strong>Email:</strong> {about.email}</p>

              <p><i className="bi bi-geo-alt-fill me-2"></i><strong>Location:</strong> {about.location}</p>

              <p><i className="bi bi-briefcase-fill me-2"></i><strong>Status:</strong> {about.availability}</p>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutMe
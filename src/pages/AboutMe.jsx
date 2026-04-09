import React from 'react'
import './about.css'
import img from '../assets/1123.jpg'


const AboutMe = () => {
  let about = {
    name: 'Aadesh Vasantrao Sonawane',
    role: 'Full Stack Developer',
    description1: 'I am a passionate Full Stack Developer focused on building modern, responsive, and user-friendly web applications.',
    description2: 'I have hands-on experience with HTML, CSS, JavaScript, Bootstrap, and React. I enjoy turning ideas into real-world projects and continuously improving my skills.',
    email: 'aadeshsonawane307@gmail.com',
    location: 'Pune, Maharashtra',
    availability: 'Open to Opportunities'

  }
  return (
    <body className='about text-white conatiner'>
      <div className=' dark container-fluid w-75 mt-2 pb-5' style={{borderRadius: '2rem'}}>
        <h1 className='text-center fw-bold pt-3' style={{ color: '#3daee9' }}>About Me</h1>
        <div className='row py-3'>
          <div className='col-12 col-md-2' style={{ marginLeft: '4rem', marginTop: '4rem', height:'15rem' }}>
            <img className='' src={img} alt=""/>
            
          </div>
          <div className='col-12 col-md-10' style={{ marginLeft: '8rem', width:'39rem' }}>
            <p>I’m <span className="highlight fw-bold fs-51" style={{color:'aqua'}}>{about.name}</span>, a
              {about.description1}</p>
            <p>{about.description2}</p>
            <div className="info-box mt-2">
               <p><strong>Role:</strong> {about.role}</p>
              <p><strong>Email:</strong> {about.email}</p>
              <p><strong>Location:</strong> {about.location}</p>
              <p><strong>Status:</strong> {about.availability}</p>
            </div>
          </div>
        </div >

      </div>


    </body>
  )
}

export default AboutMe

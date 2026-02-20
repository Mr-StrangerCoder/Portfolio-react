import React from 'react'
import './about.css'
import img from '../assets/1123.jpg'


const AboutMe = () => {
  let about = {
    name: 'Aadesh Vasantrao Sonawane',
    dob: '17 July 1997',
    address: 'R7 Life Republic Marunji-Kasarsai Road, near Marunji Village, Hinjawadi, Pune, Maharashtra 411057 ',
    aboutme: ' passionate Full Stack Developer with a background in Hotel Management I discovered my love for coding and started learning web development on my own.',
    about2: 'I enjoy building responsive and modern web applications using HTML, CSS, JavaScript, Bootstrap, and React.',
    email: 'aadeshsonawane307@gmail.com'

  }
  return (
    <body className='about text-white conatiner'>
      <div className=' dark container-fluid w-75 mt-5 pb-5' style={{borderRadius: '2rem'}}>
        <h1 className='mt-2 text-center' style={{ color: 'aqua' }}>About Me</h1>
        <div className='row py-2'>
          <div className='col-12 col-md-3' style={{ marginLeft: '4rem', marginTop: '3rem', height:'15rem' }}>
            <img className='ms-5' src={img} alt=""/>
            
          </div>
          <div className='col-12 col-md-9 order w-50 ' style={{ marginLeft: '10rem' }}>
            <p>I’m <span className="highlight fw-bold fs-51" style={{color:'aqua'}}>{about.name}</span>, a
              {about.aboutme}</p>
            <p>{about.about2}</p>
            <div className="info-box mt-2 ">
              <p><strong>DOB: </strong>{about.dob}</p>
              <p><strong>Email:</strong>{about.email}</p>
              <p><strong>Location:</strong> {about.address}</p>
              <p><strong>Available for:</strong> Fresher Role</p>
            </div>
          </div>
        </div >

      </div>


    </body>
  )
}

export default AboutMe

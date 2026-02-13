import React from 'react'
import './about.css'


const AboutMe = () => {
  return (
    <body className='about text-white conatiner'>
      <div className='container-fluid border w-75 mt-5 opacity-box ' style={{ height: '31rem' }}>
        <div className='row p-5'>
          <div className='col-12 col-md-3 border w-25'style={{marginLeft:'3rem', marginTop:'5rem'}}>
            <img src="" alt="" />
            <p>nhk</p>
          </div>
          <div className='col-12 col-md-9 border w-50 ' style={{marginLeft:'10rem'}}>
            <h1 className='text-white'>hello</h1>
            <b>Date of Birth:</b>- 17 July 1997 

          </div>
        </div >

      </div>


    </body>
  )
}

export default AboutMe

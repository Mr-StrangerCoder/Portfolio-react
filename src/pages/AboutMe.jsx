import React from 'react'
import './about.css'


const AboutMe = () => {
  let about = {
    name: 'Aadesh Vasantrao Sonawane',
    dob: '17 July 1997',
    address: 'R7 Life Republic Marunji-Kasarsai Road, near Marunji Village, Hinjawadi, Pune, Maharashtra 411057 ',
    


  }
  return (
    <body className='about text-white conatiner'>
      <div className='container-fluid  bg-dark w-75 mt-5' style={{ opacity: "0.8", borderRadius: '2rem' }}>
        <div className='row p-5'>
          <div className='col-12 col-md-3 border w-25'style={{marginLeft:'3rem', marginTop:'5rem'}}>
            <img src="" alt="" />
            <p>nhk</p>
          </div>
          <div className='col-12 col-md-9 border w-50 ' style={{marginLeft:'10rem'}}>
            <h1 className='text-white'>{about.name}</h1>
            <p>{about.dob}</p>
            <p>{about.address}</p>


          </div>
        </div >

      </div>


    </body>
  )
}

export default AboutMe

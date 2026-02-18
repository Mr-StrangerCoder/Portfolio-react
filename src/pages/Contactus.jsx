import React from 'react'
import './contact.css'
import { Link } from 'react-router-dom'

const Contactus = () => {
  return (
    <body className='contact text-white conatiner'>
      <div className='container-fluid  w-75 mt-3 opacity-box ' style={{ height: '30rem' }}>
        <div className='row p-5'>
          <div className='col-12 col-md-3  w-25' style={{ marginLeft: '3rem', marginTop: '2rem' }}>
            <h3 className='fw-bold'>Get in Touch</h3>
            <h4>I'd like to hear form you!</h4>
            <p>If you have any inquiries or just want to say hi, please use the contact form </p>
            <div className='d-flex justify-content-center gap-2'>
              <Link className='btn' to="https://www.linkedin.com/in/aadesh-sonawane-9baa951b6/"><i class="bi bi-linkedin"></i></Link>

              <Link className='btn' to="mailto: aadeshsonawane307@gmail.com"><i class="bi bi-envelope-fill"></i></Link>
            </div>


          </div>
          <div className='col-12 col-md-9  w-50 ' style={{ marginLeft: '10rem' }}>
            <h3 className="mb-4 text-center fw-bold">Contact Form</h3>

            <form>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                />
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                />
              </div>

              <div className="mb-3">
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Your Message"
                ></textarea>
              </div>

              <button className="btn btn-primary w-100 rounded-pill">
                Send Message
              </button>
            </form>

          </div>
        </div >

      </div>
    </body>
  )
}

export default Contactus  
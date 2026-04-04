import React, { useRef, useEffect } from 'react'
import './contact.css'

const Contactus = () => {

   const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, [])

  return (
    <>
      <body className='exp text-white conatiner'>
        <div className=' conatiner w-75 px-2 my-4 border  mt-5 py-3' style={{ marginLeft: '10rem', height: "500px" }}>
          <div className='row'>
            <div className='col-12 col-md-3 w-25 py-5' style={{ marginLeft: '3rem', marginTop: '2rem' }}>
              <h3 className='fw-bold'>Get in Touch</h3>
              <h4>I'd like to hear from you!</h4>
              <p>If you have any inquiries or just want to say hi, please use the contact form</p>

              <div className='d-flex justify-content-center gap-2'>
                <a className='btn' href="https://www.linkedin.com/in/aadesh-sonawane-9baa951b6/" target="_blank" rel="noreferrer">
                  <i className="bi bi-linkedin"></i>
                </a>

                <a className='btn' href="mailto:aadeshsonawane307@gmail.com">
                  <i className="bi bi-envelope-fill"></i>
                </a>
              </div>
            </div>
            <div className='col-12 col-md-7 ms-5 mt-4'>
              <h3 className="mb-4 text-center fw-bold">Contact Form</h3>

            <form>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                   ref={inputRef}
                
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

              <button type="submit" className="btn btn-primary w-100 rounded-pill">
                Send Message
              </button>
            </form>
            </div>
          </div>

        </div>
      </body>
    </>
  )
}


export default Contactus
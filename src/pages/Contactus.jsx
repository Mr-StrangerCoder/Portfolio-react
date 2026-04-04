import React, { useRef, useEffect, useState } from 'react'
// import './contact.css'
import emailjs from "@emailjs/browser";

const Contactus = () => {
  const formRef = useRef(null);
  const inputRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  // useEffect(() => {
  //   inputRef.current.focus();
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      formRef.current,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setStatus('success');
      formRef.current.reset();
    })
    .catch(() => {
      setStatus('error');
    })
    .finally(() => {
      setLoading(false);
    });
  };

  return (
    <>
      <body className='exp text-white conatiner'>
        <div
          className='conatiner w-75 px-2 my-4 mt-5 py-3'
          style={{
            marginLeft: '10rem',
            height: "500px",
            backgroundColor: "rgba(0, 0, 0, 0.479)",
            borderRadius: '2rem'
          }}
        >
          <div className='row'>

        
            <div className='col-12 col-md-3 w-25 py-5' style={{ marginLeft: '3rem', marginTop: '2rem' }}>
              <h3 className='fw-bold' style={{ color: '#3daee9' }}>Get in Touch</h3>
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
              <h3 className="mb-4 text-center fw-bold" style={{ color: '#3daee9' }}>Contact Form</h3>

      
              {status === 'success' && (
                <div className="alert alert-success py-2 text-center">
                  ✅ Message sent successfully!
                </div>
              )}
              {status === 'error' && (
                <div className="alert alert-danger py-2 text-center">
                  ❌ Something went wrong. Please try again.
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    ref={inputRef}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="4"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary w-100 rounded-pill"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>

          </div>
        </div>
      </body>
    </>
  );
};

export default Contactus;
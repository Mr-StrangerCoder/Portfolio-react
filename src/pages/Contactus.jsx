import React, { useRef, useState } from 'react'
import './contact.css'
import emailjs from "@emailjs/browser"

const Contactus = () => {
  const formRef = useRef(null)
  const inputRef = useRef(null)
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      formRef.current,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setStatus('success')
      formRef.current.reset()
    })
    .catch(() => {
      setStatus('error')
    })
    .finally(() => {
      setLoading(false)
    })
  }

  return (
    <section className='contact'>

      <h1 className='title'>Contact Me</h1>

      <div className='contact-card'>

        <div className='left-panel'>

          <h3>Get in Touch</h3>
          <h4>I'd love to hear from you!</h4>
          <p>
            Have any inquiries or just want to say hi?
            Feel free to reach out using the contact form
            or connect with me on social media.
          </p>  
        </div>

      
        <div className='right-panel'>

          <h3>Send a Message</h3>

          {status === 'success' && (
            <div className="contact-alert success mb-3">
              <i className="bi bi-check-circle-fill me-2"></i>
              Message sent successfully!
            </div>
          )}
          {status === 'error' && (
            <div className="contact-alert error mb-3">
              <i className="bi bi-x-circle-fill me-2"></i>
              Something went wrong. Please try again.
            </div>
          )}

          <form ref={formRef} onSubmit={handleSubmit}>

            <div className="input-group-custom">
  <i className="bi bi-person-fill input-icon"></i>
  <input
    type="text"
    name="name"
    className="form-control custom-input"
    placeholder="Your Name"
    ref={inputRef}
    required
  />
</div>

<div className="input-group-custom">
  <i className="bi bi-envelope-fill input-icon"></i>
  <input
    type="email"
    name="email"
    className="form-control custom-input"
    placeholder="Your Email"
    required
  />
</div>

<div className="input-group-custom">
  <i className="bi bi-chat-left-text-fill input-icon textarea-icon"></i>
  <textarea
    className="form-control custom-input"
    name="message"
    rows="5"
    placeholder="Your Message"
    required
  ></textarea>
</div>

            <button
              type="submit"
              className="submit-btn mt-3"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="spinner-border spinner-border-sm" role="status" />
                  Sending...
                </>
              ) : (
                <>
                  <i className="bi bi-send-fill"></i>
                  Send Message
                </>
              )}
            </button>

          </form>
        </div>

      </div>
    </section>
  )
}

export default Contactus
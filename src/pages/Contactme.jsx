import React, { useRef, useState } from 'react'
import './contact.css'
import emailjs from "@emailjs/browser"

const Contactme = () => {
  const formRef = useRef(null)
  const inputRef = useRef(null)
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value })
}

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

emailjs.sendForm(
  "service_brldpqc",
  "template_v41fmi8",
  formRef.current,
  { publicKey: "UxdaZwxID-dxvEPtW" }
)
    .then((result) => {
       console.log("result:", result)
      setStatus('success')
       setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setStatus(null), 5000)
    })
    .catch((error) => {
       console.log("ERROR:", error)
      setStatus('error')
      setTimeout(() => setStatus(null), 5000)
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
            <div className="contact-alert success mb-3 text-white">
              <i className="bi bi-check-circle-fill me-2"></i>
              Message sent successfully!
            </div>
          )}
          {status === 'error' && (
            <div className="contact-alert error mb-3 text-white">
              <i className="bi bi-x-circle-fill me-2"></i>
              Something went wrong. Please try again.
            </div>
          )}

          <form ref={formRef} onSubmit={handleSubmit}>

            <div className="input-group-custom">
  <i className="bi bi-person-fill input-icon"></i>
  <input
  value={formData.name} onChange={handleChange}

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
   value={formData.email} onChange={handleChange}
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
  value={formData.message} onChange={handleChange}
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

export default Contactme
import React from 'react'
import './exp.css'

const Exp = () => {

  const experiences = [
    {
      role: 'Web Developer Intern',
      company: 'ScaleFull Technologies LLP',
      duration: '6 Months  •  2024',
      type: 'Internship',
      description: 'Completed a 6-month internship as a Web Developer, working on building and maintaining web applications. Assisted in communication and personality development training programs while gaining hands-on experience with modern web technologies.'
    }
  ]

  return (
    <section className='exp'>

  
      <h1 className='title'>Experience</h1>

      <div className='exp-container'>
        <div className='timeline'>
          {experiences.map((exp, index) => (
            <div key={index} className='timeline-item'>
              <div className='exp-card'>

                <div className='exp-header'>
                  <span className='exp-role'>
                    <i className="bi bi-person-workspace me-2" style={{ color: '#38bdf8' }}></i>
                    {exp.role}
                  </span>
                  <span className='exp-badge'>
                    <i className="bi bi-briefcase-fill"></i>
                    {exp.type}
                  </span>
                </div>

                <p className='exp-company'>
                  <i className="bi bi-building"></i>
                  {exp.company}
                </p>

                <p className='exp-duration'>
                  <i className="bi bi-calendar3"></i>
                  {exp.duration}
                </p>

                <p className='exp-desc'>
                  {exp.description}
                </p>

              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default Exp
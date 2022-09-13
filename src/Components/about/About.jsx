import React from 'react'
import './about.css'
import ME2 from "../../assets/random_ME2.jpg"
import { FaAward, FaLaptopCode } from "react-icons/fa"
import { FiUsers } from "react-icons/fi"

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME2} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>99+ yeas as Developer</small>
            </article>
            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>3 million+</small>
            </article>
            <article className="about__card">
              <FaLaptopCode className='about__icon'/>
              <h5>Projects</h5>
              <small>1000+ Completed Projects</small>
            </article>
          </div>
          
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem quod non sequi et iusto blanditiis aliquid magnam, alias pariatur, quae voluptate quibusdam cumque consectetur possimus quasi placeat minus, iure harum.
            </p>
            <a href='#contact' className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
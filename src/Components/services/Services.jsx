import React from 'react'
import "./services.css"
import { BsCheckLg } from "react-icons/bs"

const Services = () => {
  return (
    <section id="services">
      <h5>What do I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {/* UI/UX Design */}
        <article className="service">
          <div className="service__head">
            <h3>UI/UX design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, iusto.</p>   
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, iusto.</p>   
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, iusto.</p>   
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, iusto.</p>   
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, iusto.</p>   
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, iusto.</p>   
            </li>
          </ul>
        </article>

        {/* Web Development */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, iusto.</p>   
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, iusto.</p>   
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, iusto.</p>   
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, iusto.</p>   
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, iusto.</p>   
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, iusto.</p>   
            </li>
          </ul>
        </article>

        {/* Content Creation */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, iusto.</p>   
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, iusto.</p>   
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, iusto.</p>   
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, iusto.</p>   
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, iusto.</p>   
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, iusto.</p>   
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
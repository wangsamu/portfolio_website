import React from 'react'
import "./footer.css"
import { BsLinkedin, BsGithub } from "react-icons/bs"
import { SiTwitter } from "react-icons/si"


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>LOGO HERE</a>
      <div className="footer__permalinks">
      <ul>
        <li>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      </div>


      <div className="footer__socials">
        <a href="https://github.com"><BsGithub /></a>
        <a href="https://linkedin.com"><BsLinkedin /></a>
        <a href="https://twitter.com"><SiTwitter /></a>
      </div>

      <div className="footer__copyrights">
        <small>&copy; wangsamu.com  ||  All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
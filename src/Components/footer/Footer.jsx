import React from 'react';
import './footer.css';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { SiTwitter } from 'react-icons/si';

const Footer = () => {
  return (
    <footer>
      {/* <a href="#" className="footer__logo">
        SAMUEL LI WANG
      </a>
      <div className="footer__permalinks">
        <ul>
          <li>
            <a href="#home">Home</a>
            <a href="#experience">Technologies</a> */}
      {/* <a href="#experience">Experience</a>
            <a href="#services">Services</a> */}
      {/* <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div> */}
      {/* 
      <div className='footer__socials'>
        <a href='https://github.com/wangsamu'>
          <BsGithub />
        </a>
        <a href='https://www.linkedin.com/in/wangsamu/'>
          <BsLinkedin />
        </a>
      </div> */}

      <div className='footer__copyrights'>
        <small>&copy; wangsamu.com || All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;

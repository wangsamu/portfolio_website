import React from 'react'
import CTA from './CTA'
import "./header.css"
import ME from "../../assets/random_ME.png"
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h3>Hello, I'm</h3>
        <h1>Samuel Li Wang</h1>
        <h5>
          Fullstack Developer
        </h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={ME} alt="my portrait photo" />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
import React from 'react'
import { BsLinkedin, BsGithub } from "react-icons/bs"
import { SiDribbble } from "react-icons/si"

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href='linkedin.com' target="_blank"><BsLinkedin /></a>
        <a href='github.com' target="_blank"><BsGithub /></a>
        <a href='dribble.com' target="_blank"><SiDribbble /></a>
    </div>
  )
}

export default HeaderSocial
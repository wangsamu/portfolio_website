import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiDribbble } from "react-icons/si";

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/wangsamu/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/wangsamu" target="_blank">
        <BsGithub />
      </a>
      {/* <a href="dribble.com" target="_blank">
        <SiDribbble />
      </a> */}
    </div>
  );
};

export default HeaderSocial;

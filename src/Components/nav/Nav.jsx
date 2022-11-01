import React, { useState } from 'react';
import './nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { BsBook } from 'react-icons/bs';
import { BiMessageSquareDetail, BiCodeBlock } from 'react-icons/bi';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a
        href='#'
        className={activeNav === '#' ? 'active' : ''}
        onClick={() => setActiveNav('#')}
      >
        <AiOutlineHome />
      </a>
      {/* <a
        href="#experience"
        className={activeNav === "#experience" ? "active" : ""}
        onClick={() => setActiveNav("#about")}
      >
        <BiCodeBlock />
      </a> */}
      <a
        href='#portfolio'
        className={activeNav === '#portfolio' ? 'active' : ''}
        onClick={() => setActiveNav('#portfolio')}
      >
        <BsBook />
      </a>
      <a
        href='#contact'
        className={activeNav === '#contact' ? 'active' : ''}
        onClick={() => setActiveNav('#contact')}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;

import React from 'react';
import {
  AboutContainer,
  AboutItemsContainer,
  AboutItem,
  IconContainer,
} from './AboutStyled';
import { HiCode } from 'react-icons/hi';
import { MdCastForEducation } from 'react-icons/md';
import { TbScubaMask } from 'react-icons/tb';

function About() {
  return (
    <AboutContainer>
      <h1>{`- About Me -`}</h1>
      <AboutItemsContainer>
        <AboutItem>
          <IconContainer>
            <MdCastForEducation />
          </IconContainer>

          <p>
            As a law graduate, I have worked as a compliance specialist in
            Amazon. I was fascinated by the software engineering teams and
            decided to make become a developer myself.
          </p>
        </AboutItem>
        <AboutItem>
          <IconContainer>
            <HiCode />
          </IconContainer>
          <p>
            I'm a passionate developer with a strong desire to learn and improve
            constantly. I firmly believe in contious learning and I am always
            open to new technologies.
          </p>
        </AboutItem>
        <AboutItem>
          <IconContainer>
            <TbScubaMask />
          </IconContainer>
          <p>
            Aside from programming, my interests are wide with formal
            qualifications in Law and Business Management. Traveling and cooking
            make me feel alive. I am also a keen hiker and SCUBA diver.
          </p>
        </AboutItem>
      </AboutItemsContainer>
    </AboutContainer>
  );
}

export default About;

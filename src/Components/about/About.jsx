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
            As a law and business graduate, I have worked as a compliance
            specialist in Amazon. I was fascinated by the software engineering
            teams and decided to make become a developer myself.
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
            Away from keyboard, traveling and cooking make me feel awesome. I
            also enjoy hiking and SCUBA diving. I love languages too, currently
            I speak 5 languages at a decent level.
          </p>
        </AboutItem>
      </AboutItemsContainer>
    </AboutContainer>
  );
}
export default About;

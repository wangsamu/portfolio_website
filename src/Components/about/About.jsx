import React from 'react';
import {
  AboutContainer,
  AboutItemsContainer,
  AboutItem,
  IconContainer,
} from './AboutStyled';
import { HiCode } from 'react-icons/hi';
import { MdCastForEducation } from 'react-icons/md';
import { MdSurfing } from 'react-icons/md';

function About() {
  return (
    <AboutContainer>
      <h1>- About me -</h1>
      <AboutItemsContainer>
        <AboutItem>
          <IconContainer>
            <HiCode />
          </IconContainer>

          <p>
            A full stack developer with an eye for design, UX and UI development
            and a strong desire to learn and create. I have had a long career in
            the areas of educational software, multimedia production and web
            development.
          </p>
        </AboutItem>
        <AboutItem>
          <IconContainer>
            <MdCastForEducation />
          </IconContainer>
          <p>
            I firmly believe in life long learning and I'm constantly exploring
            new ideas and technologies. MOOC's have enabled me to update my
            skills and keep abreast of the latest trends in design and coding.
          </p>
        </AboutItem>
        <AboutItem>
          <IconContainer>
            <MdSurfing />
          </IconContainer>
          <p>
            My interests are wide with formal qualifications in Biology,
            Astronomy and Education. I have designed and/or written software for
            a large international diagnosics company, schools and universities.
          </p>
        </AboutItem>
      </AboutItemsContainer>
    </AboutContainer>
  );
}

export default About;

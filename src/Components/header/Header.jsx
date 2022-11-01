import React from 'react';
import { HeaderContainer } from './HeaderStyled';

function Header() {
  return (
    <HeaderContainer>
      <div>
        <p>the portfolio of</p>
        <h1>{`SAMUEL 
        LI WANG`}</h1>
        <p>{'{'}</p>
        <h5>{`Web Developer: 
            Compliance Specialist: 
            Law Graduate: 
            Cook:`}</h5>
        <p>{'}'}</p>
      </div>
    </HeaderContainer>
  );
}

export default Header;

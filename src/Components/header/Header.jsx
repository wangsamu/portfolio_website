import React from 'react';
import { HeaderContainer } from './HeaderStyled';

function Header() {
  return (
    <HeaderContainer>
      <div>
        <p>the portfolio of</p>
        <h1>{`SAMUEL 
        LI WANG`}</h1>
        <h5>{`Web Developer;
            Compliance Specialist:;
            Law Graduate; `}</h5>
      </div>
    </HeaderContainer>
  );
}

export default Header;

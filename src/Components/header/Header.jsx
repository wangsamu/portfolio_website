import React from 'react';
import { HeaderContainer } from './HeaderStyled';

function Header() {
  return (
    <HeaderContainer>
      <div>
        <h5>the portfolio of</h5>
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

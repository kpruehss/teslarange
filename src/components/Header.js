import React from 'react';
import styled from 'styled-components';

import logo from 'assets/logo.svg';


const StyledHeader = styled.header`
  padding: 25px 0;
  margin: 0;
  text-align: center;
  background: #222;
  width: 100%;
  box-sizing: border-box;
  font: 300 14px/1.4 'Helvetica Neue', Helvetica, Arial, sans-serif;
`;

const Logo = styled.img`
  width: 100px;
  height: 13px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Logo src={logo} alt="Tesla"/>
    </StyledHeader>
  );
};

export default Header;
import React from 'react';
import styled from 'styled-components';

import logo from 'assets/logo.svg';


// const StyledHeader = styled.header`
//   padding: 25px 0;
//   margin: 0;
//   text-align: center;
//   background: #222;
//   width: 100%;
// `;

// const Logo = styled.img`
//   width: 100px;
//   height: 13px;
// `;

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Tesla"/>
    </header>
  );
};

export default Header;
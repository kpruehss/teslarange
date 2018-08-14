import React from 'react';
import logo from 'assets/logo.svg';
import Form from '../Form';
import styled from 'styled-components';


const Logo = styled.img`
  width: 100px;
  height: 13px;
`;

export default () => {
  return (
    <div className="container">
      <header className="header">
        <Logo src={logo} alt="Tesla"/>
      </header>
      <Form />
    </div>
  );
};

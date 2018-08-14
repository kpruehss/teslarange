import React from 'react';
import styled from 'styled-components';

import logo from 'assets/logo.svg';
import Form from '../containers/Form';

const StyledHeader = styled.header`
  padding: 25px 0;
  margin: 0;
  text-align: center;
  background: #222;
  width: 100%;
  box-sizing: border-box;
  font: 300 14px/1.4 'Helvetica Neue', Helvetica, Arial, sans-serif;
`;

const Wrapper = styled.div`
  margin: 100px 0 150px;
`;

const Logo = styled.img`
  width: 100px;
  height: 13px;
`;

export default () => {
  return (
    <div>
      <StyledHeader>
        <Logo src={logo} alt="Tesla"/>
      </StyledHeader>
      <Wrapper>
        <Form />
      </Wrapper>
    </div>
  );
};

import React, { Component } from 'react';
import styled from 'styled-components';
import TeslaCar from '../components/TeslaCar';
import Wheel from '../components/Wheel';
import StatTable from '../components/StatTable';

const StyledForm = styled.form`
  text-align: center;
`;

const StyledH1 = styled.h1`
  display: block;
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
  font-size: 38px;
  letter-spacing: 3px;
`;
// const Container = styled.div`
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;
//   margin-right: auto;
//   margin-left: auto;
// `;
class Form extends Component {
  render() {
    return (
      <StyledForm>
        <StyledH1>Range Per Charge</StyledH1>
        <TeslaCar>
          <StatTable />
        </TeslaCar>
      </StyledForm>
    );
  }
}

export default Form;

import React, { Component } from 'react';
import styled from 'styled-components';
import TeslaCar from './TeslaCar';

import data from 'data.json';
import TeslaControl from 'containers/TeslaControl';
import Disclaimer from '../components/Disclaimer';

const StyledH1 = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
  font-size: 38px;
  letter-spacing: 3px;
`;
class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {data};
  }
  render() {
    return (
      <form className="tesla-car">
        <StyledH1>Range Per Charge</StyledH1>
        <TeslaCar />
        <TeslaControl />
        <Disclaimer />
      </form>
    );
  }
}

export default Form;

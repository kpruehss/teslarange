import React, { Component } from 'react';
import styled from 'styled-components';
import ControlButton from '../components/ControlButton';
import Disclaimer from '../components/Disclaimer';


const TeslaSpeed = styled.div`
  float: left;
  width: 230px;
  ::before {
    content: '';
    display: table;
  };
  ::after {
    clear: both;
  };
`;

const ControlTitle = styled.div`
  letter-spacing: 2px;
  font-size: 16px;
`;

const ControlItem = styled.div`
  position: relative;
  width: 100%;
  height: 65px;
  border: 1px solid #ccc;
  display: inline-block;
  padding: 18px 0 0 30px;
  margin: 0 8px 0 0;
  background-color: #f7f7f7;
  background-position: 24.21053% 9px;
  background-repeat: no-repeat;
  background-size: 44px;
`;


class TeslaControl extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="tesla-controls">
        <TeslaSpeed>
          <ControlTitle>Speed</ControlTitle>
          <ControlItem className="control-buttons">
            <ControlButton up />
            <ControlButton />
          </ControlItem>
        </TeslaSpeed>
        <Disclaimer />
      </div>
    );
  }
}
export default TeslaControl;
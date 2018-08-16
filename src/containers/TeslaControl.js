import React, { Component } from 'react';
import TeslaPanel from '../components/TeslaPanel';

class TeslaControl extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="tesla-controls cf">
        <TeslaPanel />
      </div>
    );
  }
}
export default TeslaControl;

{/* <TeslaPanel>
          <ControlTitle>Speed</ControlTitle>
          <ControlItem className="control-buttons">
            <ControlButton up />
            <ControlButton />
          </ControlItem>
        </TeslaPanel>
        <TeslaClimate>
          <ControlTitle>Outside Temperature</ControlTitle>
          <ControlItem className="control-buttons">
            <ControlButton up />
            <ControlButton />
          </ControlItem>
          <ClimateButton />
        </TeslaClimate> */}
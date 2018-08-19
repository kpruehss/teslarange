import React from 'react';

import Control from './Control';
import ClimateControl from './ControlClimate';
import Wheel from './ControlWheelSize';


const RangeControl = props => {
  return (
    <div className="control-panel">
      <Control heading="Speed" unit="mph" reading="speed" />
      <Control heading="Outside Temperature" unit="°" reading="temperature" />
      <ClimateControl />
      <Wheel heading="Wheel Size" />
    </div>
  );
};

export default RangeControl;

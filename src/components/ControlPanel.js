import React from 'react';

import Control from './Control';
import ClimateControl from './ControlClimate';
import Wheel from './ControlWheelSize';


const RangeControl = props => {
  return (
    <div className="control-panel">
      <Control heading="Speed" unit="mph" />
      <Control heading="Outside Temperature" unit="°" />
      <ClimateControl />
      <Wheel heading="Wheel Size" />
    </div>
  );
};

export default RangeControl;

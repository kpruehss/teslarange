import React from 'react';

import Control from './Control';
import ControlClimate from './ControlClimate';
import Wheel from './ControlWheelSize';


const RangeControl = () => {
  return (
    <div className="control-panel">
      <Control heading="Speed" unit="mph" reading="speed" />
      <Control heading="Outside Temperature" unit="°" reading="temperature" />
      <ControlClimate />
      <Wheel heading="Wheel Size" reading="wheelSize" />
    </div>
  );
};

export default RangeControl;

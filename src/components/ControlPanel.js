import React from 'react';

import Control from './Control';
import ClimateControl from './ControlClimate';


const RangeControl = props => {
  const { speed } = props;

  return (
    <div className="control-panel">
      <Control heading="Speed" unit="mph" />
      <Control heading="Outside Temperature" unit="°" />
      <ClimateControl />
    </div>
  );
};

export default RangeControl;

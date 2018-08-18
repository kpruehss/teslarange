import React from 'react';
import Control from './Control';


const RangeControl = props => {
  const { speed } = props;

  return (
    <div className="control-panel">
      <Control heading="Speed" unit="mph" />
      <Control heading="Outside Temperature" unit="°" />
      <Control heading="Wheel Size" unit='"' />
    </div>
  );
};

export default RangeControl;

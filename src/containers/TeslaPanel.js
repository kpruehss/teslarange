import React from 'react';
import TeslaCounter from '../components/TeslaCounter';
import TeslaClimate from 'components/TeslaClimate';
import TeslaWheels from '../components/TeslaWheels';

const TeslaPanel =  props => {
  
  return (
    <div className="tesla-panel">
      <TeslaCounter 
        title="Speed"
        step="5"
        min="45"
        max="75"
        value="55"
        unit="mph"
        tabindex="0" />
      <TeslaClimate />
      <TeslaWheels title="Wheels" />
    </div>
  );
};

export default TeslaPanel;

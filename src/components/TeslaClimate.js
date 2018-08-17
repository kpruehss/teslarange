import React from 'react';

import TeslaCounter from './TeslaCounter';
import ClimateButton from 'components/ClimateButton';

export default () => {
  return (
    <div className="tesla-climate cf">
      <TeslaCounter 
        title="Outside Temperature"
        step="10"
        min="-10"
        max="40"
        value="20"
        unit="°" />
      <div style={{float: 'left'}}>
        <ClimateButton />
      </div>
    </div>
  );
};

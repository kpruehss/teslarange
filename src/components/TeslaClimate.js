import React from 'react';

import TeslaCounter from './TeslaCounter';
import ClimateButton from './ClimateButton';

export default () => {
  return (
    <div className="tesla-climate">
      <TeslaCounter 
        title="Outside Temperature"
        step="10"
        min="-10"
        max="40"
        value="20"
        unit="°" />
      <ClimateButton />
    </div>
  );
};

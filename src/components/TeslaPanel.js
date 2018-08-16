import React from 'react';
import styled from 'styled-components';
import ControlButton from 'components/ControlButton';
import TeslaCounter from './TeslaCounter';
import TeslaClimate from 'components/TeslaClimate';



const TeslaPanel =  props => {
  return (
    <div className="tesla-panel">
      <TeslaCounter 
        title="Speed"
        step="5"
        min="45"
        max="75"
        value="55"
        unit="mph" />
      <TeslaClimate />
    </div>
  );
};

export default TeslaPanel;

{/* <div className="tesla-container">
        <p className="tesla-control-text">
            (55)
          <span>MPH</span>
        </p>
        <div className="control-button-group">
          <ControlButton up />
          <ControlButton />
        </div>
      </div> */}
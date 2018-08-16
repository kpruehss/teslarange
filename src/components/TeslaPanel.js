import React from 'react';
import styled from 'styled-components';
import ControlButton from 'components/ControlButton';





const TeslaPanel =  () => {
  return (
    <div className="tesla-panel">
      <div className="tesla-container">
        <p className="tesla-control-text">
            (55)
          <span>MPH</span>
        </p>
        <div className="control-button-group">
          <ControlButton up />
          <ControlButton />
        </div>
      </div>
    </div>
  );
};

export default TeslaPanel;

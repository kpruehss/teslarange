import React from 'react';
import styled from 'styled-components';
import ControlButton from 'components/ControlButton';

const ControlTitle = styled.p`
  letter-spacing: 2px;
  font-size: 16px;
  text-align: left;
  margin: 0;
`;

const ControlContainer = styled.div`
  margin: 10px 0 0;
  padding-right: 40px;
`;

const ControlDisplay = styled.p`
  font-family: 'Roboto';
  font-size: 25px;
  line-height: 25px;
  font-weight: 400;
  margin: 0;
  position: relative;
`;

const ControlButtons = styled.div`
  position: absolute;
  right: 10px;
  top: 7px;
`;

const TeslaCounter = ( props ) => {
  const { title, step, min, max, value, unit } = props;
  return (
    <div className="tesla-counter">
      <ControlTitle>{title}</ControlTitle>
      <ControlContainer>
        <div className="control-item">
          <ControlDisplay>
            {value}<span>{unit}</span>
          </ControlDisplay>
          <ControlButtons>
            <ControlButton up />
            <ControlButton />
          </ControlButtons>
        </div>
      </ControlContainer>
    </div>
  );
};

export default TeslaCounter;
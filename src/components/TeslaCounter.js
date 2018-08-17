import React from 'react';
import styled from 'styled-components';

import ControlTitle from './ControlTitle';
import ControlButton from 'components/ControlButton';
import ControlButtons from 'components/ControlButtons';
import ControlDisplay from 'components/ControlDisplay';

const ControlContainer = styled.div`
  margin: 10px 0 0;
  padding-right: 40px;
`;

// TODO: Add data fetching to populate controls and sort displays
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
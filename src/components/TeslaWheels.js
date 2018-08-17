import React from 'react';

import ControlTitle from 'components/ControlTitle';
import TeslaWheelItem from './TeslaWheelItem';

const TeslaWheels = props => {
  return (
    <div className="tesla-wheels">
      <ControlTitle>{props.title}</ControlTitle>
      <div>
        <TeslaWheelItem text="19"/>
        <TeslaWheelItem large text="21" />
      </div>
    </div>
  );
};

export default TeslaWheels;
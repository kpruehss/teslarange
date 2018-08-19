import React from 'react';

import acOn from 'assets/ac-on.svg';
import acOff from 'assets/ac-off.svg';

const ClimateControl = props => {
  return (
    <div className="climate-control">
      <p>AC ON</p>
      <img src={acOn} alt="fan"/>
    </div>
  );
};

export default ClimateControl;
import React from 'react';

import fan from 'assets/ac-on.svg';

const ClimateControl = () => {
  return (
    <div className="climate-control">
      <p>AC ON</p>
      <img src={fan} alt="fan"/>
    </div>
  );
};

export default ClimateControl;
import React from 'react';

import upArrow from 'assets/up.svg';
import downArrow from 'assets/down.svg';

const Control = props => {
  const { heading, unit } = props;
  return (
    <div>
      <p className="control-heading">{ heading }</p>
      <div className="control-item">
        55 { unit }
        <div className="control-buttons">
          <img src={upArrow} alt="+" className="control-up" />
          <img src={downArrow} alt="-" className="control-down" />
        </div>
      </div>
    </div>
  );
};

export default Control;

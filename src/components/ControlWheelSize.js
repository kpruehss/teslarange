import React from 'react';

import wheel19 from 'assets/19.svg';
import wheel21 from 'assets/21.svg';

const ControlWheelSize = props => {
  
  return (
    <div>
      <p className="control-heading">{ props.heading }</p>
      <div className="wheel-selector">
        <div className="control-item">
          <img src={wheel19} alt="rim"/>
          <p>19"</p>
        </div>
        <div className="control-item">
          <img src={wheel21} alt="rim"/>
          <p>21"</p>
        </div>
      </div>
    </div>
  );
};

export default ControlWheelSize;
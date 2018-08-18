import React from 'react';

const ControlWheelSize = props => {
  
  return (
    <div>
      <p className="control-heading">{ props.heading }</p>
      <div className="wheel-selector">
        <div className="control-item"></div>
        <div className="control-item"></div>
      </div>
    </div>
  );
};

export default ControlWheelSize;
import React from 'react';


const RangeDisplay = props => {
  const { model, range } = props;
  return (
    <div className="display-item">
      <img src={model} className="model-image" alt="{model}"/>
      <span className="range">{range}</span>
    </div>
  );
};

export default RangeDisplay;

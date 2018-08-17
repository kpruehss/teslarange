import React from 'react';
import styled from 'styled-components';

import small from 'assets/19.svg';
import large from 'assets/21.svg';

const Test = styled.div`
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
`;

const Item = styled.label`
  background-image: ${props => props.large ? 
    `url(${large});` : 
    `url(${small});` };
`;



const TeslaWheelItem = props => {
  return (
    <Item {...props} className="tesla-wheels-item">
      <p>{props.text}"</p>
    </Item>
  );
};

export default TeslaWheelItem;
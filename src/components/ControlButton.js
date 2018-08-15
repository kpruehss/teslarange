import React from 'react';
import styled from 'styled-components';

import upSvg from 'assets/up.svg';
import downSvg from 'assets/down.svg';

const Button = styled.button`
  background-image: ${props => props.up ? (`url(${upSvg}); border-bottom: 1px solid #fff`) : (`url(${downSvg}); border-top: 1px solid #fff`)};
  outline: 0;
  width: 30px;
  color: #008dff;
  cursor: pointer;
  display: block;
  padding: 11px 0;
  border: 0;
  background-size: 60%;
  background-position: center;
  background-repeat: no-repeat;
  background-color: transparent;
`;

const ControlButton = props => {
  return (
    <Button tabIndex="-1" {...props} className="control-buttons"></Button>
  );
};

export default ControlButton;

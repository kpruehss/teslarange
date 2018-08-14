import React from 'react';
import styled from 'styled-components';
import tesla from 'assets/tesla.jpg';
import Wheel from './Wheel';

const Car = styled.div`
  width: 100%;
  min-height: 350px;
  background: #fff;
  background-image: url(${tesla});
  background-size: contain;
`;


export default () => {
  return (
    <Car>
      <Wheel />
    </Car>
  );
};

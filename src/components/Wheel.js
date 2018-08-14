import React from 'react';
import styled from 'styled-components';

import smallWheel from 'assets/wheel-19.png';
import bigWheel from 'assets/21.svg';

const StyledWheel = styled.div`
  height: 80px;
  width: 80px;
  bottom: 0;
  position: absolute;
  background-image: url(${smallWheel});
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: cover;
  animation: infinite-spinning 170ms steps(6) infinite;
  /* animation-name: infinite-spinning;
  animation-duration: 170ms;
  animation-timing-function: steps(6, end);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none; */
`;

export default (props) => {
  return (
    <StyledWheel />
  );
};

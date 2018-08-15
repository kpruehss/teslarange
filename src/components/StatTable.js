import React from 'react';
import styled from 'styled-components';

import T60 from 'assets/60.svg';
import T60d from 'assets/60d.svg';
import T75 from 'assets/75.svg';
import T75d from 'assets/75d.svg';
import T90d from 'assets/90d.svg';
import P100d from 'assets/p100d.svg';

const Icon = styled.img`
  url: ${props => props.url};
  height: 20px;
  width: 13px;
`;

export default (props) => {
  return (
    <table>
      <tbody>
        <tr>
          <th><Icon url={T60} /></th>
          <th><Icon url={props} /></th>
          <th><Icon url={props} /></th>
          <th><Icon url={props} /></th>
          <th><Icon url={props} /></th>
          <th><Icon url={props} /></th>
        </tr>
      </tbody>
    </table>
  );
};

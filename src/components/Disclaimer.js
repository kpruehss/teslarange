import React from 'react';
import styled from 'styled-components';

const P = styled.p`
  margin: 0;
`;

export default () => {
  return (
    <div className="notice">
      <P>The actual amount of range that you experience will vary based on your particular use conditions. See how particular use conditions may affect your range in our simulation model.</P>
      <P>Vehicle range may vary depending on the vehicle configuration, battery age and condition, driving style and operating, environmental and climate conditions.</P>
    </div>
  );
};

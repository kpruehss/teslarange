import React from 'react';
import styled from 'styled-components';

const ControlTitle = styled.p`
  letter-spacing: 2px;
  font-size: 16px;
`;

export default props => {
  const { title, step, min, max, value, unit } = this.props;
  return (
    <div className="control-item">
      <ControlTitle>{title}</ControlTitle>
    </div>
  );
};

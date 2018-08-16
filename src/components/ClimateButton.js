import React, { Component } from 'react';

import styled from 'styled-components';

import fan from 'assets/ac-on.svg';

const Label = styled.label`
  color: ${props => props.active === true ? '#fff' : ''};
  background: ${props => props.active === true ? 
    'linear-gradient(to bottom, #33a0ff 0%, #388bff 100%)' : ''};
  display: block;
  width: 100px;
  height: 100px;
  border: 6px solid #f7f7f7;
  border-radius: 50%;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
  `;

const Icon = styled.i`
  background-image: url(${fan});
  `;

const P = styled.p`
  margin: 14px 0 0;
  text-align: center;
  font-size: 10px;
  text-transform: uppercase;
`;

const Input = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;

class ClimateButton extends Component {
  constructor() {
    super();

    this.state = {
      active: true
    };
  }

  onClickHandler = e => this.setState({active: !this.state.active});

  render() {
    const { active } = this.state;
    return (
      <Label active={this.state.active} onClick={this.onClickHandler}>
        <P>ac on</P>
        <Icon />
        <Input />
      </Label>
    );
  }
}


export default ClimateButton;
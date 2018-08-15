import React from 'react';
import styled from 'styled-components';
import tesla from 'assets/tesla.jpg';

import T60 from 'assets/60.svg';
import T60d from 'assets/60d.svg';
import T75 from 'assets/75.svg';
import T75d from 'assets/75d.svg';
import T90d from 'assets/90d.svg';
import P100d from 'assets/p100d.svg';


const Car = styled.div`
  width: 100%;
  min-height: 350px;
  background: #fff no-repeat top center;
  background-image: url(${tesla});
  background-size: contain;
`;

const List = styled.ul`
  display: block;
  list-style-type: disc;
  -webkit-margin-before: 1em;
  -webkit-margin-after: 1em;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 0px;
  -webkit-padding-start: 40px;
`;

const Icon = styled.div`
  background-image: url(${props => props.url});
  background-size: auto 13px;
  background-position: top right;
  background-repeat: no-repeat;
  height: 20px;
`;

const Item = styled.li`
  display: inline-block;
  width: 130px;
  position: relative;
`;

const Result = styled.p `
  font-size: 40px;
  font-weight: normal;
  font-family: 'Roboto';
  display: block;
  padding: 0 18px 0 0;
  position: relative;
  color: #008dff;
  text-align: right;
  ::after {
    font-size: 14px;
    font-weight: normal;
    font-family: 'Roboto';
    content: 'MI';
    position: absolute;
    top: 8px;
    right: 0;
  };
`;

const TeslaCar = () => {
  return (
    <div>
      <Car />
      <div className="tesla-stats">
        <List>
          <Item>
            <Icon url={T60}/>
            <Result>100</Result>
          </Item>
          <Item>
            <Icon url={T60d}/>
            <Result>100</Result>
          </Item>
          <Item>
            <Icon url={T75}/>
            <Result>100</Result>
          </Item>
          <Item>
            <Icon url={T75d}/>
            <Result>100</Result>
          </Item>
          <Item>
            <Icon url={T90d}/>
            <Result>100</Result>
          </Item>
          <Item>
            <Icon url={P100d}/>
            <Result>100</Result>
          </Item>
        </List>
      </div>
    </div>
  );
};

export default TeslaCar;
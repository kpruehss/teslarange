import React, { Component } from 'react';
import { Consumer } from 'context';

import upArrow from 'assets/up.svg';
import downArrow from 'assets/down.svg';
import { CHANGE_SPEED, CHANGE_TEMPERATURE } from 'actionTypes';

class Control extends Component {
  constructor(props) {
    super(props);

    this.state = {
      speedStep: '5',
      minSpeed: '45',
      maxSpeed: '70',
      temperatureStep: '10',
      maxTemperature: '40',
      minTemperature: '-10'
    }
  };

  clickHandler = (speed, temperature, unit, dispatch) => {
    if(unit === 'mph') {
      if(speed > this.state.minSpeed && speed < this.state.maxSpeed) {
        speed = Number(speed) + Number(this.state.speedStep);
        dispatch({ type: CHANGE_SPEED, payload: speed });
      }
    } else if(unit === "°") {
      if(temperature > this.state.minTemperature && 
        temperature < this.state.maxTemperature) {

          temperature = Number(temperature) + 
            Number(this.state.temperatureStep);
          dispatch({type: CHANGE_TEMPERATURE, payload: temperature})
        }
    }
  }
  
  render() {
    const { heading, unit, reading } = this.props;
    return (
      <Consumer>
        {value => {
          const { dispatch, speed, temperature } = value;
          return(
            <div>
              <p className="control-heading">{ heading }</p>
              <div className="control-item">
                { reading === 'speed' ? speed : temperature } { unit }
                <div className="control-buttons">
                  <img src={upArrow} 
                    alt="+" 
                    className="control-up"
                    onClick={this.clickHandler.bind(
                      this, 
                      speed,
                      temperature, 
                      unit, 
                      dispatch)} 
                      />
                  <img src={downArrow}
                    alt="-" 
                    className="control-down"
                    />
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}



export default Control;

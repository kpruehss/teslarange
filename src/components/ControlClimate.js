import React, { Component } from 'react';
import { Consumer } from 'context';
import { CHANGE_AC } from 'actionTypes';

class ControlClimate extends Component {

  clickHandler = (acFlag, dispatch) => {
    dispatch({type: CHANGE_AC, payload: acFlag === 'on' ? 'off' : 'on'})
  }

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch, acFlag } = value;
          return(
            <div className="climate-control" 
              onClick={this.clickHandler.bind(this, acFlag, dispatch)}>
              <p>ac { acFlag }</p>
              <i className="climate-icon"></i>
            </div>
          );
        }}
      </Consumer>
    );
  }
}


export default ControlClimate;
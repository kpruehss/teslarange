import React, { Component } from 'react';

import wheel19 from 'assets/19.svg';
import wheel21 from 'assets/21.svg';
import { Consumer } from '../context';
import { CHANGE_WHEELSIZE } from '../actionTypes';

class ControlWheelSize extends Component {
  constructor(props){
    super(props);

    this.state = {
      inactive: 'control-item',
      active: 'control-item wheel-active',
    }

  }

  clickHandler = (wheelSize, dispatch) => {
    dispatch({type: CHANGE_WHEELSIZE, payload: wheelSize})
  }

  render() {
    const { heading } = this.props;
    return (
      <Consumer>
        {value => {
          const { dispatch, wheelSize } = value;
          const { active, inactive } = this.state;
          return(
            <div>
              <p className="control-heading">{ heading }</p>
              <div className="wheel-selector">
                <div 
                  className={ wheelSize === '19' ? active : inactive } 
                  onClick={ this.clickHandler.bind(this, '19', dispatch) }>
                  <img src={ wheel19 } alt="rim"/>
                  <p>19"</p>
                </div>
                <div className={ wheelSize === '21' ? active : inactive }
                onClick={ this.clickHandler.bind(this, '21', dispatch) }>
                  <img src={ wheel21 } alt="rim"/>
                  <p>21"</p>
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default ControlWheelSize;
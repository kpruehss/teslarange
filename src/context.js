import React, { Component } from 'react';
import data from 'data.json';
import { 
  CHANGE_SPEED,
  CHANGE_TEMPERATURE,
  CHANGE_AC, 
  CHANGE_TIRESIZE 
} from 'actionTypes'

const Context = React.createContext();

const reducer = (state, action) => {
  switch(action.type) {
    case CHANGE_SPEED:
      return {
        ...state,
        speed: action.payload
      }
    case CHANGE_TEMPERATURE:
      return {
        ...state,
        temperature: action.payload
      }
    case CHANGE_AC:
      return {
        ...state,
        acFlag: action.payload
      }
    case CHANGE_TIRESIZE:
      return {
        ...state,
        tireSize: action.payload
      }
    default:
      return state;
  }
}
export class Provider extends Component {
  state = {
    ...data,
    tireSize: '19',
    acFlag: 'on',
    temperature: '20',
    speed: '55',
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;
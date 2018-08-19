import React, { Component } from 'react';
import data from 'data.json';

const Context = React.createContext();

export class Provider extends Component {
  state = {...data};

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;
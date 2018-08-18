import React, { Component } from 'react';
import Header from './components/Header';
import BatteryRange from './containers/BatteryRange';

class App extends Component {
  componentWillMount() {
    document.body.id='bg-image';
  }
  render() {
    return (
      <div>
        <Header/>
        <BatteryRange />
      </div>
    );
  }
}

export default App;

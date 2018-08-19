import React, { Component } from 'react';
import Header from './components/Header';
import BatteryRange from './containers/BatteryRange';

import { Provider } from 'context';

class App extends Component {
  componentWillMount() {
    document.body.id='bg-image';
  }
  render() {
    return (
      <Provider>
        <div>
          <Header/>
          <BatteryRange />
        </div>
      </Provider>
    );
  }
}

export default App;

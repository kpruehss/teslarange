import React, { Component } from 'react';
import Header from 'components/Header';

import { Provider } from 'context';
import Form from 'containers/Form';


class App extends Component {
  render() {
    return (
      <Provider>
        <div>
          {/* // TODO: Wrap in context provider for state management */}
          <Header />
          <div className="wrapper">
            <Form />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;

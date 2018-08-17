import React, { Component } from 'react';
import Header from 'components/Header';
import Form from 'containers/Form';

class App extends Component {
  render() {
    return (
      <div>
        // TODO: Wrap in context provider for state management
        <Header />
        <div className="wrapper">
          <Form />
        </div>
      </div>
    );
  }
}

export default App;

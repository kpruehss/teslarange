import React, { Component } from 'react';
import './App.css';
import Header from 'components/Header';
import Form from 'containers/Form';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="wrapper">
          <Form />
        </div>
      </div>
    );
  }
}

export default App;

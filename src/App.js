import React, { Component } from 'react';
import './App.css';
import Header from 'components/Header';
import Form from 'containers/Form';
import Wrapper from 'components/Wrapper';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Wrapper>
          <Form />
        </Wrapper>
      </div>
    );
  }
}

export default App;

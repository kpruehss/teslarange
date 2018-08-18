import React, { Component } from 'react';
import Header from './components/Header';

class App extends Component {
  componentWillMount() {
    document.body.id='bg-image';
  }
  render() {
    return (
      <div>
        <Header/>
      </div>
    );
  }
}

export default App;

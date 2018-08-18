import React, { Component } from 'react';

class App extends Component {
  componentWillMount() {
    document.body.id='bg-image';
  }
  render() {
    return (
      <div className="overlay">Hi</div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import TeslaPanel from './TeslaPanel';

class TeslaControl extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="tesla-controls cf">
        <TeslaPanel data={this.props}/>
      </div>
    );
  }
}
export default TeslaControl;

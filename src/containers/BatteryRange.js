import React, { Component } from 'react';

import data from 'data.json';
import T60 from 'assets/60.svg';
import T60d from 'assets/60d.svg';
import T75 from 'assets/75.svg';
import T75d from 'assets/75d.svg';
import T90d from 'assets/90d.svg';
import P100d from 'assets/p100d.svg';

class BatteryRange extends Component {
  constructor() {
    super();

    const teslaModels = { 
      '60': T60,
      '60d': T60d,
      '75': T75,
      '75d': T75d,
      '90d': T90d,
      'P100d': P100d,
    };
    this.state = [
      {data}, { teslaModels }
    ];
  }
  render() {
    return (
      <main id="controls">
        {/* <RangeDisplay /> */}
      </main>
    );
  }
}

export default BatteryRange;
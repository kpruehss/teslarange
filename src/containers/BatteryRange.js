import React, { Component } from 'react';

import data from 'data.json';
import T60 from 'assets/60.svg';
import T60d from 'assets/60d.svg';
import T75 from 'assets/75.svg';
import T75d from 'assets/75d.svg';
import T90d from 'assets/90d.svg';
import P100d from 'assets/p100d.svg';
import RangeDisplay from 'components/RangeDisplay';
import RangeControl from 'components/ControlPanel';
import Disclaimer from '../components/Disclaimer';

class BatteryRange extends Component {
  constructor() {
    super();

    this.state = {
      data,
      TireFlag: false,
      acFlag: false,
      temperature: '',
      speed: ''
    }
    ;
  }
  render() {
    // const { model } = this.state[1].teslaModels;
    const teslaModels = [
      { 
        'image': T60,
        'id': 1
      },
      { 
        'image': T60d,
        'id': 2
      },
      { 
        'image': T75,
        'id': 3
      },
      { 
        'image': T75d,
        'id': 4
      },
      { 
        'image': T90d,
        'id': 5
      },
      { 
        'image': P100d,
        'id': 6
      },
    ];
    return (
      <main id="controls">
        {teslaModels.map(model => {
          return <RangeDisplay key={model.id} model={model.image} range="246" />;
        })}
        <RangeControl />
        <Disclaimer />
      </main>
    );
  }
}

export default BatteryRange;
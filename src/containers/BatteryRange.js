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
      ...data,
      tireSize: '19',
      acFlag: 'on',
      temperature: '20',
      speed: '55'
    };
  }

  renderRange(model, tireSize, acFlag, speed, temperature) {
    return (
      data[model][tireSize][acFlag]['speed'][speed][temperature]
    );
  }

  render() {
    const teslaModels = [
      { 
        'image': T60,
        'model': '60'
      },
      { 
        'image': T60d,
        'model': '60D'
      },
      { 
        'image': T75,
        'model': '75'
      },
      { 
        'image': T75d,
        'model': '75D'
      },
      { 
        'image': T90d,
        'model': '90D'
      },
      { 
        'image': P100d,
        'model': 'P100D'
      },
    ];
    
    return (
      <main id="controls">
        { 
          console.log(this.state[60][19]['on']['speed'][45][20])
        }

        {teslaModels.map(model => {
          return <RangeDisplay 
            key={model.model}
            model={model.image}
            range={this.renderRange(
              model.model,
              this.state.tireSize,
              this.state.acFlag,
              this.state.speed,
              this.state.temperature)} />;
        })}
        <RangeControl />
        <Disclaimer />
      </main>
    );
  }
}

export default BatteryRange;
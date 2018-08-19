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
import { Consumer } from '../context';

class BatteryRange extends Component {

  renderRange(model, wheelSize, acFlag, speed, temperature) {
    return (
      data[model][wheelSize][acFlag]['speed'][speed][temperature]
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
    
    return(
      <Consumer>
        {value => {
          return (
            <main id="controls">
              {teslaModels.map(model => {
                return <RangeDisplay 
                  key={model.model}
                  model={model.image}
                  range={this.renderRange(
                    model.model,
                    value.wheelSize,
                    value.acFlag,
                    value.speed,
                    value.temperature)} />;
              })}
              <RangeControl />
              <Disclaimer />
            </main>
          );
        }}
      </Consumer>
    );
  }
}

export default BatteryRange;
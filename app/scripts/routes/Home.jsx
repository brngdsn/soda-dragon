import React from 'react';
import { connect } from 'react-redux';

import Tone from 'tone';
import Nexus from 'nexusui';

Nexus.context = Tone.context;
Nexus.colors.accent = '#0061ff'; // #b7b7b7

import { Piano } from 'components/Piano';
import { Mixer } from 'components/Mixer';

export class Home extends React.PureComponent {
  render() {
    return (
      <div key="Home" className="app__home app__route">
        <div className="app__home__intro">
          <div className="app__container">
            {/* <Piano uid={'master-piano'} /> */}
            <Mixer />
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Home);

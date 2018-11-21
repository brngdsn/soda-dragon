import React from 'react';
import { Message } from 'react-bulma-components/full';

// import Tone from 'tone';
import Nexus from 'nexusui';

export class Piano extends React.PureComponent {
  componentDidMount () {
    const { uid } = this.props;
    this.piano = new Nexus.Piano(`#nexus-piano-${uid}`,{
      'size': [500,125],
      'mode': 'button',  // 'button', 'toggle', or 'impulse'
      'lowNote': 24,
      'highNote': 60
    });
    this.piano.on('change',(v) => {
      console.log(v);
    });
  }
  render () {
    const { uid } = this.props;
    return (
      <div>
        <Message color="warning">
          <Message.Header>
            master piano
          </Message.Header>
          <Message.Body>
            <div id={`nexus-piano-${uid}`}></div>
          </Message.Body>
        </Message>
      </div>
    );
  }
}

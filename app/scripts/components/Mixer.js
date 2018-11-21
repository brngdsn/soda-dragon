import React from 'react';
import {
  MasterChannel,
  NoiseChannel,
  RandomSynthChannel,
  RandomSynthBChannel,
  SynthChannel,
  // SynthConfig
} from 'components/ChannelComponents';
import { Message } from 'react-bulma-components/full';

export const Mixer = () => (
  <div style={{display:'flex'}}>
    <div style={{margin:'5px'}}>
      <Message color="info">
        <Message.Header>
          master channel
        </Message.Header>
        <Message.Body>
          <MasterChannel />
        </Message.Body>
      </Message>
    </div>
    <div style={{margin:'5px'}}>
      <Message>
        <Message.Header>
          noise channel
        </Message.Header>
        <Message.Body>
          <NoiseChannel />
        </Message.Body>
      </Message>
    </div>
    <div style={{margin:'5px'}}>
      <Message>
        <Message.Header>
          synth channel
        </Message.Header>
        <Message.Body>
          <RandomSynthChannel />
        </Message.Body>
      </Message>
    </div>
    <div style={{margin:'5px'}}>
      <Message>
        <Message.Header>
          synth channel
        </Message.Header>
        <Message.Body>
          <RandomSynthBChannel />
        </Message.Body>
      </Message>
    </div>
    <div style={{margin:'5px'}}>
      <Message>
        <Message.Header>
          synth channel
        </Message.Header>
        <Message.Body>
          <SynthChannel uid={'first-random-synth'}/>
        </Message.Body>
      </Message>
    </div>
    {/* <div style={{margin:'5px'}}>
      <Message>
        <Message.Header>
          msynth channel
        </Message.Header>
        <Message.Body>
          <SynthConfig uid={'first-mutable-synth'}/>
        </Message.Body>
      </Message>
    </div> */}
  </div>
);

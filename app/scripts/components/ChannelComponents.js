import React from 'react';

import Tone from 'tone';
import Nexus from 'nexusui';

export class MasterChannel extends React.Component {
  componentDidMount () {
    this.nexusMeter = new Nexus.Meter('#nexus-meter-1', {
      size: [75,100]
    });
    this.nexusMeter.connect(Tone.Master)
    this.dial = new Nexus.Dial('#nexus-dial-1', {
      'size': [75,75],
      'interaction': 'radial', // "radial", "vertical", or "horizontal"
      'mode': 'relative', // "absolute" or "relative"
      'min': -100,
      'max': 100,
      'step': .25,
      'value': 0
    });
    Tone.Master.volume.value = 0;
    Tone.Transport.start();
    this.dial.on('change', v => {
      Tone.Master.volume.value = v;
    });
  }
  render () {
    return (
      <div>
        <div id="nexus-meter-1" style={{marginBottom:'15px'}}></div>
        <div id="nexus-dial-1"></div>
      </div>
    );
  }
}

export class NoiseChannel extends React.PureComponent {
  componentDidMount () {
    this.noise = new Tone.Noise('pink').toMaster();
    // this.reverb = new Tone.Reverb().toMaster();
    // this.noise.connect(this.reverb);
    this.toggle = new Nexus.Toggle('#nexus-toggle-2',{
      'size': [75,75],
      'state': false
    });
    this.toggle.on('change', value => {
      if (value === true) {
        this.noise.start();
      } else {
        this.noise.stop();
      }
    });
    this.nexusMeter = new Nexus.Meter('#nexus-meter-2', {
      size: [75,100]
    });
    this.nexusMeter.connect(this.noise)
    this.dial = new Nexus.Dial('#nexus-dial-2', {
      'size': [75,75],
      'interaction': 'radial', // "radial", "vertical", or "horizontal"
      'mode': 'relative', // "absolute" or "relative"
      'min': -100,
      'max': 100,
      'step': .25,
      'value': -50
    });
    this.noise.volume.value = -50;
    this.dial.on('change', v => {
      this.noise.volume.value = v;
    });
  }
  render () {
    return (
      <div>
        <div id="nexus-meter-2" style={{marginBottom:'15px'}}></div>
        <div id="nexus-dial-2"></div>
        <div id="nexus-toggle-2"></div>
      </div>
    );
  }
}

export class RandomSynthChannel extends React.PureComponent {
  componentDidMount () {
    this.synth = new Tone.Synth({
			"oscillator" : {
				"type" : "amtriangle",
				"harmonicity" : 0.5,
				"modulationType" : "sine"
			},
			"envelope" : {
				"attackCurve" : 'exponential',
				"attack" : 0.05,
				"decay" : 0.2,
				"sustain" : 0.2,
				"release" : 1.5,
			},
			"portamento" : 0.05
    }).toMaster();
    this.part = new Tone.Part((time, value) => {
      this.synth.triggerAttackRelease(value.note, '8n', time);
    }, [
      {"time" : 0, "note" : "C3", "velocity": 0.5},
      {"time" : "2n", "note" : "C4", "velocity": 0.5},
      {"time" : "8n", "note" : "C6", "velocity": 0.5}
    ]);
    this.part.loop = true;
    this.toggle = new Nexus.Toggle('#nexus-toggle-3',{
      'size': [75,75],
      'state': false
    });
    this.toggle.on('change', value => {
      if (value === true) {
        this.part.start()
      } else {
        this.part.stop()
      }
    });
    this.nexusMeter = new Nexus.Meter('#nexus-meter-3', {
      size: [75,100]
    });
    this.nexusMeter.connect(this.synth)
    this.dial = new Nexus.Dial('#nexus-dial-3', {
      'size': [75,75],
      'interaction': 'radial', // "radial", "vertical", or "horizontal"
      'mode': 'relative', // "absolute" or "relative"
      'min': -100,
      'max': 100,
      'step': .25,
      'value': 0
    });
    this.synth.volume.value = 0;
    this.dial.on('change', v => {
      this.synth.volume.value = v;
    });
  }
  render () {
    return (
      <div>
        <div id="nexus-meter-3" style={{marginBottom:'15px'}}></div>
        <div id="nexus-dial-3"></div>
        <div id="nexus-toggle-3"></div>
      </div>
    );
  }
}

export class RandomSynthBChannel extends React.PureComponent {
  componentDidMount () {
    this.synth = new Tone.Synth({
			"oscillator" : {
				"type" : "amtriangle",
				"harmonicity" : 0.5,
				"modulationType" : "sine"
			},
			"envelope" : {
				"attackCurve" : 'exponential',
				"attack" : 0.05,
				"decay" : 0.2,
				"sustain" : 0.2,
				"release" : 1.5,
			},
			"portamento" : 0.05
    }).toMaster();
    this.part = new Tone.Part((time, value) => {
      this.synth.triggerAttackRelease(value.note, '8n', time);
    }, [
      {"time" : 0, "note" : "A1", "velocity": 0.9},
      {"time" : "4n", "note" : "A4", "velocity": 0.7},
      {"time" : "6n", "note" : "A8", "velocity": 0.2}
    ]);
    this.part.loop = true;
    this.toggle = new Nexus.Toggle('#nexus-toggle-4',{
      'size': [75,75],
      'state': false
    });
    this.toggle.on('change', value => {
      if (value === true) {
        this.part.start()
      } else {
        this.part.stop()
      }
    });
    this.nexusMeter = new Nexus.Meter('#nexus-meter-4', {
      size: [75,100]
    });
    this.nexusMeter.connect(this.synth)
    this.dial = new Nexus.Dial('#nexus-dial-4', {
      'size': [75,75],
      'interaction': 'radial', // "radial", "vertical", or "horizontal"
      'mode': 'relative', // "absolute" or "relative"
      'min': -100,
      'max': 100,
      'step': .25,
      'value': 0
    });
    this.synth.volume.value = 0;
    this.dial.on('change', v => {
      this.synth.volume.value = v;
    });
  }
  render () {
    return (
      <div>
        <div id="nexus-meter-4" style={{marginBottom:'15px'}}></div>
        <div id="nexus-dial-4"></div>
        <div id="nexus-toggle-4"></div>
      </div>
    );
  }
}

export class SynthChannel extends React.PureComponent {
  componentDidMount () {
    const { uid } = this.props;
    this.synth = new Tone.Synth({
			"oscillator" : {
				"type" : "amtriangle",
				"harmonicity" : 0.5,
				"modulationType" : "sine"
			},
			"envelope" : {
				"attackCurve" : 'exponential',
				"attack" : 0.05,
				"decay" : 0.2,
				"sustain" : 0.2,
				"release" : 1.5,
			},
			"portamento" : 0.05
    }).toMaster();
    this.part = new Tone.Part((time, value) => {
      this.synth.triggerAttackRelease(value.note, '2n', time);
    }, [
      {"time" : 0, "note" : "D3", "velocity": 0.5},
      {"time" : '2n', "note" : "G3", "velocity": 0.5},
      {"time" : '4n', "note" : "D3", "velocity": 0.5},
      {"time" : '8n', "note" : "G3", "velocity": 0.5},
      // {"time" : '13n', "note" : "A3", "velocity": 0.5},
      // {"time" : '15n', "note" : "D3", "velocity": 0.5}
    ]);
    this.part.loop = true;
    this.toggle = new Nexus.Toggle(`#nexus-toggle-${uid}`,{
      'size': [75,75],
      'state': false
    });
    this.toggle.on('change', value => {
      if (value === true) {
        this.part.start()
      } else {
        this.part.stop()
      }
    });
    this.nexusMeter = new Nexus.Meter(`#nexus-meter-${uid}`, {
      size: [75,100]
    });
    this.nexusMeter.connect(this.synth)
    this.dial = new Nexus.Dial(`#nexus-dial-${uid}`, {
      'size': [75,75],
      'interaction': 'radial', // "radial", "vertical", or "horizontal"
      'mode': 'relative', // "absolute" or "relative"
      'min': -100,
      'max': 100,
      'step': .25,
      'value': 0
    });
    this.synth.volume.value = 0;
    this.dial.on('change', v => {
      this.synth.volume.value = v;
    });
  }
  render () {
    const { uid } = this.props;
    return (
      <div>
        <div id={`nexus-meter-${uid}`} style={{marginBottom:'15px'}}></div>
        <div id={`nexus-dial-${uid}`}></div>
        <div id={`nexus-toggle-${uid}`}></div>
      </div>
    );
  }
}

export class SynthConfig extends React.PureComponent {
  componentDidMount () {
    const { uid } = this.props;
    this.button = new Nexus.Button(`#nexus-add-note-button-${uid}`,{
      'size': [25,25],
      'mode': 'aftertouch',
      'state': false
    });
    this.select = new Nexus.Select(`#nexus-add-note-select-${uid}`,{
      'size': [100,30],
      'options': ['C','D','E','F','G','A','B']
    });
  }
  addNote = (note) => {
    // const notes = [
    //   {"time" : 0, "note" : "C2", "velocity": 0.5},
    //   {"time" : '4n', "note" : "C3", "velocity": 0.5},
    //   {"time" : '8n', "note" : "C4", "velocity": 0.5}
    // ];
    this.setState((state) => ({
      notes: [...state.notes, note]
    }));
    this.part.add(note);
  };
  render () {
    const { uid } = this.props;
    return (
      <div>
        <div id={`nexus-add-note-select-${uid}`}></div>
        <div id={`nexus-add-note-button-${uid}`}></div>
      </div>
    );
  }
}

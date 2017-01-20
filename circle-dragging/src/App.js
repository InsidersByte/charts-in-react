import React, { Component } from 'react';
import { range } from 'd3-array';
import { scaleOrdinal, schemeCategory20 } from 'd3-scale';
import Circles from './Circles';
import './App.css';

const width = 960;
const height = 500;
const radius = 32;

const colours = scaleOrdinal(schemeCategory20);

class App extends Component {
  state = {
    circles: range(20).map((id) => ({
      id,
      radius,
      colour: colours(id),
      x: Math.round(Math.random() * (width - radius * 2) + radius),
      y: Math.round(Math.random() * (height - radius * 2) + radius)
    })),
  };

  render() {
    const { circles } = this.state;

    return (
      <div className="App">
        <Circles
          circles={circles}
          width={width}
          height={height}
        />
      </div>
    );
  }
}

export default App;

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
      radius,
      id: `circle-${id}`,
      active: false,
      colour: colours(id),
      x: Math.round(Math.random() * (width - radius * 2) + radius),
      y: Math.round(Math.random() * (height - radius * 2) + radius)
    })),
  };

  onDragStart = ({ id }) => {
    const { circles } = this.state;

    const updatedCircles = circles.map((circle) => {
      if (circle.id !== id) {
        return circle;
      }

      return { ...circle, active: true };
    });

    this.setState({ circles: updatedCircles });
  };

  onDrag = ({ id }, dragEvent) => {
    const { circles } = this.state;
    const { x, y } = dragEvent;

    const updatedCircles = circles.map((circle) => {
      if (circle.id !== id) {
        return circle;
      }

      return { ...circle, x, y };
    });

    this.setState({ circles: updatedCircles });
  };

  onDragEnd = ({ id }) => {
    const { circles } = this.state;

    const updatedCircles = circles.map((circle) => {
      if (circle.id !== id) {
        return circle;
      }

      return { ...circle, active: false };
    });

    this.setState({ circles: updatedCircles });
  };

  render() {
    const { circles } = this.state;

    return (
      <div className="App">
        <Circles
          circles={circles}
          width={width}
          height={height}
          onDragStart={this.onDragStart}
          onDrag={this.onDrag}
          onDragEnd={this.onDragEnd}
        />
      </div>
    );
  }
}

export default App;

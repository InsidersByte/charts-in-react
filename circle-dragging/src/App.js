import React, { Component } from 'react';
import { range } from 'd3-array';
import { scaleOrdinal, schemeCategory20 } from 'd3-scale';
import { selectAll, event } from 'd3-selection';
import { drag } from 'd3-drag';
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
      active: false,
      colour: colours(id),
      x: Math.round(Math.random() * (width - radius * 2) + radius),
      y: Math.round(Math.random() * (height - radius * 2) + radius)
    })),
  };

  componentDidMount() {
    this.setDragBehaviour();
  }

  componentDidUpdate() {
    this.setDragBehaviour();
  }

  setDragBehaviour = () => {
    const { onDragStarted, onDrag, onDragEnd } = this;

    selectAll('circle')
      .call(
        drag()
          .on('start', function started() {
            onDragStarted(this);
          })
          .on('drag', function dragged() {
            onDrag(this, event);
          })
          .on('end', function ended() {
            onDragEnd(this);
          })
      );
  };

  onDragStarted = ({ id }) => {
    const { circles } = this.state;
    const parsedId = parseInt(id, 10);

    const updatedCircles = circles.map((circle) => {
      if (circle.id !== parsedId) {
        return circle;
      }

      return { ...circle, active: true };
    });

    this.setState({ circles: updatedCircles });
  };

  onDrag = ({ id }, dragEvent) => {
    const { circles } = this.state;
    const { x, y } = dragEvent;
    const parsedId = parseInt(id, 10);

    const updatedCircles = circles.map((circle) => {
      if (circle.id !== parsedId) {
        return circle;
      }

      return { ...circle, x, y };
    });

    this.setState({ circles: updatedCircles });
  };

  onDragEnd = ({ id }) => {
    const { circles } = this.state;
    const parsedId = parseInt(id, 10);

    const updatedCircles = circles.map((circle) => {
      if (circle.id !== parsedId) {
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
        />
      </div>
    );
  }
}

export default App;

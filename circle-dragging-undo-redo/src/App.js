import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from 'redux-undo';
import * as actions from './actions';
import DevTools from './DevTools';
import Circles from './Circles';
import Button from './Button';
import './App.css';

const width = 960;
const height = 500;

class App extends Component {
  state = {
    circles: this.props.circles,
  };

  componentWillReceiveProps({ circles }) {
    this.setState({ circles });
  }

  onDrag = ({ id }, dragEvent) => {
    const { circles } = this.state;
    let { x, y } = dragEvent;

    const updatedCircles = circles.map((circle) => {
      if (circle.id !== id) {
        return circle;
      }

      const { radius } = circle;
      const minimum = radius;
      const maximumX = width - radius;
      const maximumY = height - radius;

      if (x < radius) {
        x = minimum;
      }

      if (y < radius) {
        y = minimum;
      }

      if (x > maximumX) {
        x = maximumX;
      }

      if (y > maximumY) {
        y = maximumY;
      }

      return { ...circle, x, y };
    });

    this.setState({ circles: updatedCircles });
  };

  onDragEnd = ({ id }) => {
    const { updateCirclePosition } = this.props;
    const { circles } = this.state;
    const circle = circles.find(o => o.id === id);
    updateCirclePosition(circle);
  };

  render() {
    const { circles } = this.state;
    const { undo, redo, undoable, redoable } = this.props;

    return (
      <div className="App">
        <Circles
          circles={circles}
          width={width}
          height={height}
          onDrag={this.onDrag}
          onDragEnd={this.onDragEnd}
        />

        <div>
          <Button onClick={undo} disabled={!undoable}>Undo</Button>
          <Button onClick={redo} disabled={!redoable}>Redo</Button>
        </div>

        <DevTools />
      </div>
    );
  }
}

const mapStateToProps = ({ circles: { past, present, future } }) => {
  const undoable = past.length > 0;
  const redoable = future.length > 0;

  return {
    undoable,
    redoable,
    circles: present,
  };
};

const mapDispatchToProps = dispatch => ({ ...bindActionCreators(ActionCreators, dispatch), ...bindActionCreators(actions, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(App);

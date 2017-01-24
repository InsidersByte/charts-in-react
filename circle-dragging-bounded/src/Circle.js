import React, { Component } from 'react';
import { select, event } from 'd3-selection';
import { drag } from 'd3-drag';
import './Circle.css';

export default class Circle extends Component {
  componentDidMount() {
    const { id, onDragStart, onDrag, onDragEnd } = this.props;

    select(`#${id}`)
      .call(
        drag()
          .on('start', function started() {
            onDragStart(this);
          })
          .on('drag', function dragged() {
            onDrag(this, event);
          })
          .on('end', function ended() {
            onDragEnd(this);
          })
      );
  }

  componentWillUnmount() {
    const { id } = this.props;
    select(`#${id}`).on('.drag', null);
  }

  render() {
    const { id, colour = 'black', x = 50, y = 50, radius = 50, active = false, ...props } = this.props;

    return (
      <circle
        {...props}
        id={id}
        fill={colour}
        cx={x}
        cy={y}
        r={radius}
        className={active ? 'active' : undefined}
      />
    );
  }
}

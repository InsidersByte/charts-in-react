import React, { Component } from 'react';
import { select, event } from 'd3-selection';
import { drag } from 'd3-drag';

export default class Circle extends Component {
  componentDidMount() {
    const { id, onDrag, onDragEnd } = this.props;

    select(`#${id}`)
      .call(
        drag()
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
    const { id, colour = 'black', x = 50, y = 50, radius = 50, ...props } = this.props;

    return (
      <circle
        {...props}
        id={id}
        fill={colour}
        cx={x}
        cy={y}
        r={radius}
      />
    );
  }
}

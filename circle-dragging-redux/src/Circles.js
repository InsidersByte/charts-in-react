import React from 'react';
import Circle from './Circle';
import './Circles.css';

const Circles = ({ circles, width, height, onDragStart, onDrag, onDragEnd }) => (
  <svg width={width} height={height} className="circles">
    {circles.map(({ id, x, y, radius, colour, active }) =>
      <Circle
        key={id}
        id={id}
        x={x}
        y={y}
        radius={radius}
        colour={colour}
        active={active}
        onDragStart={onDragStart}
        onDrag={onDrag}
        onDragEnd={onDragEnd}
      />
    )}
  </svg>
);

export default Circles;

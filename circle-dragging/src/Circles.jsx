import React from 'react';
import Circle from './Circle';

const Circles = ({ circles, width, height }) => {
  return (
    <svg width={width} height={height} style={{ border: '1px solid black' }}>
      {circles.map(({ id, x, y, radius, colour }) =>
        <Circle
          key={id}
          id={id}
          x={x}
          y={y}
          radius={radius}
          colour={colour}
          style={{ cursor: 'pointer' }}
        />
      )}
    </svg>
  );
};

export default Circles;

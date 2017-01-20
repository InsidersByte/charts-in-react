import React from 'react';
import './Circle.css';

const Circle = ({ colour = 'black', x = 50, y = 50, radius = 50, active = false, ...props }) => {
  return (
    <circle
      {...props}
      fill={colour}
      cx={x}
      cy={y}
      r={radius}
      className={active ? 'active' : undefined}
    />
  );
};

export default Circle;

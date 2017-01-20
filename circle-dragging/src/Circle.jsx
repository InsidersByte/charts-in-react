import React from 'react';

const Circle = ({ colour = 'black', x = 50, y = 50, radius = 50, ...props }) => {
  return (
    <circle
      {...props}
      fill={colour}
      cx={x}
      cy={y}
      r={radius}
    />
  );
};

export default Circle;

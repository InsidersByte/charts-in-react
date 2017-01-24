import { range } from 'd3-array';
import { scaleOrdinal, schemeCategory20 } from 'd3-scale';

const width = 960;
const height = 500;
const radius = 32;

const colours = scaleOrdinal(schemeCategory20);

const initialState = range(20).map((id) => ({
  radius,
  id: `circle-${id}`,
  colour: colours(id),
  x: Math.round(Math.random() * (width - radius * 2) + radius),
  y: Math.round(Math.random() * (height - radius * 2) + radius)
}));

const circles = (state = initialState, action) => {
  switch(action.type) {
    case 'UPDATE_CIRCLE_POSITION':
      return state.map(circle => {
        if (circle.id !== action.payload.id) {
          return circle;
        }

        return Object.assign({}, circle, { x: action.payload.x, y: action.payload.y });
      });

    default:
      return state;
  }
};

export default circles;

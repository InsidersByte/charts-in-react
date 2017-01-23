export const updateCirclePosition = ({ id, x, y }) => ({
  type: 'UPDATE_CIRCLE_POSITION',
  payload: {
    id,
    x,
    y,
  }
});

export const setActive = (id) => ({
  type: 'SET_ACTIVE',
  payload: {
    id,
  },
});

export const unsetActive = (id) => ({
  type: 'UNSET_ACTIVE',
  payload: {
    id,
  },
});

export const updateCirclePosition = ({ id, x, y }) => ({
  type: 'UPDATE_CIRCLE_POSITION',
  payload: {
    id,
    x,
    y,
  }
});

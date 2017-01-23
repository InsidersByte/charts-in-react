import { combineReducers } from 'redux';
import undoable from 'redux-undo';
import circles from './circles';

const reducers = combineReducers({
  circles: undoable(circles),
});

export default reducers;

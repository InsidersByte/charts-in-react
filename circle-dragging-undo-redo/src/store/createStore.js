import { createStore, applyMiddleware, compose } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import createLogger from 'redux-logger';
import DevTools from '../DevTools';
import rootReducer from '../reducers';

const configureStore = (initialState) => {
  const enhancer = compose(
    applyMiddleware(reduxImmutableStateInvariant(), createLogger()),
    DevTools.instrument(),
  );

  const store = createStore(rootReducer, initialState, enhancer);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    // FIXME:FLOW ignore error
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers')),
    );
  }

  return store;
};

export default configureStore;

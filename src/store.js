'use strict';

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './reducers';

const loggerMiddleware = createLogger();
let currentStore;

let configureStore = (preloadedState) => {
  currentStore = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  );
  return currentStore;
};

module.exports = {
  set: configureStore,
  getState: () => currentStore && currentStore.getState(),
  current: currentStore
};

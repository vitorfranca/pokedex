import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import styles from './main.css';
import Store from './store';
import App from './app';

const store = Store.set({
  pokemon: [],
  filter: ''
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

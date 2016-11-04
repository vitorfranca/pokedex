import React from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';
import styles from './main.css';
import * as actions from './actions';
import Store from './store';
import pokedex from './services/pokedex';

const store = Store.set({});

// pokedex.get().then((data) => { console.log('data', data) });

class pokeList extends React.Component {
  constructor(props) {
    super(props);
    props.dispatch(actions.getPokedex());
  }
  render() {
    return (<div>Pokemon</div>);
  }
}

connect()(pokeList);

render(
  <Provider store={store}>
    <pokeList />
  </Provider>,
  document.getElementById('root')
);

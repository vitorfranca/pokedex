import React from 'react';
import { connect } from 'react-redux';
import R from 'ramda';

import PokeList from './components/pokeList';
import PokeDetails from './components/pokeDetails';
import Filter from './components/filter';

import db from './services/database';

class App extends React.Component {
  render() {
    const { selectedPokemon } = this.props;

    return (
      <div style={{width: '100vw', height: '100vh', overflow: 'auto'}}>
        <Filter />
        <PokeList />
        { selectedPokemon && <PokeDetails /> }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedPokemon: state.selectedPokemon
  };
}

export default connect(mapStateToProps)(App);

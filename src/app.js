import React from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import R from 'ramda';

import PokeList from './components/pokeList';
import PokeDetails from './components/pokeDetails';
import Filter from './components/filter';
// import Menu from './components/menu';

import db from './services/database';

class App extends React.Component {
  componentWillMount() {
    this.props.dispatch(actions.getPokedex());
  }

  render() {
    const { pokemon, selectedPokemon, filter } = this.props;
    
    return (
      <div style={{width: '100vw', height: '100vh', overflow: 'auto'}}>
        <Filter />
        { !!pokemon.length && <PokeList pokemon={pokemon} filter={filter} /> }
        { selectedPokemon && <PokeDetails /> }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pokemon: R.propOr([], 'pokemon')(state),
    filter: state.filter,
    selectedPokemon: state.selectedPokemon
  };
}

export default connect(mapStateToProps)(App);

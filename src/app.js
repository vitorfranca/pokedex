import React from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import R from 'ramda';

import PokeList from './components/pokeList';
import PokeDetails from './components/pokeDetails';
// import Menu from './components/menu';

import db from './services/database';

class App extends React.Component {
  componentWillMount() {
    this.props.dispatch(actions.getPokedex());
  }

  render() {
    const { pokemon, selectedPokemon } = this.props;
    return (
      <div style={{width: '100vw', height: '100vh'}}>
        <PokeList pokemon={pokemon} />
        { selectedPokemon && <PokeDetails /> }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pokemon: R.propOr([], 'pokemon')(state),
    selectedPokemon: state.selectedPokemon
  };
}

export default connect(mapStateToProps)(App);

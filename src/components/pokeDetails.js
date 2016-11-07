import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import R from 'ramda';
import styles from './pokeDetails.css';

class PokeDetails extends React.Component {
  render() {
    const { pokemon } = this.props;
    console.log('selected': pokemon);

    return (
      <div className={styles.pokeDetails}>
        <img src={pokemon.sprites.front_default} />
        {pokemon.name}

        { R.map((type) => {
          <div>{type.type.name}</div>
        }, pokemon.types) }

        { R.map((stat) => {
          <div>{stat.stats.name} - {stat.base_stat}</div>
        }, pokemon.stats) }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pokemon: state.selectedPokemon
  };
}

export default connect(mapStateToProps)(PokeDetails);

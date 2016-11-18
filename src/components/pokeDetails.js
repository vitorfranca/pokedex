import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import R from 'ramda';
import styles from './pokeDetails.css';
import request from '../services/request';
import PokeImage from './pokeImage';

class PokeDetails extends React.Component {
  componentWillMount() {
    request.get(this.props.pokemon.url).then((result) => {
      this.setState({
        pokemon: Object.assign({}, this.props.pokemon, result.data)
      });
    });
  }

  render() {
    const pokemon = this.state && this.state.pokemon || this.props.pokemon;

    return (
      <div className={styles.pokeDetails}>
        <PokeImage pokemon={pokemon} />
        {pokemon.name}

        { pokemon.types && R.map(type =>
          <div key={type.type.name}>{type.type.name}</div>, pokemon.types) }

        { pokemon.stats && R.map(stat =>
          <div key={stat.stat.name}>{stat.stat.name}: {stat.base_stat}</div>, pokemon.stats) }
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

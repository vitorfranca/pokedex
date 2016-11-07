import React, { Component } from 'react';
import request from '../services/request';
import R from 'ramda';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { selectPokemon } from '../actions';

import PokeImage from './pokeImage';

class PokeCard extends Component {
  constructor(props) {
    super(props);
    this.state = { pokemon: this.props.pokemon };
  }

  componentWillMount() {
    // this.props.dispatch(actions.getPokemonDetails(this.props.pokemon));
    request.get(this.props.pokemon.url).then((result) => {
      this.setState({ pokemon: result.data });
    });
  }

  selectPokemon() {
    this.props.dispatch(selectPokemon(this.state.pokemon));
  }

  render() {
    const cardStyle = {
      margin: '10px',
      backgroundColor: 'white',
      padding: 20,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center'
    }

    return (
      <li style={cardStyle} onClick={this.selectPokemon.bind(this)}>
        <PokeImage image={R.propOr(null, 'front_default')(this.state.pokemon.sprites)} />
        <p style={{padding: '10px'}}>{this.props.pokemon.name}</p>
      </li>
    );
  }
}

export default connect()(PokeCard);

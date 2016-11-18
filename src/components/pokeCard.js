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

  selectPokemon() {
    this.props.dispatch(selectPokemon(this.state.pokemon));
  }

  render() {
    const cardStyle = {
      margin: '10px',
      backgroundColor: 'white',
      padding: 14,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: 150
    }

    return (<div style={cardStyle} onClick={this.selectPokemon.bind(this)}>
      <PokeImage pokemon={this.state.pokemon} />
      <p>
        {this.props.pokemon.name}
      </p>
    </div>);
  }
}

export default connect()(PokeCard);

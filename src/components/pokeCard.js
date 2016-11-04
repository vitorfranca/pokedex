import React, { Component } from 'react';
import request from '../services/request';
import R from 'ramda';

import PokeImage from './pokeImage';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class PokeCard extends Component {
  constructor(props) {
    super(props);
    this.state = { pokemon: {} };
  }

  componentWillMount() {
    request.get(this.props.pokemon.url).then((result) => {
      console.log('bla', result.data);
      this.setState({ pokemon: result.data });
    });
  }

  render () {
    const defaultImage = 'https://upload.wikimedia.org/wikipedia/en/3/39/Pokeball.PNG';
    const cardStyle = {
      width: '96px',
      margin: '10px',
      backgroundColor: 'white',
      padding: '0',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center'
    }

    return (
      <li style={cardStyle}>
        <PokeImage image={R.propOr(defaultImage, 'front_default')(this.state.pokemon.sprites)} />
        <p style={{padding: '10px'}}>{this.props.pokemon.name}</p>
      </li>
    );
  }
}

export default (PokeCard);
